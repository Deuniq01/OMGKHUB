const fs = require('fs');
const path = require('path');

const ROOT_DIR = __dirname;
const EMAIL = 'omgkhubng@gmail.com';
const PHONE = '+234 805 777 7884';
const WHATSAPP = 'https://wa.me/2348057777884';
const MAPS_URL = 'https://maps.google.com/?q=Moniya,+Ibadan,+Nigeria';
const SITE_URL = 'https://www.omgkhub.com';

function headPartial({ title, description, canonicalPath = 'index.html' }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<meta name="description" content="${description}">
<meta name="keywords" content="OMGKHUB, Orange Multimedia Global Konsult, corporate branding Ibadan, ID card printing Nigeria, CAC registration Ibadan, event management Ibadan, hotel management Ibadan, OMGKHUB Direct delivery">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${SITE_URL}/${canonicalPath}">

<meta property="og:type" content="website">
<meta property="og:site_name" content="OMGKHUB">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:image" content="/images/og-cover.jpg">
<meta property="og:url" content="${SITE_URL}/${canonicalPath}">
<meta property="og:locale" content="en_NG">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${description}">
<meta name="twitter:image" content="/images/og-cover.jpg">

<!-- Strictly Favicon Only -->
<link rel="icon" type="image/png" href="images/omgkhub-logo.png">
<link rel="apple-touch-icon" href="images/omgkhub-logo.png">

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Orange Multimedia Global Konsult (OMGKHUB)",
  "alternateName": "OMGKHUB",
  "description": "${description}",
  "slogan": "Professional Solutions... Exceptional Results.",
  "email": "${EMAIL}",
  "telephone": "+2348057777884",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Moniya, Ibadan",
    "addressRegion": "Oyo State",
    "addressCountry": "NG"
  },
  "areaServed": "NG",
  "priceRange": "$$"
}
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,400&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<link href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/style.css">
</head>
<body>
<a href="#main" class="skip-link">Skip to content</a>
<div class="grain" aria-hidden="true"></div>
<div class="reticle" id="reticle" aria-hidden="true"></div>
`;
}

function headerPartial(activeKey = 'home') {
  const links = [
    { key: 'about', label: 'About', href: 'about.html' },
    { key: 'services', label: 'Services', href: 'services.html' },
    { key: 'process', label: 'Process', href: 'process.html' },
    { key: 'why-us', label: 'Why Us', href: 'why-us.html' },
    { key: 'work', label: 'Work', href: 'work.html' },
    { key: 'contact', label: 'Contact', href: 'contact.html' },
  ];

  const navLinksHtml = links.map(l => 
    `<a href="${l.href}" class="${activeKey === l.key ? 'active' : ''}">${l.label}</a>`
  ).join('\n    ');

  const mobileLinksHtml = [
    { key: 'home', label: 'Home', href: 'index.html' },
    ...links
  ].map(l => {
    const isAct = activeKey === l.key;
    const styleAttr = isAct ? 'style="color:var(--orange); font-family:var(--serif); font-size:32px;"' : 'style="font-family:var(--serif); font-size:32px;"';
    return `<a href="${l.href}" ${styleAttr}>${l.label}</a>`;
  }).join('\n  ');

  return `<header class="nav" id="nav">
  <a href="index.html" class="brand" aria-label="OMGKHUB, homepage">
    <img class="seal" src="images/omgkhub-logo.png" alt="OMGKHUB logo" width="52" height="29">
    <span>
      <span class="brand-word">OMGKHUB</span>
      <span class="brand-sub">Orange Multimedia Global Konsult</span>
    </span>
  </a>

  <nav class="nav-links" aria-label="Primary">
    ${navLinksHtml}
  </nav>

  <div style="display:flex; align-items:center; gap:12px;">
    <button class="btn btn-secondary magnetic" data-magnetic data-open-modal="callbackModal" style="padding:10px 16px; font-size:12px;" aria-label="Request a Callback">
      <span class="btn-label">Callback</span>
    </button>
    <a href="${WHATSAPP}" class="btn btn-primary magnetic" data-magnetic aria-label="Book now on WhatsApp">
      <span class="btn-label">Book Now</span>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 18L18 6M18 6H9M18 6V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
  </div>

  <button class="nav-toggle" id="navToggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobileMenu">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
  </button>
</header>

