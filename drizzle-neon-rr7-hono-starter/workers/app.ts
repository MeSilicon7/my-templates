import { Hono } from "hono";
import { createRequestHandler } from "react-router";
import { createUserSchema } from "./validation-schemas/index";
import { zValidator } from "@hono/zod-validator";
import { createDBClient } from "./db/create-db-client";
import { usersTable } from "./db/schema";

const app = new Hono();

// Add more routes here

app.post("/api/user", zValidator("json", createUserSchema), async (c) => {
  // Docs: https://hono.dev/docs/guides/validation
  const data = await c.req.json();

  const db = createDBClient(c.env.DATABASE_URL);

  try {
    const user = await db.insert(usersTable).values(data).returning();
    return c.json({
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    console.error(error);
    return c.json({ message: "User creation failed" }, 500);
  }
});

app.get("*", (c) => {
  const requestHandler = createRequestHandler(
    () => import("virtual:react-router/server-build"),
    import.meta.env.MODE
  );

  return requestHandler(c.req.raw, {
    cloudflare: { env: c.env, ctx: c.executionCtx },
  });
});

export default app;
