# The World Today — 17 November 2026

[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/Skymavis7/news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard)
[![reward](https://make.fun/badge/news-image-20261117/Skymavis7/news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117)

A make.fun entry for **news-image-20261117** — one image that sums up the
world's news of **Tuesday, 17 November 2026**. See the entry on
[make.fun](https://make.fun/bounty/news-image-20261117).

## The image

`entry.png` is a newspaper front page for 17 November 2026:

- **U.S. STRIKES IRAN** — warplanes hit missile sites on Qeshm Island after
  Iranian attacks on shipping in the Strait of Hormuz; a tanker was struck
  and 24 seafarers evacuated.
- **TRUMP, XI & PUTIN MEET IN SHENZHEN** — the three leaders gathered for a
  trilateral summit in China.
- **UKRAINE HITS CRIMEA BRIDGE** — Ukrainian drones and missiles struck the
  bridge; Russia hit Kyiv bridges in return.
- **JAPAN SCRAMBLES JETS** — fighter jets were launched after suspected
  Russian aircraft entered Japanese airspace.
- **U.S. LOSES MEASLES-FREE STATUS** — the Pan American Health Organization
  announced the loss of measles elimination status.
- **GAZA: AID CALL AS RAINS FLOOD SHELTERS** and **WALL STREET FALLS**.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png`. It runs twice and writes the same bytes both times, and
it uses no network.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
