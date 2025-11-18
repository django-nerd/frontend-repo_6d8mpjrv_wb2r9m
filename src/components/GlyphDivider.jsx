export default function GlyphDivider({ label }) {
  return (
    <div className="relative my-12 flex items-center justify-center">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
      <div className="absolute -translate-y-1/2 top-1/2 px-4 py-1.5 rounded-full text-xs tracking-widest uppercase bg-sky-400/10 text-sky-200/90 border border-sky-400/20 backdrop-blur">
        {label}
      </div>
    </div>
  )
}
