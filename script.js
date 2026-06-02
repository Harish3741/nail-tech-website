// ─── Navbar scroll behaviour ─────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

// ─── Mobile nav toggle ────────────────────────────────────────────────
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ─── Accordion ───────────────────────────────────────────────────────
document.querySelectorAll('.accordion-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const isOpen = trigger.getAttribute('aria-expanded') === 'true';
    const body   = trigger.nextElementSibling;

    // Close all
    document.querySelectorAll('.accordion-trigger').forEach(t => {
      t.setAttribute('aria-expanded', 'false');
      t.nextElementSibling.classList.remove('open');
    });

    // Open clicked (if it wasn't already open)
    if (!isOpen) {
      trigger.setAttribute('aria-expanded', 'true');
      body.classList.add('open');
    }
  });
});

// ─── Gallery lightbox ────────────────────────────────────────────────
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
lightbox.innerHTML = '<img id="lightbox-img" src="" alt=""><button id="lightbox-close" aria-label="Close">&times;</button>';
document.body.appendChild(lightbox);

const lightboxImg = document.getElementById('lightbox-img');

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

document.querySelectorAll('.gallery-tile').forEach(tile => {
  tile.addEventListener('click', e => {
    e.preventDefault();
    const img = tile.querySelector('img');
    openLightbox(img.src, img.alt);
  });
});

document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

// ─── Feedback form submission ─────────────────────────────────────────
const SCRIPT_URL = 'PASTE_YOUR_APPS_SCRIPT_URL_HERE';

const feedbackForm   = document.querySelector('.feedback-form');
const handleInput    = document.querySelector('.feedback-input');
const messageInput   = document.querySelector('.feedback-textarea');
const submitBtn      = document.querySelector('.feedback-submit');

submitBtn.addEventListener('click', async e => {
  e.preventDefault();
  const handle  = handleInput.value.trim();
  const message = messageInput.value.trim();

  if (!message) {
    messageInput.style.borderColor = 'var(--rose)';
    messageInput.focus();
    return;
  }
  messageInput.style.borderColor = '';

  submitBtn.textContent = 'Sending…';
  submitBtn.style.pointerEvents = 'none';

  try {
    await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ handle, message }),
    });
    handleInput.value  = '';
    messageInput.value = '';
    submitBtn.textContent = 'Sent — thank you! 🤍';
    setTimeout(() => {
      submitBtn.textContent = 'Send Feedback';
      submitBtn.style.pointerEvents = '';
    }, 4000);
  } catch {
    submitBtn.textContent = 'Something went wrong — try again';
    submitBtn.style.pointerEvents = '';
  }
});

// ─── Scroll fade-in ───────────────────────────────────────────────────
const fadeTargets = document.querySelectorAll(
  '.pricing-card, .section-title, .section-sub, .booking-steps li, .about-text, .about-logo, .gallery-tile'
);

fadeTargets.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger siblings slightly
      const siblings = [...entry.target.parentElement.children];
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, idx * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

fadeTargets.forEach(el => observer.observe(el));
