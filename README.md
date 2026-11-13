# Caleb Adjuya · Portfolio

A drawing set for a mobile engineer: each sheet is a section, and the hero app explodes into its layers in 3D as you scroll.

Built with React, TypeScript, Vite and Framer Motion. Fonts are self-hosted via Fontsource (Archivo, B612 Mono).

## Editing content

All copy and facts live in `src/data.ts` (taken from the CV). The downloadable CV is `public/Caleb-Adjuya-CV.pdf`; replace that file to update it.

## Run

```bash
npm install
npm run dev
```

```bash
npm run build
```

Motion respects `prefers-reduced-motion`: the 3D and scroll effects fall back to a static layout.
