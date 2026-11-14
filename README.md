# Samrakshan Dhara Foundation (SDF) — "The Living World"

Official website for **SAMRAKSHAN DHARA FOUNDATION**, an incorporated Section 8 Non-Profit Organisation dedicated to environmental protection, animal welfare, and community empowerment.

- **Legal Entity:** Section 8 Non-Profit Organisation
- **Incorporated:** 04 August 2026
- **CIN:** U88100JH2026NPL028718
- **Location:** Dhanbad, Jharkhand, India
- **Email:** samrakshandharafoundation@gmail.com
- **Instagram:** [https://www.instagram.com/samrakshan_dhara/](https://www.instagram.com/samrakshan_dhara/)

---

## Technical Architecture

- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS v4 with custom Oceanic Emerald luxury design system
- **Motion & 3D:** Three.js realistic rotating 3D Earth WebGL + CSS/Motion transitions
- **Routing:** React Router v7 with dedicated pages for all 7 initiatives
- **No Backend / No Runtime Database / No Paid API Keys required.**

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
```

Visit `http://localhost:3000` to browse the website.

---

## Production Build & Hostinger Deployment

### 1. Build the Production Bundle

```bash
npm run build
```

This compiles optimized HTML, CSS, JavaScript, textures, and static assets directly into the `dist/` directory.

### 2. Deploy to Hostinger

1. Log into your **Hostinger hPanel** dashboard.
2. Navigate to **Websites** → Select your domain → Open **File Manager**.
3. Open the `public_html/` folder.
4. Upload all contents from the generated `dist/` directory directly into `public_html/`.
   - Ensure `index.html` is located directly in `public_html/index.html`.
   - Ensure the `.htaccess` file (included in `public/.htaccess`) is present in `public_html/.htaccess`. This enables smooth browser routing for all SPA subpages (`/about`, `/initiatives/*`, `/vision`, `/gallery`, etc.).
5. Your website is immediately live!
