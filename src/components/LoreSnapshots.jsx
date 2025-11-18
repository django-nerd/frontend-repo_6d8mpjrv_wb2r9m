import { lore } from '../data/content'

export default function LoreSnapshots() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Lore Snapshots</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {lore.map((group) => (
          <div key={group.category} className="bg-slate-800/60 border border-blue-500/20 rounded-xl p-5">
            <h3 className="text-white font-semibold mb-3">{group.category}</h3>
            <ul className="space-y-2 text-blue-200/80 text-sm list-disc pl-5">
              {group.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