<div id="mobileMenu" class="mobile-menu" style="display:none; position:fixed; inset:0; z-index:600; background:var(--ink); color:var(--text-invert); padding:100px 30px; flex-direction:column; gap:26px;">
  ${mobileLinksHtml}
  <div style="margin-top:20px; display:flex; flex-direction:column; gap:12px;">
    <button class="btn btn-secondary" data-open-modal="callbackModal" style="width:100%; text-align:center;">Request Callback</button>
    <a href="${WHATSAPP}" class="btn btn-primary" style="width:100%; text-align:center;">Book on WhatsApp</a>
  </div>
</div>
`;
}

function footerPartial() {
  return `<footer>
  <div class="wrap">
    <div class="foot-top">
      <div class="foot-brand">
        <a href="index.html" class="brand" aria-label="OMGKHUB homepage">
          <img class="seal" src="images/omgkhub-logo.png" alt="OMGKHUB logo" width="52" height="29">
          <span>
            <span class="brand-word" style="color:var(--text-invert)">OMGKHUB</span>
            <span class="brand-sub" style="color:var(--text-invert-dim)">Orange Multimedia Global Konsult</span>
          </span>
        </a>
        <p>CAC-registered multi-service business based in Moniya, Ibadan. Professional solutions, exceptional results.</p>
        <div class="social-row" aria-label="Social Profiles">
          <a class="social-icon" href="https://tiktok.com" aria-label="TikTok" target="_blank" rel="noopener"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg></a>
          <a class="social-icon" href="https://x.com" aria-label="X (Twitter)" target="_blank" rel="noopener"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4l16 16M4 20L20 4"/></svg></a>
          <a class="social-icon" href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg></a>
          <a class="social-icon" href="https://snapchat.com" aria-label="Snapchat" target="_blank" rel="noopener"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/></svg></a>
        </div>
      </div>

      <div class="foot-col">
        <h4>Navigation</h4>
        <ul>
          <li><a href="about.html">About Us</a></li>
          <li><a href="services.html">Services Index</a></li>
          <li><a href="process.html">Delivery Process</a></li>
          <li><a href="why-us.html">Why Choose Us</a></li>
          <li><a href="work.html">Portfolio Work</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>

      <div class="foot-col">
        <h4>Key Services</h4>
        <ul>
          <li><a href="services.html#service-01">Corporate Branding</a></li>
          <li><a href="services.html#service-02">Plastic PVC ID Cards</a></li>
          <li><a href="services.html#service-05">CAC Registrations</a></li>
          <li><a href="services.html#service-06">Gadgets & Accessories</a></li>
          <li><a href="services.html#service-10">Event & Hotel Management</a></li>
          <li><a href="services.html#service-11">OMGKHUB Direct</a></li>
        </ul>
      </div>

      <div class="foot-col">
        <h4>Contact Info</h4>
        <address style="display:flex; flex-direction:column; gap:10px; font-size:14.5px;">
          <span>Moniya, Ibadan, Nigeria</span>
          <a href="tel:+2348057777884">${PHONE}</a>
          <a href="mailto:${EMAIL}">${EMAIL}</a>
          <a href="${MAPS_URL}" target="_blank" rel="noopener" style="color:var(--orange)">View on Google Maps &rarr;</a>
        </address>
      </div>
    </div>

    <div class="foot-bottom">
      <span>&copy; <span id="year">2026</span> Orange Multimedia Global Konsult (OMGKHUB). All rights reserved.</span>
      <div style="display:flex; gap:18px;">
        <a href="#" data-open-modal="callbackModal">Request Callback</a>
        <a href="contact.html">Service Request</a>
      </div>
    </div>
  </div>
</footer>
`;
}

function modalsPartial() {
  return `
