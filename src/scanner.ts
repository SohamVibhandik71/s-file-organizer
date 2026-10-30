import { readdir } from "node:fs/promises";


export async function scanDirectory(directoryPath: string): Promise<string[]>{

    try {
        const entries = await readdir(directoryPath, {
            withFileTypes: true
        });
        
        return entries
            .filter(entry => entry.isFile())
            .map(entry => entry.name)

    } catch (error) {
        console.log("Failed to read directory:", error);
        return [];
    }

}

