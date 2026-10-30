
import { mkdir, copyFile, unlink, access, stat, constants } from "node:fs/promises";
import { join, parse } from "node:path";
import { getCategory } from "./category.js";

async function fileExists(filePath: string): Promise<boolean> {
    try {
        await access(filePath);
        return true;
    } catch (error) {
        if ((error as NodeJS.ErrnoException).code === "ENOENT") {
            return false;
        }
        throw error;
    }
}


export async function organizeFiles(directoryPath: string, files: string[], dryRun: boolean = false): Promise<void>{

    let successful = 0;
    let failed = 0;

    console.log(dryRun ? "\nOrganizing files (DRY RUN)...\n" : "\nOrganizing files...\n");

    for(const file of files){

        try{
            const category = getCategory(file);
            const newDirPath = join(directoryPath, category);

            // if the file exits but not as directory
            try {
                const info = await stat(newDirPath);

                if (!info.isDirectory()) {
                    throw new Error(`${category} exists but is not a directory.`);
                }
            } catch (error) {
                if ((error as NodeJS.ErrnoException).code !== "ENOENT") {
                    throw error;
                }
            }

            const oldFilePath = join(directoryPath, file);
            let newFilePath = join(newDirPath, file);

            //handle the case where the file already exists in the target directory

            let {name, ext} = parse(file);
            let n = 1;

            while(await fileExists(newFilePath)){

                const newName = `${name}(${n++})${ext}`;

                newFilePath = join(newDirPath, newName);

            }

            if (dryRun) {
                console.log(
                    `[DRY RUN] ${file} → ${category}/${parse(newFilePath).base}`
                );
            } else {
                await mkdir(newDirPath, {recursive: true});

                await copyFile(
                    oldFilePath,
                    newFilePath,
                    constants.COPYFILE_EXCL
                );

                try {
                    await unlink(oldFilePath);
                } catch (error) {
                    // Rollback: remove the copied file if original deletion fails
                    try {
                        await unlink(newFilePath);
                    } catch (rollbackError) {
                        console.error("Rollback failed. Both files may still exist.");
                        console.error(rollbackError);
                    }

                    throw error;
                }

                console.log(`✔ ${file} → ${category}`);
            }

            successful++;

        } catch (error) {
            failed++;
            console.error(`✘ ${file} → Failed to organize`);
            console.error(error);
        }
    }

    console.log("\n" + (dryRun ? "Preview completed!" : "Organization completed!"));
    console.log("------------------------");
    console.log(`Total files: ${files.length}`);
    console.log(`Successful: ${successful}`);
    console.log(`Failed: ${failed}`);

    if (dryRun) {
        console.log("\nNo files were moved.");
    }
}
