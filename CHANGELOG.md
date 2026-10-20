# Barqat Marketing Site Update — Changelog

## 1. Overview
Updated `barqat.com.pk` from the legacy "smart order tracking SaaS" positioning to Barqat's asset-light B2B2C FMCG platform model in partnership with a consortium of 12 authorized distributors, starting in Hayatabad, Peshawar.

---

## 2. Removed Claims & Deprecated Content
The following unverified, outdated, or SaaS-specific claims have been completely removed:
- **Hero & Feature Framing**: Removed "Smart Order Tracking for Modern Retailers", real-time GPS tracking, rider coordination, multi-role dashboard management, and customer behavior analytics.
- **Inflated / Enterprise Claims**: Removed "99.9% uptime guarantee", "bank-grade security", "enterprise-grade infrastructure", "PostgreSQL encrypted storage", and GDPR / CCPA compliance statements.
- **Unverified Metrics & Guarantees**: Removed "Hundreds of retail locations deployed", "24/7 customer support", and "Trusted by retailers across Pakistan".
- **SaaS Pricing & Timeline Claims**: Removed "30-day free trial", "flexible pricing plans", "2-4 weeks implementation", and iOS feature parity claims (the active app is Android only).
- **Quick-Commerce Mentions**: Ensured zero references to dark stores, 10-minute instant delivery, or WhatsApp ordering.
- **Dead Links & Outdated Footer**: Removed broken links (Blog, Careers, Help Center, Status, Cookie Policy) and replaced the legacy tagline *"Smart Retail Made Simple"*.

---

## 3. New Sections & Architecture
- **Brand Palette & Design System**:
  - Implemented the official Barqat theme colors:
    - Slide / Page Background (Cream): `#F7EBD3`
    - Headings & Body Text (Dark Brown): `#3D2E14`
    - Primary Accent (Olive Green): `#626B3B`
    - Second Accent (Olive Gold): `#82792B`
    - Highlight Accent (Mustard): `#E8AE3C`
    - Fourth Accent (Tan / Copper): `#CC914D`
    - Card Fill (Light Cream): `#FBF4E4`
    - Text on Olive & Gold Cards: `#FFFFFF`
  - Integrated official Barqat logo (`barqat_logo.png`) in the sticky navigation header, hero QR badge, ecosystem flow diagram platform node, and footer.
  - Crisp, modern grocery aesthetic with responsive card grids and clean SVG line icons (replacing emojis).
- **Section 1: Hero**:
  - Headline: *"Your Shop's Entire Supply. One App. One Trusted Network."*
  - Subhead: direct connection between neighbourhood retailers and 12 authorized FMCG distributors.
  - CTAs: Primary *"Register Your Shop"* (smooth scroll to join form) and Secondary *"Download the App"* (Google Play Store).
  - Preserved QR card (`qr.png`) with caption *"Scan to download for Android"*.
  - Verified trust strip: *"Backed by 12 authorized FMCG distributors"* &bull; *"No middlemen. No hidden inventory games."* &bull; *"Launching in Hayatabad, Peshawar"*.
- **Section 2: Problem ("What Dukaandaars Deal With Today")**:
  - Six targeted pain-point cards:
    1. *Multiple suppliers, multiple calls*
    2. *Higher purchase cost*
    3. *Order-booker leakage*
    4. *No visibility*
    5. *Limited reach*
    6. *Shop looks and merchandising*
- **Section 3: How It Works**:
  - 3-step visual onboarding & operational journey:
    1. *Join the Barqat network* (in-person shop visit and onboarding)
    2. *Order your supply through the Barqat app* (itemized invoices from authorized distributors)
    3. *Grow with home delivery* (nearby consumer ordering fulfilled through partner shops)
  - Visual flow diagram: *Authorized Distributors &rarr; Barqat Platform &rarr; Your Shop &rarr; Home Customers*.
- **Section 4: Benefits for Retailers**:
  - Three large cards: *More sales*, *Better prices*, and *A model shop*.
  - Profit sharing callout: *"Retailers share in the profit from day one."*
- **Section 5: The Network / Who We Are**:
  - Positioning Barqat as built by a 12-distributor consortium and local technology team.
  - Value bullets: asset-light, authorized stock only, itemized daily invoices, selective onboarding, bilingual support.
  - Rollout Phase Tracker:
    - *Phase 1: Retailer Supply (Hayatabad, Peshawar)* &mdash; marked as **Now**.
    - *Phase 2: Home Delivery via retailers*.
    - *Phase 3: More Cities*.
- **Section 6: FAQ Accordion**:
  - Replaced all six old questions with 7 retailer-focused Q&As (who it is for, 80% stock supply freedom, zero joining fee, selection criteria, home delivery timeline, Android availability, how to join).
- **Section 7: Join / Contact ("Register Your Shop")**:
  - Form fields: Shop Name, Owner Name, Phone / WhatsApp, Area (defaulting to Hayatabad, Peshawar), Daily Sales Range, and Message.
  - Centralized in `config.js` with client-side async validation and configurable endpoint.
  - Confirmation alert: *"Thank you. Our team will contact you to visit your shop."*
  - Distributor and investor callout with direct link.
- **Section 8: Footer**:
  - Clean brand line: *"Barqat. Supply, sales, and growth for Pakistan's neighbourhood retailers."*
  - Curated columns: Product, Company, Legal (`/privacy-policy`, `/terms-of-service`).
  - Copyright updated to &copy; 2026 Barqat.

---

## 4. Technical, SEO & Internationalization
- **Contact Details & Configuration (`config.js`)**:
  - Removed phone and WhatsApp contact details from all public website display locations.
  - Contact box now focuses cleanly on Email (`info@barqat.com.pk`), Partnership inquiries (`partners@barqat.com.pk`), and physical location (`Hayatabad, Peshawar`).
  - FAQ updated to direct inquiries solely through the registration form and in-person onboarding visits.
- **SEO & Meta**:
  - Semantic single `<h1>` on page.
  - Meta description, Open Graph tags, Twitter Card tags, and Organization JSON-LD schema.
  - Preserved `google-site-verification` and mobile `viewport` tags.
  - Added standard `robots.txt` and `sitemap.xml`.
- **Route Integrity**:
  - Preserved directory routing for `/privacy-policy` and `/terms-of-service`.
  - Updated relative navigation across subpages for seamless linking.
