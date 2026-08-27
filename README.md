# Personal Resume Template

A modern, responsive and customizable **Persian-first personal resume & portfolio template** built with **Vite, Tailwind CSS and Vanilla JavaScript**.

> Fork it, replace the sample content, add your own resume, and publish your personal website.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Vite](https://img.shields.io/badge/Vite-powered-646CFF.svg)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-06B6D4.svg)](https://tailwindcss.com/)

## ✨ Features

- 🇮🇷 Persian-first, RTL layout
- 📱 Responsive design for mobile, tablet and desktop
- 🌙 Dark / light theme
- ✨ Smooth reveal animations
- ⌨️ Typewriter effect
- 🧩 Data-driven content architecture
- 🎨 Easy customization from one main content file
- 📄 Downloadable resume PDF
- ⚡ Vite production build
- 🚀 GitHub Pages deployment with GitHub Actions
- ♿ Keyboard-friendly interactions and reduced-motion support
- 🔌 No backend required

## 🖥️ Live Demo

After deploying the project, add your GitHub Pages URL here:

**Live Demo:** https://armin-panahi.github.io/personal-resume-template/

## 📸 Preview

Add screenshots or a short GIF here after the final UI review. A strong preview image makes the repository much easier to understand when shared on GitHub, LinkedIn and other communities.

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript (ES Modules)
- Tailwind CSS
- Vite

## 🚀 Getting Started

### Requirements

- Node.js 18+ recommended
- npm 9+ recommended

### 1. Fork the repository

Click **Fork** on GitHub, then clone your fork:

```bash
git clone https://github.com/armin-panahi/personal-resume-template.git
cd personal-resume-template
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

## 🎨 Customization

The main personal content is intentionally kept in one place:

```text
src/data/content.js
```

Update your:

- Name
- Job title
- Location
- Email
- GitHub / LinkedIn
- Introduction
- Stats
- Skills
- Work experience
- Projects
- Typewriter phrases

Then replace the sample resume file:

```text
src/assets/resume.pdf
```

### Quick customization flow

```text
Fork
  ↓
Edit src/data/content.js
  ↓
Replace src/assets/resume.pdf
  ↓
npm install
  ↓
npm run dev
  ↓
npm run build
  ↓
Deploy
```

## 🌐 Deploy to GitHub Pages

This repository includes a GitHub Actions workflow at:

```text
.github/workflows/deploy.yml
```

The workflow builds the project and deploys the generated `dist` directory to GitHub Pages whenever changes are pushed to `main`.

### One-time GitHub setup

1. Push the project to a **public GitHub repository** named `personal-resume-template`.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, select **GitHub Actions** if GitHub asks for a publishing source.
4. Push to `main` and open the **Actions** tab to watch the deployment.
5. Your site will be available at:

```text
https://armin-panahi.github.io/personal-resume-template/
```

## 📁 Project Structure

```text
personal-resume-template/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   └── feature_request.md
│   ├── workflows/
│   │   └── deploy.yml
│   └── pull_request_template.md
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   └── resume.pdf
│   ├── data/
│   │   └── content.js
│   ├── sections/
│   │   └── render.js
│   ├── icons.js
│   ├── main.js
│   └── style.css
├── .gitignore
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── SECURITY.md
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## 🤝 Contributing

Contributions are welcome. Before opening a pull request, please read [CONTRIBUTING.md](CONTRIBUTING.md).

Useful contribution areas include:

- Accessibility improvements
- Responsive UI improvements
- Performance improvements
- Bug fixes
- Documentation improvements
- New optional template features

## 🐛 Issues & Feature Requests

Found a bug or have an idea? Use the repository's GitHub Issue Templates so reports remain easy to understand and reproduce.

## 🔐 Security

Please do not publish sensitive security issues in public GitHub Issues. See [SECURITY.md](SECURITY.md) for the reporting process.

## ⭐ Support the Project

If this template helps you create your personal website:

- ⭐ Star the repository
- 🍴 Fork it
- 🐛 Report bugs
- 💡 Suggest improvements
- 🔧 Open a pull request
- 📣 Share it with other developers

Every contribution helps the project become more useful to the community.

## 📄 License

This project is released under the [MIT License](LICENSE).
