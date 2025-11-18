import { characters } from '../data/content'

export default function CharacterOverview() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Character Overview</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {characters.map((c) => (
          <div key={c.name} className="bg-slate-800/60 border border-blue-500/20 rounded-xl p-5 hover:border-blue-400/40 transition">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-white">{c.name}</h3>
              <span className="text-xs font-medium px-2 py-1 rounded bg-blue-500/20 text-blue-200 border border-blue-500/30">{c.path}</span>
            </div>
            <p className="text-blue-200/80 text-sm">{c.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
