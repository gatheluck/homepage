import { defineCollection, reference, z } from 'astro:content'
import { glob } from 'astro/loaders'
import { POST_METADATA } from './consts'

const authors = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/authors' }),
  schema: z.object({
    name: z.string(),
    avatar: z.string().optional(),
    occupation: z.string().optional(),
    shortBio: z.string(),
    company: z.string().optional(),
    email: z.string().email(),
    twitter: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    github: z.string().url().optional(),
    layout: z.string().url().optional(),
  }),
})

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: image().optional(),
      date: z.coerce.date(),
      tags: z.array(reference('tags')).default(['default']),
      lastmod: z.coerce.date().optional(),
      draft: z.boolean().default(false),
      summary: z.string(),
      images: z.string().optional(),
      authors: z.array(reference('authors')).default(['default']),
      postLayout: z
        .enum(['simple', 'column'])
        .default(POST_METADATA.defaultLayout as 'simple' | 'column'),
      canonicalUrl: z.string().optional(),
      related: z.array(reference('blog')).default([]),
      // External blog support
      isExternal: z.boolean().default(false),
      externalLinks: z
        .array(
          z.object({
            platform: z.enum([
              'note',
              'zenn',
              'medium',
              'substack',
              'dev.to',
              'qiita',
              'hatena',
              'other',
            ]),
            url: z.string().url(),
            language: z.enum(['ja', 'en', 'other']),
          })
        )
        .optional(),
    }),
})

const tags = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/tags' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
  }),
})

const publications = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/publications' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      authors: z.string(),
      venue: z.string(),
      year: z.number(),
      category: z.enum(['preprint', 'journal', 'international', 'domestic-reviewed', 'domestic']),
      image: image().optional(),
      links: z
        .array(
          z.object({
            type: z.enum(['arxiv', 'pdf', 'project', 'github', 'doi']),
            url: z.string().url(),
          })
        )
        .optional(),
      notes: z.string().optional(),
    }),
})

const positions = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/positions' }),
  schema: z.object({
    startDate: z.string(),
    endDate: z.string().optional(),
    title: z.string(),
    organization: z.string(),
    organizationUrl: z.string().url().optional(),
    type: z.enum(['work', 'education', 'fellowship', 'internship']),
    notes: z.array(z.string()).optional(),
  }),
})

const talks = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/talks' }),
  schema: ({ image }) =>
    z.object({
      date: z.string(),
      title: z.string(),
      venue: z.string(),
      venueUrl: z.string().url().optional(),
      type: z.enum(['invited', 'tutorial', 'conference']),
      coverImage: image().optional(),
      slides: z.string().url().optional(),
      video: z.string().url().optional(),
    }),
})

const awards = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/awards' }),
  schema: z.object({
    date: z.string(),
    title: z.string(),
    organization: z.string(),
    description: z.string().optional(),
  }),
})

const books = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/books' }),
  schema: z.object({
    date: z.string(),
    title: z.string(),
    pages: z.string().optional(),
    chapter: z.string().optional(),
    url: z.string().url().optional(),
  }),
})

const certifications = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/certifications' }),
  schema: z.object({
    title: z.string(),
    organization: z.string(),
    date: z.string().optional(),
  }),
})

const organizing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/organizing' }),
  schema: ({ image }) =>
    z.object({
      date: z.string(),
      title: z.string(),
      role: z.string(),
      venue: z.string(),
      type: z.enum(['workshop', 'conference', 'symposium', 'session', 'other']),
      url: z.string().url().optional(),
      description: z.string().optional(),
      image: image().optional(),
      /** Lead organiser rather than one of the organising committee. */
      isPrimary: z.boolean().default(false),
    }),
})

export const collections = {
  blog,
  authors,
  tags,
  publications,
  positions,
  talks,
  awards,
  books,
  certifications,
  organizing,
}
