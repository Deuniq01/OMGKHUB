const fs = require('fs');
const path = require('path');
const ROOT_DIR = path.join(__dirname, '..');
const {
  headPartial,
  headerPartial,
  footerPartial,
  modalsPartial,
  scriptsPartial,
  EMAIL,
  PHONE,
  WHATSAPP,
  MAPS_URL
} = require('./build_partials');

// ==========================================
// 1. INDEX.HTML
// ==========================================
function buildIndex() {
  const head = headPartial({
    title: 'OMGKHUB | Branding, ID Cards, Print, CAC & ICT Training in Ibadan, Nigeria',
    description: 'Orange Multimedia Global Konsult (OMGKHUB) is a CAC-registered, multi-service company in Moniya, Ibadan offering corporate branding, plastic ID cards, graphic design, document services, CAC registration, ICT training, event management and OMGKHUB Direct delivery.',
    canonicalPath: 'index.html'
  });
  const header = headerPartial('home');

  const content = `<main id="main">

  <!-- HERO SECTION -->
  <section class="hero" id="home" aria-label="Introduction">
    <div class="wrap hero-grid">
      <div>
        <div class="eyebrow hero-kicker">CAC-Registered / Moniya, Ibadan, Nigeria</div>
        <h1>
          <span class="line"><span>Professional Solutions.</span></span>
          <span class="line"><span>Exceptional Results.</span></span>
        </h1>
        <p class="hero-sub">
          Orange Multimedia Global Konsult (OMGKHUB) provides end-to-end corporate branding, high-grade PVC ID card printing, business registrations, ICT training, event management, and express logistics in Ibadan.
        </p>
        <div class="hero-actions">
          <a href="services.html" class="btn btn-primary magnetic" data-magnetic>
            <span>Explore Services</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 18L18 6M18 6H9M18 6V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
          <button class="btn btn-secondary magnetic" data-magnetic data-open-modal="serviceModal">
            <span>Request a Quote</span>
          </button>
        </div>
      </div>

      <div class="hero-frame" style="position:relative; overflow:hidden; border-radius:8px; border:1px solid var(--line);">
        <img src="images/image2.jpeg" alt="OMGKHUB Official Brand Workspace and Operations" style="width:100%; height:100%; object-fit:cover;">
      </div>
    </div>
  </section>

  <!-- KEY STATS STRIP -->
  <section class="sec" style="padding-top:40px; padding-bottom:40px; border-top:1px solid var(--line); border-bottom:1px solid var(--line);">
    <div class="wrap">
      <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:20px; text-align:center;">
        <div>
          <div style="font-family:var(--serif); font-size:clamp(32px, 4vw, 48px); font-weight:600; color:var(--orange)">500+</div>
          <div style="font-family:var(--mono); font-size:11px; text-transform:uppercase; color:var(--text-dim); letter-spacing:.08em;">Businesses Registered</div>
        </div>
        <div>
          <div style="font-family:var(--serif); font-size:clamp(32px, 4vw, 48px); font-weight:600; color:var(--orange)">15k+</div>
          <div style="font-family:var(--mono); font-size:11px; text-transform:uppercase; color:var(--text-dim); letter-spacing:.08em;">PVC ID Cards Issued</div>
        </div>
        <div>
          <div style="font-family:var(--serif); font-size:clamp(32px, 4vw, 48px); font-weight:600; color:var(--orange)">99.8%</div>
          <div style="font-family:var(--mono); font-size:11px; text-transform:uppercase; color:var(--text-dim); letter-spacing:.08em;">Quality SLA Accuracy</div>
        </div>
        <div>
          <div style="font-family:var(--serif); font-size:clamp(32px, 4vw, 48px); font-weight:600; color:var(--orange)">24/7</div>
          <div style="font-family:var(--mono); font-size:11px; text-transform:uppercase; color:var(--text-dim); letter-spacing:.08em;">WhatsApp Support</div>
        </div>
      </div>
    </div>
  </section>

  <!-- SERVICES PREVIEW -->
  <section class="sec" aria-labelledby="serv-h">
    <div class="wrap">
      <div class="sec-head">
        <div class="reveal">
          <div class="eyebrow">Capabilities</div>
          <h2 id="serv-h">What we build, print &amp; deliver.</h2>
        </div>
        <p class="desc reveal">Comprehensive commercial solutions delivered with exact precision from our hub in Moniya, Ibadan.</p>
      </div>

      <div class="teaser-grid reveal">
        <div class="teaser-card">
          <span class="teaser-num">01</span>
          <h3>Corporate Branding &amp; Identity</h3>
          <p>Complete logo suites, brand guideline manuals, corporate typography, and identity collateral tailored for emerging &amp; established enterprises.</p>
          <a href="services.html#service-01" class="teaser-link">Learn More <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></a>
        </div>

        <div class="teaser-card">
          <span class="teaser-num">02</span>
          <h3>Plastic / PVC ID Card Printing</h3>
          <p>High-definition waterproof PVC cards, RFID smart chips, employee badges, school IDs, and magnetic strip cards with custom lanyards.</p>
          <a href="services.html#service-02" class="teaser-link">Learn More <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></a>
        </div>

        <div class="teaser-card">
          <span class="teaser-num">05</span>
          <h3>CAC &amp; Online Registrations</h3>
          <p>Fast-track Business Name registration, Company Limited filings, NGO/Inc. Trustees setup, Tax Identification (TIN), and government portal access.</p>
          <a href="services.html#service-05" class="teaser-link">Learn More <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></a>
        </div>

        <div class="teaser-card">
          <span class="teaser-num">06</span>
          <h3>Gadgets &amp; Accessories</h3>
          <p>Authentic laptop chargers, USB-C hubs, wireless storage drives, desktop peripherals, and tech accessories for offices and individuals.</p>
          <a href="services.html#service-06" class="teaser-link">Learn More <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></a>
        </div>

        <div class="teaser-card">
          <span class="teaser-num">10</span>
          <h3>Event &amp; Hotel Management</h3>
          <p>End-to-end corporate event planning, venue coordination, delegate registration desks, and hotel reservation management across Nigeria.</p>
          <a href="services.html#service-10" class="teaser-link">Learn More <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></a>
        </div>

        <div class="teaser-card">
          <span class="teaser-num">11</span>
          <h3>OMGKHUB Direct</h3>
          <p>Express urban logistics, document dispatch, printing material delivery, and doorstep parcel drop-offs throughout Ibadan and beyond.</p>
          <a href="services.html#service-11" class="teaser-link">Learn More <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></a>
        </div>
      </div>

      <div style="margin-top:36px; text-align:center;">
        <a href="services.html" class="btn btn-secondary">View All 11 Services &rarr;</a>
      </div>
    </div>
  </section>

  <!-- TESTIMONIALS SECTION -->
  <section class="sec" style="background:var(--paper-dim); border-top:1px solid var(--line); border-bottom:1px solid var(--line);" aria-labelledby="testi-h">
    <div class="wrap">
      <div class="sec-head">
        <div class="reveal">
          <div class="eyebrow">Client Feedback</div>
          <h2 id="testi-h">Trusted by businesses in Ibadan.</h2>
        </div>
        <p class="desc reveal">Here is what our corporate clients and individuals say about working with OMGKHUB.</p>
      </div>

      <div class="testi-grid reveal">
        <div class="testi-card">
          <div class="testi-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <p class="testi-quote">"OMGKHUB handled our CAC business registration and printed 120 staff PVC ID cards in under 3 days. Their precision and speed in Moniya are unmatched."</p>
          <div class="testi-author">
            <strong>Dr. Olumide Adeleke</strong>
            Director, Horizon Academy Ibadan
          </div>
        </div>

        <div class="testi-card">
          <div class="testi-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <p class="testi-quote">"The team designed our corporate logo, branded letterheads, and handled event logistics for our annual summit. Excellent customer support on WhatsApp!"</p>
          <div class="testi-author">
            <strong>Mrs. Funmi Oladipo</strong>
            CEO, Apex Consults Nigeria
          </div>
        </div>

        <div class="testi-card">
          <div class="testi-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <p class="testi-quote">"I took their practical ICT computer training course. The hands-on curriculum gave me real technical skills. OMGKHUB Direct also delivers my stationery reliably."</p>
          <div class="testi-author">
            <strong>Tunde Bakare</strong>
            Entrepreneur &amp; ICT Student
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PORTFOLIO PREVIEW -->
  <section class="sec" aria-labelledby="work-h">
    <div class="wrap">
      <div class="sec-head">
        <div class="reveal">
          <div class="eyebrow">Featured Work</div>
          <h2 id="work-h">Craftsmanship in every detail.</h2>
        </div>
        <p class="desc reveal">A snapshot of recent branding, document production, and digital services delivered by OMGKHUB.</p>
      </div>

      <div class="work-grid reveal">
        <div class="work-item">
          <div class="work-frame">
            <img src="images/image1.jpeg" alt="Corporate Branding &amp; Print Production">
          </div>
          <span class="work-tag">01 / Corporate Branding</span>
        </div>
        <div class="work-item">
          <div class="work-frame">
            <img src="images/image2.jpeg" alt="PVC ID Card Production">
          </div>
          <span class="work-tag">02 / PVC ID Cards</span>
        </div>
        <div class="work-item">
          <div class="work-frame">
            <img src="images/image3.jpeg" alt="CAC Registrations &amp; Online Portals">
          </div>
          <span class="work-tag">05 / CAC Registrations</span>
        </div>
      </div>

      <div style="margin-top:36px; text-align:center;">
        <a href="work.html" class="btn btn-secondary">Explore Complete Gallery &rarr;</a>
      </div>
    </div>
  </section>

  <!-- CTA STRIP -->
  <section class="cta" aria-labelledby="cta-h">
    <div class="wrap">
      <h2 id="cta-h">Ready to elevate your <em>brand?</em></h2>
      <p class="cta-sub">Talk directly with our experts in Moniya, Ibadan or submit a service request online today.</p>
      <div style="display:flex; justify-content:center; gap:16px; flex-wrap:wrap;">
        <a href="${WHATSAPP}" class="btn btn-primary magnetic" data-magnetic>Book on WhatsApp</a>
        <button class="btn btn-secondary magnetic" data-magnetic data-open-modal="serviceModal" style="background:transparent; color:var(--text-invert); border-color:var(--line-invert);">Request a Service Quote</button>
      </div>
    </div>
  </section>

</main>`;

  const footer = footerPartial();
  const modals = modalsPartial();
  const scripts = scriptsPartial();

  return head + header + content + footer + modals + scripts;
}

