# B2B and wholesale marketplaces: top-of-page layout (banner strip, then product rows near the fold)

Checked 14 Oct 2026. Scope: EU and French market first. Written for the KingoMart storefront.

## How facts were gathered (read first)

- OBSERVED = I loaded the live page in a real Chrome browser on 14 Oct 2026, logged out, and read a screenshot or the page DOM.
- REPORTED = text from a page fetch, a trade article, or a help page. I did not see the layout myself.
- NOT VERIFIED = I could not check it.
- Browser limits you must know:
  - Window was set to 1920x1080. The page viewport was 1864x949 CSS px (browser frame takes the rest). "Fold" below means 949 px, unless I say 1080.
  - Exact px values from the DOM are marked (DOM). Values read off a screenshot are marked (est.) and are +/- 20 px.
  - The browser location was the UAE (Faire page title "Faire United Arab Emirates", Alibaba "Deliver to AE", Amazon "Deliver to United Arab Emirates"). Some sites showed English text and AED prices. French visitors may see small differences.
  - MOBILE (390x844) NOT VERIFIED for every site. Resizing the window to 390 px did not change the viewport (it stayed 1864 px). No mobile data in this note.
  - Cookie banners: I rejected them on Amazon.fr and Sligro. I left them on Conrad, Transgourmet and others (they hid some parts).
  - Not logged in anywhere. I did not sign up or fill any form.
- Page URL checked is given in each row. All dates are 14 Oct 2026 unless noted.

## 1. Does the pattern hold in B2B? Where do product cards start relative to the fold?

### Takeaway
The pattern (thin strip, short banner, product row near the fold) holds clearly on 2 of 11 reviewed storefronts: METRO marketplace and Transgourmet France. It holds on search result pages of Alibaba and Amazon. It does not hold on the home pages of Ankorstore, Faire, Alibaba, Amazon Business, Bidfood, FoodServiceDirect and Unite (ex Mercateo). Those pages use a big sign-up hero or big tiles, and put products below the fold. Faire and Ankorstore push sign-up, not products.

### Cited Findings

#### Summary table (desktop, logged out, 14 Oct 2026)

