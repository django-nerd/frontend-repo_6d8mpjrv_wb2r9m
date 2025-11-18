import { useMemo } from 'react'

// Placeholder data; we'll wire to shared data next
const tarot = [
  { name: 'The Fool (Club)', member: 'Klein Moretti', joined: 'Ch. 15', role: 'Founder', img: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Justice', member: 'Audrey Hall', joined: 'Ch. 32', role: 'Justice', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop' },
  { name: 'The Hanged Man', member: 'Alger Wilson', joined: 'Ch. 33', role: 'Navigator', img: 'https://images.unsplash.com/photo-1520975922220-c501f06f7121?q=80&w=1200&auto=format&fit=crop' },
  { name: 'The Sun', member: 'Derrick Berg', joined: 'Ch. 202', role: 'Sun', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop' },
  { name: 'The Moon', member: 'Emlyn White', joined: 'Ch. 180', role: 'Moon', img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop' },
]

export default function TarotClub() {
  const rows = useMemo(() => tarot, [])
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rows.map((r, i) => (
          <article key={i} className="group relative overflow-hidden rounded-2xl border border-sky-400/20 bg-slate-900/40">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(14,165,233,0.15),transparent)]" />
            <img src={r.img} alt="" className="h-40 w-full object-cover opacity-90" />
            <div className="p-4">
              <div className="text-xs uppercase tracking-widest text-sky-300/80">{r.name}</div>
              <div className="text-lg font-semibold text-white">{r.member}</div>
              <div className="mt-1 text-sm text-sky-200/70">Joined {r.joined}</div>
              <div className="mt-2 text-sm text-sky-200/80">Role: {r.role}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
