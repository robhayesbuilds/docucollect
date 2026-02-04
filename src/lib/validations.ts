import { z } from "zod"

export const waitlistSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  firmSize: z.enum(["solo", "2-5", "6-20", "20+"], {
    message: "Please select your firm size",
  }),
})

export type WaitlistFormData = z.infer<typeof waitlistSchema>