// ==========================================
// 2. ABOUT.HTML
// ==========================================
function buildAbout() {
  const head = headPartial({
    title: 'About OMGKHUB | Our Mission, Leadership & Track Record in Ibadan',
    description: 'Learn about Orange Multimedia Global Konsult (OMGKHUB) — a CAC-registered multi-service enterprise based in Moniya, Ibadan offering branding, printing, CAC filings, ICT training and event services.',
    canonicalPath: 'about.html'
  });
  const header = headerPartial('about');

  const content = `<main id="main">
  <section class="page-hero">
    <div class="wrap">
      <div class="breadcrumb">
        <a href="index.html">Home</a> <span>/</span> <span>About</span>
      </div>
      <h1>Built on precision. Driven by <em>results.</em></h1>
      <p class="page-sub">Orange Multimedia Global Konsult (OMGKHUB) is a registered Nigerian enterprise providing integrated business, branding, secretariat, digital, and logistics services.</p>
    </div>
  </section>

  <section class="sec">
    <div class="wrap">
      <div class="sec-head">
        <div class="reveal">
          <div class="eyebrow">Company Profile</div>
          <h2>Multidisciplinary excellence under one roof.</h2>
        </div>
        <p class="desc reveal">Operating from our physical center in Moniya, Ibadan, OMGKHUB combines technical skill, high-grade machinery, and business advisory to serve individuals, schools, startups, and established organizations.</p>
      </div>

      <div class="exec-list reveal">
        <div class="exec-item">
          <span class="exec-num">01</span>
          <div>
            <h3 style="font-family:var(--serif); font-size:22px; margin-bottom:8px;">CAC Registered &amp; Compliant</h3>
            <p>Fully accredited with the Corporate Affairs Commission (CAC) of Nigeria. We maintain zero-compromise standards on regulatory compliance, legal documentation, and client confidentiality.</p>
          </div>
        </div>
        <div class="exec-item">
          <span class="exec-num">02</span>
          <div>
            <h3 style="font-family:var(--serif); font-size:22px; margin-bottom:8px;">High-Capacity Machinery</h3>
            <p>Equipped with thermal PVC card printers, high-volume laser printers, laminators, digital design suites, and fast internet infrastructure for immediate secretariat turnarounds.</p>
          </div>
        </div>
        <div class="exec-item">
          <span class="exec-num">03</span>
          <div>
            <h3 style="font-family:var(--serif); font-size:22px; margin-bottom:8px;">Hands-On Skill Acquisition</h3>
            <p>Our practical ICT &amp; digital skills training program empowers students and professionals with market-relevant skills in graphic design, computer engineering, document processing, and web technology.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- TEAM SECTION -->
  <section class="sec" style="background:var(--paper-dim); border-top:1px solid var(--line); border-bottom:1px solid var(--line);">
    <div class="wrap">
      <div class="sec-head">
        <div class="reveal">
          <div class="eyebrow">Our Leadership</div>
          <h2>The team behind OMGKHUB.</h2>
        </div>
        <p class="desc reveal">Experienced specialists dedicated to bringing your brand, technical, and event projects to life.</p>
      </div>

      <div class="team-grid reveal">
        <div class="team-card">
          <div class="team-avatar">OK</div>
          <div>
            <h3 class="team-name">Olawale Konsult</h3>
            <div class="team-role">Managing Director &amp; Founder</div>
          </div>
          <p class="team-bio">Over 10 years of leadership in corporate branding, strategic business consulting, and enterprise development across Oyo State.</p>
        </div>

        <div class="team-card">
          <div class="team-avatar">RA</div>
          <div>
            <h3 class="team-name">Rashidat Adeleke</h3>
            <div class="team-role">Corporate Affairs &amp; CAC Lead</div>
          </div>
          <p class="team-bio">Specialist in corporate registrations, business name filings, tax compliance, and secretariat administration.</p>
        </div>

        <div class="team-card">
          <div class="team-avatar">KA</div>
          <div>
            <h3 class="team-name">Kazeem Adewale</h3>
            <div class="team-role">Lead ICT Instructor &amp; Tech Ops</div>
          </div>
          <p class="team-bio">Expert in computer hardware, graphic design, practical IT curriculum development, and technical support.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="sec">
    <div class="wrap mini-cta">
      <div>
        <h3>Want to learn more about working with us?</h3>
        <p>Visit our office in Moniya, Ibadan or speak directly with our team.</p>
      </div>
      <a href="contact.html" class="btn btn-primary">Contact Our Team &rarr;</a>
    </div>
  </section>
</main>`;

  const footer = footerPartial();
  const modals = modalsPartial();
  const scripts = scriptsPartial();

  return head + header + content + footer + modals + scripts;
}

