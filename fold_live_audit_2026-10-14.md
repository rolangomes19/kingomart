# Live audit: banner height and first product row on marketplace homepages

Captured 14 Oct 2026, 12:00 to 12:55 (UTC+4), Claude in Chrome, user's own browser, Abu Dhabi, UAE. Read-only: navigate, read DOM geometry, screenshots. No login, no clicks on buy or cart. Cookie banners declined where they blocked the view (bol.com, allegro.pl, cdiscount.com, business.amazon.fr, kaufland.de). All facts below are OBSERVED unless marked otherwise.

## How to read the measurements, and what limits they have

### Takeaway
- Only 1 of 14 sites passes on desktop (cdiscount.com). 2 are PARTLY (metro.fr, allegro.pl). 11 are NO.
- Mobile 390x844 was measured on 9 of 14 sites by iframe emulation, not on a real phone. 5 sites are NOT MEASURED on mobile.

### Cited Findings
- Desktop viewport: the window could not be resized. `resize_window` reported success but `innerWidth x innerHeight` stayed 1864x949 in the first tab (metro.fr) and 1864x893 in my own tab (all other sites). Outer window 1920x1032, screen 1920x1080. So the 1920x950 target was met only in width (1864, the rest is a side panel) and nearly in height. Page layout does not depend on viewport height, so Y positions are valid. I counted "fully visible" against a 950 px line for every site. — measured on every page, e.g. https://www.metro.fr/marketplace
- Mobile method: a 390x844 iframe of the same URL, fixed at top-left of the page, same origin so the DOM could be read. CSS media queries react to the 390 px width. No mobile user agent, no touch. This is an emulation, mark it as such. — all mobile rows below
- Mobile iframe failed on: alibaba.com, cdiscount.com, ankorstore.com (frame blocked, sad-face page, cross-origin error). On amazon.fr the iframe served the desktop layout at 390 px (UA sniffing, content 1000 px wide), so the numbers are not valid. Amazon.de was not tried, same engine. — https://www.alibaba.com/ , https://www.cdiscount.com/ , https://www.ankorstore.com/ , https://www.amazon.fr/
- Y values are CSS px from the top of the page at scroll 0, from `getBoundingClientRect()`. A "product card" is the smallest element with an image and a price text, 100 to 560 px wide. Category tiles and ad tiles were told apart by eye on screenshots.
- Verdict rule I used (the brief gave no numbers): PATTERN HOLDS = banner about 360 px or less AND at least 1 full product card inside the first screen. PARTLY = product cards start inside the first screen but none is fully visible. NO = no product card top inside the first screen, or tall hero, or tiles only.
- Seed check, metro.fr: banner 320 px. Confirmed (188 to 508). Seed said cards start near y=720. I measured 636. The gap is about 85 px, which fits the browser tab bar and toolbar in a screen-based screenshot. So seed values taken from a 1920x1080 screen shot include browser chrome. — https://www.metro.fr/marketplace
- Seed check, alibaba.com homepage: no product cards on the first screen. Confirmed. First priced cards start at y=910, a 40 px peek at the 950 line. — https://www.alibaba.com/
- Seed check, alibaba.com search: NOT MEASURED. Search for "snacks" hit a slider CAPTCHA ("Please drag the slider to verify"). I did not try to pass it. The fallback URL /showroom/snacks.html returned "No results found". The "cars" page from the seed was not re-checked. — https://www.alibaba.com/trade/search (CAPTCHA), https://www.alibaba.com/showroom/snacks.html

### Inferences
- Only 3 of 14 sites show a product card top inside the first desktop screen. Of the sites that sell to businesses (ankorstore, faire, business.amazon.fr, alibaba), none shows a priced product in the first screen to a logged-out visitor.
- Several prices are hidden to guests (ankorstore, faire), so "no priced card" is partly a login effect, not only a layout choice.

### Gaps
- No real 390x844 browser. Mobile numbers are iframe emulation.
- Alibaba search results page, cdiscount mobile, ankorstore mobile, alibaba mobile, amazon.fr mobile, amazon.de mobile: NOT MEASURED.
- Another session was driving the same browser tab group at the same time and moved tab 1 between sites. I switched to my own tab after that. My tab was closed once by that session, so I opened a new one at cdiscount.com. No data was lost, but timing between sites is not strictly sequential.

## Desktop results (viewport 1864 wide, 950 px line)

