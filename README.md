<img width="100%" height="200" style="object-fit:cover;" src="https://i.pinimg.com/originals/c0/2f/af/c02faf5610752ab14459b8ba60136a56.gif" />

<a href="https://git.io/typing-svg"> <img src="https://readme-typing-svg.herokuapp.com?font=Bangers&size=40&duration=3500&pause=1000&color=FF3636&width=700&height=60&lines=Comics+AI" /> </a>

An AI-powered webcomic recommendation engine that helps readers find their next comic. Built with a sleek, dark-themed UI, Webcomic AI analyzes granular preferences, including genre, tone, length, status, and custom prompts, to deliver personalized webcomic suggestions using Google's Gemini AI.
<br>
### Live Link: [comicsai.vercel.app](https://comicsai.vercel.app/)

---


<img src="https://readme-typing-svg.herokuapp.com?font=Bangers&size=26&duration=1&pause=100000&color=FF3636&width=350&height=40&lines=Features&repeat=false" />

- **Personalized AI Recommendations**: Leverages Google's Gemini LLM to curate tailored webcomic picks based on complex user criteria.
- **Granular Preference Filtering**: Filter by Genre, Tone, Publication Status (Ongoing/Completed), Chapter Length, and Release Era.
- **Custom AI Prompting**: Add freeform preferences (e.g., "Like Solo Leveling, OP protagonist, clean art style").
- **Dual Auth Modes**: Works for both authenticated users and guests seamlessly.
- **Responsive Dark UI**: Designed with modern Tailwind CSS, smooth transitions, Lucide icons, and custom aesthetic panel details.

---

<img src="https://readme-typing-svg.herokuapp.com?font=Bangers&size=26&duration=1&pause=100000&color=FF3636&width=350&height=40&lines=Tech+Stack&repeat=false" />

### Frontend

![React](https://img.shields.io/badge/React-000000?style=for-the-badge&logo=react&logoColor=ffffff)
![Vite](https://img.shields.io/badge/Vite-000000?style=for-the-badge&logo=vite&logoColor=ffffff)
![React Router](https://img.shields.io/badge/React_Router-000000?style=for-the-badge&logo=reactrouter&logoColor=ffffff)
![Context API](https://img.shields.io/badge/Context_API-000000?style=for-the-badge&logoColor=ffffff)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-000000?style=for-the-badge&logo=tailwindcss&logoColor=ffffff)
![Lucide](https://img.shields.io/badge/Lucide_Icons-000000?style=for-the-badge&logoColor=ffffff)
![Axios](https://img.shields.io/badge/Axios-000000?style=for-the-badge&logo=axios&logoColor=ffffff)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=ffffff)

### Backend

![Node.js](https://img.shields.io/badge/Node.js-000000?style=for-the-badge&logo=nodedotjs&logoColor=ffffff)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=ffffff)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-000000?style=for-the-badge&logo=postgresql&logoColor=ffffff)
![Neon](https://img.shields.io/badge/Neon-000000?style=for-the-badge&logoColor=ffffff)
![Prisma](https://img.shields.io/badge/Prisma-000000?style=for-the-badge&logo=prisma&logoColor=ffffff)
![Gemini](https://img.shields.io/badge/Gemini_3.1_Flash_Lite-000000?style=for-the-badge&logo=googlegemini&logoColor=ffffff)
![Render](https://img.shields.io/badge/Render-000000?style=for-the-badge&logo=render&logoColor=ffffff)


<img src="https://readme-typing-svg.herokuapp.com?font=Bangers&size=26&duration=1&pause=100000&color=FF3636&width=500&height=40&lines=Architecture+%26+Data+Flow&repeat=false" />

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

---

<img src="https://readme-typing-svg.herokuapp.com?font=Bangers&size=26&duration=1&pause=100000&color=FF3636&width=400&height=40&lines=Getting+Started&repeat=false" />

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

---

<img src="https://readme-typing-svg.herokuapp.com?font=Bangers&size=26&duration=1&pause=100000&color=FF3636&width=400&height=40&lines=API+Reference&repeat=false" />

### `POST /api/recommend`

Generates personalized recommendations for authenticated users.

- **Headers**: `Authorization: Bearer <token>`
- **Body**: `{ "message": "Formatted prompt string" }`

### `POST /api/guest`

Generates webcomic recommendations for non-authenticated guest users.

- **Body**: `{ "message": "Formatted prompt string" }`

---

<img src="https://readme-typing-svg.herokuapp.com?font=Bangers&size=26&duration=1&pause=100000&color=FF3636&width=250&height=40&lines=License&repeat=false" />

Distributed under the MIT License. See `LICENSE` for more information.

<img width="100%" height="50" style="object-fit:cover;" src="https://i.pinimg.com/originals/c0/2f/af/c02faf5610752ab14459b8ba60136a56.gif" />
