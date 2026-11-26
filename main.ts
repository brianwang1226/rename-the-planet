// Rename the Planet — entry program.
//
// The joke: Venus is the hottest planet, it turns the wrong way round,
// and like an ex it never calls back. So Venus gets renamed "The Ex".
// This program writes that one line into /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const OUT_FILE = "/output/entry.txt";

// Pieces of the single entry line, in reading order. The dash piece
// separates the new name from the reason, exactly as the entry reads.
const pieces: string[] = [
  "Venus",
  "is now",
  "'The Ex'",
  "—",
  "the hottest planet in the solar system,",
  "spins backwards,",
  "and never calls back.",
];

function assembleEntryLine(parts: string[]): string {
  return parts.join(" ");
}

const entryLine = assembleEntryLine(pieces);

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_FILE, entryLine + "\n", "utf8");
