import { useMemo, useState } from 'react'
import { searchable } from '../data/content'

export default function Search() {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    const docs = searchable()
    return docs.filter((d) =>
      [d.title, d.text, d.path].filter(Boolean).join(' ').toLowerCase().includes(q)
    )
  }, [query])

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <div className="bg-slate-800/60 border border-blue-500/20 rounded-xl p-5">
        <div className="flex items-center gap-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search characters, paths, or lore..."
            className="w-full bg-slate-900/60 border border-slate-700/60 rounded-lg px-4 py-2 text-blue-100 placeholder-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
          />
          <span className="text-sm text-blue-300/70 whitespace-nowrap">{results.length} results</span>
        </div>
        {query && (
          <div className="mt-4 divide-y divide-slate-700/60">
            {results.map((r, i) => (
              <a key={i} href={r.url} className="block py-3 hover:bg-slate-900/40 rounded">
                <div className="text-sm text-blue-200/80">{r.type}</div>
                <div className="text-white font-medium">{r.title}</div>
                <div className="text-sm text-blue-200/70 truncate">{r.text}</div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
