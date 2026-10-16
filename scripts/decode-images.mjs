/**
 * prebuild: decode committed base64 asset sources into binary files.
 *
 * Binary assets (project screenshots, logo, OG image, icons) are committed
 * as `.b64` text under public/ because the git push path handles text
 * reliably. This script restores the binaries before `next build` runs.
 * It always regenerates from source, so replacing a .b64 can never leave
 * a stale file behind.
 */
import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const publicDir = join(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "public",
);

function* findB64(dir) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) yield* findB64(p);
    else if (entry.endsWith(".b64")) yield p;
  }
}

let decoded = 0;
for (const src of findB64(publicDir)) {
  const target = src.replace(/\.b64$/, "");
  writeFileSync(target, Buffer.from(readFileSync(src, "utf8").trim(), "base64"));
  decoded++;
}
console.log(`[prebuild] decoded ${decoded} file(s) from .b64 sources.`);
