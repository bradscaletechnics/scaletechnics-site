/* ═══════════════════════════════════════════════════════════════
   SCALE TECHNICS AI SOLUTIONS — Main JavaScript
   scaletechnics.com
   ═══════════════════════════════════════════════════════════════ */

// ─── Navbar scroll effect ──────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ─── Smooth scroll for anchor links ───────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ─── Intersection Observer for fade-in animations ─────────────
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -40px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.problem-list li, .pkg-card, .pipeline-step, .timeline-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out, border-color 0.3s';
  observer.observe(el);
});

// ─── Stagger animations ──────────────────────────────────────
document.querySelectorAll('.pipeline-step').forEach((step, i) => {
  step.style.transitionDelay = `${i * 0.1}s`;
});

// ─── Agent character-select filter tabs ──────────────────────
(function () {
  const tabs = document.querySelectorAll('.agent-tab');
  const cards = document.querySelectorAll('.char-card');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;
      const track = document.getElementById('agentTrack');

      cards.forEach(card => {
        const cat = card.dataset.cat;
        if (filter === 'all' || cat === filter) {
          card.classList.remove('agent-hidden');
        } else {
          card.classList.add('agent-hidden');
        }
      });

      // Scroll back to start on filter change
      if (track) track.scrollLeft = 0;
    });
  });
})();

// ─── Agent scroll drag-to-scroll ─────────────────────────────
(function () {
  const track = document.getElementById('agentTrack');
  if (!track) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  track.addEventListener('mousedown', e => {
    isDown = true;
    track.classList.add('dragging');
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });
  track.addEventListener('mouseleave', () => {
    isDown = false;
    track.classList.remove('dragging');
  });
  track.addEventListener('mouseup', () => {
    isDown = false;
    track.classList.remove('dragging');
  });
  track.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.6;
    track.scrollLeft = scrollLeft - walk;
  });
})();

// ─── Mobile nav toggle ───────────────────────────────────────
const mobileToggle = document.querySelector('.mobile-toggle');
if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('show');
  });
}

// ─── Sticky CTA ──────────────────────────────────────────────
(function () {
  const dismissed = sessionStorage.getItem('stickyCTAdismissed');
  if (dismissed) return;

  const el = document.createElement('div');
  el.className = 'sticky-cta';
  el.innerHTML = `
    <div class="sticky-cta-inner">
      <a href="/pages/contact.html" class="sticky-cta-btn">Book a Walkthrough <span>→</span></a>
      <button class="sticky-cta-dismiss" aria-label="Dismiss">✕</button>
    </div>`;
  document.body.appendChild(el);

  el.querySelector('.sticky-cta-dismiss').addEventListener('click', () => {
    el.classList.remove('visible');
    sessionStorage.setItem('stickyCTAdismissed', '1');
  });

  let shown = false;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500 && !shown) {
      el.classList.add('visible');
      shown = true;
    } else if (window.scrollY < 200 && shown) {
      el.classList.remove('visible');
      shown = false;
    }
  }, { passive: true });
})();
