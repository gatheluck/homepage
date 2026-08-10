import { createSignal, createEffect, For, Show, onMount, onCleanup } from 'solid-js'
import { formatDate } from '@/utils'

interface SearchResult {
  id: string
  title: string
  summary: string
  content: string
  date: string
  tags: string[]
}

export default function SearchButton() {
  const [isOpen, setIsOpen] = createSignal(false)
  const [query, setQuery] = createSignal('')
  const [results, setResults] = createSignal<SearchResult[]>([])
  const [allPosts, setAllPosts] = createSignal<SearchResult[]>([])
  const [isLoading, setIsLoading] = createSignal(false)

  // Load search data when component mounts
  createEffect(() => {
    if (isOpen() && allPosts().length === 0) {
      setIsLoading(true)
      fetch('/search.json')
        .then((res) => res.json())
        .then((data) => {
          setAllPosts(data)
          setIsLoading(false)
        })
        .catch((error) => {
          console.error('Error loading search data:', error)
          setIsLoading(false)
        })
    }
  })

  // Perform search when query changes (with debouncing)
  createEffect((prevTimeout?: NodeJS.Timeout) => {
    const searchQuery = query().toLowerCase().trim()

    // Clear previous timeout before setting up new one
    if (prevTimeout !== undefined) {
      clearTimeout(prevTimeout)
    }

    if (!searchQuery) {
      setResults([])
      return undefined
    }

    // Debounce search by 150ms
    const timeout = setTimeout(() => {
      const filtered = allPosts().filter((post) => {
        const titleMatch = post.title.toLowerCase().includes(searchQuery)
        const summaryMatch = post.summary.toLowerCase().includes(searchQuery)
        const contentMatch = post.content.toLowerCase().includes(searchQuery)
        const tagsMatch = post.tags.some((tag) => tag.toLowerCase().includes(searchQuery))
        return titleMatch || summaryMatch || contentMatch || tagsMatch
      })

      setResults(filtered)
    }, 150)

    // Return timeout to be passed as prevTimeout in next run
    return timeout
  })

  // Handle keyboard shortcuts
  onMount(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // CMD+K or CTRL+K to toggle search
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(!isOpen())
      }
      // ESC to close
      if (e.key === 'Escape' && isOpen()) {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    onCleanup(() => window.removeEventListener('keydown', handleKeyDown))
  })

  const openSearch = () => setIsOpen(true)
  const closeSearch = () => {
    setIsOpen(false)
    setQuery('')
    setResults([])
  }

  const handleBackdropClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeSearch()
    }
  }

  return (
    <>
      {/* Search Button */}
      <button
        onClick={openSearch}
        aria-label="Search"
        class="text-fg hover:text-accent ease-soft transition-colors duration-200"
        title="Search (⌘K)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>

      {/* Search Modal */}
      <Show when={isOpen()}>
        <div
          class="fixed inset-0 z-50 flex items-start justify-center pt-16 bg-black/60 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <div class="w-full max-w-2xl mx-4 bg-bg ring-hairline ring-1 rounded-xl shadow-2xl overflow-hidden">
            {/* Search Input */}
            <div class="border-b border-hairline">
              <div class="flex items-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-5 w-5 text-fg-subtle"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search posts..."
                  class="flex-1 px-4 py-4 bg-transparent border-0 focus:outline-none text-fg placeholder:text-fg-subtle"
                  value={query()}
                  onInput={(e) => setQuery(e.currentTarget.value)}
                  autofocus={isOpen()}
                />
                <button onClick={closeSearch} class="text-fg-subtle hover:text-fg">
                  <span class="text-xs font-medium">ESC</span>
                </button>
              </div>
            </div>

            {/* Results */}
            <div class="max-h-96 overflow-y-auto">
              <Show when={isLoading()}>
                <div class="px-4 py-8 text-center text-fg-subtle">Loading...</div>
              </Show>

              <Show when={!isLoading() && query() && results().length === 0}>
                <div class="px-4 py-8 text-center text-fg-subtle">
                  No results found for "{query()}"
                </div>
              </Show>

              <Show when={!isLoading() && results().length > 0}>
                <ul class="py-2">
                  <For each={results()}>
                    {(result) => (
                      <li>
                        <a
                          href={`/blog/${result.id}`}
                          class="block px-4 py-3 hover:bg-surface transition-colors"
                        >
                          <div class="font-semibold text-fg">{result.title}</div>
                          <div class="text-sm text-fg-muted mt-1 line-clamp-2">
                            {result.summary}
                          </div>
                          <div class="flex items-center gap-2 mt-2 text-xs text-fg-subtle">
                            <time>{formatDate(result.date)}</time>
                            <Show when={result.tags.length > 0}>
                              <span>•</span>
                              <div class="flex gap-1" role="list" aria-label="Tags">
                                <For each={result.tags.slice(0, 3)}>
                                  {(tag) => (
                                    <span
                                      class="px-2 py-0.5 bg-surface ring-hairline ring-1 rounded"
                                      role="listitem"
                                    >
                                      {tag}
                                    </span>
                                  )}
                                </For>
                              </div>
                            </Show>
                          </div>
                        </a>
                      </li>
                    )}
                  </For>
                </ul>
              </Show>

              <Show when={!isLoading() && !query()}>
                <div class="px-4 py-8 text-center text-fg-subtle">
                  <div class="text-sm">Start typing to search posts...</div>
                  <div class="text-xs mt-2 text-fg-subtle">
                    Tip: Press{' '}
                    <kbd class="px-1.5 py-0.5 bg-surface ring-hairline ring-1 rounded text-xs">
                      ⌘K
                    </kbd>{' '}
                    to open search
                  </div>
                </div>
              </Show>
            </div>
          </div>
        </div>
      </Show>
    </>
  )
}
