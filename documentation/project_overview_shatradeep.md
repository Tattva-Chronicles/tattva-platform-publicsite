# Shastra Deep (Tattva Platform) - Project Overview

## 1. Vision & Mission

**Vision:** To be the most accessible, comprehensive, and authoritative digital resource for Sanatana Dharma scriptures and knowledge.

**Mission:** To build Shastra Deep as a high-performance **Progressive Web App (PWA)** that provides:
- A pro-Sanatani aesthetic and stance.
- Deep, structured access to Vedas, Upanishads, Puranas, and Itihasas.
- Modern features like AI-powered summaries, audio narrations (future), and community engagement.

---

## 2. Architecture Overview

The project follows a modern Monorepo structure separating Frontend and Backend, designed for scalability and containerized deployment.

### 2.1 Tech Stack

| Component            | Technology               | Description                                                         |
| -------------------- | ------------------------ | ------------------------------------------------------------------- |
| **Frontend**   | Next.js 16+ (App Router) | React framework with TypeScript, Tailwind CSS, and ShadCN UI.       |
| **Backend**    | Python FastAPI           | High-performance async API with SQLModel (SQLAlchemy + Pydantic).   |
| **Database**   | PostgreSQL 15            | Relational data. Uses `pg_trgm` (Fuzzy Search) and `pgvector` (Planned). |
| **Auth**       | FastAPI Users            | Secure authentication handling JWT (HttpOnly Cookies) and OAuth.    |
| **Storage**    | AWS S3                   | Stores generated markdown content, user avatars, and manuscripts.   |
| **Email**      | AWS SES                  | Transactional emails with Jinja2 templating.                        |
| **Deployment** | Docker & Fly.io / Vercel | **Frontend**: Vercel (Domain: `shastradeep.com`). **Backend**: Fly.io. |

### 2.2 Infrastructure

- **Containerization**: Multi-stage `Dockerfile` optimization (Builder vs Runtime) using `python:3.12-slim`.
- **Security Strategy**:
    - **Rate Limiting**: `slowapi` with in-memory limits (Contact: 3/min, Edits: 10/hr).
    - **Headers**: Custom Middleware adds `X-XSS-Protection`, `X-Frame-Options`, `HSTS`.
    - **Input Validation**: Strict Pydantic schemas (Max 50KB content, strict types).
    - **Environment**: Centralized `AppConfig` with strict validation.

---

## 3. Codebase Structure

### 3.1 Root Directory (`Y:\shastra-deep`)
- `apps/frontend-wiki`: Next.js Frontend application.
- `services/content-service`: Python FastAPI Backend application.
- `docs/`: Comprehensive project documentation. `audit_report_*.md` tracks security audits.
- `docker-compose.yml`: Local orchestrator for DB and Backend.

### 3.2 Frontend (`apps/frontend-wiki`)
- **`app/layout.tsx`**: Global wrapper with `AuthProvider`, `CookieManager` (Consent), and Analytics.
- **`lib/api.ts`**: Centralized Axios client. Handles Data Fetching & Maintenance Mode checks.
- **`app/sitemap.ts`**: Generates `sitemap.xml` for **Articles & Static Pages** only.
- **`app/glossary-sitemap.xml/route.ts`**: Dedicated route generating `glossary-sitemap.xml` for Terms.
- **`app/robots.ts`**: Configured to serve BOTH sitemaps to crawlers.
- **`components/SearchFilters.tsx`**: Handles "Glossary Only" filter via `root_id=-100`.

### 3.3 Backend (`services/content-service`)
- **`main.py`**:
    - **Routers**: `/auth`, `/users`, `/admin`, `/glossary`, `/search`, `/articles`.
    - **Middleware**: `add_security_headers`, `SlowAPIMiddleware`, `CORSMiddleware`.
- **`models.py`**: Defines Schema.
    - **Search Log**: Tracks user queries (linked to `user_id`).
    - **GlossaryTerm**: Supports aliases and fuzzy matching.
- **`crud.py`**:
    - **Search Logic**: Interleaves results (Top 3 Articles -> Top 3 Glossary -> Rest Articles).
    - **Glossary**: `get_glossary_terms` uses `pg_trgm` for fuzzy matching aliases.
- **`auth.py`**: Configures `fastapi-users` with cookie transport (`samesite="lax"`).

---

## 4. Feature Implementation Status

### ✅ Core Features (Completed)
- **Content System**: Recursive Scripture Hierarchy + Markdown Rendering (S3).
- **Glossary System**: Dedicated Table, Fuzzy Search, Sitemap Integration.
- **Search Engine**: **Hybrid Interleaved Search** (Keyword + Fuzzy).
- **Security Hardening**: Rate Limits, Headers, Input Sanitization (Rehype).
- **Authentication**: Sign up/Login/Verify/Reset Password (Email via SES).
- **SEO Architecture**: Split Sitemaps (`sitemap.xml` + `glossary-sitemap.xml`), Dynamic Meta Tags.

### ⚠️ In-Progress / Partial
- **Admin Panel**: Backend endpoints are robust (`/admin/users`, `/admin/edits`), but Frontend is basic.
- **Volunteer System**: Models exist, basic application flow working.

### ❌ Pending / Planned
- **Vector Search**: Infrastructure (`pgvector` extension) is ready, but embedding generation logic is deferred.
- **PWA Features**: Offline support / Manifest (Deferred).

---

## 5. Developer Notes & "Nitty Gritty" (Critical Context)

### 5.1 Deployment Configuration
- **Domain**: `shastradeep.com` is configured on Vercel via **A Records** (pointing to `76.76.21.21`).
    - This allows keeping existing AWS SES records intact at the registrar.
- **Environment Variables**:
    - `SITE_URL` **MUST** be set in Vercel (e.g., `https://shastradeep.com`) or sitemaps will break/link to localhost.
    - `NEXT_PUBLIC_MAINTENANCE_MODE`: Set to `true` to redirect all traffic to `/coming-soon`.

### 5.2 Search Logic Details
- **"Glossary Only" Search**: Triggered by passing `root_id = -100` to the `/search` endpoint.
- **General Search**:
    - Queries `Scripture` (Articles) and `GlossaryTerm` (Terms).
    - **Ranking**: Interleaves results to ensure visibility for both types.
    - **Logging**: All searches log to `SearchLog` table (including `user_id` if logged in).

### 5.3 Sitemap Strategy
- **Why Split?**: A single sitemap would grow too large given the potential number of glossary terms and scriptures.
- **Separation**:
    1.  `sitemap.xml` -> Static Pages + Article Slugs (from `crud.get_sitemap_urls`).
    2.  `glossary-sitemap.xml` -> Glossary Term Slugs (from `crud.get_all_glossary_slugs`).

### 5.4 Security Quirks
- **Auth Rate Limits**: `/auth/login` and `/auth/register` are essentially rate-limited by the slowness of Argon2 hashing, but explicit decorators are theoretically missing (Low Risk).
- **Admin Safety**: Standard Admins **cannot** delete other Admins. Only Superusers can.
- **Input Limits**: Submissions capped at ~50KB (7500 words).

---

## 6. API Overview (Key Endpoints)

| Method | Endpoint | Function |
| :--- | :--- | :--- |
| `GET` | `/search?q=...&root_id=-100` | Search Glossary Only. |
| `GET` | `/glossary/sitemap-urls` | backend source for glossary sitemap. |
| `POST` | `/articles/submit-edit` | Volunteer Article Edit (Rate Limited). |
| `GET` | `/users/me/profile` | Full user profile (inc. volunteer status). |
