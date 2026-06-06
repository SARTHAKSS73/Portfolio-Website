Welcome to my professional developer portfolio codebase. This platform acts as a high-performance, single-page interactive ecosystem engineered to highlight my technical projects, core machine learning pipelines, professional engineering internships, and leadership background through an optimized, dark-themed user experience.

Plaintext
                        ┌────────────────────────┐
                        │    app/layout.tsx      │
                        └───────────┬────────────┘
                                    │ (Global Styles & Providers)
                                    ▼
                        ┌────────────────────────┐
                        │     app/page.tsx       │
                        └───────────┬────────────┘
                                    │
       ┌────────────────────────────┼────────────────────────────┐
       │                            │                            │
       ▼                            ▼                            ▼
┌──────────────┐             ┌──────────────┐             ┌──────────────┐
│  HeroNode    │             │  TechStack   │             │ ProjectsNode │
│  (Intro)     │             │  (Skills)    │             │ (Data Loop)  │
└──────────────┘             └──────────────┘             └──────────────┘
🛠️ Technology Stack & Core System Dependencies
The platform leverages an enterprise-grade frontend architecture focused on asset optimization, structural type safety, and seamless client-side hydration:

Core Architecture: Next.js 16.2.6 (utilizing the App Router and optimized Turbopack compilation engines).

Rendering Interface: React 19 for modular component states and dynamic client-side array manipulation.

Typing System: Strict TypeScript configurations to ensure compile-time boundary safety and eliminate runtime faults.

Styling Pipeline: Tailwind CSS implementation utilizing localized custom color tokens (#a855f7, #070312) and fluid utility layout paths.

Dynamic Telemetry: Custom structural ScrollReveal wrappers intercepting viewport entries natively via intersection observers for staggered element fades.

Icon Vectors: Lightweight, tree-shakable inline vector graphics provided by react-icons.

Key Architectural Implementations
1. Data-Driven Loop Mechanics (.map())
To prevent codebase bloating and structural code duplication across showcased items, the application isolates metadata structures into clean arrays of centralized objects. The layout alternates alignment constraints dynamically by evaluating index counts:

TypeScript
const isEven = index % 2 === 0;
// Dynamically applies layout flags (e.g., text-left vs text-right) based on index properties
2. Direct Browser-to-Browser Mail Routing
The messaging segment bypasses traditional local pop-up mail app blockages by enforcing a direct browser compose link protocol. Upon local validation checks, it safely sanitizes inputs and routes user commands to the web interface directly:

TypeScript
const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=shuklasarthak0703@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
window.open(gmailUrl, '_blank');
3. Integrated Static Project Document Delivery
Project case-study reports are served directly out of the project's static compile path (public/documents/), providing immediate, independent verification of machine learning models and engineering workflows without cloud access delays or link permission errors.

Core Directory Mapping
Plaintext
├── public/                  # Static asset repository served organically
│   ├── documents/           # Target project reports and static PDF files
│   └── images/              # Visual graphic items and technical work icons
├── src/
│   └── app/
│       ├── components/      # Modular layout components
│       │   ├── ContactSection.tsx
│       │   ├── HereSection.tsx
│       │   ├── ProjectsSection.tsx
│       │   └── ScrollReveal.tsx
│       ├── layout.tsx       # Document shell, root context, and typography setups
│       └── page.tsx         # Main entry page coordinating section layouts
├── package.json             # Engine script and dependency manifest mapping
└── tsconfig.json            # Strict compiler rules preventing path type check leaks
⚙️ Local Setup, Case-Sensitivity Compliance, & Compiling
Because cross-platform filesystems handle casing indicators differently (macOS ignores case variations while Linux deployment containers strictly enforce them), compile validation relies on uniform lowercase component path indexing.

To fetch, test, and run an optimized compilation layout on your local workstation:

Bash
# 1. Clone the workspace repository
git clone https://github.com/SARTHAKSS73/Portfolio-Website.git

# 2. Enter the root project folder
cd Portfolio-Website

# 3. Pull clean, modern package links
npm install

# 4. Spin up the localized compiler development server
npm run dev

# 5. Execute production type checks and static site generation optimization paths
npm run build

Deployment Configuration
The repository enforces continuous integration and deployment hooks tied directly to the Vercel Cloud Network. Pushes to your tracked remote repository automatically trigger background optimization tasks, check code integrity via the Next.js compiler, map image vectors, and roll out changes live onto your edge endpoints within moments.
