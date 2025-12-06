import * as z from "zod";

export const MovieFormSchema = z.object({
  name: z.string().min(3, {
    error: "Name can't be less that 3",
  }),
  imageUrl: z.string().min(1, {
    error: "Image is required",
  }),
  description: z.string().optional(),

  imdRating: z.string().min(1, {
    error: "Rating is required",
  }),

  releaseDate: z.string().min(1, {
    error: "Rating is required",
  }),

  duration: z.string().min(1, {
    error: "Rating is required",
  }),
});

export type MovieFormSchemaType = z.infer<typeof MovieFormSchema>;
