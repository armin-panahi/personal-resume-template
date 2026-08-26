import { icons } from '../icons.js';
import {
  profile,
  navItems,
  skillTags,
  skillBars,
  experiences,
  projects,
} from '../data/content.js';

export function renderNavigation() {
  const logo = document.getElementById('nav-logo');
  logo.innerHTML = `${icons.logo}<span>حسن.dev</span>`;

  const navLinks = document.getElementById('nav-links');
  const mobileNavLinks = document.getElementById('mobile-nav-links');

  navItems.forEach((item) => {
    navLinks.innerHTML += `<li><a href="#${item.id}" class="nav-link" data-section="${item.id}">${item.label}</a></li>`;
    mobileNavLinks.innerHTML += `<li><a href="#${item.id}" class="nav-link block" data-section="${item.id}">${item.label}</a></li>`;
  });
}

export function renderHero() {
  const section = document.getElementById('hero');
  section.innerHTML = `
    <div class="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center w-full min-w-0">
      <div class="order-2 lg:order-1 min-w-0">
        <div class="hero-item hero-delay-1 section-badge">
          <span class="status-dot"></span>
          آماده همکاری
        </div>

        <p class="hero-item hero-delay-1 text-slate-500 dark:text-slate-400 text-sm mb-3">
          سلام، من
        </p>

        <h1 class="hero-item hero-delay-2 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.15] tracking-tight text-slate-900 dark:text-white mb-4">
          ${profile.name}
        </h1>

        <p class="hero-item hero-delay-3 text-xl sm:text-2xl font-semibold text-slate-600 dark:text-slate-300 mb-6 min-h-[2.5rem] break-words">
          <span id="typewriter" class="typewriter-cursor gradient-text"></span>
        </p>

        <p class="hero-item hero-delay-3 text-slate-500 dark:text-slate-400 text-base sm:text-lg leading-[1.9] mb-8 max-w-lg">
          ${profile.bio}
        </p>

        <div class="hero-item hero-delay-4 flex flex-wrap gap-3 mb-10">
          <a href="${profile.resumeUrl}" download class="btn-primary" id="download-resume">
            ${icons.download}
            دریافت رزومه
          </a>
          <a href="#projects" class="btn-outline">
            ${icons.layers}
            دیدن نمونه‌کارها
          </a>
        </div>

        <div class="hero-item hero-delay-5 grid grid-cols-3 gap-2 sm:gap-3 max-w-md mb-8 min-w-0">
          ${profile.stats.map((stat) => `
            <div class="stat-card">
              <div class="stat-value">${stat.value}</div>
              <div class="stat-label">${stat.label}</div>
            </div>
          `).join('')}
        </div>

        <div class="hero-item hero-delay-5 flex flex-wrap items-center gap-5 text-sm text-slate-500 dark:text-slate-400">
          <span class="flex items-center gap-2">${icons.location} ${profile.location}</span>
          <span class="flex items-center gap-2">${icons.mail} ${profile.email}</span>
        </div>
      </div>

      <div class="hero-item hero-delay-3 order-1 lg:order-2 flex justify-center lg:justify-end min-w-0 w-full">
        <div class="profile-wrap">
          <div class="profile-ring"></div>
          <div class="relative glass-card p-6 w-full max-w-[260px] sm:max-w-[280px] mx-auto shadow-card">
            <div class="status-badge">
              <span class="status-dot"></span>
              آنلاین
            </div>
            <div class="w-full aspect-square rounded-2xl bg-gradient-to-br from-primary-500 via-primary-600 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/30">
              <span class="text-white text-7xl font-black select-none">${profile.name.charAt(0)}</span>
            </div>
            <div class="mt-5 text-center">
              <p class="font-bold text-lg text-slate-900 dark:text-white">${profile.name}</p>
              <p class="text-primary-600 dark:text-primary-400 text-sm mt-1 font-medium">${profile.title}</p>
            </div>
            <div class="flex justify-center gap-2 mt-4 pt-4 border-t border-slate-200/60 dark:border-slate-700/50">
              <a href="${profile.github}" target="_blank" rel="noopener noreferrer" class="icon-btn !p-2" aria-label="گیت‌هاب">${icons.github}</a>
              <a href="${profile.linkedin}" target="_blank" rel="noopener noreferrer" class="icon-btn !p-2" aria-label="لینکدین">${icons.linkedin}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function renderSkills() {
  const section = document.getElementById('skills');
  const tagsHtml = skillTags
    .map((tag, i) => `<span class="skill-tag reveal" style="transition-delay:${i * 40}ms">${tag}</span>`)
    .join('');

  const barsHtml = skillBars
    .map(
      (skill, i) => `
      <div class="reveal" style="transition-delay:${i * 70}ms">
        <div class="flex justify-between mb-2">
          <span class="text-sm font-medium text-slate-700 dark:text-slate-300">${skill.name}</span>
          <span class="text-sm font-bold text-primary-600 dark:text-primary-400">${skill.level}٪</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="--progress:${skill.level}%"></div>
        </div>
      </div>`
    )
    .join('');

  section.innerHTML = `
    <div class="reveal mb-12">
      <div class="section-badge">${icons.code} مهارت‌ها</div>
      <h2 class="section-title">ابزارها و مهارت‌های من</h2>
      <p class="section-subtitle">زبان‌ها، فریم‌ورک‌ها و ابزارهایی که هر روز باهاشون کار می‌کنم.</p>
    </div>

    <div class="grid lg:grid-cols-2 gap-6">
      <div class="glass-card p-6 sm:p-8 reveal">
        <h3 class="text-sm font-bold text-slate-900 dark:text-white mb-5">فناوری‌های اصلی</h3>
        <div class="flex flex-wrap gap-2.5">${tagsHtml}</div>
      </div>
      <div class="glass-card p-6 sm:p-8 reveal">
        <h3 class="text-sm font-bold text-slate-900 dark:text-white mb-6">سطح تسلط</h3>
        <div class="space-y-5">${barsHtml}</div>
      </div>
    </div>
  `;
}

export function renderExperience() {
  const section = document.getElementById('experience');
  const itemsHtml = experiences
    .map(
      (exp, i) => `
      <div class="relative pr-10 pb-10 last:pb-0 reveal" style="transition-delay:${i * 100}ms">
        <div class="timeline-dot"></div>
        <div class="glass-card-hover p-6">
          <div class="flex flex-wrap items-center gap-2 mb-3">
            <span class="text-xs font-bold px-3 py-1 rounded-lg bg-primary-50 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400">${exp.period}</span>
            <span class="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5">${icons.briefcase} ${exp.company}</span>
          </div>
          <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">${exp.role}</h3>
          <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">${exp.description}</p>
          <div class="flex flex-wrap gap-2">
            ${exp.tags.map((t) => `<span class="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">${t}</span>`).join('')}
          </div>
        </div>
      </div>`
    )
    .join('');

  section.innerHTML = `
    <div class="reveal mb-12">
      <div class="section-badge">${icons.briefcase} سوابق</div>
      <h2 class="section-title">مسیر حرفه‌ای من</h2>
      <p class="section-subtitle">نگاهی به مسیر شغلی‌ام؛ از اولین پروژه‌ها تا کارهای اخیر.</p>
    </div>
    <div class="relative mr-1">${itemsHtml}<div class="timeline-line" aria-hidden="true"></div></div>
  `;
}

export function renderProjects() {
  const section = document.getElementById('projects');
  const cardsHtml = projects
    .map(
      (project, i) => `
      <article class="project-card group reveal" style="transition-delay:${i * 80}ms">
        <div class="project-image-wrap">
          <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy" />
          <div class="project-overlay">
            <h3 class="text-white font-bold text-lg mb-1">${project.title}</h3>
            <p class="text-slate-300 text-sm mb-3 leading-relaxed">${project.description}</p>
            <div class="flex flex-wrap gap-1.5 mb-3">
              ${project.tags.map((t) => `<span class="text-xs px-2 py-0.5 rounded-md bg-white/15 text-white/90">${t}</span>`).join('')}
            </div>
            ${project.link ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-sm font-medium text-white/90 hover:text-white transition-all duration-300">
              مشاهده ${icons.externalLink}
            </a>` : ''}
          </div>
        </div>
        <div class="p-5">
          <h3 class="font-bold text-slate-900 dark:text-white mb-1">${project.title}</h3>
          <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">${project.description}</p>
        </div>
      </article>`
    )
    .join('');

  section.innerHTML = `
    <div class="reveal mb-12">
      <div class="section-badge">${icons.layers} پروژه‌ها</div>
      <h2 class="section-title">نمونه‌کارهای منتخب</h2>
      <p class="section-subtitle">چند نمونه از پروژه‌هایی که طراحی و توسعه‌شون رو بر عهده داشتم.</p>
    </div>
    <div class="grid sm:grid-cols-2 gap-5">${cardsHtml}</div>
  `;
}

