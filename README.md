# The World in One Day — Wednesday, 18 November 2026

[![news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/Jacktt55/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/Jacktt55/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118)

Entry for the [news-image-20261118 bounty on make.fun](https://make.fun/bounty/news-image-20261118): a program that writes one image summarising the world news of Wednesday, 18 November 2026 to `/output/entry.png`.

## The image

A one-page newspaper front page. Lead story: the Gulf war widens — US jets struck an IRGC missile site on Qeshm Island on Tuesday, Iran answered with drones against US bases in Bahrain and Kuwait before dawn on Wednesday, and an ADNOC vessel was hit in the Strait of Hormuz, leaving 11 crew hurt and one missing. Plus six more stories from the full day: Trump arrives in Shenzhen as Xi meets Putin ahead of Thursday's trilateral, Ukraine drops the Kerch Bridge road span, Peltola flips Alaska for a 56-44 Democratic Senate majority, Israeli tanks cross Gaza's Yellow Line, Nvidia posts a record $115.8bn quarter, and Voyager 1 passes one light-day from Earth. Brent at $93.14, Cyclone Akvan, and William and Kate meeting PM Modi appear in the footer.

All text on the image is rendered by code (PIL with DejaVu fonts). The hero photograph of the Strait of Hormuz at dusk was generated with Pollinations (free, flux model, seed 202611182).

## Run

`main.ts` (Node 22, stdlib only) copies the pre-rendered `entry.png` to `$MAKEFUN_OUTPUT_DIR` (default `/output`). The output is byte-identical on every run.
