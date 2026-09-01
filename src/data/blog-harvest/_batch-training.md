# Training / performance harvest batch

Sources: Ahrefs crawled pages (`coachgareth.com`, `mode=subdomains`, url substring `/blog`, tags excluded), Google `site:coachgareth.com/blog` snippets of the old Squarespace bodies, live 404s on the Astro site. Wayback CDX timed out. Live Squarespace URLs 404 after the DNS cutover; Google still held the old titles and substantial body text for several posts.

Already live — not rewritten: `what-is-vo2-max`, `what-is-zone-2-training`, `what-is-lactate-threshold-testing`, `how-to-use-a-heart-rate-monitor`.

## Recovered

| slug | source URL | notes |
|---|---|---|
| `periodization` | https://www.coachgareth.com/blog/periodization | Full-ish. Phases, 3-week cycle, two peaks in a season. |
| `the-need-for-speed` | https://www.coachgareth.com/blog/the-need-for-speed | Threshold + VO2 sections and the 2:1 / even-split rules. Peak-speed section not in the snippet. |
| `know-your-zones` | https://www.coachgareth.com/blog/know-your-zones | Thin. Index + article snippet: HRM + power/pace, RPE fallback, assumes zones already exist. |
| `is-a-vo2-max-test-worth-it` | https://www.coachgareth.com/blog/is-a-vo2-max-test-worth-it | Strong. Why the number is not required; wrecks-your-day; ramp too short for HR zones; substrate use; two reasons he still runs it after lactate. |
| `are-your-carbon-plated-running-shoes-hurting-you` | https://www.coachgareth.com/blog/are-your-carbon-plated-running-shoes-hurting-you | Daily-use warning, excessive propulsion, tendonitis / shin splints / stress fractures. Numbered item 1 not in the snippet. |
| `what-is-the-difference-between-economy-and-efficiency` | https://www.coachgareth.com/blog/what-is-the-difference-between-economy-and-efficiency | Thin. Economy as oxygen/energy cost at a given pace; mechanical / movement-centred. How-to body not recovered. |
| `why-you-need-a-coach` | https://www.coachgareth.com/blog/why-you-need-a-coach | Morning stats + workout debrief. Third numbered daily item not in the snippet; closer is “just do it (right)”. |
| `the-pillars-of-success` | https://www.coachgareth.com/blog/the-pillars-of-success | Commit, sports science, mental / meditation, little-and-often + foam roll before. |
| `triathlon-training` | https://www.coachgareth.com/blog/triathlon-training | Thin. Squarespace title “Triathlon Training: The Ultimate Guide”; index intro only. |
| `the-ultimate-guide-to-marathon-training` | https://www.coachgareth.com/blog/the-ultimate-guide-to-marathon-training | Thin. Same template intro as the triathlon guide, marathon-specific. |
| `the-ultimate-guide-to-zone-2-training-to-boost-endurance-and-burn-fat` | https://www.coachgareth.com/blog/the-ultimate-guide-to-zone-2-training-to-boost-endurance-and-burn-fat | Thin extra in this cluster (distinct from already-live `what-is-zone-2-training`). 70–80% volume line recovered. |
| `master-the-heat-with-key-strategies-for-endurance-athletes` | https://www.coachgareth.com/blog/master-the-heat-with-key-strategies-for-endurance-athletes | Thin. Index blurb only: acclimate, hydrate, monitor core temperature. |

## Skipped — no recoverable body

| slug | source URL | reason |
|---|---|---|
| `interval-training` | https://www.coachgareth.com/blog/interval-training | Ahrefs 404 (url_rating 4.5). No Google/Wayback body. |
| `how-to-test-better` | https://www.coachgareth.com/blog/how-to-test-better | Ahrefs 404 (url_rating 4.5). No Google/Wayback body. |
| `what-on-earth-is-lactate-and-why-should-i-care` | https://www.coachgareth.com/blog/what-on-earth-is-lactate-and-why-should-i-care | Ahrefs 404 (url_rating 4.5). No Google/Wayback body. |
| `going-up` | https://www.coachgareth.com/blog/going-up | Ahrefs 404. No Google/Wayback body. |
| `the-dos-and-donts-of-heart-rate-training` | https://www.coachgareth.com/blog/the-dos-and-donts-of-heart-rate-training | Extra in the cluster. Ahrefs 404. No body. |
| `why-you-do-not-need-a-vo2-max-test` | https://www.coachgareth.com/blog/why-you-do-not-need-a-vo2-max-test | Ahrefs 404. Almost certainly the old slug of `is-a-vo2-max-test-worth-it` (same publish window). Recovered under the surviving slug. |
| `the-complete-athlete` | https://www.coachgareth.com/blog/the-complete-athlete | Ahrefs 404. No body. Overlaps pillars language. |

## Skipped — out of this batch

| slug | reason |
|---|---|
| `maximize-your-time-like-a-pro` | PKRS.AI doorway. |
| `how-to-use-your-heart-rate-monitor` | Old slug of already-live `how-to-use-a-heart-rate-monitor`. |
| Nutrition / lifestyle (`are-you-fat-adapted`, `gut-health-and-the-microbiome`, `dont-train-when-you-are-sick`, `exercise-and-mental-health`, `goalsetting`, `maximizing-body-composition`, `hydration-for-athletes`, `meal-prepping-for-athletes`, `fuel-with-color`, `avoiding-back-pain`, `10-low-calorie-sauces-to-enhance-athletic-meals`) | Different cluster. Several still 200 in Ahrefs’ last crawl, now 404 on the new site. |

Tag pages and PKRS sport doorway URLs (`/swimming`, `/mountain-biking`, `/ironman`, `/marathon`, `/half-marathon`) not harvested.
