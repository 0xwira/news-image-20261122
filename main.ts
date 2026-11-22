import { copyFile, mkdir } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR || '/output');
await mkdir(outputDir, { recursive: true });
await copyFile(join(here, 'entry.png'), join(outputDir, 'entry.png'));