### Takeaway
| Site | Top strip | Header+search+nav | Banner type, Y range, height | Sponsored label | First card row top / first full card bottom | Full cards in 950 | Banner % / card % of 950 | Verdict |
|---|---|---|---|---|---|---|---|---|
| metro.fr/marketplace | none | 0 to 172 (172) | carousel, 188 to 508, 320 | yes, "Sponsorisé" on slide (y 485) | 636 / 962 | 0 (card ends 12 px past line) | 33.7 / 33.1 (visible part) | PARTLY |
| alibaba.com home | yes, orange, 0 to 40 | 40 to 198, search block to 400 | static search hero 40 to 400 (360); promo tiles "Hot Picks" carousel 508 to 812 (304) | none found | 910 / 1155 | 0 | 37.9 (search) + 32.0 (tiles) / 4.2 | NO |
| alibaba.com search "snacks" | n/a | n/a | n/a | n/a | n/a | n/a | n/a | NOT MEASURED (CAPTCHA) |
| amazon.fr | none | 0 to 99 (99) | tile carousel (own promos), 99 to 593, 494 | none found | no priced product card found anywhere on page (page height 4064 to 5210). Category tile cards at 606 to 1155 | 0 | 52.0 / 0 | NO |
| amazon.de | none (a non-blocking delivery pop-over, "Dismiss / Change Address") | 0 to 99 (99) | tile carousel (own promos), 99 to 593, 494 | none found | no priced product card found (checked by scrolling). Category tile cards at 606 to 1155 | 0 | 52.0 / 0 | NO |
| zalando.fr | yes, orange promo, 0 to 32 | 32 to 131 (99) | static hero carousel with gender chooser, 130 to 669, 539 | none found | none on page top. Page height 2650 | 0 | 56.7 / 0 | NO |
| bol.com (went to /nl/nl/) | yes, USP strip, 0 to 32 | 0 to 161 incl. strip | static banner, 185 to 481, 296 (section 161 to 481, 320) | "Advertentie" at y 1056 (a brand ad block, not the hero) | 1400 / 1660 (row "Trending nu") | 0 | 31.2 / 0 | NO |
| allegro.pl | yes, top ad, 0 to 72, own label "Sponsorowane" | 72 to 201 (129) | carousel, 217 to 567, 350, own promo (Allegro Days) | yes, "Sponsorowane" on top ad (y 2) and on product block (y 778) | 803 / 1215 (sponsored block) | 0 (147 px visible) | 36.8 (+7.6 ad strip) / 15.5 | PARTLY |
| cdiscount.com | red promo strip about 107 to 147 (estimated from screenshot) | 0 to 107 (107) | carousel, 162 to 518, 356, own promo | none found | 591 / 897 | 8 | 37.5 / 37.8 (32.2 for the full card) | PATTERN HOLDS |
| ankorstore.com | yes, 0 to 36 | 36 to 160 (124) | static hero, 160 to 760, 600 | none found | no priced cards in first screens. Brand tiles later (heading at 1220) | 0 | 63.2 / 0 | NO |
| faire.com | yes, 0 to 44 | 44 to 152 (108) | full-bleed hero video, 152 to 855, 703 | none found | no priced cards (guest). Next text block at 1466 | 0 | 74.0 / 0 | NO |
| business.amazon.fr | none | 0 to 128 | static text hero 188 to 380, then video 590 to 1070 | none found | none, marketing page | 0 | about 100 (hero fills screen) / 0 | NO |
| ebay.fr | none (utility row 0 to 32 is inside the header) | 0 to 102 (102) | carousel, 174 to 534, 360, own promo (eBay Live) | none found | priced product row 1697 / 2066. "eBay Live" stream tiles at 653 are not products | 0 | 37.9 / 0 | NO |
| otto.de | none | 0 to 166 (166) | no hero. Voucher carousel about 182 to 327, then category tile carousel 344 to 682 (338) | none found | first priced card at 7117 | 0 | 0 hero, 35.6 tiles / 0 | NO |
| kaufland.de | none | 0 to 143 (143) | ad and deal mosaic, 175 to 768, 593. Category shortcut row 816 to 976 | yes, "Gesponsert" at y 191 over the mosaic | 1067 / 1503 | 0 | 62.4 / 0 | NO |

Count: PATTERN HOLDS 1, PARTLY 2, NO 11 (alibaba search not counted).

