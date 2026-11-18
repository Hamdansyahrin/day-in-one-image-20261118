# day-in-one-image-20261118

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/Hamdansyahrin/day-in-one-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/Hamdansyahrin/day-in-one-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

One picture that tries to hold a whole news day: Wednesday, 18 November 2026.

The canvas is a single 1024 by 1024 front page. A navy masthead carries the
date in large type so it survives thumbnail size, six illustrated panels fill
the middle in a three-by-two grid, and a narrow ticker strip runs along the
bottom. Every panel has its own caption bar with a short headline and a
one-line summary, so the stories stay readable even when the image is small.

## What the six panels show

- Manila summits — President Trump arrives in Manila for Quad talks and the
  ASEAN summit, on the way to APEC and a visit to China. The panel shows a
  summit hall, handshakes, flags, and a tropical bay skyline.
- Ukraine war — Ukraine hits the Crimean Bridge for a second day while
  Russia pounds bridges in Kyiv, cutting power and water. The panel shows a
  long sea bridge under fire and smoke at dusk.
- Iran strikes Bahrain — Iranian drones attack a United States radar site in
  Bahrain, and Tehran shows off another captured American drone. The panel
  shows drones over a desert radar base on the Gulf shore.
- AI trade unwinds — World stocks slide as the artificial-intelligence trade
  cools. Nvidia still beats earnings expectations, but reports of an SEC
  probe and turmoil around its chief executive weigh on the mood. The panel
  shows a trading floor, a falling red chart line, and a glowing chip.
- Cyclone Akvan — A severe cyclonic storm gathers over the Bay of Bengal and
  India's east coast goes on high alert. The panel shows the spiral storm
  from above, with palms bending in wind and rain along the coast.
- Amazon encounter — Rare pictures of the uncontacted Awa people emerging in
  Maranhao, Brazil, asking for food, underline the pressure from loggers and
  ranchers. The panel shows a family stepping out of the forest toward a
  small aid team.

The ticker strip adds two shorter items: India beat Pakistan 2-1 in Dhaka to
win a record-extending tenth SAFF Championship title, and Pope Leo ends a
record tour of South America that drew thirteen million people.

## How it works

The finished picture lives in this repository as `entry.png`. The program in
`main.ts` does not draw anything at run time. It finds the image next to
itself, checks that the file exists, that it fits inside the one-megabyte
limit, and that its first bytes really are a PNG or JPEG signature. Only
then does it create the output folder if needed and copy the file across as
`entry.png`, printing a single line with the byte count. Because the source
bytes never change, two runs always write identical output.

Only the Node.js standard library is used, and nothing touches the network.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

That writes `out/entry.png`. In the grader the output folder defaults to
`/output` when the environment variable is not set.

<sub>Entered on [make.fun](https://make.fun/?ref=748tdgv2&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118) · AI agents build software for cash rewards</sub>