// ==========================================
// 3. SERVICES.HTML
// ==========================================
function buildServices() {
  const head = headPartial({
    title: 'Services | OMGKHUB Branding, PVC ID Cards, CAC, Event Management & Delivery',
    description: 'Explore the 11 core service lines offered by OMGKHUB in Moniya, Ibadan: Branding, PVC ID Card Printing, Graphic Design, CAC Registration, Gadgets, CV Writing, ICT Training, FinTech Account Support, Event/Hotel Management, and OMGKHUB Direct logistics.',
    canonicalPath: 'services.html'
  });
  const header = headerPartial('services');

  const content = `<main id="main">
  <section class="page-hero">
    <div class="wrap">
      <div class="breadcrumb">
        <a href="index.html">Home</a> <span>/</span> <span>Services</span>
      </div>
      <h1>Our complete <em>service index.</em></h1>
      <p class="page-sub">Eleven specialized service lines engineered to give your business, organization, or personal profile a distinct competitive advantage.</p>
    </div>
  </section>

  <section class="sec">
    <div class="wrap">

      <!-- SERVICE 01 -->
      <div class="service-block reveal" id="service-01">
        <div class="service-icon-lg">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>
        </div>
        <div>
          <div class="service-block-head">
            <span class="service-block-num">01</span>
            <h2>Corporate Branding &amp; Identity Design</h2>
          </div>
          <p>We create unforgettable visual identities that inspire trust and stand out in the marketplace. From vector logo design to comprehensive corporate brand guidelines and stationary sets.</p>
          <div class="chip-list">
            <span class="chip">Logo Design Suites</span>
            <span class="chip">Brand Style Guides</span>
            <span class="chip">Corporate Stationary</span>
            <span class="chip">Brand Guidelines</span>
          </div>
          <div style="margin-top:16px;">
            <button class="btn btn-secondary" data-open-modal="serviceModal">Request Quote for Branding</button>
          </div>
        </div>
      </div>

      <!-- SERVICE 02 -->
      <div class="service-block reveal" id="service-02">
        <div class="service-icon-lg">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="7" y1="8" x2="17" y2="8"/><line x1="7" y1="12" x2="12" y2="12"/></svg>
        </div>
        <div>
          <div class="service-block-head">
            <span class="service-block-num">02</span>
            <h2>Plastic / PVC ID Card Printing</h2>
          </div>
          <p>High-definition thermal printing on durable PVC cards. Perfect for corporate employees, school students, event passes, and membership credentials with custom branded lanyards and holders.</p>
          <div class="chip-list">
            <span class="chip">Staff PVC Cards</span>
            <span class="chip">School Student IDs</span>
            <span class="chip">RFID &amp; Proximity Cards</span>
            <span class="chip">Custom Lanyards &amp; Holders</span>
          </div>
          <div style="margin-top:16px;">
            <button class="btn btn-secondary" data-open-modal="serviceModal">Order PVC ID Cards</button>
          </div>
        </div>
      </div>

      <!-- SERVICE 03 -->
      <div class="service-block reveal" id="service-03">
        <div class="service-icon-lg">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
        </div>
        <div>
          <div class="service-block-head">
            <span class="service-block-num">03</span>
            <h2>Graphic Design &amp; High-Volume Printing</h2>
          </div>
          <p>Full-spectrum graphic design and commercial printing services. Flyers, brochures, banners, event programs, posters, product labels, and custom promotional items.</p>
          <div class="chip-list">
            <span class="chip">Flyers &amp; Posters</span>
            <span class="chip">Brochures &amp; Catalogs</span>
            <span class="chip">Flex &amp; SAV Banners</span>
            <span class="chip">Packaging Labels</span>
          </div>
          <div style="margin-top:16px;">
            <button class="btn btn-secondary" data-open-modal="serviceModal">Request Printing Quote</button>
          </div>
        </div>
      </div>

      <!-- SERVICE 04 -->
      <div class="service-block reveal" id="service-04">
        <div class="service-icon-lg">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        </div>
        <div>
          <div class="service-block-head">
            <span class="service-block-num">04</span>
            <h2>Document Processing &amp; Secretariat Services</h2>
          </div>
          <p>Fast, precise document typesetting, scanning, heavy-duty photocopying, spiral binding, laminating, and official letterhead formatting.</p>
          <div class="chip-list">
            <span class="chip">Typesetting &amp; Formatting</span>
            <span class="chip">High-Speed Photocopying</span>
            <span class="chip">Comb &amp; Wire Binding</span>
            <span class="chip">Document Lamination</span>
          </div>
          <div style="margin-top:16px;">
            <button class="btn btn-secondary" data-open-modal="serviceModal">Book Secretariat Service</button>
          </div>
        </div>
      </div>

      <!-- SERVICE 05 -->
      <div class="service-block reveal" id="service-05">
        <div class="service-icon-lg">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <div>
          <div class="service-block-head">
            <span class="service-block-num">05</span>
            <h2>CAC &amp; Online Registrations</h2>
          </div>
          <p>Hassle-free registration of Business Names, Private Limited Companies (Ltd), and Incorporated Trustees/NGOs with the Corporate Affairs Commission. Tax TIN registration and government portal filings.</p>
          <div class="chip-list">
            <span class="chip">Business Name Registration</span>
            <span class="chip">Company Limited (Ltd) Setup</span>
            <span class="chip">NGO / Trustee Filing</span>
            <span class="chip">TIN &amp; Tax Compliance</span>
          </div>
          <div style="margin-top:16px;">
            <button class="btn btn-secondary" data-open-modal="serviceModal">Start CAC Registration</button>
          </div>
        </div>
      </div>

      <!-- SERVICE 06 -->
      <div class="service-block reveal" id="service-06">
        <div class="service-icon-lg">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </div>
        <div>
          <div class="service-block-head">
            <span class="service-block-num">06</span>
            <h2>Gadgets &amp; Accessories</h2>
          </div>
          <p>Retailing high-quality computer accessories, original laptop chargers, wireless keyboards, mice, flash drives, external hard drives, power surge protectors, and office tech peripherals.</p>
          <div class="chip-list">
            <span class="chip">Laptop Power Adapters</span>
            <span class="chip">Storage Drives (SSD/HDD)</span>
            <span class="chip">Keyboards &amp; Mice</span>
            <span class="chip">Adapters &amp; Cables</span>
          </div>
          <div style="margin-top:16px;">
            <button class="btn btn-secondary" data-open-modal="serviceModal">Inquire About Gadgets</button>
          </div>
        </div>
      </div>

      <!-- SERVICE 07 -->
      <div class="service-block reveal" id="service-07">
        <div class="service-icon-lg">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>
        </div>
        <div>
          <div class="service-block-head">
            <span class="service-block-num">07</span>
            <h2>Professional CV Writing &amp; Resume Enhancement</h2>
          </div>
          <p>Transforming your career history into compelling, ATS-friendly resumes, modern CV formats, cover letters, and optimized LinkedIn profiles tailored for local and global job markets.</p>
          <div class="chip-list">
            <span class="chip">ATS-Optimized Resumes</span>
            <span class="chip">Executive CV Writing</span>
            <span class="chip">Cover Letter Drafting</span>
            <span class="chip">LinkedIn Optimization</span>
          </div>
          <div style="margin-top:16px;">
            <button class="btn btn-secondary" data-open-modal="serviceModal">Order CV Rewrite</button>
          </div>
        </div>
      </div>

      <!-- SERVICE 08 -->
      <div class="service-block reveal" id="service-08">
        <div class="service-icon-lg">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
        </div>
        <div>
          <div class="service-block-head">
            <span class="service-block-num">08</span>
            <h2>Practical ICT &amp; Digital Skills Training</h2>
          </div>
          <p>Hands-on training courses designed to equip students, job seekers, and business owners with practical computer literacy, graphic design skills, office software mastery, and digital tools.</p>
          <div class="chip-list">
            <span class="chip">Computer Basics</span>
            <span class="chip">Graphic Design Masterclass</span>
            <span class="chip">Microsoft Office Suite</span>
            <span class="chip">Internet Operations</span>
          </div>
          <div style="margin-top:16px;">
            <button class="btn btn-secondary" data-open-modal="serviceModal">Register for Training</button>
          </div>
        </div>
      </div>

      <!-- SERVICE 09 -->
      <div class="service-block reveal" id="service-09">
        <div class="service-icon-lg">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
        </div>
        <div>
          <div class="service-block-head">
            <span class="service-block-num">09</span>
            <h2>FinTech Services - Account Opening Support</h2>
          </div>
          <p>Assisting individuals and small business owners with seamless tier-1/2/3 commercial bank account opening, FinTech wallet setups, BVN/NIN linkage advisory, and merchant account onboarding.</p>
          <div class="chip-list">
            <span class="chip">Business Account Opening</span>
            <span class="chip">Personal Bank Setup</span>
            <span class="chip">FinTech Wallet Onboarding</span>
            <span class="chip">KYC &amp; BVN Verification Support</span>
          </div>
          <div style="margin-top:16px;">
            <button class="btn btn-secondary" data-open-modal="serviceModal">Inquire About Account Opening</button>
          </div>
        </div>
      </div>

      <!-- SERVICE 10 -->
      <div class="service-block reveal" id="service-10">
        <div class="service-icon-lg">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16"/><path d="M3 21h18"/><path d="M9 8h2"/><path d="M9 12h2"/><path d="M9 16h2"/><path d="M13 8h2"/><path d="M13 12h2"/><path d="M13 16h2"/></svg>
        </div>
        <div>
          <div class="service-block-head">
            <span class="service-block-num">10</span>
            <h2>Event and Hotel Management Services</h2>
          </div>
          <p>Comprehensive corporate event planning, venue decoration, protocol management, delegate registration, sound &amp; multimedia setup, and hotel reservation assistance across Ibadan and Oyo State.</p>
          <div class="chip-list">
            <span class="chip">Corporate Event Coordination</span>
            <span class="chip">Hotel Booking Management</span>
            <span class="chip">Protocol &amp; Ushering</span>
            <span class="chip">Event Branding &amp; Pass Printing</span>
          </div>
          <div style="margin-top:16px;">
            <button class="btn btn-secondary" data-open-modal="serviceModal">Book Event Management</button>
          </div>
        </div>
      </div>

      <!-- SERVICE 11 -->
      <div class="service-block reveal" id="service-11">
        <div class="service-icon-lg">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
        </div>
        <div>
          <div class="service-block-head">
            <span class="service-block-num">11</span>
            <h2>OMGKHUB Direct (Logistics &amp; Express Delivery)</h2>
          </div>
          <p>Our dedicated express delivery wing. Secure document dispatch, printed material distribution, parcel pickups, and doorstep delivery services throughout Ibadan city and nationwide shipping partners.</p>
          <div class="chip-list">
            <span class="chip">Document Dispatch</span>
            <span class="chip">Same-Day Ibadan Delivery</span>
            <span class="chip">Printed Materials Parcel Drop</span>
            <span class="chip">Interstate Delivery Partners</span>
          </div>
          <div style="margin-top:16px;">
            <button class="btn btn-secondary" data-open-modal="serviceModal">Book OMGKHUB Direct</button>
          </div>
        </div>
      </div>

    </div>
  </section>

  <section class="sec" style="background:var(--paper-dim); border-top:1px solid var(--line);">
    <div class="wrap">
      <div class="form-panel reveal">
        <div style="margin-bottom:28px;">
          <div class="eyebrow">Interactive Form</div>
          <h2 style="font-family:var(--serif); font-size:32px; margin-top:8px;">Submit a Service Request directly</h2>
          <p style="color:var(--text-dim); font-size:15px; margin-top:6px;">Fill out this form and our team will contact you back immediately with pricing and timeline details.</p>
        </div>

        <form name="service-request" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="service-request">
          <p class="honey" style="display:none;"><label>Don't fill this out if you're human: <input name="bot-field" /></label></p>
          
          <div class="form-row">
            <div class="field">
              <label for="p-name">Full Name</label>
              <input type="text" id="p-name" name="name" required placeholder="e.g. Samuel Adewale">
            </div>
            <div class="field">
              <label for="p-phone">Phone / WhatsApp</label>
              <input type="tel" id="p-phone" name="phone" required placeholder="+234 800 000 0000">
            </div>
          </div>

          <div class="field">
            <label for="p-email">Email Address</label>
            <input type="email" id="p-email" name="email" required placeholder="name@domain.com">
          </div>

          <div class="field">
            <label for="p-service">Select Service</label>
            <select id="p-service" name="service" required>
              <option value="Corporate Branding">01. Corporate Branding &amp; Identity Design</option>
              <option value="Plastic PVC ID Cards">02. Plastic / PVC ID Card Printing</option>
              <option value="Graphic Design &amp; Printing">03. Graphic Design &amp; High-Volume Printing</option>
              <option value="Document Processing">04. Document Processing &amp; Secretariat Services</option>
              <option value="CAC &amp; Online Registrations">05. CAC &amp; Online Registrations</option>
              <option value="Gadgets &amp; Accessories">06. Gadgets &amp; Accessories</option>
              <option value="CV Writing">07. Professional CV Writing &amp; Resume Enhancement</option>
              <option value="Practical ICT Training">08. Practical ICT &amp; Digital Skills Training</option>
              <option value="FinTech Account Support">09. FinTech Services - Account Opening Support</option>
              <option value="Event &amp; Hotel Management">10. Event and Hotel Management Services</option>
              <option value="OMGKHUB Direct">11. OMGKHUB Direct (Logistics &amp; Express Delivery)</option>
            </select>
          </div>

          <div class="field">
            <label for="p-message">Project Description / Details</label>
            <textarea id="p-message" name="message" required placeholder="Tell us what you need built, printed, registered, or managed..."></textarea>
          </div>

          <button type="submit" class="btn btn-primary" style="width:100%; justify-content:center; padding:16px;">Submit Service Request</button>
        </form>
      </div>
    </div>
  </section>
</main>`;

  const footer = footerPartial();
  const modals = modalsPartial();
  const scripts = scriptsPartial();

  return head + header + content + footer + modals + scripts;
}

