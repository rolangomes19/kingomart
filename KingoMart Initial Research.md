# KingoMart: Initial Research

Oct 12, 2026 · @Rolan

## Summary

KingoMart General Trading L.L.C. runs a price-gated B2B food and commodity marketplace from Dubai. It sells to business buyers and consolidates their orders onto shared trucks. The legal base is Dubai. The storefront, language and brand mix point to Europe as the customer market.

**Five findings**

1. **It resells.** Buyers contract with KingoMart, and supplier identities stay hidden ([Terms](https://store.kingomart.com/en/terms)).
2. **Pooled freight is the hook.** The truck banner sits directly under the department chips. Dubai's chief economist for trade puts logistics at about 20% of export cost ([India Seatrade News](https://indiaseatradenews.com/indian-fmcg-companies-exploring-dubai-as-base-for-global-expansion/)).
3. **The storefront is a gated catalogue.** 404 products in 8 departments are browsable. Prices, shipments and the cart need sign-in, and trade prices need approval.
4. **Wide catalogue, one big bet.** 69 of 404 listings are Hamoud, an Algerian drinks brand. Container lots of coffee and chili sit beside retail packs.
5. **The site is moving.** It changed between October 6 and October 12, and some of my earlier notes came from the older build.

**Confidence.** High on the legal entity and the catalogue. Low on scale, revenue and customer location, which rest on one sponsored profile and inference.

**Biggest gap.** I could not see prices, open trucks or checkout. They need an approved buyer account.

**Design angle.** Per my notes, KingoMart takes orders by phone today and wants the site to replace that call. The site is quiet where a person would reassure the buyer, so the biggest opportunity is trust and clarity from first visit to delivery. See My notes and Design opportunity.

## My notes

These notes come from my own conversations with KingoMart before joining. They are not publicly verified. Where they conflict with my inferences elsewhere in this document, they win.

**My goal.** I am interviewing for the UX and Visual Designer role in Dubai. This document shows how I research a business and where I would start designing.

| Topic | What I was told | What it changes in this research |
| --- | --- | --- |
| Customer markets | Customers are in the EU and Algiers only. Products are sourced from all over the world. | Settles the open question on UAE sales. The Dubai LLC is the legal and trading base, not a customer market. Global sourcing matches the Vietnam, Uganda, Brazil and Argentina listings. |
| How orders work today | Customers call the team. The team configures each order by hand. | Confirms a sales-assisted model, which explains price gating and account approval. It does not scale. |
| Why the storefront exists | To drive more business and move ordering away from the phone. | The storefront is the scale lever. Its job is to replace a call, not to look like a shop. |
| The trust gap | A phone call feels human and trustworthy. Ordering on a site feels robotic, and it is unclear whether the order was placed. | The Terms make this worse by design. Orders start as pending, payment is handled separately, and dates are estimates. The interface has to carry the reassurance a person used to give. |
| Design brief | Make the site cleaner, clearer and more trustworthy, so EU and Algerian buyers feel safe ordering without a call. | Three goals: clean, clear, trusted. The design opportunity section below turns them into specific fixes. |

The Design opportunity section follows the storefront teardown and turns these notes into specific fixes.

## Company snapshot

KingoMart General Trading L.L.C. is the Dubai-registered operator of the platform. Most scale claims come from one sponsored profile, so they are marked as claims.

| Item | Finding | Status |
| --- | --- | --- |
| Legal entity | KingoMart General Trading L.L.C. ([Terms](https://store.kingomart.com/en/terms)) | Verified on company pages |
| Registered address | Business Tower, Office 805, Al Barsha Road, Al Barsha First, Al Barsha, Dubai ([Terms](https://store.kingomart.com/en/terms)) | Verified on company pages |
| Contact | +971 4 834 2279 and privacy@kingomart.com in the legal pages. Footer shows info@kingomart.com, a placeholder-style number (+44 01 02 03 04 05) and hours Mon to Fri, 9am to 12pm and 2pm to 6pm ([store](https://store.kingomart.com/en)) | Mixed signals |
| Governing law | Emirate of Dubai and UAE federal law, Dubai courts ([Terms](https://store.kingomart.com/en/terms)) | Verified |
| Platform scope | Websites including store.kingomart.com, client and supplier web apps, mobile apps ([Terms](https://store.kingomart.com/en/terms)) | Verified |
| Legal pages last updated | September 21, 2026 ([Privacy](https://store.kingomart.com/en/privacy)) | Verified |
| Founder | Amine Boulghalaghe, Algerian origin, born in Beauvais, France. First company at 22 in transport and import-export ([Forbes Afrique BrandVoice](https://forbesafrique.com/amine-boulghalaghe-de-limport-export-a-lecomobilite-partagee/)) | Single sponsored source |
| Founded | 2020, as a digital marketplace for food products and raw materials ([Forbes Afrique BrandVoice](https://forbesafrique.com/amine-boulghalaghe-de-limport-export-a-lecomobilite-partagee/)) | Claim |
| Offices | Paris, Dubai, Vietnam, Brazil ([Forbes Afrique BrandVoice](https://forbesafrique.com/amine-boulghalaghe-de-limport-export-a-lecomobilite-partagee/)) | Claim |
| Catalogue | More than 500 fast-moving consumer brands ([Forbes Afrique BrandVoice](https://forbesafrique.com/amine-boulghalaghe-de-limport-export-a-lecomobilite-partagee/)) | Claim |
| Other trade lines | Livestock, and a Ugandan coffee export line described as the largest ([Forbes Afrique BrandVoice](https://forbesafrique.com/amine-boulghalaghe-de-limport-export-a-lecomobilite-partagee/)) | Claim |

The Forbes Afrique piece is labelled BrandVoice, which is paid content, and is dated August 30, 2024. It names a Dubai office but not the LLC. Linking the founder to the Dubai LLC is an inference, likely but unproven.

## Business model

KingoMart acts like a reseller and freight consolidator that runs on marketplace software. The terms make it the seller of record to the buyer. Revenue mechanics are not published.

### How an order moves

1. A buyer registers and waits for approval before trade prices appear ([login page](https://store.kingomart.com/en/login), [Terms](https://store.kingomart.com/en/terms)).
2. The buyer adds products. Minimum order quantities, unit types and transport methods can apply per product ([Terms](https://store.kingomart.com/en/terms)).
3. The order is created as pending. A contract forms only when KingoMart confirms it ([Terms](https://store.kingomart.com/en/terms)).
4. The order joins an open shared shipment with spare capacity. If none exists, KingoMart opens a new one for that route and transport method ([Terms](https://store.kingomart.com/en/terms)).
5. Payment is separate: Stripe card checkout, or bank transfer with proof that staff review ([Terms](https://store.kingomart.com/en/terms)).
6. Departure and delivery dates are estimates. Import duties and taxes fall on the buyer unless KingoMart says otherwise ([Terms](https://store.kingomart.com/en/terms)).

### Who does what

| Party | Role |
| --- | --- |
| Client (buyer) | Contracts with KingoMart, not the supplier. Supplier identities are hidden from clients ([Terms](https://store.kingomart.com/en/terms)). |
| Supplier | Registers a business and passes verification. Listing changes take effect only after KingoMart approves them ([Terms](https://store.kingomart.com/en/terms)). Uses a separate Supplier app ([Help and contact](https://store.kingomart.com/en/support)). |
| KingoMart | Seller of record. Coordinates fulfilment, consolidates shipments, controls account approval and price visibility ([Terms](https://store.kingomart.com/en/terms)). |
| Tech vendors | Stripe (cards), Resend (email), Expo (push notifications), AWS (hosting, storage), Sentry (error monitoring) ([Privacy Policy](https://store.kingomart.com/en/privacy)). |

### What the catalogue shows

I read the live catalogue in a browser on October 12, 2026, logged out.

| Signal | Observation | What it suggests |
| --- | --- | --- |
| Size | 404 products, 8 departments, 32 subcategories ([All products](https://store.kingomart.com/en/products)) | A wide generalist shell. |
| Brand depth | 69 listings match "hamoud", about 17% of the catalogue ([search](https://store.kingomart.com/en/search?q=hamoud)). Hamoud Boualem is an Algerian soft drink maker founded in 1878 and exported to Europe and North America ([Hamoud Boualem](https://hamoud-boualem.com/en/about)). | A specialist bet on Algerian drinks, which fits the "ethnic market" positioning. |
| Retail packs | Soft drinks from 24cl to 2L in glass, PET and cans. Palm, soybean and sunflower oil from 1L to 25L. Five cheese types, milk, milk powder, eggs, durum wheat ([store home](https://store.kingomart.com/en)). | Pallet-level supply to shops and wholesalers. |
| Container lots | Coffee in 40FT lots: Vietnam Robusta, Uganda Robusta, plain Robusta, two Arabicas ([search](https://store.kingomart.com/en/search?q=coffee)). Dried chili listed at 14 to 15 MT per 40FT ([search](https://store.kingomart.com/en/search?q=chili)). | Import-export deals share the catalogue. This matches the Uganda, Vietnam and Brazil links claimed in the founder profile. |
| Proteins | Nine vacuum-packed beef cuts ([search](https://store.kingomart.com/en/search?q=beef)), Argentine red shrimp, chicken breast. | Cold-chain trading. |
| Brand banner | A hero banner promotes "Kingo Meat" with premium quality, traceability and controlled logistics claims. A search for "kingo" returned no products ([search](https://store.kingomart.com/en/search?q=kingo)). | Kingo Meat looks like a campaign brand, not yet a catalogue brand. |
| Brand strip | Logos for Oasis, Ferrero, Oreo, 7Up, Arla and BB ([store home](https://store.kingomart.com/en)). | Mix of global and diaspora brands. |

### How KingoMart probably earns (hypotheses, none confirmed)

- Product margin, because it contracts with buyers and hides suppliers.
- A freight charge or margin on pooled trucks. The terms publish no fee schedule.
- Spread on commodity container lots.
- Nothing found about subscription or listing fees.

### Commitments and limits in the terms

- KingoMart may decline or cancel an order if stock is unavailable, verification is incomplete, a pricing error applies, or fraud is suspected.
- Refunds for cancelled portions go back to the original payment method where possible.
- Prices exclude taxes, duties and delivery, which are added at checkout.
- Liability for indirect loss is excluded to the extent the law allows ([Terms](https://store.kingomart.com/en/terms)).

## Storefront teardown

The storefront is a gated catalogue. Anyone can browse 404 products, but prices, shipments, the cart and orders sit behind sign-in, and trade prices also need account approval. Observed logged out on October 12, 2026 in a real browser, plus text reads of the legal pages.

### Correction to my October 6 notes

My first reads were text-only and could not see products that load after the page opens. The homepage is not empty. It carries a hero carousel, 8 department chips, ranked best sellers and dozens of product cards. I also described a placeholder phone number and a discount ladder. Those belong to an older build of the site.

### The site changed between October 6 and October 12

| Element | Older build (seen October 6, French page still serves it) | Newer build (seen October 12) |
| --- | --- | --- |
| Promo block | "Heat things up!" with up to 40 euros off per pallet, and a discount ladder from 5% to 50% with jokey French copy ([French home](https://store.kingomart.com/fr)) | Removed ([English home](https://store.kingomart.com/en)) |
| Newsletter and "Who is Kingo?" | Present, with deal-email signup | Removed |
| Footer phone | Placeholder-style +44 01 02 03 04 05 | Removed. Support page shows +971 4 834 2279 ([Help and contact](https://store.kingomart.com/en/support)) |
| Social and app-store icons | Present, links empty | Removed |
| Support hours | Mon to Fri, 9am to 12pm and 2pm to 6pm | Mon to Fri, 9am to 5pm Dubai time, closed weekends |
| Pages | Packs and Promotions links | New Help and contact page and saved addresses page. "All categories" now opens the full product list |
| Copyright | 2025 | 2026 |

Reading: the team is cleaning up the storefront in public. Treat the site as a moving target and re-check before relying on any detail here.

### Page by page

| Page | What a logged-out visitor sees | Behind sign-in |
| --- | --- | --- |
| [Home](https://store.kingomart.com/en) | Search bar ("What are you looking for?"), Sign in, EN/FR switch, Wishlist, Cart. Menu bar with All Categories, New arrivals, Best sellers. Hero carousel with banners "Stock up now!", "Order Your Bananas!" and a Kingo Meat creative ("commander votre viande"). Eight coloured department chips. A blue "Join a Truck, Ship Smarter" banner with badges Shared cost, On schedule, Track your cargo. A "Haven't you forgotten something?" strip of recently viewed items. Best sellers ranked "No. 1 Top seller" (Coca-Cola, Hamoud La Blanche, Monster Energy, Mountain Dew). A tabbed "Now on Kingomart" grid (All, New Arrivals, Best Sellers). A "Fresh picks this week" row of 12 new items, all Hamoud. A brand logo strip. | Prices on every card |
| Categories menu | Full-screen overlay labelled "Smart shopping" and "Choose what you need". Eight departments, each with its subcategory count and example chips, plus shortcuts to New Arrivals and Best Sellers. | Nothing |
| [All products](https://store.kingomart.com/en/products) | Breadcrumb, a filter list of 32 subcategories, "Sort by: Newest", "404 products", 20 cards then a "Load more" button. | Prices |
| [Search](https://store.kingomart.com/en/search?q=chili) | Results page with a product count. Results load after a short delay. "chili" gave 5, "coffee" 5, "beef" 9, "hamoud" 69, "kingo" 0 with a "No results" message and a "Discover our products" link. | Prices |
| [Product page](https://store.kingomart.com/en/product/ccd83917-67d4-4f65-91a2-9269db877569?variant=7a2194d7-0c5c-4627-88fa-be80f0bc6f18) | Breadcrumb (Home, All, Dairy products, Cheese). A product family with variant links: the cheese page lists Emmental, Cheddar, Gouda, Red and Gruyere. One generic description paragraph. "Sign in to see prices and order" with Sign in and Create an account buttons. An "Also discover" strip. | Prices, order button |
| [Shipments](https://store.kingomart.com/en/trucks) | Redirects to the login page and returns you after sign-in. | Open shipments, cost sharing, tracking |
| [Cart](https://store.kingomart.com/en/cart) | Redirects to the login page. | Cart and checkout |
| [Login](https://store.kingomart.com/en/login) | Split screen: "Sign up because the great deals are here". Two selling points: Shared transport (join a truck and split shipping) and Trade prices (appear once the account is approved). | Not applicable |
| [Register](https://store.kingomart.com/en/register) | "Client Registration". Account type Business or Personal, country, username, first and last name, email, password with live rules (8 characters, a symbol, a digit, upper and lower case, match), and a terms checkbox. No document upload on this form. | Not applicable |
| [Help and contact](https://store.kingomart.com/en/support) | Email, Dubai phone, hours, a supplier note, the Dubai office address ("Yes Business Tower, Office 805"), links to account deletion, privacy and terms. | Not applicable |
| Wishlist, Orders, Profile, Addresses | Linked from the header and footer. I did not open them. | Presumably all |

A floating chat bubble appears on every page. I did not open it.

### The buyer journey

Steps 1 to 3 are observed. Steps 4 to 6 come from the Terms and homepage copy, because I did not create an account.

1. **Browse as a guest.** Search, department chips, the categories menu and ranked best sellers all work without an account.
2. **Hit the price wall.** Every card and product page says to sign in to see prices.
3. **Register.** Pick Business or Personal, enter a country and credentials. Trade prices wait for approval.
4. **Get approved (inferred).** Staff review the account. Business buyers and suppliers may be asked for registration documents ([Privacy Policy](https://store.kingomart.com/en/privacy)).
5. **Join a truck and order (inferred).** The buyer sees open shipments, adds products and places an order that starts as pending.
6. **Pay and track (inferred).** Card via Stripe or bank transfer with proof. The banner promises cargo tracking.

### What the storefront does well

- **One funnel.** Every call to action points to sign in or create an account. A visitor cannot get a price any other way.
- **Freight gets the prime slot.** The truck banner sits directly under the department chips, above best sellers. Pooled freight is the differentiator and the page treats it that way.
- **Fast discovery.** Search, 8 colour-coded chips, a mega-menu with subcategory counts, and 32 filters let a buyer reach a product in two clicks.
- **Social proof by rank.** Best sellers carry "No. 1 Top seller" labels.
- **Variants under one family.** Sizes and flavours group under one product, so palm oil from 1L to 25L is one family.
- **Two languages.** An EN/FR switch is in the header.
- **Price gating protects margin.** Hiding prices from the public limits what competitors and suppliers can see.

### Friction and gaps

| Issue | Evidence | Why it matters |
| --- | --- | --- |
| Thin public product data | Cards show a name, variant and size. No origin, shelf life, units per pallet, certifications or minimum order. The cheese page has one generic paragraph. | Buyers cannot qualify a product before registering. |
| Two buyer types, one card design | 33cl cans sit beside 14 to 15 tonne container lots. | Pallet buyers need price per pallet. Container buyers need price per tonne, Incoterms and documents. |
| No trust signals on public pages | I saw no customer logos, reviews, certifications, sample routes or delivery times. Shipments are behind login. | A new B2B buyer is asked to register before seeing any proof. |
| Mixed languages | English site carries French banner copy ("commander votre viande"). The French page runs an older build. | Looks unfinished. |
| Account type ambiguity | Register offers Personal accounts, while the Terms call the platform business-to-business ([Terms](https://store.kingomart.com/en/terms)). | Unclear who the platform really serves. |
| Gated shipments | The trucks page redirects to login, so the core differentiator cannot be previewed. | Prospects cannot judge routes, frequency or savings. |
| Search delay | Results arrive a few seconds after the page loads. Early reads showed an empty list. | Shoppers may think a search failed. |

### What the storefront says about strategy

- It is a lead-capture and vetting funnel for a sales-assisted B2B business. Approval lets KingoMart choose who sees prices.
- Depth in one brand (69 Hamoud listings of 404) inside a generalist shell reads as a diaspora-drink specialist that also trades commodities.
- Container lots beside retail packs suggest the store doubles as a catalogue for import-export deals. This is likely, not confirmed.
- The public clean-up between October 6 and 12 suggests active iteration, possibly ahead of a wider launch.

### What I could not see

- Prices, minimum orders, open shipments, cart, checkout, order tracking and account approval time. All need an approved account.
- Mobile apps. The Terms and support page mention client and supplier apps. I found no App Store or Google Play listing, and the old footer icons linked nowhere.
- The chat bubble, wishlist, orders and profile pages.
- Any traffic, conversion or customer data.

## Design opportunity: from phone call to site order

The storefront has to do what a phone call does today: acknowledge the order, answer doubts and say what happens next. Right now the Terms make the site quiet at exactly the moment a buyer needs reassurance. That is a design problem, and it is fixable.

### What the research says

| Finding | Source | What it means for the design |
| --- | --- | --- |
| 67% of B2B buyers prefer a rep-free experience (survey of 646 buyers, August to September 2025). Confident buyers are twice as likely to report a high-quality deal. | [Gartner, Mar 9, 2026](https://www.gartner.com/en/newsroom/press-releases/2026-03-09-gartner-sales-survey-finds-67-percent-of-b2b-buyers-prefer-a-rep-free-experience) | Self-serve ordering is the direction of travel. Buyer confidence is the thing to design for. |
| Buyers still turn to a seller for tasks that need judgment, such as whether a product fits their needs. | [Gartner, Jun 25, 2025](https://gartner.com/en/newsroom/press-releases/2025-06-25-gartner-sales-survey-finds-61-percent-of-b2b-buyers-prefer-a-rep-free-buying-experience) | Keep a visible human option at decision points. Do not remove the phone, move it. |
| After ordering, users struggle to verify the purchase. Some wait on the page for minutes until the confirmation email arrives. On mobile, some do not dare close the page before the email lands. | Baymard on [order confirmation](https://baymard.com/ecommerce-design-examples/101-receipt) and [mobile](https://Baymard.com/mcommerce-usability/benchmark/mobile-page-types/receipt) | The confirmation page and email must arrive at once, say the same thing, and carry the order number. |
| Systems should always say what is going on. Predictable interactions build trust in the product and the brand. Prevent errors with a confirmation step before commitment. Use plain-language errors that suggest a fix. Speak the user's language. | [NN/g, 10 usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) | A visible order-status ladder, a review step before submit, and plain French and English copy. |
| Algerian CIB and Edahabia cards run on the domestic SATIM network. A local tech outlet reports they do not work on international platforms. | [Algeria Tech News](https://algeriatech.news/?p=2905) | Algerian buyers probably cannot pay a Dubai company by local card. Bank transfer with proof is likely their main route. This is my inference, so confirm it with KingoMart. |
| Over 85% of Algerian e-commerce transactions are still cash on delivery. | [Algeria Tech News, citing Ecommaps](https://algeriatech.news/?p=27660) | Trust in online payment is low. A payment screen has to explain itself step by step. |
| Algeria had 36.2 million internet users (76.9%) in January 2025, 54.8 million mobile connections, and a median mobile download speed of 23.42 Mbps. | [Algerie Eco summarising DataReportal](https://algerie-eco.com/?p=212478), [DataReportal](https://datareportal.com/reports/digital-2025-algeria) | Design mobile first, keep pages light, and make flows survive a weak connection. |
| The EU Accessibility Act has applied to consumer-facing e-commerce since June 28, 2025. B2B-only platforms are generally exempt. Mixed B2B and B2C platforms must assess their duties. | [Herzog Fox and Neeman](https://herzoglaw.co.il/en/news-and-insights/the-european-accessibility-act-key-considerations-for-e-commerce-providers/), [iubenda](https://www.iubenda.com/en/help/179096-eaa-compliance) | The register form offers a Personal account type, so the site may count as mixed use. Check with legal. Accessible design is good practice either way. This is not legal advice. |

### Why the phone call wins today

Each row pairs something a person does on a call with what the site shows now and a design fix.

| On a call, a person | The storefront today (observed or from the Terms) | Design fix |
| --- | --- | --- |
| Says "got it" straight away | Orders start as pending until KingoMart confirms them ([Terms](https://store.kingomart.com/en/terms)). I could not test the confirmation screen. | An "Order received" screen and email at once, with order number and what happens next. |
| Answers fit questions: minimum order, origin, can I mix products | Cards show name, variant and size only. The cheese page has one generic paragraph. | A product facts block: pack, units per pallet, minimum order, origin, shelf life. An "Ask about this product" link to a named person. |
| Quotes price and freight together | Prices are gated. Freight lives in a separate truck concept. | One landed estimate (goods plus freight), labelled as an estimate, with the buyer's pallet share of the truck. |
| Confirms stock and a date | Dates are estimates. The truck banner promises "On schedule". | Truck cards that show how full the truck is, an estimated departure window, and what happens if it does not fill. |
| Checks the address and who pays duties | Duties and taxes fall on the buyer unless stated otherwise. | A review step before submit that states address, duties and taxes in plain words. |
| Explains how to pay | Card via Stripe or bank transfer with proof. No steps are public. | A payment page with bank details and a copy button, a proof upload, and a status such as "under review". KingoMart should supply the usual review time. |
| Is a person you can name | Support is email and phone, Monday to Friday, 9am to 5pm Dubai time ([Help and contact](https://store.kingomart.com/en/support)). | A named contact on every order. Show support hours in the buyer's own time. 9am to 5pm in Dubai is about 6am to 2pm in Algeria, so Algerian afternoons and evenings have no cover. |
| Remembers the customer | A recently-viewed strip and a wishlist. I did not see the orders page. | Reorder from a past order and saved order templates. This is the real scale lever for repeat buyers. |
| Handles the wait for approval | Trade prices appear only after account approval ([login page](https://store.kingomart.com/en/login)). | An account-status tracker ("under review") with an expected time and a contact. This is another silent waiting state. |

### The order ladder

The diagram below is a proposal. I derived the states from the Terms and added the reassurance each one should carry. KingoMart's real status names may differ.

&#91;embedded content: proposed order ladder · 6 states, 1 exception\]

State 2 is the call today: a person confirms the order. Any state before 3 can end in a decline, so the site must say why in plain words and show the refund route.

### Design brief: clean, clear, trusted

| Goal | What it means here | Concrete moves |
| --- | --- | --- |
| Cleaner | One calm visual system. Fewer things competing for attention. | The header uses a multi-colour gradient and each of the 8 department chips has its own colour (seen in a browser screenshot). Move to one brand colour on neutral surfaces, with colour kept for actions and status. Use one type scale, one spacing system and one card pattern. The "Fresh picks this week" row was 12 of 12 Hamoud items, so filter or tab it so one brand does not own the home page. Keep the truck banner but trim the three badges. Keep each language view in one language, since the English page carries French banner copy. |
| Clearer | The buyer always knows the price, the pack, where the order is and what comes next. | A product facts block on every card and page. A landed estimate that joins goods and freight. A review step before submit. The order ladder above. Plain-language errors with a fix. Empty states that offer a next action. |
| Trusted | A real company, real people and real documents behind every order. | Put the legal entity, Dubai address, phone and hours in every footer. Today the footer shows hours and a privacy email only. Use a support email instead of privacy@kingomart.com, which the Help page lists as the general contact. Show a named contact on every order. Offer invoice and delivery-note downloads. Show origin and certification marks only where KingoMart can prove them. Show customer logos only with permission. Explain refunds and cancellation in plain words. |
| Local | EU and Algerian buyers read French, and many read Arabic. They pay and shop differently. | The EN/FR switch exists. Test Arabic with right-to-left layout. Show currency unambiguously. Show support hours in the buyer's time zone. Write payment steps per route: card for EU, bank transfer for Algeria (to be confirmed). |

### Quick wins and bigger bets

Effort labels are my estimates, not KingoMart's.

| Move | Size | Why it comes first |
| --- | --- | --- |
| "Order received" screen and matching email | Quick win | Answers "did it go through?" within seconds. |
| Account-status tracker after registration | Quick win | Removes the first silent wait, before prices appear. |
| Identity block in the footer and local support hours | Quick win | Cheap trust signal on every page. |
| Separate support email from the privacy mailbox | Quick win | Makes the contact look like a real service desk. |
| Product facts template, even partly filled | Quick win | Lets buyers qualify a product without a call. |
| One language per view, calmer palette | Quick win | Reads as finished and professional. |
| Truck cards with fill level and date window | Bigger bet | Makes pooled freight understandable. |
| Bank-transfer proof flow with status | Bigger bet | The likely main payment route for Algeria. |
| Reorder and saved order templates | Bigger bet | The real scale lever for repeat buyers. |
| Full order page with notifications | Bigger bet | Delivers the whole order ladder. |
| Arabic and right-to-left layout | Bigger bet | Needs user testing first. |
| Usability tests with 5 EU and 5 Algerian buyers | Bigger bet | Replaces my assumptions with evidence. |

How I would measure it, needing KingoMart's baselines first: share of orders placed without a call, time from submit to confirmed, support contacts per order, checkout completion rate, payment-proof rejection rate, and repeat orders per buyer.

### How to use this in the interview

1. **Lead with one sentence.** "I would make ordering on the site as reassuring as ordering by phone."
2. **Show before and after.** Three screens: product card, truck module, order confirmation. Add the order ladder as a clickable prototype.
3. **Show the process.** This research, the three goals, the concepts, a test plan.
4. **Ask questions that prove you listen.** The list below.

### Questions to ask KingoMart

1. What do buyers ask on a typical call before they order?
2. Can I listen to or shadow a few calls? Those moments are the reassurance script the site has to learn.
3. How do Algerian buyers pay today, and how do EU buyers pay?
4. How long do account approval and order confirmation take now?
5. What share of orders are repeat orders, and how big are they?
6. Do buyers already message the team on chat apps before ordering?
7. What happens when a truck does not fill?
8. Who answers questions outside Dubai hours?
9. Is the Personal account type intended, or should the site be business-only?
10. Is there any local rule that limits how Algerian buyers pay a foreign company? One local outlet reports restrictions on foreign online purchases ([Algeria Tech News](https://algeriatech.news/?p=2905)). I could not verify this.

## UAE and global footprint

The UAE is the legal and operating base on paper. The storefront, brand mix and legal wording point to Europe as the customer market, with sourcing lines in Africa, Asia and South America.

| Region | Evidence | Confidence |
| --- | --- | --- |
| UAE | A Dubai LLC operates the platform. Dubai phone, Dubai-time support hours, Dubai law and courts ([Terms](https://store.kingomart.com/en/terms), [Help and contact](https://store.kingomart.com/en/support)). Privacy policy follows UAE Federal Decree-Law No. 45 of 2021 ([Privacy Policy](https://store.kingomart.com/en/privacy)). A Dubai office is claimed in the founder profile ([Forbes Afrique BrandVoice](https://forbesafrique.com/amine-boulghalaghe-de-limport-export-a-lecomobilite-partagee/)). I found no UAE customers, AED pricing or UAE-specific range. Prices are behind login. | High on legal base. Low on UAE sales. |
| France and Europe | Founder born in Beauvais. Paris office claimed. EN/FR language switch. The older homepage used French copy and euro pricing. The privacy policy covers EU and UK GDPR and names France's CNIL as a complaint authority. The profile calls KingoMart the leader of the ethnic market in Europe. | Medium. The leader claim is unverified. |
| North America | The privacy policy covers California CCPA. Some listings use US pack sizes, such as Coca-Cola 12oz. | Low. |
| Algeria and North Africa | Founder is of Algerian origin. The catalogue leans on Hamoud Boualem, an Algerian brand. The founder also runs BGE Tec, a bike-sharing start-up with a pilot station on the Sablettes promenade in Algiers ([Algerie Eco](https://algerie-eco.com/?p=174647)). | Medium. |
| Uganda, Vietnam, Brazil | Offices in Vietnam and Brazil and a Ugandan coffee export line are claimed. The storefront lists Vietnam Robusta, Uganda Robusta and Arabica lots in 40FT quantities ([search](https://store.kingomart.com/en/search?q=coffee)). | Medium. The storefront supports the claim. |
| Argentina | A listing for Argentine red shrimp ([store home](https://store.kingomart.com/en)). | Low. |

### Adjacent venture

BGE Tec is a separate Algerian start-up, not part of the Dubai LLC. The profile says it has a deal with Canada's PBSC for bike stations, a pilot site in Algiers in 2023, and a planned assembly plant by 2027 with a capacity of 100,000 units per year ([Forbes Afrique BrandVoice](https://forbesafrique.com/amine-boulghalaghe-de-limport-export-a-lecomobilite-partagee/)).

### Open question

Per my notes, KingoMart sells to customers in the EU and Algiers only and sources worldwide. That points to the Dubai LLC acting as the trading and billing entity. I could not confirm it publicly, since prices, currency and routes are behind login.

## Competitors

I found no like-for-like rival. Nobody surfaced that combines ethnic FMCG, pooled pallet freight, container-lot commodities and a Dubai entity. The nearest players overlap on one angle each.

| Group | Company | Facts | Overlap with KingoMart (my judgment) |
| --- | --- | --- | --- |
| UAE and MENA platforms | [Tradeling](https://www.imagesretailme.com/tradeling-strengthens-uaes-reputation-as-a-global-trade-hub/) (Dubai) | B2B e-marketplace launched at Gulfood 2020 with food and beverage as its core vertical. Started under the Dubai Airport Freezone. Partnered in 2022 with the government-led Food Tech Valley to power its B2B market ([Dubai Media Office](https://www.mediaoffice.ae/en/news/2022/November/17-11/Food-Tech-Valley-Partners-with-Tradeling-to-bolster-UAEs-food-ecosystem)). | High on UAE food B2B. Government backing is a gap KingoMart lacks. |
|  | [WeMENA](https://www.cbinsights.com/compare/kingpin-vs-wemena) (Dubai) | Founded 2019. Wholesale procurement marketplace for suppliers and retailers in the Middle East. | Medium. |
|  | [Cartona](https://www.cbinsights.com/compare/cartona-vs-kingpin) (Giza, Egypt) | Founded 2018. Retailers browse, compare and order from suppliers, wholesalers and FMCG producers. | Medium on model, low on geography. |
|  | [Kingpin](https://enterpriseam.com/logistics/2025/11/24/uae-based-saas-firm-kingpin-bags-usd-3-5-mn-in-a-seed-funding-round/) (Dubai) | AI sales software for brands and distributors. Raised USD 3.5 million seed. Serves 300+ distributors and brands ([MENA Startup Digest](https://menastartupdigest.com/?p=22623)). | Low. Software, not trading. A possible tool for suppliers. |
| Dubai food trading houses | [Expora](https://gulfood.com/exhibitorslist-2024/arha-platforms-general-trading-llc) | Tech-first B2B food and agro trader. Offices in India, UAE, Sri Lanka, Benin and USA. Sells rice, spices, pulses, sugar and frozen food. | High on the trading side. |
|  | [Jaipur Star General Trading](https://macro.market/company/ca_66469) | In Dubai since 2006. Foodstuff FMCG for the Middle East, Africa and the subcontinent. Also builds private labels. | Medium. |
|  | [Mapsco General Trading](https://www.gulfood.com/exhibitors/mapsco-general-trading-llc) | Dubai FMCG importer-exporter. Sunflower oil, palm olein, flour, sugar, rice. Own private labels. | Medium, overlaps on oils. |
|  | [SHT General Trading](https://www.gulftalent.com/companies/sht-general-trading-careers) | Founded 2004. Foodstuff, cosmetics and animal feed. Branches in China, Egypt, Qatar, Turkey and Bulgaria. | Medium. |
|  | [4 Corner General Trading](https://www.gulftalent.com/companies/4-corner-general-trading) | Imports from 15 European countries and others. Multi-temperature warehouses and its own fleet. | Medium, owns cold chain. |
| European wholesale | [Ankorstore](https://tech.eu/2022/01/10/frances-b2b-marketplace-ankorstore-raises-e250-million-with-valuation-pushing-e2-billion/) (Paris) | Raised 250 million euros at a 1.75 billion euro valuation in January 2022. 200,000 retailers, 15,000 brands, 23 countries ([Retail Systems](https://retail-systems.com/rs/French_Online_Marketplace_Ankorstore_Raises_250_Million.php%20.php)). | Low to medium. Independent retail brands, not pallet-scale grocery. |
|  | [ShelfNow](https://app.welcometothejungle.com/companies/ShelfNow) (London) | Food and beverage wholesale marketplace linking producers with independent buyers. 1 to 20 employees. | Medium on model. |
|  | [Kimayo](https://classe-export.com/wp-content/uploads/2022/06/cp-2022-05-CP-AKANEA-KIMAYO.pdf) (France) | B2B ordering platform for agrifood suppliers, distributors and retailers. Integrated with Akanea's ERP in 2022. | Low to medium. |
| Direct drink wholesalers | [EspaceAgro listings](https://www.espaceagro.com/ads/boisson-gazeuse/grossiste/) | French and Maghreb wholesalers advertise Hamoud Boualem drinks by the container in 1L, 2L and 33cl can formats. One French distributor sells by the pallet and exports by 20 or 40-foot container on FOB or EXW terms. | High on the Hamoud line, which is 17% of KingoMart's catalogue. |

### Where KingoMart is different

- Gulf platforms such as Tradeling and WeMENA serve Gulf and MENA buyers. KingoMart's storefront reads as European.
- Ankorstore targets independent retail brands. KingoMart targets food and drink at pallet and container scale.
- Trading houses sell on relationships. KingoMart adds a self-serve catalogue, ranked best sellers and pooled trucks.
- The sharpest direct threat is wholesalers already moving Hamoud and other Maghreb drinks by pallet and container to the same diaspora retail base.

Listing text marked as such came from directory or exhibitor pages read as search-result text, not opened in full.

## Market context

The UAE gives KingoMart a strong legal and logistics base. Demand data shows online FMCG growing fast in the UAE, but KingoMart's visible customer base is elsewhere.

| Metric | Figure | Source |
| --- | --- | --- |
| UAE online FMCG growth, Q2 2026 | 26.4%. E-commerce share of FMCG sales rose from 11.9% to 14.1%. | [Khaleej Times, NielsenIQ, Aug 27, 2026](https://www.khaleejtimes.com/business/from-groceries-to-gadgets-uae-shoppers-are-increasingly-going-digital) |
| UAE FMCG growth, Q2 2026 | 5.4% overall. Ambient food up 8%, ambient drinks up 7% in value. | Same article |
| UAE non-oil foreign trade, 2024 | AED 3 trillion, up 14.6%. | [Business Recorder, Jun 27, 2025](https://www.brecorder.com/news/amp/40369814) |
| Dubai share of UAE non-oil foreign trade | Over 40%. | Same article |
| UAE trade agreements | 26 CEPAs signed by Q1 2025. | Same article |
| Dubai food and beverage exports | To 130 countries. Dubai is described as the world's largest re-exporter of fresh fruit and vegetables. | [India Seatrade News, Feb 28, 2024](https://indiaseatradenews.com/indian-fmcg-companies-exploring-dubai-as-base-for-global-expansion/) |
| Logistics share of export cost | About 20%, according to Dubai's chief economist for trade. | Same article |
| UAE e-commerce size, 2025 | AED 42.2 billion, about 15.7% of retail, forecast above 20% by 2030. | [WAM, Sep 28, 2026](https://www.wam.ae/en/article/c2h35yn-uae-e-commerce-market-size-reaches-aed422-billion). Search snippet only. The page did not load for me. |

Two takeaways for KingoMart:

- Freight is about a fifth of export cost, so pooled trucks attack the right cost line.
- The UAE growth is in consumer online grocery. KingoMart sells B2B, so those figures show category momentum, not its own market.

## Risks, unknowns and confidence

The legal facts are solid. Scale, revenue and customer location are not. Confidence is highest where KingoMart published the fact itself.

| Topic | Confidence | Why |
| --- | --- | --- |
| Legal entity, address, governing law | High | Stated on KingoMart's own Terms, Privacy and support pages. |
| Catalogue size and mix | High | Counted live: 404 products, 8 departments, 32 subcategories. |
| Order flow and pooled freight | Medium to high | Written in the Terms. Not tested with an account. |
| Founder, 2020 start, 500+ brands, four offices | Low to medium | One sponsored profile from August 2024. Partly backed by the storefront's coffee lots. |
| "Leader of the ethnic market in Europe" | Low | Self-reported in paid content. No market share data found. |
| Revenue model | Low | Inferred. No fee schedule published. |
| Where customers are | Medium to high | KingoMart told me customers are in the EU and Algiers only (not public). Legal wording, language and brands agree. No sales data. |
| Storefront stability | Low | The site changed within six days. |

### Business risks

- **Truck fill.** Pooling only works when trucks fill. Dates are estimates, so a half-empty or late truck hurts cost or service ([Terms](https://store.kingomart.com/en/terms)).
- **Perishables.** Meat, fish and dairy travel on shared shipments with non-guaranteed dates. Cold-chain handling is not described publicly.
- **Brand concentration.** About 17% of listings are Hamoud. Supply depends on that brand's distribution policy. This is my inference.
- **Commodity prices.** Ugandan coffee export earnings fell sharply in May 2026 as global prices eased on hopes of a larger Brazil harvest ([Africanews, Jul 6, 2026](https://www.africanews.com/2026/07/06/uganda-coffee-exports-hit-by-weaker-prices/), read as search result text). Container lots carry price risk a marketplace does not.
- **Duties and compliance.** Import duties and taxes fall on the buyer, and meat, dairy and fish face rules in each country. The Terms push this to the client.
- **Thin proof.** No public customers, reviews, certifications or financials.
- **Regional security.** News pages I opened on October 12 carried headlines about attacks on tankers near the Strait of Hormuz and at Riyadh airport ([India Seatrade News](https://indiaseatradenews.com/indian-fmcg-companies-exploring-dubai-as-base-for-global-expansion/), [Khaleej Times](https://www.khaleejtimes.com/business/from-groceries-to-gadgets-uae-shoppers-are-increasingly-going-digital)). I did not research the effect on freight. Any Gulf-routed shipping carries this exposure.

### Open questions

1. Who owns the Dubai LLC, and is it the same group as the founder's Paris company?
2. What is the licence activity on the trade licence? Does it allow food import and re-export?
3. What do trucks cost per pallet, on which routes, and how often do they leave?
4. Does KingoMart own or rent warehouses and reefers, or use third-party carriers?
5. How many active buyers and suppliers are there?
6. Are the client and supplier apps live, and under what names?
7. Is Kingo Meat a private label with its own supply, or a campaign for supplier meat?

## Next steps and sources

### Next steps

- [ ] Create an approved buyer account to see prices, minimum orders, open trucks, checkout and tracking. I do not create accounts, so this needs you or a teammate.
- [ ] Look up the trade licence on the Dubai Economy and Tourism licence search to confirm activities, owners and issue date.
- [ ] Read the LinkedIn company page yourself, or paste its About text and employee count. The site blocks automated access.
- [ ] Ask KingoMart for a rate card and sample truck routes.
- [ ] Check the App Store and Google Play for the client and supplier apps by exact name.
- [ ] Re-check the storefront in two weeks. It is changing.

### Sources

Opened in full, or read live in a browser on October 12, 2026:

- KingoMart: [home](https://store.kingomart.com/en), [French home](https://store.kingomart.com/fr), [all products](https://store.kingomart.com/en/products), [search "chili"](https://store.kingomart.com/en/search?q=chili), [search "coffee"](https://store.kingomart.com/en/search?q=coffee), [search "beef"](https://store.kingomart.com/en/search?q=beef), [search "hamoud"](https://store.kingomart.com/en/search?q=hamoud), [search "kingo"](https://store.kingomart.com/en/search?q=kingo), [cheese product page](https://store.kingomart.com/en/product/ccd83917-67d4-4f65-91a2-9269db877569?variant=7a2194d7-0c5c-4627-88fa-be80f0bc6f18), [shipments](https://store.kingomart.com/en/trucks), [cart](https://store.kingomart.com/en/cart), [login](https://store.kingomart.com/en/login), [register](https://store.kingomart.com/en/register), [Help and contact](https://store.kingomart.com/en/support), [Terms](https://store.kingomart.com/en/terms), [Privacy Policy](https://store.kingomart.com/en/privacy)
- [Forbes Afrique BrandVoice, Aug 30, 2024](https://forbesafrique.com/amine-boulghalaghe-de-limport-export-a-lecomobilite-partagee/)
- [Khaleej Times, Aug 27, 2026](https://www.khaleejtimes.com/business/from-groceries-to-gadgets-uae-shoppers-are-increasingly-going-digital)
- [Business Recorder, Jun 27, 2025](https://www.brecorder.com/news/amp/40369814)
- [India Seatrade News, Feb 28, 2024](https://indiaseatradenews.com/indian-fmcg-companies-exploring-dubai-as-base-for-global-expansion/)

Read as search-result text only, not opened in full:

- [Algerie Eco on BGE Tec](https://algerie-eco.com/?p=174647)
- [Hamoud Boualem, about](https://hamoud-boualem.com/en/about)
- [Images Retail ME on Tradeling](https://www.imagesretailme.com/tradeling-strengthens-uaes-reputation-as-a-global-trade-hub/), [Dubai Media Office](https://www.mediaoffice.ae/en/news/2022/November/17-11/Food-Tech-Valley-Partners-with-Tradeling-to-bolster-UAEs-food-ecosystem)
- [CB Insights, Kingpin vs WeMENA](https://www.cbinsights.com/compare/kingpin-vs-wemena), [Cartona vs Kingpin](https://www.cbinsights.com/compare/cartona-vs-kingpin)
- [Enterprise AM on Kingpin](https://enterpriseam.com/logistics/2025/11/24/uae-based-saas-firm-kingpin-bags-usd-3-5-mn-in-a-seed-funding-round/), [MENA Startup Digest](https://menastartupdigest.com/?p=22623)
- [Tech.eu on Ankorstore](https://tech.eu/2022/01/10/frances-b2b-marketplace-ankorstore-raises-e250-million-with-valuation-pushing-e2-billion/), [Retail Systems](https://retail-systems.com/rs/French_Online_Marketplace_Ankorstore_Raises_250_Million.php%20.php)
- [ShelfNow](https://app.welcometothejungle.com/companies/ShelfNow), [Kimayo and Akanea](https://classe-export.com/wp-content/uploads/2022/06/cp-2022-05-CP-AKANEA-KIMAYO.pdf), [EspaceAgro listings](https://www.espaceagro.com/ads/boisson-gazeuse/grossiste/)
- [Expora at Gulfood](https://gulfood.com/exhibitorslist-2024/arha-platforms-general-trading-llc), [Mapsco at Gulfood](https://www.gulfood.com/exhibitors/mapsco-general-trading-llc), [Jaipur Star](https://macro.market/company/ca_66469), [SHT General Trading](https://www.gulftalent.com/companies/sht-general-trading-careers), [4 Corner General Trading](https://www.gulftalent.com/companies/4-corner-general-trading)
- [WAM on UAE e-commerce, Sep 28, 2026](https://www.wam.ae/en/article/c2h35yn-uae-e-commerce-market-size-reaches-aed422-billion), [Africanews on Uganda coffee, Jul 6, 2026](https://www.africanews.com/2026/07/06/uganda-coffee-exports-hit-by-weaker-prices/)

Not readable: KingoMart's LinkedIn page, which blocks automated access.

Added with my notes. Items marked opened were read in full, the rest as search-result text:

- [Nielsen Norman Group, 10 usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) (opened)
- [Gartner, Mar 9, 2026](https://www.gartner.com/en/newsroom/press-releases/2026-03-09-gartner-sales-survey-finds-67-percent-of-b2b-buyers-prefer-a-rep-free-experience) and [Gartner, Jun 25, 2025](https://gartner.com/en/newsroom/press-releases/2025-06-25-gartner-sales-survey-finds-61-percent-of-b2b-buyers-prefer-a-rep-free-buying-experience)
- Baymard: [order confirmation](https://baymard.com/ecommerce-design-examples/101-receipt), [mobile](https://Baymard.com/mcommerce-usability/benchmark/mobile-page-types/receipt)
- Algeria Tech News: [cross-border cards](https://algeriatech.news/?p=2905), [payments and cash on delivery](https://algeriatech.news/?p=27660). Secondary source, so verify with KingoMart.
- [Algerie Eco on DataReportal](https://algerie-eco.com/?p=212478), [DataReportal Digital 2025: Algeria](https://datareportal.com/reports/digital-2025-algeria)
- EU Accessibility Act: [Herzog Fox and Neeman](https://herzoglaw.co.il/en/news-and-insights/the-european-accessibility-act-key-considerations-for-e-commerce-providers/), [iubenda](https://www.iubenda.com/en/help/179096-eaa-compliance)
- [Hamoud Boualem, Gulfood exhibitor page](https://gulfood.com/exhibitors/hamoud-boualem)
