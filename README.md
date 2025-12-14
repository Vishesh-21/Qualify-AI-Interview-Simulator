<div align="center">

<img src="./public/logo.svg" alt="Qualify AI Logo" width="120" />

# Qualify AI – AI Interview Simulator

</div>  

Qualify AI is a cutting-edge platform designed to help users practice and improve their interviewing skills through realistic, AI-powered mock interviews. Users can tailor interview sessions to specific job roles, technologies, and experience levels, receiving instant, detailed feedback to identify strengths and areas for improvement.

## ✨ Features

- **AI-Powered Interviews:** Engage in realistic interview conversations with a sophisticated AI agent.
- **Customizable Sessions:** Tailor interviews by selecting the interview type, tech stack, job role, and difficulty level.
- **Detailed Feedback:** Receive a comprehensive performance review, including a total score, category-based scoring, identified strengths, and areas for improvement.
- **Secure Authentication:** User accounts and data are secured using [Clerk](https://clerk.com/).
- **Transcript Analysis:** Review full interview transcripts to analyze your responses.
- **Modern, Responsive UI:** A clean and intuitive user interface built with Next.js and Tailwind CSS.

## 🚀 Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/) (with Turbopack), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Backend & AI:**
  - **Voice AI:** [@vapi-ai/web](https://vapi.ai/)
  - **Language Model:** [Google AI SDK](https://ai.google.dev/)
- **Database ORM:** [Prisma](https://www.prisma.io/)
- **Database:** [PostgreSQL](https://www.postgresql.org/)
- **Authentication:** [Clerk](https://clerk.com/)
- **Linting:** [ESLint](https://eslint.org/)

## 🏁 Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v20.x or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A running [PostgreSQL](https://www.postgresql.org/download/) database instance.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/qualify-ai-interview-simulator.git
cd qualify-ai-interview-simulator
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of the project and add the necessary environment variables. See `.env.example` for a template.

```env
# PostgreSQL Database Connection
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Vapi AI Keys
VAPI_API_KEY=your_vapi_api_key

# Google AI Studio API Key
GOOGLE_GEMINI_API_KEY=your_google_gemini_api_key
```

### 4. Apply Database Migrations

Run the following command to apply the database schema changes using Prisma.

```bash
npx prisma db push
```

Or to run migrations from the `prisma/migrations` folder:

```bash
npx prisma migrate deploy
```

### 5. Run the Development Server

```bash
npm run dev
```

The application should now be running at [http://localhost:3000](http://localhost:3000).

## 📜 Available Scripts

The following scripts are available in the `package.json`:

- `npm run dev`: Starts the development server with Next.js Turbopack.
- `npm run build`: Builds the application for production, including Prisma client generation.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs the ESLint linter.

## 📂 Project Structure

The project follows a standard Next.js App Router structure.

```
/
├── prisma/             # Prisma schema and migrations
├── public/             # Static assets (images, logos)
└── src/
    ├── app/            # Next.js App Router pages and components
    │   ├── (auth)/     # Authentication pages (sign-in, sign-up)
    │   ├── api/        # API routes
    │   └── interview/  # Core interview functionality pages
    ├── components/     # Shared UI components
    ├── hooks/          # Custom React hooks
    ├── lib/            # Utility functions and actions
    ├── types/          # TypeScript type definitions
    └── utils/          # General utility scripts
```

## 🤝 Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
