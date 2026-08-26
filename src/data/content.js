const resumeUrl = new URL('../assets/resume.pdf', import.meta.url).href;

export const profile = {
  name: 'نام شما',
  title: 'توسعه‌دهنده فرانت‌اند',
  location: 'شهر شما، کشور شما',
  email: 'you@example.com',
  github: 'https://github.com/your-username',
  linkedin: 'https://www.linkedin.com/in/your-username/',
  resumeUrl,
  typewriterTexts: [
    'توسعه‌دهنده فرانت‌اند',
    'طراح رابط کاربری مدرن',
    'عاشق تجربه کاربری خوب',
  ],
  bio: 'این متن نمونه را با معرفی کوتاه، تخصص‌ها و ارزش پیشنهادی خودتان جایگزین کنید.',
  stats: [
    { value: '+۳', label: 'سال تجربه' },
    { value: '+۲۰', label: 'پروژه انجام‌شده' },
    { value: '+۱۰', label: 'همکاری موفق' },
  ],
};

export const navItems = [
  { id: 'hero', label: 'خانه' },
  { id: 'skills', label: 'مهارت‌ها' },
  { id: 'experience', label: 'سوابق' },
  { id: 'projects', label: 'پروژه‌ها' },
  { id: 'contact', label: 'تماس' },
];

export const skillTags = [
  'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vue.js',
  'Next.js', 'Tailwind CSS', 'Vite', 'Git', 'Figma', 'REST API', 'PWA', 'تست نویسی',
];

export const skillBars = [
  { name: 'توسعه فرانت‌اند', level: 92 },
  { name: 'طراحی واکنش‌گرا', level: 95 },
  { name: 'جاوااسکریپت و تایپ‌اسکریپت', level: 88 },
  { name: 'بهینه‌سازی عملکرد', level: 85 },
  { name: 'دسترسی‌پذیری وب', level: 80 },
  { name: 'کار تیمی و چابک', level: 90 },
];

export const experiences = [
  {
    period: '۱۴۰۲ — اکنون',
    role: 'عنوان شغلی شما',
    company: 'نام شرکت',
    description: 'شرح کوتاهی از مسئولیت‌ها، دستاوردها و تأثیر شما در این موقعیت.',
    tags: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    period: '۱۳۹۹ — ۱۴۰۲',
    role: 'عنوان شغلی قبلی',
    company: 'نام شرکت یا پروژه',
    description: 'یک توضیح کوتاه درباره کاری که انجام داده‌اید و نتیجه‌ای که ایجاد کرده‌اید.',
    tags: ['Vue.js', 'Vite', 'API'],
  },
];

const svgFont = 'Vazirmatn, Tahoma, sans-serif';

function projectImage(title, color1, color2) {
  return (
    'data:image/svg+xml,' +
    encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="240" viewBox="0 0 400 240"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:${color1}"/><stop offset="100%" style="stop-color:${color2}"/></linearGradient></defs><rect fill="url(#g)" width="400" height="240"/><text x="200" y="125" text-anchor="middle" fill="white" font-family="${svgFont}" font-size="20">${title}</text></svg>`)
  );
}

export const projects = [
  {
    title: 'پروژه نمونه اول',
    description: 'توضیح کوتاه درباره پروژه، مسئله‌ای که حل می‌کند و نقش شما در توسعه آن.',
    image: projectImage('پروژه نمونه', '#444ce7', '#0ea5e9'),
    tags: ['React', 'TypeScript'],
    link: '',
  },
  {
    title: 'پروژه نمونه دوم',
    description: 'توضیح کوتاه درباره پروژه و مهم‌ترین قابلیت‌ها یا دستاوردهای آن.',
    image: projectImage('پروژه نمونه', '#7c3aed', '#db2777'),
    tags: ['Next.js', 'Tailwind'],
    link: '',
  },
  {
    title: 'پروژه نمونه سوم',
    description: 'توضیح کوتاه درباره پروژه و تکنولوژی‌های استفاده‌شده در آن.',
    image: projectImage('پروژه نمونه', '#0284c7', '#059669'),
    tags: ['Vue', 'Vite'],
    link: '',
  },
  {
    title: 'رزومه آنلاین',
    description: 'همین قالب رزومه شخصی؛ آن را شخصی‌سازی کنید و پروژه خودتان را جایگزین کنید.',
    image: projectImage('رزومه آنلاین', '#d97706', '#dc2626'),
    tags: ['Vite', 'Tailwind', 'Vanilla JS'],
    link: 'https://github.com/your-username/personal-resume-template',
  },
];
