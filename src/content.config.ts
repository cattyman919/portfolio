import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.yaml",
    base: "./src/data/projects",
    generateId: ({ entry }) =>
      entry.replace("/project.yaml", "").replace(".yaml", ""),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      type: z.string(),
      image: image().optional(),
      tags: z.array(z.string()).optional(),
      tools: z.array(
        z.object({
          name: z.string(),
          logo: z.string(),
        }),
      ),
      highlights: z.array(z.string()),
      mediaUrls: z.array(z.string()).optional(),
      sourceCodeUrl: z.string().optional(),
      demoUrl: z.string().optional(),
    }),
});

export type ProjectType = z.infer<typeof projects>;

export const collections = { projects };