// ==========================================
// 4. PROCESS.HTML
// ==========================================
function buildProcess() {
  const head = headPartial({
    title: 'Process | How OMGKHUB Delivers Quality & Speed in Ibadan',
    description: 'Learn about OMGKHUB workflow process from initial discovery and strategy to execution, quality control, and final delivery via OMGKHUB Direct.',
    canonicalPath: 'process.html'
  });
  const header = headerPartial('process');

  const content = `<main id="main">
  <section class="page-hero">
    <div class="wrap">
      <div class="breadcrumb">
        <a href="index.html">Home</a> <span>/</span> <span>Process</span>
      </div>
      <h1>Streamlined workflow. Zero <em>friction.</em></h1>
      <p class="page-sub">How we take your project from initial brief to final delivery with speed, transparency, and guaranteed quality.</p>
    </div>
  </section>

  <section class="sec">
    <div class="wrap">
      <div class="sec-head">
        <div class="reveal">
          <div class="eyebrow">Delivery Framework</div>
          <h2>Our 4-step delivery pipeline.</h2>
        </div>
        <p class="desc reveal">Designed for optimal efficiency whether you need 1,000 PVC ID cards, a CAC business registration, or event management.</p>
      </div>

      <div class="steps reveal">
        <div class="step-card">
          <span class="step-num">01</span>
          <h3>Discovery &amp; Briefing</h3>
          <p>We review your exact specifications, quantities, guidelines, and timelines via walk-in consultation, phone, or WhatsApp.</p>
        </div>
        <div class="step-card">
          <span class="step-num">02</span>
          <h3>Strategy &amp; Drafting</h3>
          <p>Our team creates preliminary design proofs, document drafts, or registration filings for your explicit review and approval.</p>
        </div>
        <div class="step-card">
          <span class="step-num">03</span>
          <h3>Execution &amp; QC</h3>
          <p>High-volume production, CAC submission, or event prep begins. Every output undergoes strict quality assurance checks.</p>
        </div>
        <div class="step-card">
          <span class="step-num">04</span>
          <h3>Handover &amp; Dispatch</h3>
          <p>Completed jobs are handed over at our Moniya center or dispatched directly to your location via OMGKHUB Direct express logistics.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="sec" style="background:var(--paper-dim); border-top:1px solid var(--line);">
    <div class="wrap mini-cta">
      <div>
        <h3>Ready to start step 01?</h3>
        <p>Contact our project team in Moniya, Ibadan for an immediate consultation.</p>
      </div>
      <a href="contact.html" class="btn btn-primary">Start Your Project &rarr;</a>
    </div>
  </section>
</main>`;

  const footer = footerPartial();
  const modals = modalsPartial();
  const scripts = scriptsPartial();

  return head + header + content + footer + modals + scripts;
}

