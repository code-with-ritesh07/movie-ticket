import * as z from "zod";

export const LogInSchema = z.object({
  email: z.string().email({
    error: "invalid email",
  }),
  password: z.string().min(6, {
    error: "password can't be less than 6 ",
  }),
});

export type LogInSchemaType = z.infer<typeof LogInSchema>;

export const RegisterSchema = z
  .object({
    name: z.string().min(3, { message: "name can't be less than 3" }),
    email: z.string().email({ message: "invalid email" }),
    password: z.string().min(6, { message: "password can't be less than 6" }),
    confirmPassword: z
      .string()
      .min(6, { message: "confirm password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
