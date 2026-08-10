import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { useTranslations } from '@/i18n'
import { postUrl } from '@/functions'

const t = useTranslations()

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => !data.draft)
  return rss({
    title: t('siteMetadata.title'),
    description: t('siteMetadata.description'),
    site: context.site,
    // External posts have no page on this site, so their item has to point at
    // the platform. Emitting /blog/<id>/ for them produced feed entries that
    // 404 - which was every entry in the feed.
    items: posts.flatMap((post) => {
      const link = postUrl(post)
      if (!link) return []
      const { title, summary, tags, date } = post.data
      return [
        {
          title,
          categories: tags.map((ref) => ref.id), // TODO: add tags name in the future
          pubDate: date,
          description: summary,
          link,
        },
      ]
    }),
  })
}
