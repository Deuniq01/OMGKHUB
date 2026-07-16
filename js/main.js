
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;

  // ---- Smooth scroll (Lenis) ----
  if (!reduceMotion && window.Lenis) {
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    function raf(time){ lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    if (window.gsap && window.ScrollTrigger) {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time)=>{ lenis.raf(time*1000); });
      gsap.ticker.lagSmoothing(0);
    }
  }

  // ---- Nav solid on scroll ----
  const nav = document.getElementById('nav');
  const onScroll = () => { nav.classList.toggle('solid', window.scrollY > 40); };
  document.addEventListener('scroll', onScroll, { passive:true });
  onScroll();

  // ---- Mobile menu ----
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  navToggle.addEventListener('click', () => {
    const open = mobileMenu.style.display === 'flex';
    mobileMenu.style.display = open ? 'none' : 'flex';
    navToggle.setAttribute('aria-expanded', String(!open));
  });
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    navToggle.setAttribute('aria-expanded','false');
  }));

  // ---- Custom cursor (reticle) ----
  const reticle = document.getElementById('reticle');
  if (finePointer && !reduceMotion) {
    window.addEventListener('mousemove', (e) => {
      reticle.classList.add('visible');
      reticle.style.left = e.clientX + 'px';
      reticle.style.top = e.clientY + 'px';
    });
    document.querySelectorAll('a, button, .m-card, summary, .contact-card').forEach(el => {
      el.addEventListener('mouseenter', () => reticle.classList.add('active'));
      el.addEventListener('mouseleave', () => reticle.classList.remove('active'));
    });
  } else {
    reticle.style.display = 'none';
  }

  // ---- Magnetic buttons ----
  if (finePointer && !reduceMotion) {
    document.querySelectorAll('[data-magnetic]').forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width/2;
        const y = e.clientY - r.top - r.height/2;
        el.style.transform = `translate(${x*0.25}px, ${y*0.5}px)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  }

  // ---- Scroll reveals ----
  const revealEls = document.querySelectorAll('.reveal');
  if (window.gsap && window.ScrollTrigger && !reduceMotion) {
    gsap.registerPlugin(ScrollTrigger);
    revealEls.forEach(el => {
      ScrollTrigger.create({
        trigger: el, start: 'top 85%',
        onEnter: () => el.classList.add('in'),
        once: true
      });
    });
    // hero line reveal
    gsap.from('.hero .line > span', {
      yPercent: 110, duration: 1.1, stagger: 0.09, ease: 'expo.out', delay: 0.2
    });
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  document.getElementById('year').textContent = new Date().getFullYear();

  // ---- Workflow accordion (process section) ----
  const wfList = document.getElementById('wfList');
  const wfFill = document.getElementById('wfFill');
  if (wfList && wfFill) {
    const wfItems = Array.from(wfList.querySelectorAll('.wf-item'));
    let highestOpened = 0;
    const updateFill = () => {
      const pct = ((highestOpened + 1) / wfItems.length) * 100;
      wfFill.style.width = pct + '%';
    };
    wfItems.forEach((item, i) => {
      item.addEventListener('toggle', () => {
        if (item.open) {
          wfItems.forEach(other => { if (other !== item) other.open = false; });
          highestOpened = Math.max(highestOpened, i);
          updateFill();
        }
      });
    });
    updateFill();
  }
