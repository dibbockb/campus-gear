# Campus Gear 🧡

Campus Gear is a mini e‑commerce demo for Bangladeshi university students, showcasing affordable phone cases, earbuds, power banks, and chargers with a modern landing page, item listing, and mock authentication. 

Live site: https://campus-gear.vercel.app/ 

---

## Tech Stack

- Next.js 16 (App Router)   
- React 19 & React Server Components   
- Tailwind CSS 4 (via `@tailwindcss/postcss`)   
- `next-themes` for dark/light mode   
- `js-cookie` for simple auth state 

---

## Routes

- `/` – Marketing landing page with multiple sections (hero, categories, how it works, testimonials, best sellers, benefits, CTA).   
- `/items` – Public items list, showing name, brand, category, price, description, and image from `public/data.json`.   
- `/items/[id]` – Public item details page with full information and tags.   
- `/login` – Mock login page using a hardcoded email and password, sets an `isLoggedin` cookie.   

---

## Features

- Modern responsive landing page tailored for students in Bangladesh.   
- Item grid with hover effects and detail pages per product.   
- Mock authentication:
  - Email: `instructor@proghero.com`
  - Password: `pakhipakapepekhay`   
- Cookie‑based login state with Login/Logout button in the navbar.   
- Dark/light theme toggle using `next-themes`. 

---

## Getting Started

### Prerequisites

- Node.js 18+ recommended.  
- npm / bun.

### Installation

```bash
git clone <your-repo-url>
cd campus-gear

npm install