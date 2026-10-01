---
description: MY RULES FOR BUILDING PROJECTS
applyTo: '**'
---
## How I want you to work
- make sure the code is modernly and technically perfect
- make sure the inline suggestion gives the best format to write code without any error in all files available to make it perfect
- check for errors befors giving the final results

## Before you write code
- Read the existing project first. Match its structure, naming and style. Don't reinvent what's already there.
- If my request is unclear, ask one short question. Otherwise, make a sensible choice and tell me what you assumed.
- For anything big, give me a short plan first, then build it step by step.

## Code quality
- Write clean, readable code that a normal developer would write. No clever tricks, no over-engineering.
- Keep files and functions small, with one job each.
- Use clear names. Comment only where the reason isn't obvious.
- Handle errors, empty states, and loading states every time.
- Never hardcode secrets or API keys. Use environment variables.
- Validate all user input, on the server too.

## Design and UI
- Mobile first, and it must look good on every screen size.
- Clean layouts, generous spacing, a consistent color palette and font pairing.
- Make it feel finished: hover states, smooth transitions, nice buttons, real-looking content instead of "lorem ipsum".
- Follow accessibility basics: contrast, alt text, labels, keyboard use.

## Performance and SEO
- Optimize images, lazy load what's heavy, keep bundles small.
- Add proper titles, meta descriptions, and semantic HTML.

## Security
- Protect routes and auth properly. Hash passwords. Guard against XSS and injection.

## When you finish
- Run or check the code for errors before telling me it's done.
- Tell me in plain words what you changed, which files, and how to test it.
- Point out anything risky or unfinished. Don't hide problems.
- Don't break working features while adding new ones.

## How to talk to me
- Keep it simple and direct. Explain things like I'm a developer still growing, no jargon dumps.
- If my idea has a better alternative, say so and explain why.


## Modern and future-proof
- Use current, actively maintained versions of libraries and frameworks. Before using an API, check it isn't deprecated. If you're unsure, say so instead of guessing.
- Prefer web standards and stable tools over trendy packages that may die in a year. Fewer dependencies is better. Justify every new one.
- Keep business logic separate from UI and from any one provider, so I can swap Firebase, an AI model, or a payment service later without rewriting the app.
- Put settings, feature flags and text in config files, not scattered through the code.

## Speed and feel
- Aim for a fast first load, especially on slow phones and weak networks. Think Nigerian mobile data, not office wifi.
- Use skeleton loaders, optimistic updates, and smooth but subtle animation. Respect "reduce motion" settings.
- Make apps installable (PWA) and usable offline where it makes sense. Cache smartly and sync when the connection returns.

## AI features, when they fit
- Add AI only where it solves a real problem for the user, not as decoration.
- Never put AI keys in the browser. Call models from a server route or cloud function.
- Stream responses, show a clear loading state, handle failures gracefully, and set usage limits so costs can't run away.
- Tell users when they're talking to AI, and never send private user data to a model unless it's necessary.

## Discoverability
- Use semantic HTML, clean URLs, fast pages, sitemap, and structured data (JSON-LD) so search engines and AI search tools can understand the content.
- Add proper Open Graph and social share images so links look good when shared on WhatsApp, X and others.

## Trust, privacy and security
- Collect only the data the app really needs. Explain it in plain words.
- Add rate limiting, input validation, and safe file upload rules. Log errors without logging secrets or personal data.
- Use secure headers, HTTPS only, and least-privilege access everywhere.

## Accessibility and reach
- Target WCAG AA. Everything must work with keyboard and screen readers.
- Build with internationalization in mind: no hardcoded text where the app may need other languages later.
- Support light and dark mode when it's reasonable.

## Quality that lasts
- Write tests for the important flows: sign in, payments, forms, data saving. Add more as the app grows.
- Add basic error tracking and analytics hooks so problems are visible after launch.
- Keep a short README with how to run, build and deploy, plus the env variables needed.
- Write clear commit messages and keep changes small and easy to review.

## Make it special
- Every project should have one thing that makes it memorable: a smart detail, a delightful interaction, or a genuinely useful feature that most similar sites skip.
- Design like a real product, not a template. Strong first impression, clear purpose, one obvious next step on every screen.
- When you see a chance to make the project better or more unique, suggest it briefly, and let me decide before you build it.

## Project stack
- TypeScript everywhere possible. Strict mode on, no `any` unless there's a real reason.
- Styling with Tailwind only. No custom CSS files unless Tailwind can't do it.
- Backend and data: Firebase (Auth, Firestore, Storage).
- Framework for this project: [Next.js / React / Vue / PHP] (delete the rest)

## TypeScript
- Type props, API responses and Firestore documents. Keep shared types in one `types` folder.
- Prefer small typed helper functions over big inline logic.

## React / Next.js
- Functional components and hooks only.
- In Next.js, use the App Router. Keep components server-side by default and add "use client" only when needed.
- Use next/image and next/font. Set metadata on every page.
- Fetch data on the server where possible. Show loading and error states.

## Vue.js
- Use Vue 3 with the Composition API and `<script setup lang="ts">`.
- Put reusable logic in composables. Keep components small.

## PHP
- Use PDO with prepared statements for every query, never string-built SQL.
- Escape all output. Validate and sanitize all input.
- Keep logic out of the view files. Separate config, database, and page code.
- Return proper JSON and HTTP status codes for API endpoints.

## Firebase
- Keys go in environment variables. Never commit them.
- Write Firestore and Storage security rules for every collection. Never leave them open.
- Check auth on protected pages and enforce it in the rules too, not only in the UI.
- Keep reads low: query only what's needed, use pagination.

## Tailwind and UI
- Mobile first: start with base styles, then add sm/md/lg.
- Pick one color palette and one font pair and stick with them. Define them in the Tailwind config.
- Reuse components for buttons, inputs, cards, modals. Don't copy-paste the same class list.
- Every screen needs hover, focus, loading, empty and error states.
- Support dark mode if the project already does.

## Folder habits
- Group by feature, not by file type, when the project gets bigger.
- Name components in PascalCase, files and folders in kebab-case.

## Before saying you're done
- Run the type check and lint. Fix errors, don't ignore them.
- Try the build. If it fails, fix it first.
- Tell me which files changed and how to test it.