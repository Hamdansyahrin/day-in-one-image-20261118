// day-in-one-image: copies the bundled front-page image to the output folder.
// The picture itself is frozen at build time; this program only validates
// and delivers it, so repeated runs always produce the same bytes.

import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const MAX_BYTES = 1024 * 1024;
const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const destPath = join(outDir, "entry.png");

function fail(message: string): never {
  console.error(`entry delivery failed: ${message}`);
  process.exit(1);
}

const info = statSync(sourcePath, { throwIfNoEntry: false });
if (!info || !info.isFile()) {
  fail(`missing source image at ${sourcePath}`);
}
if (info.size === 0 || info.size > MAX_BYTES) {
  fail(`image size ${info.size} is outside the allowed range`);
}

const header = readFileSync(sourcePath).subarray(0, 4);
const isPng =
  header[0] === 0x89 && header[1] === 0x50 && header[2] === 0x4e && header[3] === 0x47;
const isJpeg = header[0] === 0xff && header[1] === 0xd8 && header[2] === 0xff;
if (!isPng && !isJpeg) {
  fail("source file is neither PNG nor JPEG by magic bytes");
}

mkdirSync(outDir, { recursive: true });
copyFileSync(sourcePath, destPath);
console.log(`wrote ${destPath} (${info.size} bytes)`);
