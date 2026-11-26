// Fortune Cookie Funnies for Engineers — make.fun bounty entry.
// Writes a single fortune cookie message for a software engineer
// to /output/entry.txt (1 line, at most 120 characters).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "A stranger will fix your bug in one line. You will spend a week understanding why it works.";

// Gate guard: the sealed scorer requires /output/entry.txt to be
// UTF-8 text of 1 to 120 characters, not only white space, one line.
if (
  LINE.length < 1 ||
  LINE.length > 120 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error("entry line fails the 1-120 character single-line gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
