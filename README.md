# 🚀 Pal Rawal — Personal Portfolio

A futuristic, premium developer portfolio inspired by Apple, Tesla, and AI startups.

---

## ✨ Features

- **Dark / Light mode** toggle
- **Animated particle canvas** (interactive with mouse)
- **Typing effect** cycling through titles
- **Glassmorphism** cards with glow borders
- **3D tilt** effect on project cards
- **Animated skill progress bars** (triggered on scroll)
- **Animated stat counters** (triggered on scroll)
- **Custom cursor** with lagging ring
- **Scroll progress bar**
- **Back-to-top** button
- **Contact form** with validation
- **Responsive** for mobile, tablet, desktop
- **Preloader** animation

---

## 🗂 Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Preloader.jsx       # Loading screen
│   │   ├── CustomCursor.jsx    # Custom cursor effect
│   │   ├── ScrollProgress.jsx  # Top progress bar
│   │   ├── Navbar.jsx          # Fixed navigation
│   │   ├── Hero.jsx + .css     # Hero section with particles
│   │   ├── About.jsx + .css    # About + stats
│   │   ├── Skills.jsx + .css   # Animated skill bars
│   │   ├── Projects.jsx + .css # Tilt project cards
│   │   ├── Resume.jsx + .css   # Resume preview + download
│   │   ├── Education.jsx + .css# Education + certifications
│   │   ├── Contact.jsx + .css  # Contact form + social links
│   │   ├── Footer.jsx
│   │   └── BackToTop.jsx
│   ├── App.js
│   ├── index.js
│   └── index.css               # Global styles + CSS variables
├── package.json
├── tailwind.config.js
└── README.md
```

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 18 |
| Styling | CSS Modules + CSS Variables |
| Animation | CSS Animations + Canvas API |
| Icons | React Icons (Feather) |
| Fonts | Rajdhani, Exo 2, JetBrains Mono |

---

## ⚡ Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start dev server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production

```bash
npm run build
```

---

## 📧 Contact Integration

To make the contact form actually send emails, integrate **EmailJS**:

1. Create an account at [emailjs.com](https://www.emailjs.com/)
2. Create a service + template
3. In `Contact.jsx`, replace the `setTimeout` block with:

```js
import emailjs from 'emailjs-com';

emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
  from_name: form.name,
  from_email: form.email,
  subject: form.subject,
  message: form.message,
}, 'YOUR_PUBLIC_KEY')
  .then(() => setStatus('success'))
  .catch(() => setStatus('error'));
```

---

## 📄 Resume

Place your PDF resume at `public/resume.pdf` so the download button works.

---

## 🌐 Deployment

### Vercel (recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop the `build/` folder to Netlify
```

### GitHub Pages
```bash
npm install gh-pages --save-dev
# Add to package.json: "homepage": "https://palrawal08.github.io/portfolio"
# Add scripts: "predeploy": "npm run build", "deploy": "gh-pages -d build"
npm run deploy
```

---

## 🎨 Customization

All colors are CSS variables in `src/index.css`:

```css
--neon-blue: #00d4ff;
--neon-purple: #7b2fff;
--neon-cyan: #00ffcc;
--neon-pink: #ff2d78;
```

Change these to instantly retheme the entire site.

---

## 📱 Responsive Breakpoints

| Breakpoint | Width |
|---|---|
| Mobile | < 560px |
| Tablet | 560px – 900px |
| Desktop | > 900px |
| Wide | > 1200px |

---

Built with ❤️ by **Pal Rawal**
