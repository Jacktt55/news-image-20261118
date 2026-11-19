// SPDX-License-Identifier: MIT
// news-image-20261118: writes one image summarising the world news of
// Wednesday, 18 November 2026 to /output/entry.png.
//
// REBUILD (r2): the first build covered only the morning's stories. This
// rebuild covers the full day of 18 November 2026.
//
// The entry image is pre-rendered (entry.png, 1024x1024): a one-page
// newspaper front page with the Gulf war widening as the lead story
// (updated: US strike on Qeshm Island, Iranian drones over Bahrain and
// Kuwait, ADNOC vessel hit in Hormuz), plus APEC in Shenzhen with the
// Trump-Xi-Putin trilateral set for Thursday, the Kerch Bridge road span
// collapsing, Peltola flipping Alaska, Israeli tanks crossing Gaza's
// Yellow Line, Nvidia's record $115.8bn quarter, and Voyager 1 reaching
// one light-day from Earth. Brent at $93.14, Cyclone Akvan, and the
// royals meeting PM Modi appear in the footer.
// This program only places that image in the output directory.
// Deterministic: the output is byte-identical on every run.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const here = dirname(fileURLToPath(import.meta.url));
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