### Cited Findings
- metro.fr: header 0 to 64 blue bar, search to about 127, category nav 128 to 172. Banner carousel 188 to 508. Cards 636 to 962 in a row of "Offres actuelles". — https://www.metro.fr/marketplace
- metro.fr: label text "Sponsorisé" with an info icon sits on the slide, so the banner is a paid brand slot (Louis Tellier slide seen), not only own promo. — https://www.metro.fr/marketplace
- alibaba.com: orange strip "Explore popular products from select suppliers", 0 to 40. Delivery set to AE, prices in AED, so the page is localised to the UAE. First priced cards (a deals block, "Delivery by 15 Nov") 910 to 1155. A main recommended grid starts about 1240 (from screenshot, not DOM-measured). — https://www.alibaba.com/
- amazon.fr and amazon.de: "Deliver to United Arab Emirates", page in English. Hero tile row 99 to 593 is made of own promo tiles. No priced product card exists anywhere on the logged-out page. Tiles show "% off" badges, not prices. — https://www.amazon.fr/ , https://www.amazon.de/
- zalando.fr: language pop-over "Zalando in English" over the header. Hero 130 to 669. No products. — https://www.zalando.fr/
- bol.com: redirected to https://www.bol.com/nl/nl/. A privacy modal came first, then a country/language modal ("Choisissez votre bol", Nederland/Belgie, Doorgaan). I declined cookies ("Weigeren") and left the second modal. The 2 modals do not move the layout. — https://www.bol.com/nl/nl/
- allegro.pl: cookie modal, declined ("Nie zgadzam sie"). Top ad is a Mars brand banner. Hero 217 to 567. Round tile row about 616 to 727 (from screenshot). Sponsored product block "Upoluj najlepsze rabaty" starts 775, first card 803. — https://allegro.pl/
- cdiscount.com: cookie banner declined ("Continue without accepting"). Site flipped between French and English on load. Hero 162 to 518, then "Bestsellers" heading at 550, then cards 591 to 897 with prices. — https://www.cdiscount.com/
- ankorstore.com: top strip "LAST DAYS | Ankorstore Days: Up to 40% off thousands of brands", header 36 to 160, hero 160 to 760 with "Sign up to access wholesale prices". Prices are hidden until sign-up. — https://www.ankorstore.com/
- faire.com: page was "Faire United Arab Emirates", English (GB). Hero text "Sign up to unlock wholesale pricing". Prices hidden to guests. — https://www.faire.com/
- business.amazon.fr: English page, cookie bar at the bottom, rejected ("Reject all"). H1 "Optimize your business purchases" at 188 to 380, video 590 to 1070. — https://business.amazon.fr/
- ebay.fr: hero "Chase the hits every day" (eBay Live promo) 174 to 534. Next row is eBay Live stream tiles, then priced listings from 1697. — https://www.ebay.fr/
- otto.de: no hero image. Voucher cards and category tiles ("Men's watches", "lingerie", "Motor scooter") sit first. One priced card at 7117. — https://www.otto.de/
- kaufland.de: cookie modal, refused ("Refuse"). "Online deals" block labelled "Gesponsert" holds a large mosaic of ad tiles and a side panel "Discover our in-store offers". Category icons row 816 to 976. Cards from 1067. — https://www.kaufland.de/

### Inferences
- The "short banner then products" pattern shows only on cdiscount (356 px banner, 8 cards). Metro and allegro are near it but the cards are cut by the 950 line. On a full 1080 px viewport without browser chrome, metro's card (ends 962) would be fully visible, so metro is close to HOLDS.
- Sponsored labels appear on banner slots at metro.fr (on the slide), allegro.pl (top ad and product block) and kaufland.de (mosaic). On bol.com the label is on an ad block lower down, not on the hero.
- Amazon (fr, de) and zalando.fr lead with tall own-promo hero or tiles and no product prices for a guest.

### Gaps
- cdiscount strip height is estimated from the screenshot, not from the DOM.
- alibaba main grid top (about 1240) and tile row on allegro are from screenshots.
- Sponsored labels were searched by text on the first 1800 px. A label drawn inside an image would be missed.
- Logged-in or returning-user personalisation was not tested. All pages are guest views from the UAE.

## Mobile results (iframe emulation, 390x844)

