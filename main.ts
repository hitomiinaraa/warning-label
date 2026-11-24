// Warning Label for Humans: One Line, Big Laugh (v2 rebuild)
// Writes the winning warning-label line to /output/entry.txt, byte-exact.
// v2 line: the "not hungry" dinner thief — a fresh warning, not the v1 lateness line.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = 'WARNING: Contents may insist they are "not hungry," then eat half your dinner straight off your plate.';

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
