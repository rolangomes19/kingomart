# EU general marketplaces: homepage top, banner strip then product rows near the fold

Date of research: 14 October 2026.

## Method and limits (read first)

- OBSERVED (live fetch, text only) = a WebFetch of the live homepage on 2026-10-14. The tool returns page text in DOM order. It does not return a rendered screenshot. So order is real, but pixel heights, fold position and the 1920x1080 / 390x844 views are NOT VERIFIED for every site.
- A local headless browser was tried. The egress proxy blocked the shop hosts (HTTP 403 on CONNECT). No screenshots exist. No workaround was tried.
- web.archive.org was blocked by the fetch tool (SITE_BLOCKED). No archive snapshots.
- amazon.de and amazon.fr: blocked by robots (ROBOTS_DISALLOWED). allegro.pl: fetch error. cdiscount.com: returned only a "JavaScript disabled" shell. Darty and Vinted/Etsy: see table.
- REPORTED = article, study or vendor page. Date is given.
- No source gave pixel or percent-of-screen numbers for any first screen. None are stated here.
- The fetch tool uses a small model to summarise. Treat counts (tiles, products) as approximate.
- Fetches were from a non-EU, logged-out, cookie-less session. Content may differ for EU users (personalisation, geo).

## Key question 1: Does the page lead with a short banner then products above the fold?

### Takeaway
Pattern holds in DOM order for only a few sites (Kaufland.de, Carrefour.fr, Vinted.fr logged-out). Most large sites lead with several promo tiles or a carousel first. Fold position is NOT VERIFIED for every site. No site was confirmed as "one short banner, then a product row visible without scroll".

### Cited Findings

Verdict key: HOLDS / PARTLY / DOES NOT HOLD / NOT VERIFIED. All verdicts are based on content order, not on pixels.

