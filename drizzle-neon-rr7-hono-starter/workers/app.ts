import { Hono } from "hono";
import { createRequestHandler } from "react-router";
import { createUserSchema } from "./validation-schemas/index";
import { zValidator } from "@hono/zod-validator";
import { createDBClient } from "./db/create-db-client";
import { usersTable } from "./db/schema";

const app = new Hono();

// Add more routes here

/**
 * Create a new user. (You can remove this, its example code)
 * 
 * This endpoint validates the request body against the createUserSchema using zValidator,
 * then inserts the user data into the users table in the database.
 * 
 * @route POST /api/user
 * @param {Object} req.body - The user data to create (validated by createUserSchema)
 * @returns {Object} 201 - Success response with created user data
 * @returns {Object} 500 - Error response if user creation fails
 * @see {@link https://hono.dev/docs/guides/validation} Hono Validation Docs
 */
app.post("/api/user", zValidator("json", createUserSchema), async (c) => {
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

/**
 * Catch-all route handler for frontend routes.
 *
 * This route handles all remaining GET requests by delegating them to the React Router
 * request handler. It enables server-side rendering (SSR) for the frontend application.
 *
 * @route GET *
 * @returns The rendered React Router response
 */
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
