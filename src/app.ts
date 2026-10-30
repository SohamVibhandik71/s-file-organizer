#!/usr/bin/env node

import { scanDirectory } from "./scanner.js";
import { organizeFiles } from "./organizer.js";

const args = process.argv.slice(2);

// check if dry-run mode is enabled
const dryRun = args.includes("--dry-run");

const allowedArgs = ["--dry-run", "--help"];

const invalidArgs = args.filter(arg => !allowedArgs.includes(arg));

if (invalidArgs.length > 0) {
    console.error(`Invalid argument: ${invalidArgs.join(", ")}`);
    console.log("Use --help to see available options.");
    process.exit(1);
}

if (args.includes("--help")) {
    console.log(`
File Organizer CLI

Usage:
  file-organizer [options]

Options:
  --dry-run    Preview file organization without moving files
  --help       Display help information
`);
    process.exit(0);
}

const directoryPath = process.cwd();

console.log(`Target directory: ${directoryPath}`);

const files = await scanDirectory(directoryPath);

await organizeFiles(directoryPath, files, dryRun);
