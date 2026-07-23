document.addEventListener('DOMContentLoaded', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;

  // ---- Nav solid on scroll ----
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => { nav.classList.toggle('solid', window.scrollY > 40); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ---- Mobile menu ----
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
      const open = mobileMenu.classList.contains('active');
      if (open) {
        mobileMenu.classList.remove('active');
        mobileMenu.style.display = 'none';
        navToggle.setAttribute('aria-expanded', 'false');
      } else {
        mobileMenu.classList.add('active');
        mobileMenu.style.display = 'flex';
        navToggle.setAttribute('aria-expanded', 'true');
      }
    });

    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileMenu.style.display = 'none';
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---- Custom cursor (reticle) ----
  const reticle = document.getElementById('reticle');
  if (reticle) {
    if (finePointer && !reduceMotion) {
      window.addEventListener('mousemove', (e) => {
        reticle.classList.add('visible');
        reticle.style.left = e.clientX + 'px';
        reticle.style.top = e.clientY + 'px';
      });
      document.querySelectorAll('a, button, .m-card, summary, .contact-card, input, select, textarea').forEach(el => {
        el.addEventListener('mouseenter', () => reticle.classList.add('active'));
        el.addEventListener('mouseleave', () => reticle.classList.remove('active'));
      });
    } else {
      reticle.style.display = 'none';
    }
  }

  // ---- Magnetic buttons ----
  if (finePointer && !reduceMotion) {
    document.querySelectorAll('[data-magnetic]').forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${x * 0.22}px, ${y * 0.4}px)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  }

  // ---- Scroll reveals (Native IntersectionObserver) ----
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length > 0) {
    if ('IntersectionObserver' in window && !reduceMotion) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
      revealEls.forEach(el => observer.observe(el));
    } else {
      revealEls.forEach(el => el.classList.add('in'));
    }
  }

  // ---- Dynamic copyright year ----
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

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

  // ---- Callback & Service Request Modals ----
  const callbackModal = document.getElementById('callbackModal');
  const serviceModal = document.getElementById('serviceModal');

  document.querySelectorAll('[data-open-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = btn.getAttribute('data-open-modal');
      const targetModal = document.getElementById(modalId);
      if (targetModal) {
        targetModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
    });
  });

  document.querySelectorAll('.modal-close, .modal-backdrop').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
      document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.style.display = 'none';
      });
      document.body.style.overflow = '';
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.style.display = 'none';
      });
      document.body.style.overflow = '';
    }
  });
});
