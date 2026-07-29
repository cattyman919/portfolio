import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import type { CollectionEntry } from "astro:content";

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.yaml",
    base: "./src/content/projects",
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

const blogs = defineCollection({
  loader: glob({
    pattern: "**/*.mdx",
    base: "./src/content/blogs",
    generateId: ({ entry }) =>
      entry.replace("/index.mdx", "").replace(/^\d{4}-\d{2}-\d{2}_/, ""),
  }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const openSource = defineCollection({
  loader: glob({
    pattern: "*.yaml",
    base: "./src/content/open-source",
    generateId: ({ entry }) => entry.replace(".yaml", ""),
  }),
  schema: z.preprocess(
    (value) => value ?? {},
    z.object({
      contributions: z
        .array(
          z.object({
            contributionUrl: z.string().url(),
            description: z.string().optional(),
            title: z.string().optional(),
            tags: z.array(z.string()).optional(),
          }),
        )
        .optional(),
    }),
  ),
});

export type ProjectType = CollectionEntry<"projects">["data"];
export type BlogType = CollectionEntry<"blogs">["data"];

export const collections = { projects, blogs, openSource };
