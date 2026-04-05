# Two Paths, One Promise

A production-ready wedding website built with **Next.js + TypeScript + Tailwind CSS + Framer Motion**, designed with a luxury editorial feel.

## Folder Structure

```text
.
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Countdown.tsx
│   ├── FadeIn.tsx
│   ├── Monogram.tsx
│   ├── NavBar.tsx
│   └── Section.tsx
├── content/
│   └── wedding-content.ts
├── public/
│   └── images/
│       ├── gallery-01.svg
│       ├── gallery-02.svg
│       ├── gallery-03.svg
│       ├── gallery-04.svg
│       └── hero-placeholder.svg
├── styles/
│   └── globals.css
├── .eslintrc.json
├── next.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Features

- Responsive editorial layout with romantic, modern visual direction
- Serif headings + clean sans body typography
- Palette-driven luxury styling with muted gold accents
- Story-driven sections and smooth-scroll navigation
- Subtle motion with `framer-motion`
- Reusable sections and animation components
- Fully editable content in `content/wedding-content.ts`
- Accessible semantic markup and keyboard-friendly controls
- Basic SEO metadata in `app/layout.tsx`

## Content Editing

Update all text, dates, event details, and links in:

- `content/wedding-content.ts`

> Note: The prompt indicated `"[paste the section copy here]"`. This project includes refined default copy and a comment marker where final approved wedding copy can be dropped in.

## Placeholder Assets

- Hero and gallery images are placeholders in `public/images/`.
- Replace with your final photos while keeping filenames or update paths in `content/wedding-content.ts`.
- Source comments in `app/page.tsx` indicate exactly where to replace assets.

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Run production server:
   ```bash
   npm run start
   ```

## Deployment Notes

- Deploy directly to Vercel or any Node-compatible host.
- Set `siteMeta.url` in `content/wedding-content.ts` to your final domain.
- Add analytics and a form backend (e.g., API route, Formspree, or custom service) before launch.