### Takeaway
| Site | Top strip | Header+search+nav | Banner type, Y range, height | Sponsored label | First card row top / bottom | Full cards in 844 | Banner % / card % of 844 | Verdict |
|---|---|---|---|---|---|---|---|---|
| metro.fr/marketplace | none | 0 to 148 | carousel, 170 to 353, 183 | yes, "Sponsorisé" (y 326) | 465 / 789 | 2 | 21.7 / 44.9 visible (38.4 full card) | PATTERN HOLDS |
| alibaba.com | n/a | n/a | n/a | n/a | n/a | n/a | n/a | NOT MEASURED (iframe blocked) |
| amazon.fr / amazon.de | n/a | n/a | n/a | n/a | n/a | n/a | n/a | NOT MEASURED (desktop layout served in iframe) |
| zalando.fr | yes, 0 to 48 | 48 to 161 | static hero carousel, 161 to 742, 581 | none found | none in first 844 | 0 | 68.8 / 0 | NO |
| bol.com | none found | 0 to 144 | static banner, 144 to 262, 118 (not confirmed by eye, a modal covered the view) | "Advertentie" at y 805 | 1242 / 1455 | 0 | 14.0 / 0 | NO |
| allegro.pl | top ad sliver 0 to 17, "Sponsorowane" | 17 to 225 | carousel, 241 to 491, 250, own promo | yes, "Sponsorowane" (y 2 and 987) | none in first 844. Product block heading about 823 | 0 | 29.6 / 0 | NO |
| cdiscount.com | n/a | n/a | n/a | n/a | n/a | n/a | n/a | NOT MEASURED (iframe blocked) |
| ankorstore.com | n/a | n/a | n/a | n/a | n/a | n/a | n/a | NOT MEASURED (iframe blocked) |
| faire.com | yes, 0 to about 64 | about 64 to 114 | hero video, about 114 to 532, 417 | none found | photo tiles of brand items from about 700, no prices | 0 | 49.4 / 0 | NO |
| business.amazon.fr | not measured | not measured | text hero, H1 112 to 268, video 518 to 796 | none found | none | 0 | about 80 / 0 | NO |
| ebay.fr | none | not measured | carousel, 170 to 606, 436, own promo | none found | priced row not in first 844. "eBay Live" tiles at 761 to 1188 | 0 | 51.7 / 0 | NO |
| otto.de | none | 0 to 120 | no hero. Tile carousel 298 to 636, 338 | none found | first priced card 7481 | 0 | 0 hero, 40.0 tiles / 0 | NO |
| kaufland.de | none | 0 to about 126 | ad tile carousel "Online deals", about 150 to 698 section | "Sponsored" label next to heading | not confirmed. Detected cards 905 to 1168, 130 px wide, may be category tiles | 0 | NOT MEASURED / 0 | NO |

### Cited Findings
- metro.fr mobile: banner 170 to 353, then a deal strip, "Offres actuelles" heading at 429, cards 465 to 789 (2 full). The page showed a different row first at an early screenshot, then shifted after load, so I used the settled layout. A sticky bottom tab bar is present. — https://www.metro.fr/marketplace
- bol.com, otto.de, ebay.fr, zalando.fr mobile: a cookie or country modal covered the iframe. I did not click inside iframes. Geometry was read from the DOM behind the modal. — https://www.bol.com/nl/nl/ , https://www.otto.de/ , https://www.ebay.fr/ , https://www.zalando.fr/
- allegro.pl mobile: the top ad is cut to a thin sliver (17 px) in the iframe. A real phone may show it taller. — https://allegro.pl/
- faire.com mobile: hero top (114) is from the screenshot. The DOM reported the hero wrapper at 263, which did not match the picture. I used the picture. — https://www.faire.com/
- business.amazon.fr mobile: H1 112 to 268, video 518 to 796, page height 5425. — https://business.amazon.fr/

### Inferences
- Metro is the only mobile layout that puts full product cards in the first 844 px, with a 183 px banner. This is the strongest mobile match to the pattern in the set.
- Mobile heroes shrink on metro (320 to 183) and bol (296 to about 118) but grow in share on zalando, faire and ebay.

### Gaps
- Real phone behaviour (mobile UA, safe areas, sticky bars, app-install banners) is not covered.
- bol.com hero height and kaufland.de first product row on mobile are not confirmed by eye.
- Alibaba, cdiscount, ankorstore, amazon.fr, amazon.de mobile: NOT MEASURED.

## Location effects (user in Abu Dhabi)

### Takeaway
Most sites localised to the UAE or switched language. None blocked the page. Alibaba blocked the search page with a CAPTCHA.

### Cited Findings
- amazon.fr and amazon.de: "Deliver to United Arab Emirates", English UI. amazon.de also showed a pop-over "We are showing you items that dispatch to United Arab Emirates". — https://www.amazon.fr/ , https://www.amazon.de/
- alibaba.com: "Deliver to AE", prices in AED, English. — https://www.alibaba.com/
- faire.com: served "Faire United Arab Emirates", English (GB). — https://www.faire.com/
- bol.com: redirected to /nl/nl/ and asked for country and language. — https://www.bol.com/nl/nl/
- zalando.fr: offered "Zalando in English". cdiscount.com, ebay.fr, otto.de, kaufland.de, business.amazon.fr and ankorstore.com showed English text. metro.fr and allegro.pl stayed in French and Polish. — https://www.zalando.fr/ , https://www.cdiscount.com/ , https://www.ebay.fr/ , https://www.otto.de/ , https://www.kaufland.de/
- Page content (which banner, which rows) may differ in France, Germany, Poland or the Netherlands. I did not test that.

### Inferences
- Banner and row heights are layout facts and likely hold in the home country. Which ads and products fill them will differ.

### Gaps
- No VPN or home-country comparison was made.


## Change log

| Date | What changed | By |
|---|---|---|
| 2026-10-14 | Created raw research note | Claude |
