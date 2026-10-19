# Bir Kelime

Mobile-first Turkish/English daily vocabulary PWA. 34 topics share 16 editorial seed pools (128 unique word records). Each level-filtered pool is a deterministic date-indexed cycle; changing level opens a different pool. CEFR labels are indicative learning groupings, not certified exam labels. Content is a compact starter collection, not a complete dictionary.

## Features

- `/api/time` supplies server time; `Europe/Istanbul` defines calendar day. While open, a monotonic timer tracks elapsed time and resynchronizes once per minute, on reconnect and on resume.
- Category + level + date selects one stable word. All words in a fixed pool occur before the next cycle. No runtime word generation.
- Preferences, learned words, favorites, visited-word history and visit streaks use local storage. No cross-device personal-history synchronization. The date-based selection itself is consistent across devices.
- Browser speech synthesis with US/UK selection; IPA uses British pronunciation. Turkish transliterations are approximate.
- Installable manifest and a service worker. Offline navigation displays the last saved word with its original date rather than claiming it is current.
- D1 push subscriptions, ECDH/HKDF/AES128GCM payload encryption, ES256 VAPID authentication, expiry cleanup and daily deduplication. Only recognized Apple/Mozilla/Google push endpoints are accepted.
- Default push target 00:05 Europe/Istanbul, via linked Sites cloud automation. Delivery is best effort and may be delayed by the task runtime, network, operating system or push service. Custom delivery times are not enabled in this version.

## Runtime settings

Set `VAPID_PRIVATE_JWK` as a secret, `VAPID_PUBLIC_KEY`, and `PUSH_SCHEDULE_ACTIVE` through Sites environment settings. Never store private keys in Git. The active flag describes the linked schedule; it does not itself create a scheduler.

## Unattended daily writer

Keep this Site owner-private. `/api/dispatch` relies on the private Sites access boundary; do not make this endpoint public without adding independent authorization. For a daily run, get the current Site through the Sites connector, obtain its supported service-access token, and POST an empty body to `/api/dispatch` with `OAI-Sites-Authorization: Bearer <token>`. Never put the token in source, schedule instructions or output. GET `/api/dispatch` to read back counts for the current Istanbul date. On failures, retry after five minutes; duplicate successful deliveries on the same date are suppressed. Batch size is 100; continue while there are unprocessed subscriptions, with at most three retries for transient failures. No rebuild or publication is needed for a run.

Test notifications are sent by `/api/push` only after the user opts in from the browser. No real device delivery can be proven until a user grants permission on a supported device. iOS/iPadOS requires an installed home-screen web app (16.4+); lock-screen visibility is controlled by the user’s system settings. The site never changes wallpaper.

## Validation

`node tests/core.mjs`: midnight timezone boundary, 136 category/level pool cycles, data completeness, VAPID signature verification, Web Push encrypt/decrypt round trip and endpoint validation.

`node node_modules/typescript/bin/tsc --noEmit` and the Sites build helper validate source and production build. Browser interaction QA was unavailable in the authoring environment. Service-worker installation and physical notification presentation need device verification.
