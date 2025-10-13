import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(2),
  age: z
    .number({
      error: "custom error message",
    })
    .min(10, {
      error: "custom error message 10",
    }),
  email: z.email().optional(),
});

export const userResponseSchema = z.object({
  message: z.string().min(2),
  data: z.object({
    id: z.uuid(),
    name: z.string().min(2),
    age: z.number().min(10),
    email: z.email().optional(),
  }),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UserResponse = z.infer<typeof userResponseSchema>;