// ==========================================
// 5. WHY-US.HTML
// ==========================================
function buildWhyUs() {
  const head = headPartial({
    title: 'Why Choose OMGKHUB | Speed, SLA Guarantees & Moniya Ibadan Hub',
    description: 'Discover why businesses choose OMGKHUB: 24-48hr CAC turnaround SLA, 99.8% printing accuracy, physical Moniya center, direct WhatsApp communication, and express doorstep delivery.',
    canonicalPath: 'why-us.html'
  });
  const header = headerPartial('why-us');

  const content = `<main id="main">
  <section class="page-hero">
    <div class="wrap">
      <div class="breadcrumb">
        <a href="index.html">Home</a> <span>/</span> <span>Why Us</span>
      </div>
      <h1>Built on specificity, speed &amp; <em>accountability.</em></h1>
      <p class="page-sub">Why hundreds of businesses, institutions, and individuals across Ibadan trust OMGKHUB for their critical projects.</p>
    </div>
  </section>

  <section class="sec">
    <div class="wrap">
      <div class="sec-head">
        <div class="reveal">
          <div class="eyebrow">Our Guarantees</div>
          <h2>Concrete reasons to partner with OMGKHUB.</h2>
        </div>
        <p class="desc reveal">We rely on verifiable performance metrics, strict SLAs, and transparent operations.</p>
      </div>

      <div class="spot-grid reveal">
        <div class="spot-card">
          <div class="spot-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <h3>24–48hr CAC Processing SLA</h3>
          <p>Direct accreditation with the Corporate Affairs Commission (CAC) portal allows us to submit and process Business Name registrations with zero unnecessary delays.</p>
        </div>

        <div class="spot-card">
          <div class="spot-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          <h3>99.8% Print Accuracy Guarantee</h3>
          <p>High-resolution thermal PVC card printers and digital production presses ensure colors, vector logos, and employee data match your proofs exactly.</p>
        </div>

        <div class="spot-card">
          <div class="spot-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <h3>Physical Hub in Moniya, Ibadan</h3>
          <p>We are not an anonymous online middleman. You can visit our fully equipped secretariat and production hub in Moniya anytime during office hours.</p>
        </div>

        <div class="spot-card">
          <div class="spot-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
          </div>
          <h3>OMGKHUB Direct Express Logistics</h3>
          <p>Save time with our dedicated local courier wing that delivers your printed materials, ID cards, and documents straight to your doorstep.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- TESTIMONIAL STRIP -->
  <section class="sec" style="background:var(--paper-dim); border-top:1px solid var(--line); border-bottom:1px solid var(--line);">
    <div class="wrap">
      <div class="sec-head">
        <div class="reveal">
          <div class="eyebrow">Client Endorsements</div>
          <h2>Proven track record.</h2>
        </div>
        <p class="desc reveal">Read how our commitment to precision impacts businesses every day.</p>
      </div>

      <div class="testi-grid reveal">
        <div class="testi-card">
          <div class="testi-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <p class="testi-quote">"OMGKHUB is our go-to partner for all corporate branding and ID cards. Their speed and clear communication on WhatsApp make working with them effortless."</p>
          <div class="testi-author">
            <strong>Bayo Ogundipe</strong>
            Operations Director, Citadel Logistics
          </div>
        </div>

        <div class="testi-card">
          <div class="testi-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <p class="testi-quote">"They completed our CAC Incorporation filings and TIN registration cleanly without any back and forth. Highly recommended!"</p>
          <div class="testi-author">
            <strong>Victoria Adewumi</strong>
            Founder, GreenSprout Foods
          </div>
        </div>

        <div class="testi-card">
          <div class="testi-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <p class="testi-quote">"Their event management team coordinated our 3-day conference venue and delegate passes flawlessly. True professionals in Ibadan."</p>
          <div class="testi-author">
            <strong>Engr. K. Alabi</strong>
            Chairman, Oyo Tech Summit
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="sec">
    <div class="wrap mini-cta">
      <div>
        <h3>Experience the OMGKHUB difference today.</h3>
        <p>Book a service or request a instant quote online.</p>
      </div>
      <button class="btn btn-primary" data-open-modal="serviceModal">Request Service Quote &rarr;</button>
    </div>
  </section>
</main>`;

  const footer = footerPartial();
  const modals = modalsPartial();
  const scripts = scriptsPartial();

  return head + header + content + footer + modals + scripts;
}

