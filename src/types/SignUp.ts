import { z } from 'zod';

const PasswordSchema = z.string()        
    .min(8, "Password must be at least 8 characters long")
    .max(32, "Password must be less than 32 characters")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/[a-z]/, "Must contain at least one lowercase letter")
    .regex(/\d/, "Must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Must contain at least one special character")
    .refine(val => !val.includes(' '), 'Spaces not allowed')

export const FormValidationSchema = z.object({
    firstName: z.string().min(1, 'Minimum 1 character').max(20, 'Maximum 20 characters'),
    lastName: z.string().min(1, 'Minimum 1 character').max(20, 'Maximum 20 characters'),
    email: z.string().email('Invalid email'),
    password: PasswordSchema,
    confirmPassword: z.string(),
}).refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "Passwords do not match",
    path: ["confirmPassword"], // Attach error to confirmPassword field
  }
);

export type FormType = z.infer<typeof FormValidationSchema>;