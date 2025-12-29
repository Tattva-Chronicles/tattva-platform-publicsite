# Public Website Plan - Tattva Chronicles

## 1. Objective
To create a high-quality, visually stunning public website that clearly communicates the vision and mission of **The Tattva Chronicles Unified Platform**. The primary goal is to educate visitors about the three pillars (Learn, Act, Defend) and encourage them to support the cause through donations and email subscriptions.

## 2. Tech Stack
Since this is a public-facing marketing site, we prioritize performance, SEO, and visual appeal.

*   **Framework**: Next.js 14+ (App Router)
    *   *Rationale*: Recommended by the user's monorepo context, excellent for SEO, static site generation (SSG) capabilities, and future-proof for adding dynamic features like auth/forms later.
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS (v3 or v4)
    *   *Rationale*: Rapid development, ease of implementing modern design systems (dark mode, grids, responsive layouts).
*   **Icons**: Lucide React or Heroicons
*   **Animations**: Framer Motion (for smooth, "premium" feel as requested in system instructions).
*   **Deployment Target**: Static export (for any generic host) or Vercel (preferred).
*   **Backend**: None for now. (Future: Supabase for email collection).

## 3. Site Structure

### 3.1 Pages

1.  **Home (`/`)**
    *   **Hero Section**: High-impact headline, subheadline, and primary CTA ("Join the Movement" / "Donate").
    *   **The Vision**: Brief overview of the "One Ecosystem" concept.
    *   **The 3 Pillars (Cards)**:
        *   *Dharma-Samvaad* (Learn)
        *   *Seva-Sangathan* (Act)
        *   *Tattva-Raksha* (Defend)
    *   **About Us / Team**: Brief mention of the founding principles (Pramāṇa, Karma, Satya).
    *   **Footer**: Social links, simple sitemap, copyright.

2.  **Vision & Mission (`/vision`)**
    *   Detailed breakdown of the "Why" (Project Charter content).
    *   The problem we are solving (misinformation, lack of coordination, shallow content).
    *   The long-term roadmap (2025-2028).

3.  **The Pillars (`/pillars`)** *(Could be one page or separate sections)*
    *   Deep dive into each pillar (using content from PRDs).
    *   *Samvaad*: "Stack Overflow for Shastras".
    *   *Seva*: "GitHub for Seva".
    *   *Raksha*: "Digital Defense Hub".
    *   Show "How it works" diagrams/icons.

4.  **Get Involved / Donate (`/donate` or `/support`)**
    *   **Donation Options**: Information on how to donate (UPI QR code, bank details, or future payment gateway placeholder).
    *   **Subscribe Form**: "Stay Updated" (Placeholder UI for now).
    *   **Call to Action**: "Volunteer with us" (Mailto link or form).

### 3.2 Design Aesthetics
*   **Theme**: "Modern Dharmic" — minimalist but with cultural accents (saffron/gold highlights, Mandala patterns in background, clean serif fonts for headings).
*   **Mode**: Dark mode default (often looks more "premium" and tech-focused) or toggleable.
*   **Typography**: `Inter` (UI) + `Merriweather` or `Cinzel` (Headings) to blend modern tech with tradition.

## 4. Content Strategy
*   Use the existing content from:
    *   `00-README.md` (Overview)
    *   `10-project-charter.md` (Vision, Guiding Principles)
    *   `100-samvaad-prd.md` (Learn Pillar details)
    *   `110-seva-prd.md` (Act Pillar details)
    *   `120-raksha-prd.md` (Defend Pillar details)

## 5. Implementation Steps
1.  **Setup**: Initialize Next.js project in `Y:\tattva-platform\PublicPlatform`.
2.  **Config**: Configure Tailwind CSS and basic theme variables (colors, fonts).
3.  **Components**: Build reusable UI components (Hero, FeatureCard, Navbar, Footer).
4.  **Pages**: Implement the core pages with dummy content first, then fill with real content from docs.
5.  **Refine**: Add animations (Framer Motion) and polish responsiveness.
6.  **Review**: User verification.

## 6. Future Integrations (Phase 2)
*   **Supabase**: For capturing email subscriptions.
*   **Payment Gateway**: Razorpay/Stripe integration for direct donations.
*   **Blog/Updates**: Can use Markdown files to post project updates.
