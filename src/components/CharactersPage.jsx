import { characters } from '../data/content'

const portraits = {
  'Klein Moretti': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop',
  'Audrey Hall': 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1200&auto=format&fit=crop',
  'Alger Wilson': 'https://images.unsplash.com/photo-1547106634-56dcd53ae883?q=80&w=1200&auto=format&fit=crop',
  'Derrick Berg': 'https://images.unsplash.com/photo-1520975922220-c501f06f7121?q=80&w=1200&auto=format&fit=crop',
  'Emlyn White': 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
}

export default function CharactersPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {characters.map((c) => (
          <div key={c.name} className="rounded-2xl overflow-hidden border border-sky-400/20 bg-slate-900/40">
            <img src={portraits[c.name]} alt="" className="h-44 w-full object-cover" />
            <div className="p-4">
              <div className="text-xs uppercase tracking-widest text-sky-300/80">{c.path}</div>
              <div className="text-lg font-semibold text-white">{c.name}</div>
              <p className="mt-2 text-sky-200/80 text-sm">{c.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
