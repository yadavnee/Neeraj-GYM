# Neeraj Gym 🏋️‍♂️

An elite, high-performance, Gen-Z focused 3D fitness web application and platform. 

This platform redefines the fitness industry with immersive 3D technology, neural network-inspired AI Workout Coaching, and a premium "neon-glassmorphism" aesthetic built completely from scratch without relying on generic component libraries.

## 🚀 Key Features

* **Immersive 3D Canvas:** A stunning interactive hero background rendering geometric particles and cinematic lighting via `Three.js` and `@react-three/fiber`.
* **AI Coach & Chatbot:** An embedded generative gym assistant utilizing interactive Framer Motion portals to give users hyper-personalized workout plans.
* **High-End Gen-Z Aesthetics:** Custom dark-mode utility system relying heavily on backdrop filters (glassmorphism), neon glows, and high-performance micro-animations.
* **Fully Responsive & Interactive:** Fluid transitions and fully reactive layouts built purely with Vanilla CSS architecture.
* **Secure Backend Architecture:** Complete user integration featuring live session bookings, account management, and a restricted Admin Override interface powered by a secure local SQLite Database and highly-performant Next.js `Server Actions`.

## 🛠 Tech Stack

* **Frontend Framework:** Next.js (App Router), React 18+, TypeScript
* **Styling:** Custom Vanilla CSS UI/UX Design System 
* **3D Engineering:** Three.js, React Three Fiber, Drei
* **Motion Design:** Framer Motion
* **Database & ORM:** Prisma ORM with SQLite

## 🔥 Getting Started

### Prerequisites
* Node.js 18.17+ installed

### Installation & Launch

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yadavnee/Neeraj-GYM.git
   cd Neeraj-GYM
   ```

2. **Install all dependencies:**
   ```bash
   npm install
   ```

3. **Initialize the local database:**
   ```bash
   npx prisma db push
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to experience the site.

---

*© 2026 Neeraj Gym. All Rights Reserved. Created by Neeraj.*
