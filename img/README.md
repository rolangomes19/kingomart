# Image list for the KingoMart prototype

Drop each file into this folder under the exact path shown, then run `node build.mjs`.
The build finds the photos by themselves, and each photo replaces its designed placeholder.
Any of these formats works: `.jpg`, `.png`, `.webp`, `.avif`, `.svg`. The file name without the extension is what counts.

Only use photos you have the rights to. Brand logos and staff portraits need written permission.

## 1. Must have (the page looks finished with these)

| Path | Size | What to shoot or find | Where it shows |
| --- | --- | --- | --- |
| `hero.jpg` | 2400 × 1500, landscape | Port of Marseille or Algiers at blue hour or dusk: a ferry, a container ship or a line of trucks on the quay. Keep the left half calm (sky or water), because the headline sits there. The page mutes it toward the sea-blue palette, so a bright photo works too. | Home, behind the dark hero |
| `p/p1.png` | 1200 × 1200, **transparent PNG** | Hamoud La Blanche, 1L glass bottle, front view, cut out | Product cards, product page, cart |
| `p/p2.png` | same | Hamoud Selecto, 24cl can | same |
| `p/p3.png` | same | Hamoud Slim Lychee, 33cl can | same |
| `p/p4.png` | same | Dr Pepper 12oz can | same |
| `p/p5.png` | same | Sunkist Orange 12oz can | same |
| `p/p6.png` | same | Hamoud Cola, 1L PET | same |
| `p/p7.png` | same | Hamoud Slim Apple, 1L glass | same |
| `p/p8.png` | same | Citrus soda, 33cl can (Belgian origin) | same |
| `p/p9.png` | same | Monster Energy Original, 500ml can | same |
| `p/p10.png` | same | Hamoud Slim Orange, 25cl PET | same |
| `p/p11.png` | same | Deglet Nour dates, 5kg carton (open carton with dates looks best) | same |
| `p/p12.png` | same | Hamoud Grenadine syrup, 75cl bottle | same |
| `p/p13.png` | same | Vannamei shrimp, 2kg frozen pack | same |
| `p/p15.png` | same | Vietnam Robusta green coffee: a jute sack or a heap of green beans | same |

**Packshot notes.** Cut-outs on a transparent background, product centred, about 80% of the frame height, no cast shadow (the page adds one). Each product sits on its own colored backdrop that is already matched to the pack, so do not add a background.

## 2. Strongly recommended (trust and atmosphere)

| Path | Size | What to shoot or find | Where it shows |
| --- | --- | --- | --- |
| `team/fr.jpg` | 600 × 600, square | Portrait of the real contact for French buyers (the prototype calls them Camille Laurent). Head and shoulders, natural light, friendly. | Contact card on product, apply, pending, received and orders screens |
| `team/dz.jpg` | 600 × 600, square | Portrait of the real contact for Algerian buyers (the prototype calls them Yasmine Haddad) | Same, when the buyer is Algiers |
| `origin/dz.jpg` | 1600 × 2000, **portrait** | Algeria: Deglet Nour palm grove, or crates of Hamoud bottles in a warehouse | Home, the large "Shop by origin" tile |
| `origin/us.jpg` | 1600 × 1200 | USA: pallets of soda cans in a warehouse | Home, origin tile |
| `origin/vn.jpg` | 1600 × 1200 | Vietnam: coffee cherries, a drying yard, or a shrimp farm | Home, origin tile |
| `origin/br.jpg` | 1600 × 1200 | Brazil: cattle pasture or a cold store with beef cartons | Home, origin tile |
| `origin/be.jpg` | 1600 × 1200 | Belgium: Port of Antwerp, or a truck on a Belgian motorway | Home, origin tile |

Origin tiles get a dark gradient at the bottom for the white text, so any well-lit photo works.

## 3. Nice to have

| Path | Size | What to shoot or find | Where it shows |
| --- | --- | --- | --- |
| `logo.svg` | vector | The real KingoMart logo, dark version for light backgrounds | Header |
| `logo-white.svg` | vector | The same logo, white version | Footer (dark) |
| `p/p1-case.jpg` | 1200 × 1200 | A full case of 12 La Blanche bottles | Product page gallery, 2nd thumbnail |
| `p/p1-pallet.jpg` | 1200 × 1200 | A wrapped pallet of La Blanche cases | Product page gallery, 3rd thumbnail |
| `p/p1-label.jpg` | 1200 × 1200 | Close-up of the back label (ingredients, EU food info) | Product page gallery, 4th thumbnail |
| `mode/ts.jpg` | 1600 × 600, wide | A shared ambient truck on the road or at a ferry ramp | Top of each shared-truck card on Open departures |
| `mode/tc.jpg` | 1600 × 600 | A refrigerated truck (reefer) | Chilled departure card |
| `mode/cs.jpg` | 1600 × 600 | Containers being loaded on a ship | Container departure cards |
| `brands/<name>.svg` | vector, single color is best | Logos of brands you carry, for example `brands/hamoud.svg`, `brands/monster.svg`. **Only with the brand's permission.** | A logo row under the home hero. It stays hidden until at least one file exists. |

The same `-case`, `-pallet` and `-label` names work for any product (for example `p/p9-pallet.jpg`).

## Compressing

After adding or replacing photos, run `python tools/optimize-images.py`. It writes light WebP copies to `img/_web/` (products at most 900px, other photos at most 1800px) and leaves your originals untouched. `node build.mjs` uses a copy when it exists and is newer than its original, and otherwise uses the original and prints a reminder. The first run took the photos from 6.6 MB to about 1 MB.

## Previewing

`serve.mjs` now serves this folder. If a preview server was already running before this change, restart it once (`node serve.mjs`) so the photos load.

## Origin line illustrations (replace the origin photos)

Only Algeria keeps a photo (`origin/dz.jpg`). The other four tiles show a line illustration in the top-right corner of their colored tile:

| Path | Subject idea |
| --- | --- |
| `illus/us.svg` | Soda cans or a stack of cases |
| `illus/vn.svg` | Coffee branch with cherries, or a shrimp |
| `illus/br.svg` | Cattle or a beef cut |
| `illus/be.svg` | Antwerp port crane or a truck |

**Format:** SVG preferred (PNG with transparency also works), single color, transparent background, roughly square. The page renders any color as white line art, so one file works on every tile. `origin/us.jpg`, `vn.webp`, `br.jpg` and `be.jpg` are no longer used and can be deleted.