| Site and page | First screen, top to bottom | Banner height, count, type | First product row starts (px) | Price logged out | Min order or pack on card | Verdict |
|---|---|---|---|---|---|---|
| METRO France marketplace home | Blue header 64 px, search row, category nav 44 px (128 to 172), carousel, thin strip, "Offres actuelles" | About 316 px (est.), about 5 slides with peek of next slide, carousel, mixed: seller ad with "Sponsorisé" label plus METRO own promo | Card top 636 px (DOM). Card is 326 px tall, so bottom is 962 px. Cut by 13 px at 949, fully visible at 1080 | Visible. Example 114,40 EUR, strike price, -20%. "PVC" (recommended retail price) shown. VAT toggle, default excl. VAT | Not on card. Shows "Série" tag, "Plus d'options disponibles" | HOLDS |
| Ankorstore home | Top strip, header with search, category nav, big hero, then "30,000 brands. 300,000 retailers" block, then brand tiles | Strip about 36 px (est.). Hero about 600 px (est.), 1 static hero, own onboarding message | Brand tiles, not products, start below 1000 px (est.). First product row not seen on home | Not shown on home. Category page: locked | Not on home. Strip says min order 100 EUR (REPORTED) | DOES NOT HOLD |
| Ankorstore category (Food & Drinks) | Strip, header, category nav, breadcrumb, H1, one-line intro, subcategory tiles, filter row, product grid | No banner. First grid slot is an own promo tile ("Ankorstore Days") | About 614 px (est.). First cards fully inside fold | Locked. Card shows lock icon and "See the wholesale price" plus MSRP (example MSRP 3.79 EUR) | No minimum or pack size on card. Badges: "-5%", "Brand's bestseller", "Proven Success" | PARTLY (no banner, products near fold, but a promo tile sits in the grid) |
| Faire home | Top strip, header with search, category nav, full-width hero, then "Featured brands" | Strip about 40 px (est.). Hero about 700 px (est.), 1 static hero, own sign-up message. A sign-up modal "Unlock wholesale pricing" opened when I scrolled (URL gained ?signUp=auto) | Brand tiles (not products) start about 900 px (est.). "Bestsellers you might like" is the first product row (REPORTED by page text) and is lower | Locked ("Unlock wholesale price" on cards, REPORTED) | No amount. Page says "low or no minimums" (REPORTED) | DOES NOT HOLD |
| Alibaba.com home | Orange top strip, header with search and sign-in, AI Mode and tabs, big search block, 3 trust badges, category list plus 3 tiles plus "Hot Picks" tile, "Recommended for your business" | Strip about 40 px (est.). No hero image. Search block about 250 px (est.). Promo tiles about 300 px (est.), 1 rotating tile. Strip text "Explore popular products from select suppliers / Source now" | About 880 px (est.). Starts with a dark "Alibaba Guaranteed" banner, then cards. First card at the fold edge | Visible (REPORTED by page data: "$80", "$2.70"; no gate seen) | "MOQ: 1", "MOQ: 32", "MOQ: 100" (REPORTED) | DOES NOT HOLD |
| Alibaba search results ("snacks") | Header with search, tabs, filters left, results grid | No banner at all for this query | About 213 px (est.) | Visible, price range (example AED 0.86 to 0.97) | "Min. order: 2,000 bags" on card | HOLDS (products first) |
| Amazon.fr home (same layout on Amazon.de) | Header 60 px, nav strip, large rotating carousel of promo cards, grid of category cards | Carousel about 480 px (est.), about 6 or more slides, own promos. Slides seen: "Free delivery on your first order", Halloween, deals, autumn, Made in France | Category cards start about 600 px (est.). They are category cards with 4 small images, not single products | Not on home | Not on home | PARTLY (big carousel, then card grid) |
| Amazon.fr search ("biscuits lot professionnel") | Header, nav, result count, filter column, sponsored brand banner (Bjorg, label "Sponsored"), then results | Paid ad strip about 330 px (est.), 1 banner with 3 products | Organic cards start about 580 px (est.) | Visible | Pack size in titles (example "12 x 300 g") | HOLDS (paid strip, then products) |
| Amazon Business FR (business.amazon.fr) | Header, then headline "Optimize your business purchases", "Create a free account", photo | One static sign-up hero, own message | No product row on this page | n/a | n/a | DOES NOT HOLD (marketing page, not a catalogue) |
| Transgourmet France (transgourmet.fr) | Red promo strip, header with search and "Devenir client" button, category chip row, static hero card, "Nos meilleures ventes" row | Strip about 45 px (est.) with "-10% on your first order, code WELCOME". Chip row DOM 130 to 230. Hero 300 px (DOM, 276 to 576), 1 static card, own message (24h delivery, one truck, certified products) | Row title at 586 px, cards 586 to 887 px (DOM). Whole row inside the fold | LOCKED. Each card has a "Show price" button (French: "Afficher le prix") | Pack format on card ("250g Plate", "1 L Brick", "22 Fruits"), product code, temperature icon. No order minimum on card | HOLDS (best fit for KingoMart) |
| Sligro NL (sligro.nl) | Top links, logo, assortment button and search, USP line, tile carousel, "Ons assortiment" category grid, "Aanbiedingen" row | Tile row about 295 px (est.), about 5 tiles visible, carousel arrow, own promos (Mega Deals, free appetiser, Oktoberfest, wine club) | Offer cards well below fold, about 1000 px or more (est.) | Visible on offer cards (example 7,49 EUR with old price 14,99) | Pack on card ("Doos 800 g", "Pak 24 rollen", "Per stuk") | PARTLY |
| Bidfood UK (bidfood.co.uk) | Top links, logo and nav with "Become a customer", banner labelled "ADVERTISEMENT", welcome text, big seasonal tile | Banner about 125 px (est.), carousel with 4 dots, label "ADVERTISEMENT" | No product row on home | NOT VERIFIED (no catalogue seen) | NOT VERIFIED | DOES NOT HOLD |
| FoodServiceDirect (US) | Top strip 20 px (est.), header with search, department nav, large bento grid of brand panels | Bento grid starts about 200 px (est.) and runs past 950 px. Panels for Unilever, Kraft Heinz, Otis Spunkmeyer. Whether they are paid: NOT VERIFIED (no label seen) | Below fold | NOT VERIFIED | NOT VERIFIED | DOES NOT HOLD |
| Conrad France (conrad.fr) | Header, nav, "Featured categories" row, large promo tile, "Selected for you" row | Large promo tile about 330 px (est.). A cookie modal covered part of the page | About 860 px (est.) | NOT VERIFIED | NOT VERIFIED | PARTLY (low confidence) |
| Choco, Rekki | Marketing sites for distributors. Headlines "Accelerate your growth with AI" and "Office robots built for wholesale distributors". Demo buttons | One static hero | No catalogue | n/a | n/a | NOT APPLICABLE (no buyer storefront) |
| Mercateo | mercateo.com redirected to unite.eu/de in my browser, which showed a 404 page. Text fetch showed a procurement portal: 12 top categories, an image link to the "Unite procurement portal", brand tiles | No promo hero (REPORTED) | No product row (REPORTED) | Not shown on home. Footer says prices are net plus VAT and offer is for businesses only (REPORTED) | Not on home (REPORTED) | DOES NOT HOLD (REPORTED only) |

