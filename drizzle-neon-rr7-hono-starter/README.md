# drizzle-neon-rr7-hono-starter(with simple form example)

A starter project for React Router 7, Hono, and Drizzle ORM with Neon database on Cloudflare Workers.

## Features
- **Cloudflare Workers**: Serverless platform for deploying backend APIs.
- **Hono**: Lightweight web framework for building APIs.
- **React Router 7**: Declarative routing for React applications.
- **Drizzle ORM**: Type-safe ORM for database interactions.
- **Neon Database**: Serverless Postgres database for modern applications.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Directory Structure


```
.
├── workers/                # Cloudflare Workers backend
│   ├── app.ts              # Main entry point for both frontend and backend; Hono handles React Router requests
│   ├── db/                 # Drizzle ORM database setup
│   └── ...                 # Other backend files
├── app/                    # React frontend
│   ├── routes/             # React Router routes
│   ├── components/         # Reusable React components
│   ├── routes.ts           # Route definitions
│   └── ...                 # Other frontend files
├── wrangler.jsonc          # Cloudflare Workers configuration
├── package.json            # Project dependencies and scripts
└── ...                     # Other configuration files
```



## Tips

If you want to install shadcn/ui, follow the instructions below:
```bash
bun shadcn-ui@latest init
bun shadcn-ui@latest add button
```



## Acknowledgements
- [Cloudflare Workers](https://workers.cloudflare.com/)
- [Hono](https://hono.dev/)
- [React Router](https://reactrouter.com/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Neon Database](https://neon.tech/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


Made with ❤️ by [@MéSilicon7](https://github.com/MéSilicon7)