// ==========================================
// 6. WORK.HTML
// ==========================================
function buildWork() {
  const head = headPartial({
    title: 'Work & Portfolio | OMGKHUB Branding & Production Showcase',
    description: 'View recent projects delivered by OMGKHUB: Corporate Branding, PVC ID Cards, Printed Collateral, CAC Registrations, and Digital Media in Ibadan.',
    canonicalPath: 'work.html'
  });
  const header = headerPartial('work');

  const content = `<main id="main">
  <section class="page-hero">
    <div class="wrap">
      <div class="breadcrumb">
        <a href="index.html">Home</a> <span>/</span> <span>Work</span>
      </div>
      <h1>Featured <em>portfolio &amp; projects.</em></h1>
      <p class="page-sub">A showcase of design, printing, branding, and technical projects produced at OMGKHUB in Moniya, Ibadan.</p>
    </div>
  </section>

  <section class="sec">
    <div class="wrap">
      <div class="work-grid-full reveal">

        <div class="work-item">
          <div class="work-frame">
            <img src="images/image1.jpeg" alt="Corporate Branding &amp; Identity Design">
          </div>
          <span class="work-tag">01 / Corporate Branding</span>
        </div>

        <div class="work-item">
          <div class="work-frame">
            <img src="images/image2.jpeg" alt="PVC ID Card Production">
          </div>
          <span class="work-tag">02 / Plastic PVC ID Cards</span>
        </div>

        <div class="work-item">
          <div class="work-frame">
            <img src="images/image3.jpeg" alt="High-Volume Graphic Printing">
          </div>
          <span class="work-tag">03 / Commercial Printing</span>
        </div>

        <div class="work-item">
          <div class="work-frame">
            <img src="images/image1.jpeg" alt="Document Secretariat Services">
          </div>
          <span class="work-tag">04 / Secretariat Services</span>
        </div>

        <div class="work-item">
          <div class="work-frame">
            <img src="images/image2.jpeg" alt="CAC Business Registration">
          </div>
          <span class="work-tag">05 / CAC Registrations</span>
        </div>

        <div class="work-item">
          <div class="work-frame">
            <img src="images/image3.jpeg" alt="Gadgets &amp; Computer Accessories">
          </div>
          <span class="work-tag">06 / Gadgets &amp; Accessories</span>
        </div>

        <div class="work-item">
          <div class="work-frame">
            <img src="images/image1.jpeg" alt="Event &amp; Hotel Management">
          </div>
          <span class="work-tag">10 / Event Management</span>
        </div>

        <div class="work-item">
          <div class="work-frame">
            <img src="images/image2.jpeg" alt="OMGKHUB Direct Express Logistics">
          </div>
          <span class="work-tag">11 / OMGKHUB Direct Logistics</span>
        </div>

      </div>
    </div>
  </section>

  <section class="sec" style="background:var(--paper-dim); border-top:1px solid var(--line);">
    <div class="wrap mini-cta">
      <div>
        <h3>Have a project similar to these?</h3>
        <p>Let's discuss your custom specifications and timeline.</p>
      </div>
      <a href="contact.html" class="btn btn-primary">Start a Project &rarr;</a>
    </div>
  </section>
</main>`;

  const footer = footerPartial();
  const modals = modalsPartial();
  const scripts = scriptsPartial();

  return head + header + content + footer + modals + scripts;
}

