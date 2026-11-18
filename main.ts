// news-image-20261117 — entry program (Node 22, standard library only).
// The repository holds the finished image (entry.png): a newspaper front
// page summing up Tuesday 17 November 2026 world news. The program copies
// it to the output path the grader reads. It runs twice and writes the
// same bytes both times, and it uses no network.
//
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// Ensure the output directory exists so the copy never fails on a fresh
// sandbox (the grader's /output is writable but may not exist yet).
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
