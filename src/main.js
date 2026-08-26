import './style.css';
import { icons } from './icons.js';
import { profile } from './data/content.js';
import { renderAll } from './sections/render.js';

/* ─── Render DOM ─── */
renderAll();

/* ─── Theme Toggle ─── */
const THEME_KEY = 'resume-theme';
const html = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

function getPreferredTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === 'dark' || stored === 'light') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  html.classList.toggle('dark', theme === 'dark');
  themeToggle.innerHTML = theme === 'dark' ? icons.sun : icons.moon;
  localStorage.setItem(THEME_KEY, theme);
}

applyTheme(getPreferredTheme());

themeToggle.addEventListener('click', () => {
  const next = html.classList.contains('dark') ? 'light' : 'dark';
  html.style.setProperty('color-scheme', next);
  applyTheme(next);
});

/* ─── Mobile Menu ─── */
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
let menuOpen = false;

function setMenuOpen(open) {
  menuOpen = open;
  mobileMenu.classList.toggle('hidden', !open);
  mobileMenuBtn.innerHTML = open ? icons.close : icons.menu;
  mobileMenuBtn.setAttribute('aria-expanded', String(open));
  mobileMenuBtn.setAttribute('aria-label', open ? 'بستن منو' : 'باز کردن منو');
}

mobileMenuBtn.innerHTML = icons.menu;

mobileMenuBtn.addEventListener('click', () => setMenuOpen(!menuOpen));

document.getElementById('mobile-nav-links').addEventListener('click', (e) => {
  if (e.target.closest('a')) setMenuOpen(false);
});

/* ─── Sticky Header ─── */
const header = document.getElementById('header');

window.addEventListener(
  'scroll',
  () => {
    header.classList.toggle('header-scrolled', window.scrollY > 20);
  },
  { passive: true }
);

/* ─── Active Nav Link ─── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function setActiveNav(id) {
  navLinks.forEach((link) => {
    link.classList.toggle('nav-link-active', link.dataset.section === id);
  });
}

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setActiveNav(entry.target.id);
    });
  },
  { rootMargin: '-35% 0px -45% 0px', threshold: 0 }
);

sections.forEach((section) => navObserver.observe(section));

/* ─── Smooth Scroll ─── */
document.addEventListener('click', (e) => {
  const anchor = e.target.closest('a[href^="#"]');
  if (!anchor) return;

  const targetId = anchor.getAttribute('href').slice(1);
  const target = document.getElementById(targetId);
  if (!target) return;

  e.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  history.pushState(null, '', `#${targetId}`);
});

/* ─── Scroll Reveal (IntersectionObserver) ─── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');

      const progressFill = entry.target.querySelector('.progress-fill');
      if (progressFill) {
        requestAnimationFrame(() => progressFill.classList.add('animate'));
      }

      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
);

function observeReveals() {
  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
}

observeReveals();

/* ─── Typewriter Effect ─── */
const typewriterEl = document.getElementById('typewriter');
const texts = profile.typewriterTexts;
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 80;

function typeWriter() {
  const current = texts[textIndex];

  if (!isDeleting) {
    typewriterEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === current.length) {
      isDeleting = true;
      typeSpeed = 2000;
    } else {
      typeSpeed = 80;
    }
  } else {
    typewriterEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typeSpeed = 500;
    } else {
      typeSpeed = 40;
    }
  }

  setTimeout(typeWriter, typeSpeed);
}

setTimeout(typeWriter, 1000);

/* ─── Progress bars on scroll (standalone observer for bars inside already-visible parents) ─── */
const progressObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('animate');
      progressObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('.progress-fill').forEach((bar) => progressObserver.observe(bar));
