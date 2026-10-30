# File Organizer CLI

A simple CLI tool built with TypeScript that automatically organizes files into folders based on their file extensions.

<p align="center">
  <img src="https://img.shields.io/npm/v/s-file-organizer" alt="npm version"/>
  <img src="https://img.shields.io/npm/dt/s-file-organizer" alt="npm downloads"/>
  <img src="https://img.shields.io/npm/l/s-file-organizer" alt="license"/>
</p>

## Features

- Automatically categorizes files by type.
- Creates category folders when needed.
- Handles duplicate filenames without overwriting existing files.
- Supports dry-run mode to preview changes.
- Provides CLI help and error messages.
- Continues processing even if an individual file fails.

## Installation

Install globally using npm:

```bash
npm install -g s-file-organizer
```

## Usage

Navigate to the directory you want to organize:

```bash
cd path/to/your/folder
```

Run:

```bash
file-organizer
```

## Available Options

### Preview changes without moving files

```bash
file-organizer --dry-run
```

### Display help

```bash
file-organizer --help
```

## Example

### Before

```text
Downloads/
├── photo.jpg
├── document.pdf
├── song.mp3
├── video.mp4
└── archive.zip
```

### After

```text
Downloads/
├── Images/
│   └── photo.jpg
├── Documents/
│   └── document.pdf
├── Audio/
│   └── song.mp3
├── Videos/
│   └── video.mp4
└── Archives/
    └── archive.zip
```

## Supported Categories

| Category | File Types |
|---|---|
| Images | jpg, jpeg, png, gif, svg |
| Documents | pdf, doc, docx, txt, pptx, md |
| Videos | mp4, mkv, mov |
| Audio | mp3, wav, aac |
| Archives | zip, rar, 7z |
| Code | js, ts, cpp, py, java |
| Others | All remaining extensions |

## Requirements

- Node.js >= 18

## Links

- [npm Package](https://www.npmjs.com/package/s-file-organizer)
- [GitHub Repository]((https://github.com/SohamVibhandik71/s-file-organizer.git))

## License

MIT License