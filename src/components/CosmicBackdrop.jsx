export default function CosmicBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -inset-[20%] bg-[radial-gradient(60%_60%_at_50%_40%,rgba(56,189,248,0.12),transparent),radial-gradient(30%_30%_at_20%_70%,rgba(147,51,234,0.12),transparent),radial-gradient(40%_40%_at_80%_20%,rgba(34,197,94,0.12),transparent)]" />
      <div className="absolute inset-0 opacity-40 mix-blend-screen animate-pulse [animation-duration:6s] bg-[conic-gradient(from_0deg_at_50%_50%,#0ea5e9_0deg,#22d3ee_120deg,#a78bfa_240deg,#0ea5e9_360deg)]" />
      <div className="absolute inset-0 backdrop-blur-[2px]" />
    </div>
  )
}
