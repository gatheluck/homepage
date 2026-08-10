import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import { postUrl } from '@/functions'

export const GET: APIRoute = async () => {
  // Get all published blog posts
  const posts = await getCollection('blog', ({ data }) => !data.draft)

  // Create searchable data structure
  const searchData = posts.map((post) => ({
    id: post.id,
    // Results have to carry their own destination: an external post has no page
    // on this site, so a result built from the id alone links to a 404.
    url: postUrl(post),
    title: post.data.title,
    summary: post.data.summary,
    content: post.body, // Include the markdown content for full-text search
    date: post.data.date.toISOString(),
    // Normalize tags to strings - tags can be either string references or objects
    tags: post.data.tags.map((tag) => (typeof tag === 'string' ? tag : tag.id)),
  }))

  return new Response(JSON.stringify(searchData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