export function renderContact() {
  const section = document.getElementById('contact');
  section.innerHTML = `
    <div class="glass-card p-10 sm:p-14 text-center reveal relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 pointer-events-none"></div>
      <div class="relative">
        <div class="section-badge mx-auto">تماس</div>
        <h2 class="section-title mb-3">همکاری کنیم؟</h2>
        <p class="section-subtitle !mb-8 mx-auto">اگر پروژه‌ای دارید یا به دنبال نیروی فرانت‌اند هستید، خوشحال می‌شوم باهاتون صحبت کنم.</p>
        <div class="flex flex-wrap justify-center gap-3">
          <a href="mailto:${profile.email}" class="btn-primary">${icons.mail} ارسال ایمیل</a>
          <a href="${profile.linkedin}" target="_blank" rel="noopener noreferrer" class="btn-outline">${icons.linkedin} لینکدین</a>
        </div>
      </div>
    </div>
  `;
}

export function renderFooter() {
  const footer = document.getElementById('footer');
  const year = new Date().getFullYear();
  footer.innerHTML = `
    <div class="border-t border-slate-200/60 dark:border-slate-800/60">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-400">
        <p>© ${year} ${profile.name}</p>
        <p class="flex items-center gap-1.5">طراحی و توسعه با ${icons.code}</p>
      </div>
    </div>
  `;
}

export function renderAll() {
  renderNavigation();
  renderHero();
  renderSkills();
  renderExperience();
  renderProjects();
  renderContact();
  renderFooter();
}
