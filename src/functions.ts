import type { CollectionEntry } from 'astro:content'

/**
 * Filter blog posts by published date and order them.
 * Change the sort order by changing the minus sign to a plus sign, or add your new logic by changing the return value.
 *
 * You have access to the post data, so you can sort by any property you want, ex. by tags or title.
 * The sort order is descending, so the newest posts are first.
 *
 * @param posts Collection of blog posts
 * @returns Collection of blog posts sorted by date
 */
export const sortBlogPosts = (
  posts: CollectionEntry<'blog'>[] | null
): CollectionEntry<'blog'>[] => {
  if (!posts) return []
  return posts.sort((a, b) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  })
}

/**
 * Where a post actually lives.
 *
 * Posts are written once and published on whichever platform suits them, in
 * whichever language, so most entries here are records pointing outward rather
 * than articles hosted on this site. `/blog/<id>` is only generated for posts
 * that are not external, so linking an external post to that path produces a
 * 404 - which is what RSS, the search results, the list titles and the teasers
 * were all doing.
 *
 * English is preferred when a post exists in more than one language, matching
 * the order the links are already displayed in; otherwise the first link wins.
 */
export const postUrl = (post: CollectionEntry<'blog'>): string | undefined => {
  const { isExternal, externalLinks } = post.data
  if (!isExternal) return `/blog/${post.id}`
  if (!externalLinks?.length) return undefined
  return (externalLinks.find((link) => link.language === 'en') ?? externalLinks[0]).url
}

/**
 * The main artefact of a talk, so the row has a primary action.
 */
export const talkUrl = (talk: CollectionEntry<'talks'>): string | undefined =>
  talk.data.slides ?? talk.data.video ?? talk.data.venueUrl

/**
 * The canonical record of a paper, preferred in this order.
 *
 * Lives here rather than on the publications page because the homepage lists
 * the same entries and has to reach the same destination; two copies of this
 * would drift.
 */
const PUBLICATION_LINK_PRIORITY = ['arxiv', 'doi', 'project', 'pdf', 'github', 'video'] as const

export const publicationUrl = (
  links: readonly { type: string; url: string }[] | undefined
): string | undefined => {
  if (!links?.length) return undefined
  for (const type of PUBLICATION_LINK_PRIORITY) {
    const match = links.find((link) => link.type === type)
    if (match) return match.url
  }
  return links[0].url
}

/**
 * Exclude draft posts from the collection. If the site is built in production mode, draft posts are excluded by default.
 *
 * @param post Blog post
 * @returns True if the post is not a draft
 */
export const excludeDrafts = ({ data }: CollectionEntry<'blog'>): boolean => {
  // Usually this should be like this - import.meta.env.PROD ? !data.draft : true; but for the purpose of the demo, we are displaying drafts as well
  return import.meta.env.PROD ? true : true
}