#### Sources for the table, by site
- METRO marketplace, OBSERVED, 14 Oct 2026: [metro.fr/marketplace](https://www.metro.fr/marketplace). Also seen in nav: "Nourriture et boissons". Section positions and the first card position are from the DOM. Later slide order changed on each load, so the slide list is a sample of 3.
  - Other sections below the first row (DOM tops): "Sélections en vedette" at 994 px, "Meilleures catégories" at 1368 px, "Vous pourriez aussi aimer" with "Sponsorisé" label at 1803 px.
  - The strip text is "Réductions jusqu'à 80%  Découvrez les meilleures offres du jour" (DOM: top 524, height 56).
  - Page text via fetch (REPORTED, same date): "Les prix sont affichés hors TVA". Same page lists headings "Offres actuelles", "Produits les plus demandés cette semaine", "Notre meilleure recommandation".
- metro.fr root: in my browser it opened the marketplace page, so I could not see a separate food shop home. METRO main food shop: NOT VERIFIED.
- Ankorstore, OBSERVED: [ankorstore.com](https://www.ankorstore.com/) and [ankorstore.com/shop/food-drinks-1262](https://www.ankorstore.com/shop/food-drinks-1262). Strip text: "LAST DAYS | Ankorstore Days: Up to 40% off thousands of brands. Shop now!". Hero text: "Discover thousands of European brands for your shop. Sign up to access wholesale prices and enjoy competitive buying terms." Button "Sign up for free". Next block: "Wholesale prices and year-round discounts", "Buy now, pay up to 90 days later, with no fees", "Low minimum order quantities and free-shipping thresholds". Header buttons: "Log in", "Register to buy", "Register to sell". Page-text fetch (REPORTED, same date) gave "min order of €100" and "pay up to 60 days later". That conflicts with the "90 days" I saw on screen. I trust the screenshot. The 60 versus 90 difference may be a different page block or an older cached text.
- Faire, OBSERVED: [faire.com](https://www.faire.com/). Strip: "Shop wholesale online from over 100,000 brands. Sign up". Hero: "Find your next bestseller / Sign up to unlock wholesale pricing with over 100,000 brands." Buttons "Sign up to buy", "Sign up to sell". Scroll modal: "Unlock wholesale pricing", business email field, Google sign-up. Cards and "Bestsellers you might like" from fetch (REPORTED, same date).
- Alibaba, OBSERVED: [alibaba.com](https://www.alibaba.com/) and [search "snacks"](https://www.alibaba.com/trade/search?SearchText=snacks). Trust badges: "Source direct", "Alibaba.com order protection", "Fast customization". Price and MOQ on home cards: REPORTED via page data fetch, same date.
- Amazon.fr and Amazon.de, OBSERVED: [amazon.fr](https://www.amazon.fr/), [amazon.de](https://www.amazon.de/), [search](https://www.amazon.fr/s?k=biscuits+lot+professionnel), [business.amazon.fr](https://business.amazon.fr/). I did not see Amazon Business price tiers or quantity discount tables (they need an account). That part is NOT VERIFIED. Amazon.de matches Amazon.fr in layout. A cookie banner on .de hid part of the page.
- Transgourmet, OBSERVED with DOM: [transgourmet.fr](https://www.transgourmet.fr/). Page also shows a discount ladder below the product row: "-3% from 600 EUR, -4% from 800 EUR, -5% from 1,000 EUR on the entire order" and "-10% first order, code WELCOME". The UI showed in English because of my location. A French visitor should see "Afficher le prix".
- Sligro, OBSERVED: [sligro.nl](https://www.sligro.nl/). Cookie choice rejected.
- Bidfood UK, FoodServiceDirect, Conrad France, Choco, Rekki, Unite: OBSERVED screenshots at [bidfood.co.uk](https://www.bidfood.co.uk/), [foodservicedirect.com](https://www.foodservicedirect.com/), [conrad.fr](https://www.conrad.fr/), [choco.com/fr](https://choco.com/fr), [rekki.com](https://www.rekki.com/), [unite.eu/de](https://www.unite.eu/de). Mercateo text: REPORTED via fetch of [mercateo.com](https://www.mercateo.com/), 14 Oct 2026.

#### Sites I could not check
- ManoMano Pro: bot check page (Cloudflare "Performing security verification") on [manomano.fr](https://www.manomano.fr/). I did not bypass it. NOT VERIFIED.
- Cdiscount Pro: [cdiscount.com/pro/](https://www.cdiscount.com/pro/) gave a 404 page. NOT VERIFIED.
- Wurth, Selecta, Metro Cash and Carry web shops in other countries, Sysco, Eurocash, Eurofish, TrendyOne and other Algerian or Maghreb import marketplaces: not checked. A French-language search for Algerian B2B food marketplaces returned no relevant storefront ([search 14 Oct 2026](https://algeriatech.news/b2b-marketplace-industrial-procurement-algeria-2026/) was a result, not opened). NOT VERIFIED.
- Zalando: a consumer fashion shop. Its partner programme is a seller programme, not a B2B buyer storefront. Left out on purpose.
- Amazon FR fetch was blocked by robots rules ("ROBOTS_DISALLOWED"), so I used the browser.

### Inferences
- The fold line sits at about 950 px. METRO's first card starts at 636 px and Transgourmet's at 586 px. Both stay in the first screen because the strip plus banner together are under about 400 px.
- Sign-up led marketplaces (Ankorstore, Faire) spend 600 to 700 px on a hero, because their goal is to turn a visitor into a registered buyer. They show products later or lock the price.
- Distributors that sell their own stock (METRO, Transgourmet, Sligro) use a short own-promo hero and then offers. Platforms that sell other sellers' stock (Alibaba, Amazon, Faire) let sellers pay for the top slots.
- Search and category pages follow the pattern more than home pages do. Products are first, with at most one paid strip or one promo tile.

### Gaps
- Mobile first screen for every site: NOT VERIFIED (window resize did not change the viewport). Needs device emulation or a phone.
- Faire category page and Faire product card with min order: not seen (sign-up modal; fetch only gave home text).
- Metro France food shop (separate from the equipment marketplace): not seen.
- Amazon Business logged-in price tiers and quantity discounts: not seen.
- Cdiscount Pro, ManoMano Pro, Wurth, Selecta, Eurocash, Eurofish, Algerian marketplaces: not checked.
- Exact px heights for items marked (est.) can be off by about 20 px.

## 2. How is the banner used (own promo, paid supplier ad, seasonal, onboarding)?

### Takeaway
Banner use splits in three. Own distributor promos (Transgourmet, Sligro, Amazon home). Mixed own plus paid seller ads (METRO, Amazon search, Bidfood, Alibaba). Sign-up pitch (Ankorstore, Faire, Amazon Business). METRO labels paid slides "Sponsorisé".

### Cited Findings
- METRO marketplace carousel mixes a seller ad (Louis Tellier raclette, label "Sponsorisé" at bottom right) with a METRO own-product promo (Andria chairs, -20%, 76,00 EUR) and a wine fair slide ("Foire aux vins", label "Sponsorisé" visible in my capture). Own promo has no label I could read at screenshot size. OBSERVED. [metro.fr/marketplace](https://www.metro.fr/marketplace), 14 Oct 2026.
- METRO also has a lower product row labelled "Vous pourriez aussi aimer / Sponsorisé" (DOM top 1803 px). OBSERVED. [metro.fr/marketplace](https://www.metro.fr/marketplace), 14 Oct 2026.
- METRO thin strip under the carousel is an own offer pointer ("Réductions jusqu'à 80%"). OBSERVED. [metro.fr/marketplace](https://www.metro.fr/marketplace), 14 Oct 2026.
- Amazon.fr search shows a "Sponsored" brand banner with 3 products above organic results. OBSERVED. [amazon.fr search](https://www.amazon.fr/s?k=biscuits+lot+professionnel), 14 Oct 2026.
- Amazon.fr home carousel is own promos (first-order free delivery, Halloween, deals, "Made in France"). OBSERVED. [amazon.fr](https://www.amazon.fr/), 14 Oct 2026.
- Alibaba pays suppliers into keyword ad slots: 5 positions on the first desktop results page, 10 on the right of each page, top 4 at the bottom, and top 10 on the first page of app search. The page does not name a "Sponsored" label. REPORTED by Alibaba seller page (no date shown). [seller.alibaba.com/ggs/KWA.html](https://seller.alibaba.com/ggs/KWA.html)
- Alibaba home top strip is an own prompt ("Explore popular products from select suppliers / Source now"). OBSERVED. [alibaba.com](https://www.alibaba.com/), 14 Oct 2026.
- Faire promoted listings appear as product tiles in search results and category pages with a "promoted" tag. REPORTED. [Retail Brew, 12 Sep 2024](https://www.retailbrew.com/stories/2024/09/12/faire-throws-its-hat-into-the-retail-media-ring-with-first-promoted-ads) (says "mostly on search page"); [Faire help centre](https://www.faire.com/support/articles/25628842130971) (search results and category pages, beta, select brands; page shows 2024 dates).
- Ankorstore category grid has its first slot used by an own promo tile ("Ankorstore Days, up to 40% off, Shop now!"), plus a promo strip at the very top. OBSERVED. [Ankorstore Food & Drinks](https://www.ankorstore.com/shop/food-drinks-1262), 14 Oct 2026.
- Ankorstore and Faire home heroes are onboarding pitches: "Sign up to access wholesale prices" and "Sign up to unlock wholesale pricing". OBSERVED. [ankorstore.com](https://www.ankorstore.com/), [faire.com](https://www.faire.com/), 14 Oct 2026.
- Faire: a closing promo "Sign up to get 50% off your order, up to $100" (REPORTED via fetch). [faire.com](https://www.faire.com/), 14 Oct 2026.
- Transgourmet top strip is an onboarding offer: "-10% sur votre 1ère commande avec le code WELCOME, up to -5% extra". OBSERVED. [transgourmet.fr](https://www.transgourmet.fr/), 14 Oct 2026.
- Bidfood UK banner carries the word "ADVERTISEMENT". Paid by a brand: the word implies it, payer not stated. OBSERVED. [bidfood.co.uk](https://www.bidfood.co.uk/), 14 Oct 2026.
- Sligro tiles are own promos (Mega Deals, free appetiser from 125 EUR, wine club, folders). Some lower tiles show brand ads (Royal Club, Tork). Payment for those: NOT VERIFIED. OBSERVED. [sligro.nl](https://www.sligro.nl/), 14 Oct 2026.
- Amazon Business FR home is a pure "Create a free account" pitch, with a second "Contact us" button. OBSERVED. [business.amazon.fr](https://business.amazon.fr/), 14 Oct 2026.
- Seasonal themes are in use. METRO "Foire aux vins". Amazon Halloween and autumn. Bidfood "Christmas". Sligro Oktoberfest. Faire "Trending searches" Christmas and Halloween (REPORTED via fetch). All 14 Oct 2026 as above.

### Inferences
- A mixed carousel works as the ad slot. One banner area serves both own promos and paid supplier ads. KingoMart could do the same, and label paid slots.
- Onboarding strips with a first-order discount (Transgourmet, Ankorstore "shipping on us", Faire 50% off) are common for sign-up led storefronts.
- A thin strip is almost always an own offer or onboarding message. A banner of 300 to 480 px is where paid ads or heavy promos go.

### Gaps
- Paid or own status of FoodServiceDirect and Sligro brand panels: NOT VERIFIED.
- Whether METRO's own-promo slide carries a label: not readable at my screenshot size.
- METRO seller ad rates, rules, formats: I searched in French and English and found no METRO France ad product page. NOT VERIFIED.
- Ankorstore ad products: one search found no ad programme page. NOT VERIFIED.
- Banner click or conversion numbers for any marketplace: none found.

## 3. How do these sites show price and order minimums to logged-out visitors, and how do they tell buyers to sign up?

### Takeaway
Three models. Price open (METRO, Alibaba, Amazon, Sligro offers). Price locked behind sign-up or "become a customer" (Ankorstore, Faire, Transgourmet). No catalogue (Choco, Rekki, Amazon Business page). Order minimums are almost never on the card. Pack size often is.

### Cited Findings
- METRO: price open to logged-out visitors, excl. VAT by default, with a VAT toggle, a strike price, a discount badge and "PVC" retail price. No minimum order on card. OBSERVED. [metro.fr/marketplace](https://www.metro.fr/marketplace), 14 Oct 2026.
- Ankorstore: price locked. Card shows lock icon, "See the wholesale price", and MSRP. Sign-up buttons are in the header ("Register to buy", "Register to sell", "Log in") and in the hero ("Sign up for free"). OBSERVED. [Ankorstore Food & Drinks](https://www.ankorstore.com/shop/food-drinks-1262), 14 Oct 2026.
- Ankorstore home claim: "Low minimum order quantities and free-shipping thresholds". Page text gives "min order of €100". Minimum order is brand level, not shown on the card in my capture. OBSERVED and REPORTED. [ankorstore.com](https://www.ankorstore.com/), 14 Oct 2026.
- Faire: price locked ("Unlock wholesale price" on cards, REPORTED via fetch). Sign-up in strip, header ("Sign up to buy" dark button), hero, and a modal that opens on scroll ("Unlock wholesale pricing", email field and Google sign-up). OBSERVED for modal and hero. [faire.com](https://www.faire.com/), 14 Oct 2026.
- Faire minimums: "Thousands of brands with low or no minimums", no amount. REPORTED via fetch. [faire.com](https://www.faire.com/), 14 Oct 2026.
- Transgourmet: price locked. Every card has a "Show price" button (FR "Afficher le prix"). Header button "Devenir client". Card shows pack format and product code, no order minimum. The page sells a volume ladder below: -3% from 600 EUR, -4% from 800 EUR, -5% from 1,000 EUR. OBSERVED. [transgourmet.fr](https://www.transgourmet.fr/), 14 Oct 2026.
- Alibaba: price open (search results show price range and "Min. order: 2,000 bags"). Home sign-in prompts target features and recommendations. OBSERVED for search, REPORTED for home cards. [Alibaba search](https://www.alibaba.com/trade/search?SearchText=snacks), [alibaba.com](https://www.alibaba.com/), 14 Oct 2026.
- Amazon.fr: price open on search results, pack size in titles. OBSERVED. [amazon.fr search](https://www.amazon.fr/s?k=biscuits+lot+professionnel), 14 Oct 2026.
- Sligro: price open on offer cards with pack info ("Doos 800 g"). Header "Klant worden" (become a customer) and "Inloggen". OBSERVED. [sligro.nl](https://www.sligro.nl/), 14 Oct 2026.
- Unite (ex Mercateo): home has no prices. Footer says prices with an asterisk are net plus VAT and that the offer is for businesses only. REPORTED. [mercateo.com](https://www.mercateo.com/), 14 Oct 2026.
- Third-party audit of Ankorstore (not affiliated): scores the home page 51/100, rates the generic hero "Critical", says low minimums and net-60 terms are buried, and says "Retailers must submit business documentation before they can access the catalog". That last line conflicts with my observation that the Ankorstore category page shows products and MSRP to logged-out visitors (only the wholesale price is locked). The audit has no traffic or conversion data. REPORTED, dated 20 Jul 2026. [Landing Doctors](https://landingdoctors.com/de/teardowns/ankorstore-com)

### Inferences
- A locked price is normal in French and EU sign-up led wholesale (Ankorstore, Faire, Transgourmet). Each shows something instead of the price: MSRP (Ankorstore), a "Show price" button (Transgourmet), or a modal (Faire).
- This matches the KingoMart prototype decision (guest sees MSRP and a "See the wholesale price" lock). It follows Ankorstore, not METRO or Alibaba.
- Pack size on the card is the common minimum signal. A minimum order value (for example 100 EUR) lives in the strip, the hero or the cart, not on the card. Alibaba is the exception, with MOQ on every card.

### Gaps
- Faire card layout and brand minimum on a card: not seen (modal, geo).
- Amazon Business quantity discount display: not seen (needs account).
- Logged-in view for every site: out of scope.

## 4. Any published data or case study on B2B homepage layout, conversion or ad revenue?

### Takeaway
Ad revenue data exists for Faire only. I found no published conversion data on "banner then product row" layouts or on locked prices. Third-party material is old, thin or vendor written.

### Cited Findings
- Faire launched Promoted Listings in Sep 2024. More than 7,000 brands advertise. The product is "nearly 5% of Faire's revenue" per CEO Max Rhodes. Brands that advertise saw an average 80% rise in product views in search and category pages. REPORTED by [Modern Retail, 6 Feb 2025](https://www.modernretail.co/marketing/the-fastest-growing-business-weve-ever-launched-faire-adds-retargeting-capabilities-to-its-ad-business/). The 80% figure is a Faire claim, not an independent test.
- Faire pilot sellers saw an average 25% rise in new customers over the past year. REPORTED. [Retail Brew, 12 Sep 2024](https://www.retailbrew.com/stories/2024/09/12/faire-throws-its-hat-into-the-retail-media-ring-with-first-promoted-ads)
- Faire pricing: pay per click, bids based on predicted conversion, monthly cap. REPORTED. [Faire help centre](https://www.faire.com/support/articles/25628842130971) (beta page, date not shown).
- Baymard has a B2B research set: 270+ UX guidelines, 27 B2B sites benchmarked, 34 guidelines on homepage and category navigation. The public page gives counts only, not findings. REPORTED. [Baymard B2B research](https://baymard.com/research/business-to-business), opened 14 Oct 2026.
- NN/g: a 2006 article says missing prices on B2B sites was the "#1 web design mistake of 2002" and advises sample prices for typical orders. Old, and about services, not food. REPORTED. [NN/g, 9 Apr 2006](https://www.nngroup.com/articles/show-prices-for-common-scenarios/)
- Survey claim: 74% of B2B buyers want clear, detailed pricing up front. Source is a Mixology report relayed by DesignRush (article dated 31 Aug 2026). No sample size or method given. Mostly B2B tech buyers. Weak. REPORTED. [DesignRush](https://news.designrush.com/b2b-pricing-transparency)
- Retail media in general: the Retail Brew piece quotes US retail media at $38 billion in 2022, with IAB forecast $107 billion in five years. Context only. REPORTED. [Retail Brew, 12 Sep 2024](https://www.retailbrew.com/stories/2024/09/12/faire-throws-its-hat-into-the-retail-media-ring-with-first-promoted-ads)

### Inferences
- If KingoMart sells ad slots later, Faire is the one public benchmark: ads were nearly 5% of revenue about 5 months after launch. Treat as a Faire only data point.
- No public evidence says a banner or a hero raises or lowers B2B conversion. Any layout choice for KingoMart is a hypothesis to test with its own buyers.

### Gaps
- No A/B test, case study or conversion figure for banner height, strip or product-row position on a B2B marketplace.
- No conversion or sign-up data for locked versus open prices in B2B food. Vendor pages for "hide price until login" plugins appeared in search results but I did not read them and they are not evidence.
- No ad revenue data for METRO marketplace, Ankorstore, Alibaba, Amazon Business or Sligro.
- No Baymard finding text on B2B homepage or price display (paywalled; only counts public).
- Algerian and Maghreb B2B import marketplaces: nothing found.


## Change log

| Date | What changed | By |
|---|---|---|
| 2026-10-14 | Created raw research note | Claude |
