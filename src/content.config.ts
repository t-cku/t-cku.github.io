import { defineCollection } from 'astro:content';
import type { SchemaContext } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Fields shared by every entry across the site.
const baseSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  summary: z.string(),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
});

// Article-style entries: Engineering (Projects/Notes), Product (Builds/Writing), Music, Creative.
const postSchema = ({ image }: SchemaContext) =>
  baseSchema.extend({
    heroImage: image().optional(),
    heroImageAlt: z.string().optional(),
  });

// Food entries are photo-led rather than article-led; body text is an optional recipe.
const foodSchema = ({ image }: SchemaContext) =>
  baseSchema.extend({
    photos: z
      .array(
        z.object({
          src: image(),
          alt: z.string(),
        })
      )
      .min(1),
  });

const postCollection = (dir: string) =>
  defineCollection({
    loader: glob({ pattern: '**/*.md', base: `./src/content/${dir}` }),
    schema: postSchema,
  });

export const collections = {
  'engineering-projects': postCollection('engineering-projects'),
  'engineering-notes': postCollection('engineering-notes'),
  'product-builds': postCollection('product-builds'),
  'product-writing': postCollection('product-writing'),
  music: postCollection('music'),
  creative: postCollection('creative'),
  food: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/food' }),
    schema: foodSchema,
  }),
};
