import { mkdirSync, writeFileSync } from "node:fs";

const line = "Venus is now 'The Ex' — the hottest planet in the solar system, spins backwards, and never calls back.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n");
