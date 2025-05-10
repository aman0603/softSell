# 🧠 SoftSell - AI-Powered License Resale Platform

SoftSell is a responsive, single-page marketing website for a fictional software resale startup. The project showcases modern web design, clean code practices, and integrates an AI-powered assistant using Google's Gemini API.

## 🚀 Live Demo
Hosted on Vercel → [https://softsell.vercel.app](https://soft-sell-vert-three.vercel.app/)

---

## 📦 Tech Stack

- Framework: Next.js (App Router)
- Styling: Tailwind CSS
- Animation: Framer Motion
- Icons: Lucide React
- AI Assistant: Gemini API
- Hosting: Vercel

---

## 🌟 Features Implemented

### ✅ Core Sections

- 🔹 Hero Section:
  - Headline: "Unlock the Value of Your Unused Software Licenses."
  - Subheading: "Sell enterprise licenses safely and instantly with SoftSell."
  - CTA: "Sell My Licenses"

- 🔹 How It Works:
  - Step 1: Upload License
  - Step 2: Get Valuation
  - Step 3: Get Paid
  - Each step illustrated with icons and text.

- 🔹 Why Choose Us:
  - Fast Payouts
  - Verified Buyers
  - Secure Transactions
  - Dedicated Support

- 🔹 Testimonials:
  - 2 customer reviews with name, role, and company

- 🔹 Contact Form:
  - Fields: Name, Email, Company, License Type (dropdown), Message
  - Client-side validation (required fields, email format)

### ✅ Design & UX

- Fully mobile responsive
- Tailwind’s utility-first design
- Light/Dark mode toggle
- Smooth section transitions and widget animations via Framer Motion

### ✅ AI Chat Assistant

- Integrated Gemini API as a smart assistant
- Preloaded with sample queries like:
  - "How much can I get for my Adobe licenses?"
  - "How long does payment take?"
- Auto response with simulated typing + fallback support

### ✅ SEO & Meta

- Page <title>, <meta> description & keywords
- Favicon included

---

## ⚙️ Project Structure

```
softsell-marketing/
├─ components/
│  ├─ hero.tsx
│  ├─ how-it-works.tsx
│  ├─ why-choose-us.tsx
│  ├─ testimonials.tsx
│  ├─ contact-form.tsx
│  ├─ chat-widget.tsx
|  ├─ chat-provider.tsx
│  └─ theme-toggle.tsx
├─ public/
│  └─ favicon.ico
├─ styles/
│  └─ globals.css
├─ app/
|  ├─ api/gemini/route.ts 
│  └─ page.tsx          ← Home page w/ sections
├─ tailwind.config.ts
├─ next.config.js
├─ .env.local           ← Gemini API key
└─ README.md
```


## ✨ Author

Made by Aman Paswan

[GitHub Repo](https://github.com/aman0603/softSell)
