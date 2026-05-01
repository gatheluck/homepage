# External Blog Support

This project supports displaying blog posts published on external platforms like note, Zenn, and Medium in your homepage's blog list.

## How to Add External Blog Posts

### 1. Create a New MDX File

Create a new `.mdx` file in the `src/content/blog/` directory.

### 2. Configure Frontmatter

**Important**: Write the title and summary in **English**, even if the linked article is in Japanese. The `language` field in `externalLinks` indicates the language of the destination article.

```mdx
---
title: 'Latest Research Trends in Adversarial Examples'
date: 2024-03-20
summary: 'A comprehensive overview of recent research on adversarial examples and robust machine learning'
tags: ['machine-learning', 'adversarial-examples']
draft: false
isExternal: true
externalLinks:
  - platform: 'note'
    url: 'https://note.com/username/n/xxxxx'
    language: 'ja'
  - platform: 'medium'
    url: 'https://medium.com/@username/article-title-en'
    language: 'en'
---
```

### Field Descriptions

- `title`: Article title in **English**
- `date`: Publication date (YYYY-MM-DD format)
- `summary`: Article summary in **English** (displayed on list pages)
- `tags`: Array of tags (referencing tags defined in `src/content/tags/`)
- `draft`: Draft flag (set to `true` to hide from listings)
- `isExternal`: External blog flag (set to `true` to treat as external link)
- `externalLinks`: Array of external links
  - `platform`: Platform name (`note`, `zenn`, `medium`, `dev.to`, `qiita`, `hatena`, `other`)
  - `url`: Article URL
  - `language`: **Language of the destination article** (`ja`, `en`, `other`)

## Supported Platforms

- **note**: note.com
- **zenn**: zenn.dev
- **medium**: medium.com
- **substack**: substack.com
- **dev.to**: dev.to
- **qiita**: qiita.com
- **hatena**: Hatena Blog
- **other**: Other platforms

## Multi-language Support

If you've published the same article in multiple languages, add multiple links to the `externalLinks` array:

```mdx
externalLinks:

- platform: "substack"
  url: "https://substack.com/home/post/p-xxxxx"
  language: "en"
- platform: "note"
  url: "https://note.com/username/n/xxxxx"
  language: "ja"
```

**Important**: Links are automatically sorted with **English (`en`) first**, then other languages. On the blog list page, each language link will be displayed as a button showing the platform and language (e.g., "Substack (EN)", "Note (JA)").

## Mixing Internal and External Blogs

External blogs (`isExternal: true`) and internal blogs (regular MDX files) are displayed together on the same blog list page.

- **Internal blogs**: Clicking the title navigates to the article page within your site
- **External blogs**: The title is displayed but not clickable. Instead, click the platform link buttons to navigate to the external site

## Example

```mdx
---
title: 'Latest Research Trends in Adversarial Examples'
date: 2024-03-20
summary: 'A comprehensive overview of recent research on adversarial examples and robust machine learning techniques'
tags: ['machine-learning', 'adversarial-examples']
draft: false
isExternal: true
externalLinks:
  - platform: 'medium'
    url: 'https://medium.com/@gatheluck/adversarial-examples-2024'
    language: 'en'
  - platform: 'substack'
    url: 'https://substack.com/home/post/p-123456'
    language: 'en'
  - platform: 'note'
    url: 'https://note.com/gatheluck/n/n123456'
    language: 'ja'
  - platform: 'zenn'
    url: 'https://zenn.dev/gatheluck/articles/adversarial-2024'
    language: 'ja'
---
```

This configuration will display links in the following order: Medium (EN), Substack (EN), Note (JA), Zenn (JA). English links are automatically shown first, making it clear at a glance that the English version is available on Medium and Substack, while the Japanese version is on note and Zenn.
