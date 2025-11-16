// lib/schemas.ts
import { z } from 'zod';

// Validation schema for Contact Form
export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email." }),
  subject: z.string().min(1, { message: "Subject cannot be empty." }),
  message: z.string().min(10, { message: "Pesan harus minimal 10 karakter." }),
});

export type ContactFormInputs = z.infer<typeof contactFormSchema>;