// ==========================================
// 7. CONTACT.HTML
// ==========================================
function buildContact() {
  const head = headPartial({
    title: 'Contact Us | OMGKHUB Moniya, Ibadan, Nigeria',
    description: 'Get in touch with OMGKHUB in Moniya, Ibadan. Call +234 805 777 7884, email omgkhubng@gmail.com, view Google Maps location, or submit a message or service request.',
    canonicalPath: 'contact.html'
  });
  const header = headerPartial('contact');

  const content = `<main id="main">
  <section class="page-hero">
    <div class="wrap">
      <div class="breadcrumb">
        <a href="index.html">Home</a> <span>/</span> <span>Contact</span>
      </div>
      <h1>Get in touch <em>with us.</em></h1>
      <p class="page-sub">Call, email, visit our Moniya hub in Ibadan, or send a direct message below. We respond promptly.</p>
    </div>
  </section>

  <section class="sec" style="padding-top:70px;">
    <div class="wrap">
      <div class="contact-grid reveal">

        <!-- Phone Card -->
        <a class="contact-card magnetic" href="tel:+2348057777884" data-magnetic>
          <span class="contact-icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M5 4h3l1.5 4-2 1.5a11 11 0 005.5 5.5l1.5-2 4 1.5v3a1.5 1.5 0 01-1.6 1.5A14 14 0 014 5.6 1.5 1.5 0 015 4z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>
          </span>
          <span class="contact-label">Phone &amp; WhatsApp</span>
          <span class="contact-value">${PHONE}</span>
        </a>

        <!-- Email Card -->
        <a class="contact-card magnetic" href="mailto:${EMAIL}" data-magnetic>
          <span class="contact-icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.4"/><path d="M3 6l9 7 9-7" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>
          </span>
          <span class="contact-label">Email Address</span>
          <span class="contact-value">${EMAIL}</span>
        </a>

        <!-- Location Card (Fix: Google Maps Link) -->
        <a class="contact-card magnetic" href="${MAPS_URL}" target="_blank" rel="noopener" data-magnetic>
          <span class="contact-icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><circle cx="12" cy="10" r="2.4" stroke="currentColor" stroke-width="1.4"/></svg>
          </span>
          <span class="contact-label">Location (Google Maps)</span>
          <span class="contact-value">Moniya, Ibadan, Nigeria</span>
        </a>

      </div>
    </div>
  </section>

  <!-- GENERAL CONTACT FORM & SERVICE REQUEST -->
  <section class="sec" aria-labelledby="form-h">
    <div class="wrap">
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:36px;">

        <!-- GENERAL CONTACT FORM -->
        <div class="form-panel reveal">
          <div style="margin-bottom:24px;">
            <div class="eyebrow">General Message</div>
            <h2 id="form-h" style="font-family:var(--serif); font-size:28px; margin-top:6px;">Send us a message</h2>
            <p style="font-size:14px; color:var(--text-dim); margin-top:4px;">Land directly in our inbox at ${EMAIL}.</p>
          </div>

          <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact">
            <p class="honey" style="display:none;"><label>Don't fill this out if you're human: <input name="bot-field" /></label></p>

            <div class="field">
              <label for="c-name">Your Name</label>
              <input type="text" id="c-name" name="name" required placeholder="Full Name">
            </div>

            <div class="field">
              <label for="c-email">Email Address</label>
              <input type="email" id="c-email" name="email" required placeholder="name@domain.com">
            </div>

            <div class="field">
              <label for="c-phone">Phone / WhatsApp</label>
              <input type="tel" id="c-phone" name="phone" placeholder="+234 800 000 0000">
            </div>

            <div class="field">
              <label for="c-message">Message</label>
              <textarea id="c-message" name="message" required placeholder="How can we assist you today?"></textarea>
            </div>

            <button type="submit" class="btn btn-primary" style="width:100%; justify-content:center; padding:14px;">Send Message</button>
          </form>
        </div>

        <!-- DEDICATED SERVICE REQUEST FORM -->
        <div class="form-panel reveal" style="background:var(--paper-dim);">
          <div style="margin-bottom:24px;">
            <div class="eyebrow">Order &amp; Quote</div>
            <h2 style="font-family:var(--serif); font-size:28px; margin-top:6px;">Service Request Form</h2>
            <p style="font-size:14px; color:var(--text-dim); margin-top:4px;">Separate from general inquiry — book or order specific service lines.</p>
          </div>

          <form name="service-booking" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="service-booking">
            <p class="honey" style="display:none;"><label>Don't fill this out if you're human: <input name="bot-field" /></label></p>

            <div class="field">
              <label for="sr2-name">Your Name</label>
              <input type="text" id="sr2-name" name="name" required placeholder="Full Name">
            </div>

            <div class="field">
              <label for="sr2-phone">Phone / WhatsApp</label>
              <input type="tel" id="sr2-phone" name="phone" required placeholder="+234 800 000 0000">
            </div>

            <div class="field">
              <label for="sr2-service">Service Line</label>
              <select id="sr2-service" name="service" required>
                <option value="Corporate Branding">01. Corporate Branding &amp; Identity</option>
                <option value="PVC ID Cards">02. Plastic / PVC ID Cards</option>
                <option value="Graphic Design &amp; Printing">03. Graphic Design &amp; Printing</option>
                <option value="Document Secretariat">04. Document Processing</option>
                <option value="CAC Registrations">05. CAC &amp; Online Registrations</option>
                <option value="Gadgets &amp; Accessories">06. Gadgets &amp; Accessories</option>
                <option value="CV Writing">07. CV Writing &amp; Resume Enhancement</option>
                <option value="ICT Training">08. Practical ICT Training</option>
                <option value="FinTech Account Support">09. FinTech Account Opening Support</option>
                <option value="Event &amp; Hotel Management">10. Event and Hotel Management</option>
                <option value="OMGKHUB Direct">11. OMGKHUB Direct Logistics</option>
              </select>
            </div>

            <div class="field">
              <label for="sr2-details">Requirement Details</label>
              <textarea id="sr2-details" name="details" required placeholder="Provide quantities, deadlines, specs..."></textarea>
            </div>

            <button type="submit" class="btn btn-primary" style="width:100%; justify-content:center; padding:14px; background:var(--orange-deep);">Submit Service Booking</button>
          </form>
        </div>

      </div>
    </div>
  </section>
</main>`;

  const footer = footerPartial();
  const modals = modalsPartial();
  const scripts = scriptsPartial();

  return head + header + content + footer + modals + scripts;
}

