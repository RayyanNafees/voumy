// @ts-ignore
import { defineCollection, z, type CollectionEntry } from 'astro:content';

const posts = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { posts };
export type Post = CollectionEntry<'posts'>;