# Most marketplace homepages put marketing first

**Verdict: the assumption holds for a minority of pages.** Only 1 of 14 audited home pages passes the rule (Cdiscount), plus Transgourmet FR in the B2B note. METRO passes only at a 1080 px viewport. The pattern holds mostly on search and category pages, not on home pages.
**Most home pages lead with a tall hero, a carousel, an ad mosaic or category tiles.** No study shows that a product-first home page converts better than a promo-first one. The evidence supports three other points: show catalog range early, the top of the page gets the attention, and carousels perform weakly.

Date: 14 Oct 2026. Research, not legal advice. Tags: OBSERVED (measured live), REPORTED (from a source), NOT VERIFIED. Strength tags (STRONG, MEDIUM, WEAK) come from the notes.

## 1. Verdict

One rule is used for every site (from the live audit): **HOLDS = banner about 360 px or less AND at least 1 full product card in the first screen (950 px line).** PARTLY = a card top is inside the first screen, but no card is fully visible. NO = no card top in the first screen, or a tall hero, or tiles only.

| Assumption part | Verdict | Evidence strength |
|---|---|---|
| A short banner sits at the top | PARTLY true. 6 of 14 audited home pages have a banner of 360 px or less (METRO 320, bol 296, Allegro 350, Cdiscount 356, eBay.fr 360, Alibaba search block 360). The other hero blocks are 494 to 703 px (Amazon 494, Zalando 539, Kaufland 593, Ankorstore 600, Faire 703). | OBSERVED, one session, UAE guest view, desktop (sources in section 8) |
| A product row is in the first screen | MOSTLY FALSE on home pages. 3 of 14 show a card top before the 950 px line (METRO 636, Cdiscount 591, Allegro 803). Only Cdiscount shows a full card (8). Transgourmet FR also passes (B2B note). A short banner alone does not help: bol has a 296 px banner and its first product row starts at 1400. | OBSERVED (DOM) |
| It holds on search and category pages | TRUE where checked. Alibaba search (card at about 213 px, no banner), Amazon.fr search (paid strip about 330 px, organic about 580 px), Ankorstore category (no banner, first row about 614 px). All three are (est.), +/- 20 px, from the B2B note only. | OBSERVED (est.), single note |
| So the page favours buying over marketing | NOT SUPPORTED for home pages. Most are marketing-first. | OBSERVED |
| Big sites do this because it converts better | NO EVIDENCE. No test or case study found from Amazon, Zalando, bol, Etsy or ASOS. | Searched, none found. The closest source measures attention only ([NN/g](https://www.nngroup.com/articles/scrolling-and-attention/)) |
| What the evidence supports instead | Show catalog range early (Baymard). 57% of viewing time is above the fold (NN/g). Carousels are weak. | MEDIUM and STRONG, section 4 |

## 2. What the pages do

Legend: L = live audit (DOM, 1864x950 viewport, 14 Oct 2026, UAE guest view). B = B2B note (DOM or (est.) +/- 20 px, viewport 1864x949). T = text-order fetch only, no pixels. "Banner" means the promo block above the first product row. Prices: "visible" or "locked" for a logged-out guest.

| Site | Type | Banner height px | First product row top px | Full cards in first screen | Banner type | Sponsored label seen | Price for guests | Verdict (one rule) |
|---|---|---|---|---|---|---|---|---|
| [metro.fr/marketplace](https://www.metro.fr/marketplace) L, B | B2B marketplace | 320 | 636 | 0 at 950 (card ends 962, 12 px short). 1 at 1080 viewport | Carousel, mixed: paid seller slide plus METRO own promo | Yes, "Sponsorisé" on slide | Visible, excl. VAT, MSRP ("PVC") shown | PARTLY at 950. HOLDS at 1080 |
| [alibaba.com home](https://www.alibaba.com/) L | B2B marketplace | 360 search block plus 304 promo tiles | 910 (40 px peek) | 0 | Search hero, "Hot Picks" tiles | None found | Visible (REPORTED) | NO |
| [alibaba.com search "snacks"](https://www.alibaba.com/trade/search?SearchText=snacks) B | B2B marketplace | 0 (no banner) | about 213 (est.) | at least 1 (est.) | None | n/a | Visible, price range, "Min. order: 2,000 bags" | HOLDS (est., B only; L NOT MEASURED, CAPTCHA) |
| [amazon.fr home](https://www.amazon.fr/) L, B | B2C marketplace | 494 | no priced card on page. Category cards at 606 | 0 | Own-promo tile carousel | None found | Not on home | NO |
| [amazon.de home](https://www.amazon.de/) L | B2C marketplace | 494 | no priced card on page. Category cards at 606 | 0 | Own-promo tile carousel | None found | Not on home | NO |
| [amazon.fr search](https://www.amazon.fr/s?k=biscuits+lot+professionnel) B | B2C marketplace | about 330 (est.) | about 580 (est.) | at least 1 (est.) | Paid brand strip, 3 products | Yes, "Sponsored" | Visible, pack size in title | HOLDS (est.) |
| [zalando.fr](https://www.zalando.fr/) L | B2C marketplace | 539 | none on page top | 0 | Static hero with gender chooser | None found | No products | NO |
| [bol.com](https://www.bol.com/nl/nl/) L, T | B2C marketplace | 296 | 1400 | 0 | Static banner. T: about 10 banners plus 1 ad block before the row | "Advertentie" on an ad block at y 1056, not on the hero | Visible (T) | NO |
| [allegro.pl](https://allegro.pl/) L | B2C marketplace | 350 (+72 top ad strip) | 803 | 0 (147 px visible) | Own-promo carousel (Allegro Days) | Yes, "Sponsorowane" on top ad and product block | Not recorded | PARTLY |
| [cdiscount.com](https://www.cdiscount.com/) L | B2C marketplace | 356 (promo strip about 107 to 147 is (est.)) | 591 | 8 | Own-promo carousel | None found | Visible | HOLDS |
| [kaufland.de](https://www.kaufland.de/) L, T | B2C marketplace | 593 | 1067 | 0 | Ad and deal mosaic | Yes, "Gesponsert" | Visible (T) | NO |
| [ebay.fr](https://www.ebay.fr/) L | B2C marketplace | 360 | 1697 | 0 | Own-promo carousel (eBay Live) | None found | Visible | NO |
| [otto.de](https://www.otto.de/) L | B2C marketplace | no hero. Voucher row, then tiles 338 | 7117 | 0 | Category tiles only | None found | Visible | NO |
| [ankorstore.com home](https://www.ankorstore.com/) L, B | B2B marketplace | strip 36 plus hero 600 | none in first screens (brand tiles about 1000+) | 0 | Tall sign-up hero | None found | Locked | NO |
| [Ankorstore category](https://www.ankorstore.com/shop/food-drinks-1262) B | B2B marketplace | 0 (strip about 36 (est.)) | about 614 (est.) | first cards fully inside (count not stated) | No banner. Offer tile in first grid slot | None found | Locked, MSRP shown, "See the wholesale price" | HOLDS (est.) |
| [faire.com](https://www.faire.com/) L, B | B2B marketplace | 703 | none (brand tiles about 900 (est.)) | 0 | Full-bleed hero video, sign-up | "promoted" tag on search and category listings (REPORTED) | Locked | NO |
| [business.amazon.fr](https://business.amazon.fr/) L, B | B2B marketplace | hero fills the screen | none, marketing page | 0 | Tall sign-up hero | None found | n/a | NO |
| [transgourmet.fr](https://www.transgourmet.fr/) B | B2B wholesaler | hero 300 (DOM) plus strip about 45 (est.) | 586 (DOM) | whole row inside fold (count not stated) | Static own hero, WELCOME strip | Not recorded | Locked, "Afficher le prix". Pack format on card | HOLDS |
| [sligro.nl](https://www.sligro.nl/) B | B2B wholesaler | about 295 (est.) | about 1000+ (est.) | 0 | Own-promo tile carousel | NOT VERIFIED (brand ads lower, payment NOT VERIFIED) | Visible on offer cards | NO |
| [bidfood.co.uk](https://www.bidfood.co.uk/) B | B2B wholesaler | about 125 (est.) | no product row | 0 | Carousel, 4 dots | Yes, "ADVERTISEMENT" | NOT VERIFIED | NO |
| [foodservicedirect.com](https://www.foodservicedirect.com/) B | B2B wholesaler | bento grid from about 200 (est.) past 950 | below fold | 0 | Brand panel grid | None seen. Paid or own: NOT VERIFIED | NOT VERIFIED | NO |
| [conrad.fr](https://www.conrad.fr/) B | B2B marketplace | about 330 (est.) | about 860 (est.) | NOT VERIFIED (cookie modal) | Large promo tile | NOT VERIFIED | NOT VERIFIED | NOT VERIFIED (low confidence) |
| [unite.eu/de](https://www.unite.eu/de) (ex Mercateo) B | B2B marketplace | no hero (REPORTED) | no product row (REPORTED) | 0 | Category links, brand tiles | NOT VERIFIED | Not on home | NO (REPORTED only) |
| [carrefour.fr](https://www.carrefour.fr/) T | B2C marketplace | NOT VERIFIED. Order: 1 hero, 2 entry blocks, 4 to 5 tiles, then 5 products | NOT VERIFIED | NOT VERIFIED | Static hero | None found | Visible | NOT VERIFIED (text order: PARTLY) |
| [vinted.fr](https://www.vinted.fr/) T | B2C marketplace | NOT VERIFIED. Order: 2 sell banners, then listing row | NOT VERIFIED | NOT VERIFIED | Own sell promo | None found | Visible | NOT VERIFIED (text order: PARTLY) |
| [leroymerlin.fr](https://www.leroymerlin.fr/) T | B2C marketplace (Mirakl) | NOT VERIFIED | no product row in text | NOT VERIFIED | Banner with 5 visuals | Yes, "Sponsorisé" (Kärcher) with "Pourquoi cette publicité ?" | Not in text | NOT VERIFIED (text order: NO) |
| [etsy.com/de](https://www.etsy.com/de/) T | B2C marketplace | NOT VERIFIED. 2 banners, then tiles | no listing row in text | NOT VERIFIED | Seasonal banners | None found | Not in text | NOT VERIFIED (text order: NO) |
| [fnac.com](https://www.fnac.com/) T | B2C marketplace | NOT VERIFIED (capture incomplete) | NOT VERIFIED | NOT VERIFIED | NOT VERIFIED | None found | NOT VERIFIED | NOT VERIFIED |

Mobile (390x844, iframe emulation, not a real phone, L): METRO HOLDS (banner 183 px, row at 465, 2 full cards, "Sponsorisé" on slide). Zalando, bol, Allegro, Faire, Business Amazon, eBay.fr, Otto, Kaufland: NO. Alibaba, Cdiscount, Ankorstore, Amazon: NOT MEASURED.

Pages not checked: ManoMano Pro (bot check, [manomano.fr](https://www.manomano.fr/)), Cdiscount Pro (404, [cdiscount.com/pro](https://www.cdiscount.com/pro/)). Choco ([choco.com/fr](https://choco.com/fr)) and Rekki ([rekki.com](https://www.rekki.com/)) are distributor marketing sites with no buyer catalogue. NOT APPLICABLE.

### Patterns that appear

| Pattern | Sites (banner px) |
|---|---|
| Tall sign-up hero | Ankorstore (600), Faire (703), Business Amazon (fills screen) |
| Own-promo carousel | Amazon (494), eBay.fr (360), Allegro (350), Cdiscount (356) |
| Mixed carousel, paid and own, with label | METRO (320) |
| Ad mosaic | Kaufland (593), labelled "Gesponsert" |
| Thin strip then products | Transgourmet (hero 300), Cdiscount, METRO |
| Category tiles only | Otto (338 tiles), Amazon category cards |
| Offer tile in first grid slot | Ankorstore category |
| Sign-up locked price with substitute | Ankorstore (MSRP), Transgourmet ("Afficher le prix"), Faire (modal) |

### Conflicts between notes, and how they are resolved

| # | Conflict | Resolution |
|---|---|---|
| 1 | METRO: B2B note HOLDS, live audit PARTLY | Both measured card top at 636 and card height 326. The card is cut by 12 to 13 px at the 949 or 950 line. The single rule needs 1 FULL card. So PARTLY at 950. At a 1080 px viewport the card (ends 962) is fully visible, so HOLDS there. On mobile emulation METRO HOLDS. Banner: 316 px (est., B) against 320 px (DOM, L). Use 320. |
| 2 | Kaufland.de: text fetch HOLDS, live audit NO | Text fetch gives source order only, no pixels. It listed banners then product tiles. The measured page has a 593 px ad mosaic (175 to 768), a category row (816 to 976) and the first card at 1067. Measured result wins. The pattern needs pixels. |
| 3 | Cdiscount: eu_general NOT VERIFIED, live audit HOLDS | The text fetch returned only a JavaScript shell. The live audit measured 356 px banner, row at 591, 8 cards. Use live audit. The strip height (107 to 147) is (est.) from a screenshot. A 2024 report says tiles were replaced by one full-width carousel ([Clubic](https://clubic.com//actualite-530601-vous-n-allez-pas-reconnaitre-cdiscount-qui-change-presque-tout.html), REPORTED). |
| 4 | Your metro.fr screenshot shows cards at about y=720. The audit measured 636 | The 84 to 85 px gap fits the browser tab bar and toolbar in a screen-based screenshot of a 1920x1080 screen. Use DOM values. |
| 5 | Amazon home: B2B note PARTLY, live audit NO | Live audit: carousel 494 px (DOM), no priced card on the whole page. The B2B "cards at about 600" are category cards. Rule gives NO. |
| 6 | Sligro: B2B note PARTLY. Ankorstore category: B2B note PARTLY | The single rule decides. Sligro has no card before about 1000 px: NO. Ankorstore category has no banner and full cards inside the fold: HOLDS, with an offer tile in grid slot 1. |
| 7 | Alibaba first priced card: 910 (DOM, L) against about 880 (est., B) | Use 910. The audit counts "3 of 14 with a card top in the first screen". By raw geometry Alibaba (910, 40 px peek) is a fourth. The audit marks it NO because the search block and tiles take about 664 px. |

### Alibaba: three separate observations

| Observation | Source | Status |
|---|---|---|
| Home page: no cards in first screen, first priced cards at 910 | [alibaba.com](https://www.alibaba.com/), live audit | OBSERVED (DOM) |
| Search "snacks": card at about 213 px, no banner, price range and MOQ on card | [Alibaba search](https://www.alibaba.com/trade/search?SearchText=snacks), B2B note | OBSERVED (est.). The live audit hit a CAPTCHA on the same query and measured nothing. The two notes disagree on whether the page loaded. Not resolved. |
| Home page scrolled down (your 3rd screenshot, 12:01, search box shows "cars") | Your own screenshot. Not in the notes. It is the home page, not a search result page. The sticky header and two promo tiles ("First order deal", "Alibaba Guaranteed", about 360 px tall) sit above the first product grid | OBSERVED (screenshot). It agrees with the live audit: on the home page, product cards come after the promo tiles, below the first screen. Earlier briefs to the research agents wrongly called this a search page. Corrected here |

## 3. Why the banner is at the top

Sellers pay for top slots, so the top of the page earns money. No marketplace publishes the share that comes from home page or top-of-page banners. Sponsored product ads on search drive most of the money.

| Marketplace | Figure | Status and URL |
|---|---|---|
| Amazon | Ads $56.22B in 2024, $68.63B in 2025 (+22%), Q1 2026 $17.24B (+24%). About 9.6% of 2025 net sales. Includes Prime Video and DSP, not only on-site slots | REPORTED. [Marketplace Pulse](https://www.marketplacepulse.com/stats/amazon-advertising-services-sales), [PPC Land](https://ppc.land/amazons-69b-ad-business-gets-one-sentence-in-jassys-2025-letter/) |
| Allegro | Q2 2025 ads +30.6% year on year, 2.0% of GMV | REPORTED. [Allegro Q2 2025 results](https://about.allegro.eu/wp-content/uploads/2026/01/Results-Presentation-Q2-2025.pdf) |
| Cdiscount | H1 2026 advertising revenue +20.3% (unaudited, period not stated). Marketplace is 72% of product GMV | REPORTED. [Ecommerce Nation](https://www.ecommerce-nation.fr/cdiscount-s1-2026-rentabilite-retail-media-marketplace/) |
| Faire | Promoted Listings (launched Sep 2024): nearly 5% of revenue, more than 7,000 brands. The "80% more product views" is a Faire claim | REPORTED. [Modern Retail, 6 Feb 2025](https://www.modernretail.co/marketing/the-fastest-growing-business-weve-ever-launched-faire-adds-retargeting-capabilities-to-its-ad-business/) |
| Zalando | ZMS revenue not published. Up in the "zweistelligen" range in 2025 | REPORTED. [Textilwirtschaft](https://www.textilwirtschaft.de/fashion-management/so-sieht-die-retail-media-strategie-von-zalando-aus-84677) |
| Europe, all retail media | +22.1% in 2024 against 6.1% for all advertising. Sponsored Products is the main driver | REPORTED. [PPC Land citing IAB Europe](https://ppc.land/retail-media-surge-sponsored-products-drive-22-growth-in-european-market/) |
| Retail media, 2025 | About 80% of spend goes to retailers' own sites and apps | REPORTED. [eMarketer](https://www.emarketer.com/content/upper-limits-of-retail-media-s-on-site-monetization-coming-focus) |
| METRO, Ankorstore, Alibaba (ad split), bol (after 2021), Sligro | No ad revenue data | NOT VERIFIED |

How slots are sold:

| Slot | Pricing | Who pays | URL |
|---|---|---|---|
| Home page banner | Per 1,000 views (CPM) or monthly flat bundle. Above-the-fold hero slots rate highest | Brand or advertiser | [Hello Retail](https://helloretail.com/en/learn/retail-media-pricing/) (vendor page) |
| Amazon home hero | Share of voice 5%, 10%, 25%, 50%, 100%. DE, FR, ES, IT, UK, US | Brand | [Amazon Ads](https://advertising.amazon.com/resources/whats-new/homepage-hero-placements-on-the-amazon-store-unboxed-2025) |
| Sponsored product | Per click (CPC), keyword auction. Cdiscount sellers bid in real-time auctions | Seller | [Journal du Net](https://www.journaldunet.com/retail/1514005-six-formats-publicitaires-chez-cdiscount-lequel-choisir/) |
| Alibaba keyword ads | 5 positions on the first desktop results page. No "Sponsored" label named | Supplier | [seller.alibaba.com](https://seller.alibaba.com/ggs/KWA.html) |
| Faire promoted listing | Pay per click, bids by predicted conversion, monthly cap. Search and category pages | Brand | [Faire help centre](https://www.faire.com/support/articles/25628842130971) |

Tension between ad income and buying:

| Finding | Source |
|---|---|
| Flipkart field test (1.2M users, 8 days): in electronics, ads did worse than the organic listings they displaced and net sales were neutral. In clothing, sales rose. Short term, B2C, India | [Columbia Business School](https://business.columbia.edu/research-brief/online-marketplaces-retail-media) |
| FTC alleges Amazon accepted more irrelevant ads to raise ad revenue. Amazon denies it. An allegation, not a finding | [Retail Dive, 7 Nov 2023](https://www.retaildive.com/news/amazon-ftc-antitrust-lawsuit-defect-ads-Jeff-Bezos/698930/) |

Reading: the banner at the top is a revenue choice for platforms that sell other sellers' stock. Distributors that sell their own stock (Transgourmet, Sligro, METRO) use short own-promo heroes. This is an inference from sections 2 and 3, not a stated finding. No marketplace says its banner is a supplier funding channel.

## 4. Does it work

| Claim | Number | Sample | Year | Strength | URL |
|---|---|---|---|---|---|
| Above the fold gets 57% of viewing time. First two screens get 74% | 57%, 74%. Was 80% in 2010 | 120 people, over 130,000 fixations, 1920x1080. Not home-page-only. Attention, not buying | 2018 | STRONG | [NN/g](https://www.nngroup.com/articles/scrolling-and-attention/) |
| 100 px above the fold gets more views than 100 px below | +102% | 57,453 fixations | 2015 | MEDIUM, old | [NN/g](https://nngroup.com/articles/page-fold-manifesto) |
| Visible teasers below the fold raise scrolling | not a number | n/a | 2015 | MEDIUM, old | [NN/g](https://nngroup.com/articles/page-fold-manifesto) |
| New users judge the catalog from the home page. 22% of sites show too little range. Show at least 40% of product types (the page also says 40 to 50%) | 22%, 40% | sample not stated | 2025 update | MEDIUM | [Baymard](https://baymard.com/research-articles/e-commerce-home-page-focus) |
| Carousels: 33% of top sites have one. 46% have usability issues. Most users miss slides | 33%, 46% | sample not stated | 2025 update | MEDIUM | [Baymard](https://baymard.com/blog/homepage-carousel) |
| Carousels: first slide takes most clicks, total clicks are low | 1.07% clicked a feature, 89.1% on slide 1 | 3,755,297 visits, university sites, not shops | 2013 | MEDIUM, old | [Runyon](https://erikrunyon.com/2013/07/carousel-interaction-stats/) |
| Users scroll past large carousel images. Animated ads viewed 27% of the time. Max 5 frames | 27% | not stated | reviewed Aug 2026 | MEDIUM | [NN/g](https://www.nngroup.com/articles/designing-effective-carousels/) |
| Banner blindness: users skip ad-like items and ad-typical spots such as the top banner | not a number | Several studies, 26 people in one example | 2018 | MEDIUM | [NN/g](https://www.nngroup.com/articles/banner-blindness-old-and-new-findings/) |
| New visitors: static bestsellers beat static featured items. Personal recommendations beat static | +23.01% and +136% click-through to product pages. Not sales | Unnamed retailers, no sample | 2026 | WEAK | [Optimizely](https://www.optimizely.com/field-notes/articles/experimentation-use-cases-retail-homepage) |
| A simpler hero lifted desktop conversion | +26% | One unnamed apparel brand, 2 weeks, no sample | undated | WEAK | [Blend Commerce](https://blendcommerce.com/blogs/ab-tests-shopify/above-the-fold-homepage-optimisations) |
| B2B: 58% buy weekly or more through portals. "Nearly all" purchases start with search | 58% | 700 seller-side interviews, search vendor | 2023 fieldwork | WEAK | [Algolia](https://www.algolia.com/resources/asset/report-b2b-site-search-trends-2024/) |
| B2B buyers: 61% prefer a rep-free experience. Says nothing on banners | 61% | 632 buyers | 2025 | MEDIUM | [Gartner](https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-sales-survey-finds-61-percent-of-b2b-buyers-prefer-a-rep-free-buying-experience) |
| EU desktop screens: 1920x1080 is 30.86%. 1536x864 is 12.5%. These are screens, not viewports | 30.86%, 12.5% | not stated | Sep 2026 | MEDIUM | [StatCounter](https://gs.statcounter.com/screen-resolution-stats/desktop/europe) |

What is weak or missing:

| Gap | Status |
|---|---|
| Head-to-head test of short banner plus products against tall hero | None found |
| Marketplace that moved products up and won | None found. Reported moves go to personal feeds (Zalando app, Allegro app) and to more ads (Allegro app video ads, Amazon hero). [Spider's Web](https://spidersweb.pl/2025/10/zmiana-w-aplikacji-allegro.html), [Amazon Ads](https://advertising.amazon.com/resources/whats-new/homepage-hero-placements-on-the-amazon-store-unboxed-2025) |
| Thin announcement bar noticed or not | No reliable data. A vendor claim of "72% notice the bar" could not be traced. Not used |
| B2B search-first and reorder-led behaviour | Hypothesis. Only seller surveys |
| Locked price against open price in B2B food | No conversion data |
| Inference | A bar with task-relevant facts (delivery, access, minimum) is more likely read than a decorative one. Follows NN/g "task relevance". No test confirms it |

## 5. EU and French rules for banners and sponsored items

Research, not legal advice. "Applies" is for a B2B-only French storefront that shows the catalog to guests and sells to approved businesses. Primary text of the DSA was not readable on EUR-Lex (recitals only). DSA article text comes from mirrors. Legifrance pages did not load.

| Rule | Applies | Source | Status |
|---|---|---|---|
| DSA Art 26(1): mark an ad as an ad, name who it is for and who paid, give main targeting parameters | Yes, if KingoMart is an "online platform" and not micro or small. Text says "recipients of the service", not consumers | [Springlex Art 26](https://www.springlex.eu/en/packages/dsa/dsa-regulation/article-26/) | Secondary (mirror) |
| DSA Art 27: state main ranking parameters in terms. Give a sort-change tool where content is ranked (27(3)) | Same test as Art 26 | [eu-digital-services-act.com Art 27](https://www.eu-digital-services-act.com/Digital_Services_Act_Article_27.html) | Secondary (mirror) |
| DSA Art 19 and 29: micro and small platforms exempt from Arts 26, 27, 30 to 32 | Applies if KingoMart is micro or small. Size unknown | [Springlex Art 19](https://www.springlex.eu/en/packages/dsa/dsa-regulation/article-19/), [Art 29](https://www.springlex.eu/en/packages/dsa/dsa-regulation/article-29/) | Secondary (mirror) |
| DSA Art 3(i): "online platform" disseminates to "the public" | Unknown. A gated storefront may argue it is not public | [Springlex Art 3](https://www.springlex.eu/en/packages/dsa/dsa-regulation/article-3/) | Secondary. Art 3(r) full text NOT VERIFIED |
| DSA Art 30: trader traceability | No. Section is limited to platforms that let consumers conclude contracts. Read from the section heading, not stated outright | [Freshfields](https://www.freshfields.com/en/our-thinking/blogs/technology-quotient/dsa-decoded-9-the-dsa-and-online-marketplaces-102lx12) | Secondary |
| P2B Reg 2019/1150 Art 5, 7: ranking disclosure | No. Business users must offer to consumers | [EUR-Lex P2B](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32019R1150) | VERIFIED primary |
| UCPD Annex I 11a, Art 7(4a): disclose paid search placement | No. Consumer directive | [EUR-Lex 2019/2161](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32019L2161) | VERIFIED primary |
| 30-day lowest prior price (Dir 98/6 Art 6a) | No. Consumer price rule | [EUR-Lex 2019/2161](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32019L2161), [economie.gouv.fr](https://www.economie.gouv.fr/entreprises/professionnels-quelles-sont-vos-obligations-en-matiere-daffichage-des-prix) | Primary (EU), secondary (FR) |
| French Code de la consommation L111-7, D111-7, L121-4: ranking and paid influence | No. Duty owed to consumers | [actu-juridique](https://www.actu-juridique.fr/ntic-numerique-medias-presse/les-principales-dispositions-du-decret-n-2017-1434-du-29-septembre-2017-relatif-aux-obligations-dinformation-des-operateurs-de-plates-formes-numeriques/), [INC](https://inc-conso.fr/sites/default/files/pdf/tableau-omnibus-inc-2022_0.pdf) | Secondary. Legifrance text NOT VERIFIED |
| French LCEN Art 20: ad must show its commercial nature and who it is for. A 2013 Paris court asked for terms like "publicité" or "annonce" in readable type | Unknown, probably yes. Wording is general, not shown to be consumer-only | [CMS Law](https://cms.law/fr/fra/a-la-une/les-publicites-sur-internet-doivent-elles-forcement-dire-leur-nom) | Secondary. Legifrance text NOT VERIFIED |
| French Code de commerce L441-1: CGV and price scale to a business buyer on request | Yes. B2B rule. Only "on request" found. Whether a guest must see a price list: NOT VERIFIED | [economie.gouv.fr](https://www.economie.gouv.fr/entreprises/gerer-sa-comptabilite-et-ses-demarches/conditions-generales-de-vente-entre) | Secondary |

No source fixes a mandatory word such as "Sponsorisé". DSA says "prominent markings".

Questions for counsel:
1. Is a gated B2B storefront an "online platform" that disseminates to "the public" (DSA Art 3(i))?
2. Is KingoMart micro or small (Art 19)? If yes, which labels remain best practice?
3. Does LCEN Art 20 bind a B2B ad? Which word: "Sponsorisé" or "Publicité"?
4. Does an own-offer banner need a label?
5. Does a "was/now" price on a B2B card risk a misleading-claim argument under general French commercial law? (Not researched.)
6. Must a guest see the price scale (L441-1) while the wholesale price is locked?

## 6. What this means for KingoMart

Existing decisions stay: guest sees MSRP and "See the wholesale price", product grids start with an offer tile, Deals has no fake timers and no invented discounts, sample-data labels stay. Strength is the weakest link of the evidence cited. HYPOTHESIS means test with approved buyers.

| # | Design rule | Evidence | Strength |
|---|---|---|---|
| 1 | **Home: one banner of 320 px or less. Product row top at 620 px or less, so one full card fits in 950 px.** Arithmetic: 950 minus METRO card height 326 = 624. Add a half-visible card as a scroll cue on small screens (about 730 px at 1536x864, WEAK estimate). | METRO 320 / 636, Cdiscount 356 / 591, Transgourmet 300 / 586 (section 2). NN/g 57% above fold, 74% in two screens, teasers raise scrolling (section 4) | Layout facts OBSERVED. Effect on buying: HYPOTHESIS |
| 2 | **Banner is static, one slot, no auto-rotate.** Rotating slides only if needed, 5 frames or fewer. | Baymard: most users miss slides, 46% have faults. NN/g: users scroll past. Runyon: slide 1 takes 89.1% of clicks | MEDIUM |
| 3 | **Put "request access" in the header button and a thin strip (about 45 px), not in a tall hero.** Ankorstore (600 px) and Faire (703 px) spend the first screen on sign-up and show no product. | Transgourmet: "Devenir client" in header, WELCOME strip, no sign-up hero (section 2). Landing page effect on sign-ups: no data | OBSERVED layout. HYPOTHESIS for sign-up rate |
| 4 | **Show catalog range in the first screen with one category chip row (about 100 px).** Then the product row. | Transgourmet chip row 130 to 230 (DOM). Baymard: show at least 40% of product types, users who do not see their type may assume it is not sold | MEDIUM |
| 5 | **Category screen: product grid first, no banner, offer tile in grid slot 1 (existing decision). Add a visible sort control and a search box.** Label the tile as KingoMart's own, for example "Offre KingoMart" (design choice, not a legal rule). | Ankorstore category: no banner, row at about 614 (est.), promo tile in slot 1. Alibaba and Amazon search: products first. DSA Art 27(3) asks for a sort tool where content is ranked, if in scope. B2B search-first: WEAK | Layout OBSERVED (est.). Search-first: HYPOTHESIS |
| 6 | **Keep the guest price lock with MSRP. Show pack format on the card. Put order minimum in the strip or cart, not on the card.** | Ankorstore (MSRP plus lock), Transgourmet (pack format "1 L Brick", "Afficher le prix"), Sligro and Amazon (pack on card). Minimum is almost never on the card; Alibaba shows MOQ on every card. METRO shows open prices. No data on locked against open price | OBSERVED practice. Conversion effect: HYPOTHESIS |
| 7 | **Label any supplier-paid banner or card "Sponsorisé", with advertiser name, payer name if different, and a "why this ad" link. Label KingoMart's own promo as own.** Add "paid placement" to the ranking terms if used. | METRO "Sponsorisé", Leroy Merlin "Pourquoi cette publicité ?", Kaufland "Gesponsert", Allegro "Sponsorowane". DSA Art 26(1), LCEN Art 20 (section 5) | Practice OBSERVED. Legal duty: ask counsel |

Not supported by evidence, so not added: sticky or thin banners as a conversion lever, countdown timers, a hero video.

## 7. Gaps and next checks

| Not measured or not known | How to close |
|---|---|
| Mobile on real devices. All mobile figures are 390x844 iframe emulation. Alibaba, Cdiscount, Ankorstore, Amazon mobile NOT MEASURED | Real phone or a device lab. Record banner height and first card row |
| EU network location. All audits ran from the UAE as a guest. Banner and rows may differ in FR, DE, PL, NL | Repeat from a French network |
| Logged-in view and returning buyers | Use test buyer accounts. Needs sign-up |
| Amazon DE and FR product rows. No priced card found on the logged-out home page | Check a French network and a logged-in view |
| Allegro. Measured on desktop from the UAE only. Mobile top ad was cut to a 17 px sliver in emulation. App and Polish view NOT VERIFIED | Repeat from Poland on a real phone |
| Fnac (capture incomplete), Darty, Choco, Rekki, ManoMano Pro (bot check), Cdiscount Pro (404) | Retry with a browser from France. Choco and Rekki have no buyer catalogue |
| Alibaba search "snacks" (CAPTCHA). No Alibaba search result page was measured by the live audit | Measure a real search result page in DOM by hand |
| Viewport sizes. The audit viewport was 1864x950. 1536x864 is 12.5% of EU desktop screens | Re-measure at 1536x864 and 1366x768 |
| Whether a product-first home converts better for KingoMart buyers | Test with approved buyers: product-first against promo-first, same offers. Measure first click, time to first product, sign-up and order rate |
| Share of ad revenue from banners by placement | No marketplace publishes it. Cannot close from outside |
| Faire card and minimum order, Sligro and Foodservicedirect paid or own status, METRO own-promo label | Needs sign-in or a closer screenshot |
| Legal points in section 5 | Counsel. Read Legifrance and DSA text on EUR-Lex |

## 8. Sources

**Live audit (14 Oct 2026)**
[metro.fr/marketplace](https://www.metro.fr/marketplace), [alibaba.com](https://www.alibaba.com/), [Alibaba search](https://www.alibaba.com/trade/search), [Alibaba showroom](https://www.alibaba.com/showroom/snacks.html), [amazon.fr](https://www.amazon.fr/), [amazon.de](https://www.amazon.de/), [zalando.fr](https://www.zalando.fr/), [bol.com/nl/nl](https://www.bol.com/nl/nl/), [allegro.pl](https://allegro.pl/), [cdiscount.com](https://www.cdiscount.com/), [ankorstore.com](https://www.ankorstore.com/), [faire.com](https://www.faire.com/), [business.amazon.fr](https://business.amazon.fr/), [ebay.fr](https://www.ebay.fr/), [otto.de](https://www.otto.de/), [kaufland.de](https://www.kaufland.de/)

**B2B marketplaces**
[Ankorstore Food & Drinks](https://www.ankorstore.com/shop/food-drinks-1262), [Alibaba search "snacks"](https://www.alibaba.com/trade/search?SearchText=snacks), [Amazon.fr search](https://www.amazon.fr/s?k=biscuits+lot+professionnel), [transgourmet.fr](https://www.transgourmet.fr/), [sligro.nl](https://www.sligro.nl/), [bidfood.co.uk](https://www.bidfood.co.uk/), [foodservicedirect.com](https://www.foodservicedirect.com/), [conrad.fr](https://www.conrad.fr/), [choco.com/fr](https://choco.com/fr), [rekki.com](https://www.rekki.com/), [unite.eu/de](https://www.unite.eu/de), [manomano.fr](https://www.manomano.fr/), [cdiscount.com/pro](https://www.cdiscount.com/pro/), [Alibaba keyword ads](https://seller.alibaba.com/ggs/KWA.html), [Modern Retail](https://www.modernretail.co/marketing/the-fastest-growing-business-weve-ever-launched-faire-adds-retargeting-capabilities-to-its-ad-business/), [Faire help centre](https://www.faire.com/support/articles/25628842130971)

**EU general marketplaces (text order)**
[carrefour.fr](https://www.carrefour.fr/), [vinted.fr](https://www.vinted.fr/), [leroymerlin.fr](https://www.leroymerlin.fr/), [etsy.com/de](https://www.etsy.com/de/), [fnac.com](https://www.fnac.com/), [Amazon Ads hero placements](https://advertising.amazon.com/resources/whats-new/homepage-hero-placements-on-the-amazon-store-unboxed-2025), [Spider's Web (Allegro app)](https://spidersweb.pl/2025/10/zmiana-w-aplikacji-allegro.html), [Clubic (Cdiscount redesign)](https://clubic.com//actualite-530601-vous-n-allez-pas-reconnaitre-cdiscount-qui-change-presque-tout.html)

**UX evidence**
[NN/g Scrolling and Attention](https://www.nngroup.com/articles/scrolling-and-attention/), [NN/g Page Fold Manifesto](https://nngroup.com/articles/page-fold-manifesto), [NN/g Carousel usability](https://www.nngroup.com/articles/designing-effective-carousels/), [NN/g Banner blindness](https://www.nngroup.com/articles/banner-blindness-old-and-new-findings/), [Baymard Ecommerce Homepage UX](https://baymard.com/research-articles/e-commerce-home-page-focus), [Baymard Homepage carousel](https://baymard.com/blog/homepage-carousel), [Runyon](https://erikrunyon.com/2013/07/carousel-interaction-stats/), [Optimizely](https://www.optimizely.com/field-notes/articles/experimentation-use-cases-retail-homepage), [Blend Commerce](https://blendcommerce.com/blogs/ab-tests-shopify/above-the-fold-homepage-optimisations), [Algolia](https://www.algolia.com/resources/asset/report-b2b-site-search-trends-2024/), [Gartner](https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-sales-survey-finds-61-percent-of-b2b-buyers-prefer-a-rep-free-buying-experience), [StatCounter](https://gs.statcounter.com/screen-resolution-stats/desktop/europe)

**Banner economics and EU rules**
[Marketplace Pulse](https://www.marketplacepulse.com/stats/amazon-advertising-services-sales), [PPC Land, Amazon letter](https://ppc.land/amazons-69b-ad-business-gets-one-sentence-in-jassys-2025-letter/), [PPC Land, IAB Europe](https://ppc.land/retail-media-surge-sponsored-products-drive-22-growth-in-european-market/), [Allegro Q2 2025](https://about.allegro.eu/wp-content/uploads/2026/01/Results-Presentation-Q2-2025.pdf), [Ecommerce Nation](https://www.ecommerce-nation.fr/cdiscount-s1-2026-rentabilite-retail-media-marketplace/), [Textilwirtschaft](https://www.textilwirtschaft.de/fashion-management/so-sieht-die-retail-media-strategie-von-zalando-aus-84677), [eMarketer](https://www.emarketer.com/content/upper-limits-of-retail-media-s-on-site-monetization-coming-focus), [Hello Retail](https://helloretail.com/en/learn/retail-media-pricing/), [Journal du Net](https://www.journaldunet.com/retail/1514005-six-formats-publicitaires-chez-cdiscount-lequel-choisir/), [Columbia Business School](https://business.columbia.edu/research-brief/online-marketplaces-retail-media), [Retail Dive](https://www.retaildive.com/news/amazon-ftc-antitrust-lawsuit-defect-ads-Jeff-Bezos/698930/), [Springlex Art 3](https://www.springlex.eu/en/packages/dsa/dsa-regulation/article-3/), [Art 19](https://www.springlex.eu/en/packages/dsa/dsa-regulation/article-19/), [Art 26](https://www.springlex.eu/en/packages/dsa/dsa-regulation/article-26/), [Art 29](https://www.springlex.eu/en/packages/dsa/dsa-regulation/article-29/), [eu-digital-services-act.com Art 27](https://www.eu-digital-services-act.com/Digital_Services_Act_Article_27.html), [Freshfields](https://www.freshfields.com/en/our-thinking/blogs/technology-quotient/dsa-decoded-9-the-dsa-and-online-marketplaces-102lx12), [EUR-Lex 2019/1150](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32019R1150), [EUR-Lex 2019/2161](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32019L2161), [actu-juridique](https://www.actu-juridique.fr/ntic-numerique-medias-presse/les-principales-dispositions-du-decret-n-2017-1434-du-29-septembre-2017-relatif-aux-obligations-dinformation-des-operateurs-de-plates-formes-numeriques/), [INC Omnibus table](https://inc-conso.fr/sites/default/files/pdf/tableau-omnibus-inc-2022_0.pdf), [CMS Law](https://cms.law/fr/fra/a-la-une/les-publicites-sur-internet-doivent-elles-forcement-dire-leur-nom), [economie.gouv.fr, CGV](https://www.economie.gouv.fr/entreprises/gerer-sa-comptabilite-et-ses-demarches/conditions-generales-de-vente-entre), [economie.gouv.fr, prices](https://www.economie.gouv.fr/entreprises/professionnels-quelles-sont-vos-obligations-en-matiere-daffichage-des-prix)

## 9. Change log

| Date | What changed | By |
|---|---|---|
| 2026-10-14 | Created report | Claude |
