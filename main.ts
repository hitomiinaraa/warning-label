// Exactly one line, nothing else.
// One line, at most 160 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const entry = "WARNING: May say 'I'm five minutes away' while still in bed. Allow 45 minutes and a second call.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
