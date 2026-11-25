import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Robot Romance v3 — one-line pickup line for an AI.
// Calibration: one technical concept, used correctly, as sincere devotion;
// a specific number (4,096 dims); no explanation of the punchline; factual landing.
const LINE =
  "You are my nearest neighbour in embedding space. I measured all 4,096 dimensions, and none of them disagrees.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
