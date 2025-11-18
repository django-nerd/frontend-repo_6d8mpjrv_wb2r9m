import Hero from './components/Hero'
import CharacterOverview from './components/CharacterOverview'
import SequencePaths from './components/SequencePaths'
import LoreSnapshots from './components/LoreSnapshots'
import Search from './components/Search'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="/" className="text-white font-semibold tracking-tight">LoTM Guide</a>
          <nav className="hidden sm:flex gap-6 text-sm text-blue-200/80">
            <a href="#characters" className="hover:text-white">Characters</a>
            <a href="#sequences" className="hover:text-white">Sequences</a>
            <a href="#lore" className="hover:text-white">Lore</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />

        <div id="search">
          <Search />
        </div>

        <div id="characters">
          <CharacterOverview />
        </div>

        <div id="sequences">
          <SequencePaths />
        </div>

        <div id="lore" className="pb-20">
          <LoreSnapshots />
        </div>
      </main>

      <footer className="border-t border-slate-800/60 py-6 text-center text-xs text-blue-300/60">
        Fan-made informational site. No spoilers beyond basic concepts.
      </footer>
    </div>
  )
}

export default App
