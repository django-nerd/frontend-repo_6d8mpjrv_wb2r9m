import { useState } from 'react'
import { pathways } from '../data/content'

export default function SequencePaths() {
  const [open, setOpen] = useState(null)

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Sequence Paths</h2>
      <div className="space-y-3">
        {pathways.map((p, idx) => (
          <div key={p.name} className="bg-slate-800/60 border border-blue-500/20 rounded-xl overflow-hidden">
            <button
              className="w-full text-left px-5 py-4 flex items-center justify-between hover:bg-slate-800/70"
              onClick={() => setOpen(open === idx ? null : idx)}
            >
              <span className="text-white font-semibold">{p.name}</span>
              <span className="text-blue-200/80 text-sm">{open === idx ? 'Hide' : 'Show'}</span>
            </button>
            {open === idx && (
              <div className="px-5 pb-4">
                <ul className="list-disc pl-6 text-blue-200/80 text-sm">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
