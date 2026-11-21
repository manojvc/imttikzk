import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    keywords: z.array(z.string()).optional(),
    author: z.string().default('IMTTI Kazhakkoottam'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
