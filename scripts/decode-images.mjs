/**
 * prebuild: decode committed base64 image sources into binary .webp files.
 *
 * Project screenshots are committed as .webp.b64 text (the git push path
 * handles text reliably); this script restores the binary .webp files
 * that next/image expects in public/work/ before `next build` runs.
 * Idempotent — skips files that already exist.
 */
import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const dir = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "work");

let decoded = 0;
for (const file of readdirSync(dir)) {
  if (!file.endsWith(".webp.b64")) continue;
  const target = join(dir, file.replace(/\.b64$/, ""));
  if (existsSync(target)) continue;
  writeFileSync(target, Buffer.from(readFileSync(join(dir, file), "utf8").trim(), "base64"));
  decoded++;
  console.log(`[prebuild] decoded ${file.replace(/\.b64$/, "")}`);
}
if (decoded === 0) console.log("[prebuild] images already present, nothing to do.");
