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

document.querySelectorAll('.problem-list li, .agent-card, .pkg-card, .pipeline-step, .timeline-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out, border-color 0.3s';
  observer.observe(el);
});

// ─── Stagger animations ──────────────────────────────────────
document.querySelectorAll('.agents-grid .agent-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.08}s`;
});
document.querySelectorAll('.pipeline-step').forEach((step, i) => {
  step.style.transitionDelay = `${i * 0.1}s`;
});

// ─── Mobile nav toggle ───────────────────────────────────────
const mobileToggle = document.querySelector('.mobile-toggle');
if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('show');
  });
}
