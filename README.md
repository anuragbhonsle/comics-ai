# 📚 Webcomic AI

An AI-powered webcomic recommendation engine that helps readers find their next comic. Built with a sleek, dark-themed UI, Webcomic AI analyzes granular preferences, including genre, tone, length, status, and custom prompts, to deliver personalized webcomic suggestions using Google's Gemini AI

🔗 **Live**: [comicsai.vercel.app](https://comicsai.vercel.app/)

## 🔥 Features

- **Personalized AI Recommendations**: Leverages Google's Gemini LLM to curate tailored webcomic picks based on complex user criteria.
- **Granular Preference Filtering**: Filter by Genre, Tone, Publication Status (Ongoing/Completed), Chapter Length, and Release Era.
- **Custom AI Prompting**: Add freeform preferences (e.g., "Like Solo Leveling, OP protagonist, clean art style").
- **Dual Auth Modes**: Works for both authenticated users and guests seamlessly.
- **Responsive Dark UI**: Designed with modern Tailwind CSS, smooth transitions, Lucide icons, and custom aesthetic panel details.

## 🛠️ Tech Stack

### Frontend

- **Framework**: React + Vite
- **Routing**: React Router DOM
- **State Management**: Context API (AuthContext, ResponseContext)
- **Styling**: Tailwind CSS + Lucide React Icons
- **HTTP Client**: Axios
- **Hosting**: Vercel

### Backend

- **Runtime**: Node.js + Express
- **Database**: PostgreSQL (Hosted on Neon Serverless Postgres)
- **ORM**: Prisma
- **AI Integration**: Google Gemini API — Gemini 3.1 Flash Lite (@google/genai)
- **Hosting**: Render

## 🏗️ Architecture & Data Flow

```
┌─────────────────┐       Axios HTTP       ┌──────────────────┐
│                 │  ───────────────────>  │                  │
│  React Frontend │                        │  Express Backend │
│   (Vercel)      │  <───────────────────  │    (Render)      │
└────────┬────────┘      JSON Response     └────────┬─────────┘
         │                                          │
   Context API                                 Prisma ORM
 (Global State)                                     │
                                            ┌───────┴────────┐
                                            ▼                ▼
                                      ┌───────────┐    ┌───────────┐
                                      │  Neon DB  │    │  Gemini   │
                                      │ (Postgres)│    │   LLM     │
                                      └───────────┘    └───────────┘
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL / Neon database URL
- Gemini API Key

### 1. Environment Setup

**Backend (`/backend/.env`)**

```
PORT=5000
DATABASE_URL="postgresql://user:password@ep-cool-project.neon.tech/neondb?sslmode=require"
GEMINI_API_KEY="your-gemini-api-key"
JWT_SECRET="your-jwt-secret-key"
FRONTEND_URL="http://localhost:5173"
```

**Frontend (`/frontend/.env`)**

```
VITE_API_URL="http://localhost:5000"
```

### 2. Installation & Running Locally

**Clone the repository:**

```bash
git clone https://github.com/anuragbhonsle/comics-ai
cd comics-ai
```

**Setup Backend:**

```bash
cd backend
npm install
npx prisma db push
npm run dev
```

**Setup Frontend:**

```bash
cd ../frontend
npm install
npm run dev
```

The app will be running at `http://localhost:5173`.

## 📡 API Reference

### `POST /api/recommend`

Generates personalized recommendations for authenticated users.

- **Headers**: `Authorization: Bearer <token>`
- **Body**: `{ "message": "Formatted prompt string" }`

### `POST /api/guest`

Generates webcomic recommendations for non-authenticated guest users.

- **Body**: `{ "message": "Formatted prompt string" }`

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.
