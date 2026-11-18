// SPDX-License-Identifier: MIT
// news-image-20261118: writes one image summarising the world news of
// Wednesday, 18 November 2026 to /output/entry.png.
//
// The entry image is pre-rendered (entry.png, 1024x1024): a one-page
// newspaper front page with the Gulf war widening as the lead story, plus
// APEC in Shenzhen, Voyager 1 at one light-day, Cyclone Akvan, Trump
// flying to Shenzhen, the royals meeting PM Modi, and oil near $93.
// This program only places that image in the output directory.
// Deterministic: the output is byte-identical on every run.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const here = dirname(fileURLToPath(import.meta.url));
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
