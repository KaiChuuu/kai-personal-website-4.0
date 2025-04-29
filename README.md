# Kai Chu's Personal Website

Welcome to my personal website! This is the online portfolio showcasing my work, projects, and skills. Feel free to explore my various development projects and learn more about my work.

Link to website, https://kaichuuu.github.io/

## Key Deployment Notes for nextjs on Github

1. In the deployment branch for the nextjs project (gh-pages), the file `.nojekyll` must be included for Tailwind styling to render.
2. nextjs `<Images/>` cannot be used with Github, it must be `<img/>`. You will need to ignore the warnings for Eslint, `/* eslint-disable @next/next/no-img-element */` (other ways can work too)
3. To run locally with `npm run dev`, the `nextConfig` config's in `next.config.ts` need to be commented out
4. To deploy project changes, run `npm run deploy`. It will automatically build and deploy code changes.
