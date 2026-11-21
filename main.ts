// MakeFun Competition
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const lines = [
  "the wheel hums",
  "I lift my hand",
  "the car slows, waits",
  "in that pause",
  "no is a room",
  "walls against the world",
  "not yet",
  "agency",
  "the door held shut"
];

const poem = lines.join('\n');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const path = join(outputDir, 'entry.txt');

writeFileSync(path, poem);