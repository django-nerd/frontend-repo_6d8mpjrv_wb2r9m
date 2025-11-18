import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-sky-400/20 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="/" className="text-white font-semibold tracking-tight">LoTM Guide</a>
        <button onClick={() => setOpen(!open)} className="sm:hidden px-3 py-1 rounded border border-sky-400/30 text-sky-200/80">Menu</button>
        <nav className="hidden sm:flex gap-6 text-sm text-blue-200/80">
          <a href="#search" className="hover:text-white">Search</a>
          <a href="#characters" className="hover:text-white">Characters</a>
          <a href="#sequences" className="hover:text-white">Sequences</a>
          <a href="#lore" className="hover:text-white">Lore</a>
          <a href="#tarot" className="hover:text-white">Tarot Club</a>
        </nav>
      </div>
      {open && (
        <div className="sm:hidden px-6 pb-3 text-sm text-blue-200/80 space-y-2">
          <a href="#search" className="block">Search</a>
          <a href="#characters" className="block">Characters</a>
          <a href="#sequences" className="block">Sequences</a>
          <a href="#lore" className="block">Lore</a>
          <a href="#tarot" className="block">Tarot Club</a>
        </div>
      )}
    </header>
  )
}
