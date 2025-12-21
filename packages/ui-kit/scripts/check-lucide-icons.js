import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            if (file.endsWith('.stories.tsx')) {
                arrayOfFiles.push(path.join(dirPath, "/", file));
            }
        }
    });

    return arrayOfFiles;
}

const storiesDir = path.join(__dirname, '../src');
const storyFiles = getAllFiles(storiesDir);

let hasError = false;

storyFiles.forEach(file => {
    const originalContent = fs.readFileSync(file, 'utf8');

    // Replace string contents with spaces to preserve indices
    // This handles "string", 'string', and escaped quotes inside them to some extent.
    // We regex match the string usage and replace it with equal length of spaces.
    const contentMasked = originalContent.replace(/(["'])(?:(?!\1|\\).|\\.)*\1/g, (match) => ' '.repeat(match.length));

    // Find imports from original content
    const importRegex = /import\s+{([^}]+)}\s+from\s+['"]lucide-react['"]/g;
    let match;
    const imports = [];

    while ((match = importRegex.exec(originalContent)) !== null) {
        const importedItems = match[1].split(',').map(item => item.trim());
        // Filter out 'LucideIcon' type import or others we want to ignore
        imports.push(...importedItems.filter(i => i !== 'LucideIcon'));
    }

    if (imports.length === 0) return;

    // Check usages in masked content
    imports.forEach(iconName => {
        const usageRegex = new RegExp(`\\b${iconName}\\b`, 'g');
        let usageMatch;

        while ((usageMatch = usageRegex.exec(contentMasked)) !== null) {
            const index = usageMatch.index;

            // Ignore if it's inside the import statement
            // Find the line in original content
            const lineStart = contentMasked.lastIndexOf('\n', index);
            const lineEnd = contentMasked.indexOf('\n', index);
            const currentLine = originalContent.substring(lineStart + 1, lineEnd !== -1 ? lineEnd : undefined);

            if (currentLine.includes('import') && currentLine.includes('lucide-react')) {
                continue;
            }

            // Check if followed by 'as' (or 'satisfies', though we enforce 'as')
            const after = contentMasked.substring(index + iconName.length);
            const isCasted = /^\s+as\s+/.test(after);

            if (!isCasted) {
                console.error(`Error in ${file}:`);
                console.error(`  Unsafe usage of Lucide icon '${iconName}' detected.`);
                // Show context from original
                const start = Math.max(0, index - 20);
                const end = Math.min(originalContent.length, index + iconName.length + 30);
                console.error(`  Context: ...${originalContent.substring(start, end).replace(/\n/g, ' ')}...`);
                console.error(`  Fix: Cast the icon explicitly, e.g., '${iconName} as unknown as LucideIcon'\n`);
                hasError = true;
            }
        }
    });
});

if (hasError) {
    console.error('Lint check failed: Unsafe Lucide icon usages found in stories. These cause CI build failures.');
    process.exit(1);
} else {
    console.log('✅ Lucide icon usage check passed.');
}
