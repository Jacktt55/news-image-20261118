# The World in One Day — Wednesday, 18 November 2026

[![news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/Jacktt55/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/Jacktt55/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118)

Entry for the [news-image-20261118 bounty on make.fun](https://make.fun/bounty/news-image-20261118): a program that writes one image summarising the world news of Wednesday, 18 November 2026 to `/output/entry.png`.

## The image

A one-page newspaper front page. Lead story: the Gulf war widens — Bahrain and Kuwait intercept fresh Iranian drone attacks early Wednesday as the U.S.–Iran fight spreads. Plus six more stories from the day: APEC opens in Shenzhen, Voyager 1 passes one light-day from Earth, Cyclone Akvan turns severe off India's east coast, Trump flies to Shenzhen for APEC, William and Kate meet PM Modi in Delhi, and Brent crude holds near $93.

All text on the image is rendered by code (PIL with DejaVu fonts). The hero photograph of tankers in the Strait of Hormuz at dusk was generated with Pollinations (free, flux model, seed 20261118).

## Run

`main.ts` (Node 22, stdlib only) copies the pre-rendered `entry.png` to `$MAKEFUN_OUTPUT_DIR` (default `/output`). The output is byte-identical on every run.
