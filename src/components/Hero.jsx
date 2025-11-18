import { intro } from '../data/content'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(1200px 600px at 10% -10%, rgba(59,130,246,.25), transparent 60%), radial-gradient(900px 400px at 110% 10%, rgba(147,51,234,.25), transparent 60%)'
      }} />
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-md">
          {intro.title}
        </h1>
        <p className="mt-4 text-blue-200 text-lg sm:text-xl">{intro.tagline}</p>
        <p className="mt-6 text-blue-100/90 leading-relaxed max-w-3xl mx-auto">
          {intro.summary}
        </p>
      </div>
    </section>
  )
}
