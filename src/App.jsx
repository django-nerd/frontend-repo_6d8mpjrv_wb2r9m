import Nav from './components/Nav'
import Hero from './components/Hero'
import CharacterOverview from './components/CharacterOverview'
import SequencePaths from './components/SequencePaths'
import LoreSnapshots from './components/LoreSnapshots'
import Search from './components/Search'
import TarotClub from './components/TarotClub'
import CharactersPage from './components/CharactersPage'
import CosmicBackdrop from './components/CosmicBackdrop'
import GlyphDivider from './components/GlyphDivider'

function App() {
  return (
    <div className="min-h-screen relative text-blue-100">
      <CosmicBackdrop />
      <Nav />

      <main>
        <Hero />

        <div id="search">
          <Search />
        </div>

        <GlyphDivider label="Characters" />
        <div id="characters">
          <CharacterOverview />
        </div>

        <GlyphDivider label="Sequences" />
        <div id="sequences">
          <SequencePaths />
        </div>

        <GlyphDivider label="Lore" />
        <div id="lore">
          <LoreSnapshots />
        </div>

        <GlyphDivider label="Tarot Club" />
        <div id="tarot" className="pb-20">
          <TarotClub />
        </div>

        <GlyphDivider label="All Characters" />
        <CharactersPage />
      </main>

      <footer className="border-t border-sky-400/20 py-6 text-center text-xs text-blue-300/70">
        Fan-made informational site. No spoilers beyond basic concepts.
      </footer>
    </div>
  )
}

export default App
