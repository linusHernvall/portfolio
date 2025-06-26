# Developer Portfolio

A modern personal developer portfolio built with:

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Shadcn UI** (with dark mode support)
- **next-themes** for theme switching

## Features

- Home page with hero section and call-to-action
- Projects page (`/projects`) that reads from a local JSON file and displays project cards
- Reusable, modular components (e.g., `ProjectCard`)
- Clean, minimal styling with Tailwind CSS
- Dark mode toggle (top-right corner)

## Structure

- `src/app/` — App Router pages
- `src/components/` — Reusable UI and custom components
- `src/data/projects.json` — Project data

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

Built with ❤️ using Next.js, Tailwind, and Shadcn UI.
