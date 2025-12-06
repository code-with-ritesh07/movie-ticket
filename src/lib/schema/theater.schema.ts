import * as z from "zod";

export const TheaterFormSchema = z.object({
  name: z.string().min(3, {
    error: "Name can't be less that 3",
  }),
  location: z.string().min(1, {
    error: "Location is required",
  }),
});

export type TheaterFormSchemaType = z.infer<typeof TheaterFormSchema>;