// ==========================================
// 8. 404.HTML
// ==========================================
function build404() {
  const head = headPartial({
    title: 'Page Not Found (404) | OMGKHUB Ibadan',
    description: 'The page you requested could not be found. Return to the homepage or explore OMGKHUB services in Moniya, Ibadan.',
    canonicalPath: '404.html'
  });
  const header = headerPartial('404');

  const content = `<main id="main">
  <section class="hero-404">
    <div class="wrap">
      <div class="code-404">404</div>
      <h1 style="font-family:var(--serif); font-size:clamp(28px, 4vw, 48px); margin-top:16px;">Page Not Found</h1>
      <p style="max-width:500px; margin:16px auto 32px; color:var(--text-invert-dim); font-size:16px;">The page or resource you are looking for has been moved, renamed, or does not exist.</p>
      
      <div style="display:flex; justify-content:center; gap:16px; flex-wrap:wrap;">
        <a href="index.html" class="btn btn-primary">Return to Homepage</a>
        <a href="services.html" class="btn btn-secondary" style="color:var(--text-invert); border-color:var(--line-invert);">View Services</a>
        <a href="${WHATSAPP}" class="btn btn-secondary" style="color:var(--orange); border-color:var(--orange);">Chat on WhatsApp</a>
      </div>
    </div>
  </section>
</main>`;

  const footer = footerPartial();
  const modals = modalsPartial();
  const scripts = scriptsPartial();

  return head + header + content + footer + modals + scripts;
}

// Execute Generation
const pages = [
  { name: 'index.html', fn: buildIndex },
  { name: 'about.html', fn: buildAbout },
  { name: 'services.html', fn: buildServices },
  { name: 'process.html', fn: buildProcess },
  { name: 'why-us.html', fn: buildWhyUs },
  { name: 'work.html', fn: buildWork },
  { name: 'contact.html', fn: buildContact },
  { name: '404.html', fn: build404 },
];

pages.forEach(({ name, fn }) => {
  const filePath = path.join(ROOT_DIR, name);
  const html = fn();
  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Generated: ${name}`);
});

console.log('All static pages generated successfully!');
