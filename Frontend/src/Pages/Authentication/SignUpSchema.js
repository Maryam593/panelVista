import z from "zod";

export const signupSchema = z.object({
  FullName: z.object({ 
    firstName: z
      .string()
      .nonempty()
      .min(3, "must contain minimum 3 characters")
      .max(25, "cannot be more than 25 character"),
    lastName: z
      .string()
      .min(3, "must contain minimum 3 characters")
      .max(25, "cannot be more than 25 character"),
  }),
  email: z.string().email().nonempty(),
  password: z.string().min(6, "must contain 6 elements to make a secret Key"),
});