<!-- Callback Request Modal -->
<div id="callbackModal" class="modal-overlay" aria-hidden="true">
  <div class="modal-backdrop"></div>
  <div class="modal-content">
    <button class="modal-close" aria-label="Close modal">&times;</button>
    <div style="margin-bottom:20px;">
      <div class="eyebrow">Quick Contact</div>
      <h3 style="font-family:var(--serif); font-size:24px; margin-top:6px;">Request a Callback</h3>
      <p style="font-size:14px; color:var(--text-dim); margin-top:4px;">Leave your name and phone number. Our team in Ibadan will call you back promptly.</p>
    </div>
    <form name="callback" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="callback">
      <p class="honey" style="display:none;"><label>Don't fill this out if you're human: <input name="bot-field" /></label></p>
      <div class="field">
        <label for="cb-name">Your Name</label>
        <input type="text" id="cb-name" name="name" placeholder="e.g. Adebayo Johnson" required>
      </div>
      <div class="field">
        <label for="cb-phone">Phone / WhatsApp Number</label>
        <input type="tel" id="cb-phone" name="phone" placeholder="+234 800 000 0000" required>
      </div>
      <div class="field">
        <label for="cb-service">Service Interested In</label>
        <select id="cb-service" name="service">
          <option value="General Inquiry">General Inquiry</option>
          <option value="Corporate Branding">Corporate Branding & Identity</option>
          <option value="PVC ID Cards">Plastic / PVC ID Cards</option>
          <option value="CAC Registration">CAC & Online Registrations</option>
          <option value="Gadgets">Gadgets & Accessories</option>
          <option value="Event & Hotel Management">Event & Hotel Management</option>
          <option value="OMGKHUB Direct">OMGKHUB Direct Delivery</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary" style="width:100%; justify-content:center; padding:14px;">Request Callback Now</button>
    </form>
  </div>
</div>

<!-- Service Request Modal -->
<div id="serviceModal" class="modal-overlay" aria-hidden="true">
  <div class="modal-backdrop"></div>
  <div class="modal-content">
    <button class="modal-close" aria-label="Close modal">&times;</button>
    <div style="margin-bottom:20px;">
      <div class="eyebrow">Order & Booking</div>
      <h3 style="font-family:var(--serif); font-size:24px; margin-top:6px;">Service Request Form</h3>
      <p style="font-size:14px; color:var(--text-dim); margin-top:4px;">Specify your requirements and get a custom quote within hours.</p>
    </div>
    <form name="service-request-modal" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="service-request-modal">
      <p class="honey" style="display:none;"><label>Don't fill this out if you're human: <input name="bot-field" /></label></p>
      <div class="form-row">
        <div class="field">
          <label for="sr-name">Full Name</label>
          <input type="text" id="sr-name" name="name" required>
        </div>
        <div class="field">
          <label for="sr-phone">Phone / WhatsApp</label>
          <input type="tel" id="sr-phone" name="phone" required>
        </div>
      </div>
      <div class="field">
        <label for="sr-email">Email Address</label>
        <input type="email" id="sr-email" name="email" required>
      </div>
      <div class="field">
        <label for="sr-service">Required Service</label>
        <select id="sr-service" name="service" required>
          <option value="Corporate Branding">01. Corporate Branding & Identity Design</option>
          <option value="Plastic PVC ID Cards">02. Plastic / PVC ID Card Printing</option>
          <option value="Graphic Design & Printing">03. Graphic Design & High-Volume Printing</option>
          <option value="Document Processing">04. Document Processing & Secretariat Services</option>
          <option value="CAC & Online Registrations">05. CAC & Online Registrations</option>
          <option value="Gadgets & Accessories">06. Gadgets & Accessories</option>
          <option value="CV Writing">07. Professional CV Writing & Resume Enhancement</option>
          <option value="Practical ICT Training">08. Practical ICT & Digital Skills Training</option>
          <option value="FinTech Account Support">09. FinTech Services - Account Opening Support</option>
          <option value="Event & Hotel Management">10. Event and Hotel Management Services</option>
          <option value="OMGKHUB Direct">11. OMGKHUB Direct (Logistics & Express Delivery)</option>
        </select>
      </div>
      <div class="field">
        <label for="sr-details">Project / Order Details</label>
        <textarea id="sr-details" name="details" placeholder="Describe scope, quantity, deadlines, or specific preferences..." required></textarea>
      </div>
      <button type="submit" class="btn btn-primary" style="width:100%; justify-content:center; padding:14px;">Submit Service Request</button>
    </form>
  </div>
</div>
`;
}

function scriptsPartial() {
  return `<script src="js/main.js"></script>
</body>
</html>`;
}

module.exports = {
  headPartial,
  headerPartial,
  footerPartial,
  modalsPartial,
  scriptsPartial,
  EMAIL,
  PHONE,
  WHATSAPP,
  MAPS_URL,
  SITE_URL
};