| Marketplace | Verdict | Order from top (source order) | Evidence type |
|---|---|---|---|
| bol.com (NL) | PARTLY | Skip links, promo bar (free shipping from 25 EUR, same-day, free returns, Select link), header links. Then carousel 1 with 6 tiles (Gaming Weeks, Huishouddeals, Aanvuldeals, Woondeals, Het Grote Speelgoedboek, Halloween). Then carousel 2 with 4 deals. Then one ad block (Ring, labelled "Advertentie"). Then "Service & contact". Then "Trending nu" row with 6 products (first: Heatless Curls 13.55 EUR). No "Gesponsord" label on the row. About 10 promo banners plus 1 ad block before the first product row. | OBSERVED (live fetch, text only, 2026-10-14) [bol](https://www.bol.com/nl/nl/) |
| eBay.de | DOES NOT HOLD (by order) | Header with category dropdown and "Finden". Category nav: eBay Live, Gespeichert, Elektronik, Motors, Haus & Garten, Kleidung, Sammeln, Sport, Business, WOW! Angebote. Then 4 promo tiles (eBay Top-Service, eBay LIVE, Sneaker Echtheitsprüfung, 10% tyre coupon). Carousel not confirmed. Then eBay Live row of 25 tiles. Then "Highlights im Oktober" links, a -20% coupon banner. Then "Deals des Tages" with 15 products (first: LEGO Jaguar E-Type 112.99 EUR). No "Gesponsert" label found. | OBSERVED (live fetch, text only, 2026-10-14) [eBay.de](https://www.ebay.de/) |
| Kaufland.de | HOLDS (by order); fold NOT VERIFIED | Skip links, logo, two tabs ("Online-Marktplatz", "Filial-Angebote"), search field with "Jetzt suchen", "Alle Kategorien" button (about 11 top groups, no horizontal bar in text). Then "Online-Deals" with 3 banners, each with "Jetzt entdecken". Banners look static (no carousel controls in markup, not certain). Label "Gesponsert" appears above the Online-Deals banners. Then a Filial-Angebote block (leaflet teaser + 2 banners). Then "Lass dich inspirieren" product tiles (Pokémon box, iPhone 17 Pro, PS5 Pro, cordless vacuum), with rating, price, seller, badges. "Mehr laden" button after. Product tiles have no sponsor label. | OBSERVED (live fetch, text only, 2026-10-14) [Kaufland](https://www.kaufland.de/) |
| Carrefour.fr | PARTLY | Header: Menu button, Promotions, Catalogues links, search field, help, account, cart total. Then one large full-width hero ("Le Mois Online"), looks static. Then 2 big entry blocks ("Courses du quotidien", "Maison & loisirs"). Then 4 to 5 promo tiles. Then "La sélection du moment" with 5 product cards (13.99, 13.99, 1.59, 3.25, 9.29 EUR). No "Sponsorisé" label found. | OBSERVED (live fetch, text only, 2026-10-14) [Carrefour](https://www.carrefour.fr/) |
| Leroy Merlin FR (Mirakl marketplace) | DOES NOT HOLD (no product row in text) | Skip links, promo strip above header ("Jusqu'au 13 octobre : Des bons plans sur tous les rayons", countdown at 00). Header, store picker, "Produits" menu (15 groups). Energy renovation banner. Main banner with 5 linked visuals (likely carousel, indicator "1."). One offer labelled "Sponsorisé" (Kärcher) with a "Pourquoi cette publicité ?" window. Online leaflet link. Four promos and 3 selections. Services, articles, category groups. No product row with names and prices in the text. | OBSERVED (live fetch, text only, 2026-10-14) [Leroy Merlin](https://www.leroymerlin.fr/) |
| Otto.de | DOES NOT HOLD (by text) | "Willkommen bei OTTO" heading, account/Merkzettel/cart. Sale shortcuts row (Deal des Tages, Deals der Woche, Deals des Monats, Herbst-Sale, Super-Sale). Main nav (Inspiration, Damen-Mode, Herren-Mode, Baby & Kind, Sport, Marken, Haushalt, Möbel, Baumarkt, Sale). One promo tile ("Care Bears by Essence") and a membership line ("GRATIS Versand und sammle Punkte"). Voucher tiles all marked "leider abgelaufen" (expired) in the capture. Then "Beliebte Kategorien" with 6 image tiles. No product tiles with names or prices. No "Anzeige" label found. | OBSERVED (live fetch, text only, 2026-10-14) [Otto](https://www.otto.de/) |
| Zalando.de | DOES NOT HOLD (by text) | Promo line (outlet, up to 50% off), then Damen/Herren/Kinder/"Zalando wohnen" links. 11 category links (NEU, Bekleidung, Schuhe, Sport, Streetwear, Accessoires, Beauty, Designer, Marken, Sale %, Pre-owned). Then one carousel "Was zieh ich an? Finde deinen Style" with 7 lifestyle images, no prices or buy links. No product row in text. Then brand links, category links, newsletter. No "Anzeige" label found. | OBSERVED (live fetch, text only, 2026-10-14) [Zalando](https://www.zalando.de/) |
| Fnac.com | NOT VERIFIED | Skip links, top bar (help, stores, Fnac+), logo, "Tous nos rayons" menu. A strip of 5 image shortcuts (Bons plans, Les Jours Fnac, Actualité Livres, Fnac+ discounts, Fnac 2nde Vie). Hero not captured. No product row captured. No "Sponsorisé" found. Capture incomplete. | OBSERVED (partial, live fetch, text only, 2026-10-14) [Fnac](https://www.fnac.com/) |
| Etsy.de | DOES NOT HOLD | Header with Kategorien, Stöbern, search ("Artikel oder Shops suchen"). Category links (Geschenke, Halloween, Schöner wohnen, Fashion, Vintage, Hochzeit, Gutscheine). Main banner (Halloween-Deko) with button. Second banner ("Festliche Fundstücke"). First row = 4 curated interest tiles, not listings. Then 5 more collection tiles. No "Anzeige" label found on visible content. | OBSERVED (live fetch, text only, 2026-10-14) [Etsy DE](https://www.etsy.com/de/) |
| Vinted.fr | PARTLY (logged-out view) | Logo, "S'inscrire / Se connecter", "Vends tes articles". Promo block with 2 banner images ("Prêt à faire du tri dans tes placards ?", two sell buttons). Then a row of listing cards with photo, title, brand, condition, size, price, price incl. fees (first: puzzle 5.00 EUR, North Face backpack 22.00 EUR, Zara jumpsuit 22.99 EUR, Nike top 20.00 EUR). No ad label found on cards or banners. Search box not seen in text. Banner is own promo (sell). | OBSERVED (live fetch, text only, 2026-10-14) [Vinted FR](https://www.vinted.fr/) |
| Amazon.de / Amazon.fr | NOT VERIFIED | Live fetch blocked by robots. No dated first-screen evidence found for the EU sites. See "Amazon reported" below. | Fetch blocked; see REPORTED rows below |
| Allegro.pl | NOT VERIFIED | Live fetch failed. No first-screen description found. See Allegro reported rows below. | Fetch failed |
| Cdiscount.com | NOT VERIFIED | Live fetch returned only a JavaScript-disabled shell. See Cdiscount reported row below. | Fetch limited |
| Darty marketplace | NOT VERIFIED | Not fetched (time limit). | none |

Amazon reported:
- Amazon announced a new homepage test in the US Shopping app on 22 Oct 2024. Top of page is a "Window Display" with personalised picks (deals, Prime Video and Music releases, seasonal finds). Below are horizontal topic rows and a "Buy Again" hub. US only. The article does not address above-the-fold or ads. — REPORTED, 2024-10-22, [Amazon About](https://www.aboutamazon.com/news/retail/amazon-homepage-redesign-features)
- Amazon Ads sells "homepage hero placements" (from unBoxed 2025). Markets include Germany, France, Spain, Italy, UK, US. Described as a redesigned "full-screen mode" hero, "reel-style", across all devices. Static and video creative. Share of voice 5%, 10%, 25%, 50%, 100%. The page does not say how many slides, the size, or the label text. — REPORTED, 2025-11-12, [Amazon Ads](https://advertising.amazon.com/resources/whats-new/homepage-hero-placements-on-the-amazon-store-unboxed-2025); German page confirms the same, no size or label data: [Amazon Ads DE](https://advertising.amazon.com/de-de/resources/whats-new/homepage-hero-placements-on-the-amazon-store-unboxed-2025); same facts in [PPC Land](https://ppc.land/amazon-introduces-fractional-share-of-voice-for-homepage-hero-ads/)
- So on Amazon EU stores the hero is at least partly paid retail media. Whether this full-screen hero pushes product rows below the fold on amazon.de / amazon.fr is NOT VERIFIED.

Allegro reported:
- March 2023 homepage change: page simplified, rarely clicked items moved or removed, more product carousels based on past searches and activity, more tailored inspiration, space for campaigns. Applies to desktop, mobile web and app. The article does not describe the top of page or ad labels. — REPORTED, 2023-03-02 (updated 2023-08-07), [Instalki](https://www.instalki.pl/news/internet/allegro-otrzymalo-nowa-strone-glowna-jedni-ja-pokochaja-drudzy-znienawidza/)
- October 2025 app home screen redesign: add-to-cart button next to each featured offer image, heart icon to save, Allegro Days and Black Week shown more prominently, and new video ads and a carousel of brand logos on the home screen. Rollout described as testing from early October, all users by end of October; the author had not yet seen it. — REPORTED, 2025-10-22, [Spider's Web](https://spidersweb.pl/2025/10/zmiana-w-aplikacji-allegro.html); same facts in [Android.com.pl](https://android.com.pl/tech/983909-allegro-nowa-wersja-aplikacji-zmiany/)

Cdiscount reported:
- Site redesign unveiled 24 June 2024: header cut to 7 entries plus a "Tous nos rayons" menu. The tiles that sat below the header were replaced by a single full-width carousel. New logo and warmer colours. Nothing about product rows. — REPORTED, 2024-06-24, [Clubic](https://clubic.com//actualite-530601-vous-n-allez-pas-reconnaitre-cdiscount-qui-change-presque-tout.html)
- Live fetch on 2026-10-14 returned a shell only ("Bienvenue sur Cdiscount.fr", JavaScript-disabled notice). Current layout NOT VERIFIED. — OBSERVED (limited), [Cdiscount](https://www.cdiscount.com/)

Zalando reported:
- Zalando's discovery feed "replaces the traditional home screen in the app". It is a personalised stream: product recommendations, lifestyle boards, livestream shopping, editorial campaigns. Launched in six markets the week of 6 Aug 2025. — REPORTED, 2025-08-06, [RetailDetail](https://www.retaildetail.eu/news/fashion/zalando-launches-ai-feed-after-growth-in-q2/)
- Expanded to 16 more markets (22 total) on 15 Oct 2025. Limited to select customers on iOS. Placement on the page not stated. — REPORTED, 2025-10-15, [FashionUnited](https://fashionunited.com/news/business/zalando-introduces-ai-driven-discovery-feed-in-16-more-countries/2025101568708)
- Baymard lists Zalando's mobile homepage as entry 216 of 664 in its mobile homepage benchmark. The retrieved text had no layout detail. — REPORTED, undated, [Baymard](https://baymard.com/mcommerce-usability/benchmark/mobile-page-types/homepage/19437-zalando)

Carousel research (general):
- 33% of top US and European ecommerce desktop sites in Baymard's benchmark have a homepage carousel. 46% of homepage carousels have usability issues. Baymard advises: first slide of broad appeal, avoid autorotation on mobile, static content sections work as well as a good carousel. — REPORTED, 2019-04-30, updated 2025-04-03, [Baymard](https://baymard.com/research-articles/homepage-carousel)

### Inferences
- In text order, the common EU pattern is: promo tiles or a carousel first (3 to 10 items), then a product row. Short single banner is rare. Kaufland.de and Carrefour.fr come closest.
- Fashion and home players (Zalando, Otto, Etsy, Leroy Merlin) lead with editorial or category content. Their first product row may sit below the first screen or not exist on the logged-out homepage.
- bol shows the most tiles before products (about 10 banners + ad block + service block), so its product row is likely below a 1080 px fold. This is an inference from order only. NOT VERIFIED.
- Amazon hero ad packages sold as "full-screen" suggest a tall hero on EU Amazon during paid days. NOT VERIFIED on live pages.

### Gaps
- No pixel or percent-of-screen data for any site. No screenshot or archive access.
- amazon.de, amazon.fr, allegro.pl, cdiscount.com live first screens: not obtained.
- Mobile (390x844) first screens: not obtained for any site. Fetch returns one DOM order for the desktop-style page.
- Darty, Mobbin, Page Flows, Muzli, Marketplace Pulse, Digital Commerce 360 teardowns: not searched or not found within the call budget.
- Otto voucher tiles marked expired may be a capture artefact. Not checked.

## Key question 2: How much of the first screen is ads or promo versus product listings?

### Takeaway
No source gives a share. In text order, promo or editorial blocks outnumber product tiles before the first product row on bol (about 10 banners), eBay.de (4 tiles plus 25 Live tiles), Leroy Merlin, Otto, Zalando and Etsy. Percentages are NOT VERIFIED.

### Cited Findings
- bol: about 10 promo banners and 1 ad block precede a 6-product "Trending nu" row. — OBSERVED (text), 2026-10-14, [bol](https://www.bol.com/nl/nl/)
- eBay.de: 4 promo tiles, 25 eBay Live tiles, 2 more promo blocks, then a 15-product "Deals des Tages" list. — OBSERVED (text), 2026-10-14, [eBay.de](https://www.ebay.de/)
- Kaufland.de: 3 Online-Deals banners, 3 more banners (leaflet teaser and two promos), then the product tiles. — OBSERVED (text), 2026-10-14, [Kaufland](https://www.kaufland.de/)
- Carrefour.fr: 1 hero, 2 entry blocks, 4 to 5 promo tiles, then 5 products. — OBSERVED (text), 2026-10-14, [Carrefour](https://www.carrefour.fr/)
- Zalando.de: 1 carousel (7 images) and no products in the captured text. — OBSERVED (text), 2026-10-14, [Zalando](https://www.zalando.de/)
- Allegro Oct 2025 app: home screen adds video ads and brand-logo carousel, so ad share on mobile app home rose. — REPORTED, 2025-10-22, [Spider's Web](https://spidersweb.pl/2025/10/zmiana-w-aplikacji-allegro.html)

### Inferences
- Promo count before products is the best proxy available. It is not a screen share.

### Gaps
- Real pixel share needs rendered screenshots at 1920x1080 and 390x844. Not possible in this environment.

## Key question 3: Are banners own promos or paid retail media, and are they labelled?

### Takeaway
Labels seen on live pages: "Advertentie" (bol, ad block), "Gesponsert" (Kaufland, above Online-Deals banners), "Sponsorisé" (Leroy Merlin, one Kärcher offer). Most other banners carry no label in the captured text, so they read as own promos. No "Sponsorowane" label was observed because Allegro was not fetched.

### Cited Findings
- bol: one ad block (Ring) marked "Advertentie". The other banners have no label and look like own campaigns (Gaming Weeks, Halloween, deal tiles). The "Trending nu" product row has no "Gesponsord" label. — OBSERVED (text), 2026-10-14, [bol](https://www.bol.com/nl/nl/)
- Kaufland.de: "Gesponsert" appears above the Online-Deals banners. "Anzeige" is not used. Product tiles carry no sponsor label. — OBSERVED (text), 2026-10-14, [Kaufland](https://www.kaufland.de/)
- Leroy Merlin FR: one "Sponsorisé" offer (Kärcher) with a "Pourquoi cette publicité ?" explainer. — OBSERVED (text), 2026-10-14, [Leroy Merlin](https://www.leroymerlin.fr/)
- eBay.de, Otto, Zalando, Etsy DE, Carrefour, Vinted, Fnac: no sponsor label found in the captured text. Absence in text is not proof of no ads. — OBSERVED (text), 2026-10-14, see sources in the table above.
- Amazon sells homepage hero placements as paid share-of-voice slots in DE, FR, ES, IT, UK. The vendor page does not state the label. — REPORTED, 2025-11-12, [Amazon Ads](https://advertising.amazon.com/resources/whats-new/homepage-hero-placements-on-the-amazon-store-unboxed-2025)
- EU law: DSA Article 26(1) requires that a platform user can identify in real time, clearly, that content is an advertisement, via prominent markings, who it is for, who paid, and the main targeting parameters. — REPORTED (law text), [Springlex, Art. 26 DSA](https://www.springlex.eu/en/packages/dsa/dsa-regulation/article-26/)

### Inferences
- The Leroy Merlin "Pourquoi cette publicité ?" window fits the DSA 26(1)(d) targeting-information duty. This is a reading of two sources, not a statement by either.
- Own-brand promo banners (shipping offers, seasonal events) are not "ads" under the DSA if no third party pays. Not legally checked here.

### Gaps
- Allegro ("Sponsorowane"), Amazon ("Gesponsert", "Sponsorisé"), Cdiscount ("Sponsorisé") labels on the homepage: not verified.
- No article found that audits retail media labels on EU marketplace homepages.

## Key question 4: Has any marketplace moved toward more products above the fold in 2023 to 2026?

### Takeaway
No source shows a move toward more products above the fold. Reported changes go toward personalised feeds (Zalando app, Allegro, Amazon US test) and toward more ads and campaign space (Allegro app, Amazon hero). Cdiscount went from tiles to one carousel.

### Cited Findings
- Allegro, March 2023: simpler page, more product carousels from user history, space for campaigns. — REPORTED, 2023-03-02, [Instalki](https://www.instalki.pl/news/internet/allegro-otrzymalo-nowa-strone-glowna-jedni-ja-pokochaja-drudzy-znienawidza/)
- Cdiscount, 24 June 2024: tiles under the header replaced by one full-width carousel. — REPORTED, [Clubic](https://clubic.com//actualite-530601-vous-n-allez-pas-reconnaitre-cdiscount-qui-change-presque-tout.html)
- Amazon US app, 22 Oct 2024: Window Display at top, then topic rows, Buy Again hub. US only. — REPORTED, [Amazon About](https://www.aboutamazon.com/news/retail/amazon-homepage-redesign-features)
- Zalando app, Aug 2025: discovery feed replaces the home screen. Oct 2025: 22 markets. — REPORTED, [RetailDetail](https://www.retaildetail.eu/news/fashion/zalando-launches-ai-feed-after-growth-in-q2/), [FashionUnited](https://fashionunited.com/news/business/zalando-introduces-ai-driven-discovery-feed-in-16-more-countries/2025101568708)
- Amazon hero placements, Nov 2025: full-screen reel-style hero for DE, FR and other markets. — REPORTED, [Amazon Ads](https://advertising.amazon.com/resources/whats-new/homepage-hero-placements-on-the-amazon-store-unboxed-2025)
- Allegro app, Oct 2025: add-to-cart on home screen offers (one tap instead of two), video ads, brand logo carousel. — REPORTED, [Spider's Web](https://spidersweb.pl/2025/10/zmiana-w-aplikacji-allegro.html)
- bol redesign: an Emerce page titled "bol geeft winkel nieuw design: meer ruimte, inspiratie, beleving" exists in search results but the fetch failed. Date and content NOT VERIFIED. — [Emerce](https://www.emerce.nl/wire/bolcom-geeft-winkel-nieuw-designmeer-ruimte-inspiratie-beleving)

### Inferences
- Allegro app (add-to-cart on offer cards) and Zalando feed (product recommendations first) push products higher on mobile app home. Amazon hero and Allegro video ads push ad content higher.
- Trend: products first via personalisation in apps; paid heroes on web at peak events.

### Gaps
- Fetch failed for bol redesign, Marketplace Pulse, Digital Commerce 360, Ecommerce News Europe articles. Not searched in depth.
- No redesign news found for Otto, Kaufland, Fnac, Darty, Leroy Merlin, Carrefour marketplace.

## Key question 5: Desktop vs mobile first screens

### Takeaway
No verified desktop vs mobile first-screen data. Only app-level reports exist, and they show mobile apps lead with personalised content or ads.

### Cited Findings
- Zalando app home = personalised discovery feed (product recommendations, lifestyle boards, livestreams, editorial). — REPORTED, 2025-08-06, [RetailDetail](https://www.retaildetail.eu/news/fashion/zalando-launches-ai-feed-after-growth-in-q2/)
- Amazon hero ads are sold as one reel-style format "across all devices (desktop, mobile, tablet)". — REPORTED, 2025-11-12, [PPC Land](https://ppc.land/amazon-introduces-fractional-share-of-voice-for-homepage-hero-ads/)
- Baymard advises against autorotation on mobile and in favour of static homepage sections. — REPORTED, 2025-04-03 update, [Baymard](https://baymard.com/research-articles/homepage-carousel)
- Allegro's March 2023 change applied to desktop, mobile site and app together. — REPORTED, [Instalki](https://www.instalki.pl/news/internet/allegro-otrzymalo-nowa-strone-glowna-jedni-ja-pokochaja-drudzy-znienawidza/)

### Inferences
- On mobile, a 390x844 view fits roughly one header, one search bar and one banner. Not sourced. Treat as a hypothesis to test with real screenshots.

### Gaps
- 390x844 first-screen descriptions for all 14 sites: NOT VERIFIED. Needs a browser with EU network access.
- Baymard mobile homepage benchmark pages (Zalando, Amazon, others) likely hold annotated screenshots. Not retrieved.


## Change log

| Date | What changed | By |
|---|---|---|
| 2026-10-14 | Created raw research note | Claude |
