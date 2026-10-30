import { extname } from "node:path";

export type FileCategory =
    | "Images"
    | "Documents"
    | "Videos"
    | "Audio"
    | "Archives"
    | "Code"
    | "Others";

export const extensionMap: Record<string, FileCategory> = {
    // Images
    ".jpg": "Images",
    ".jpeg": "Images",
    ".png": "Images",
    ".gif": "Images",
    ".webp": "Images",
    ".svg": "Images",
    ".bmp": "Images",
    ".ico": "Images",
    ".tiff": "Images",

    // Documents
    ".pdf": "Documents",
    ".doc": "Documents",
    ".docx": "Documents",
    ".txt": "Documents",
    ".rtf": "Documents",
    ".odt": "Documents",
    ".xls": "Documents",
    ".xlsx": "Documents",
    ".csv": "Documents",
    ".ppt": "Documents",
    ".pptx": "Documents",
    ".md": "Documents",

    // Videos
    ".mp4": "Videos",
    ".mkv": "Videos",
    ".mov": "Videos",
    ".avi": "Videos",
    ".webm": "Videos",
    ".wmv": "Videos",
    ".flv": "Videos",
    ".m4v": "Videos",

    // Audio
    ".mp3": "Audio",
    ".wav": "Audio",
    ".aac": "Audio",
    ".flac": "Audio",
    ".ogg": "Audio",
    ".m4a": "Audio",
    ".wma": "Audio",
    ".opus": "Audio",

    // Archives
    ".zip": "Archives",
    ".rar": "Archives",
    ".7z": "Archives",
    ".tar": "Archives",
    ".gz": "Archives",
    ".bz2": "Archives",
    ".xz": "Archives",

    // Code
    ".js": "Code",
    ".jsx": "Code",
    ".ts": "Code",
    ".tsx": "Code",
    ".html": "Code",
    ".css": "Code",
    ".scss": "Code",
    ".json": "Code",
    ".xml": "Code",
    ".py": "Code",
    ".java": "Code",
    ".c": "Code",
    ".cpp": "Code",
    ".h": "Code",
    ".hpp": "Code",
    ".cs": "Code",
    ".php": "Code",
    ".go": "Code",
    ".rs": "Code",
    ".rb": "Code",
    ".swift": "Code",
    ".kt": "Code",
    ".sql": "Code",
    ".sh": "Code",
    ".yml": "Code",
    ".yaml": "Code",
    ".toml": "Code",
};


export function getCategory(fileName : string): FileCategory {

    const ext : string = extname(fileName).toLowerCase();

    return extensionMap[ext] !== undefined ? extensionMap[ext] : "Others";

}

