# Mall of America Interactive Sales Experience

A premium Next.js sales experience built to position Mall of America as a commercial platform for retail, luxury, dining, entertainment, and events.

## Tech Stack
- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- next/font for optimized font loading

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000`

## Production Commands
```bash
npm run build
npm run start
npm run lint
```

## What is Included
- Premium long-form storytelling layout
- Route-based navigation for overview, why MOA, retail, luxury, dining, entertainment, and events
- Global loading state via `src/app/loading.js`
- Global error boundary via `src/app/error.js`
- `not-found` fallback for invalid routes
- Graceful media fallbacks and edge-case handling on the homepage
- Lazy-loaded below-the-fold images and deferred video loading to reduce jank
- Optimized Google font loading with `next/font`

## Performance Notes
These changes were added to support stronger Lighthouse results without changing the visual design:
- below-the-fold videos use deferred loading
- large editorial images use `next/image`
- route transitions have a dedicated loading UI
- edge cases avoid crashes when media or slide content fails
- metadata is set for better production quality

## Repo Structure
```text
src/
  app/
    page.js
    layout.js
    loading.js
    error.js
    not-found.js
    why-moa/
    Retail/
    Luxury/
    Dining/
    Entertainment/
    Events/
  Components/
    Header/
public/
```

## Suggested Submission Notes
- AI was used to accelerate ideation, copy refinement, and implementation support.
- The codebase is structured route-by-route so the experience can expand into deeper sub-modules later without a rewrite.
- Final polish focused on loading states, edge-case handling, and performance-minded media behavior.
