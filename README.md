This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Project Deployed in Vercel: [Auth App JWT](https://nextjs14-auth-faztcode.vercel.app/)

Nextjs 14 Project using:

- Nextjs 14 Features
  - Src and App Folder
  - Import Alias (@)
  - .env.local and .env
  - Metadata
  - Client Side
    - Google Fonts and TailwindCSS
    - Link and Image Componente
    - Layout and Page Structure
    - Client Routes
    - Dynamic Routes ([id] folder)
    - Async GET in page.tsx -> Server Components
    - Suspense React Component
    - Page not-found.tsx, loading.tsx and notFound() Function
    - useRouter(), useParam() and useSearchParams Hooks
    - Revalidate
    - Server Actions
    - Route Groups
  - Server Side
    - API Routes using Route Handlers API -> [Route Handlers (cookies and headers)](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
    - NextResponse and NextRequest -> [NextResponse and NextRequest](https://nextjs.org/docs/app/api-reference/functions/next-response)
    - params and searchParams in Route Handlers API
  - Middlewares
- JWT Authentication
  - JWT Token
  - Cookies
  - Middlewares
  - Protected Routes
  - Logout
- ESLint
- Prisma ORM
  - Types from Prisma and PostgreSQL Database

### Links Projects

- [FaztCode - Nextjs Autenticación con Json Web Tokens (JWT), y Rutas Protegidas con Middlewares](https://www.youtube.com/watch?v=zBbqrcvdJjQ)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
