import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const guides = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guides" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    keyword: z.string(),
    category: z.enum(["beginner", "watering", "lighting", "plant-care", "growing"]),
    hero: z.string(),
    heroAlt: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date(),
    related: z.array(z.string()).optional(),
  }),
});

export const collections = { guides };
