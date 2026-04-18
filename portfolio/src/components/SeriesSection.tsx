import { Github, Linkedin } from 'lucide-react'

// ─── Tags ─────────────────────────────────────────────────────────────────────

const TAGS = ['Go', 'NestJS', 'FastAPI', 'PostgreSQL', 'Docker', 'AWS']

const SPECS = [
  { label: 'Role', value: 'Backend & AI Engineer' },
  { label: 'Focus', value: 'Scalable Microservices • Real-Time Telemetry • RAG Orchestration' },
  { label: 'AI Stack', value: 'LangChain • LlamaIndex • FAISS • AWS Bedrock' },
  { label: 'Core', value: 'Go • TypeScript • NestJS • FastAPI' },
]

// ─── Tag Pill ─────────────────────────────────────────────────────────────────

function TagPill({ label, active }: { label: string; active?: boolean }) {
  return (
    <span
      className={`font-mono text-[10px] tracking-[0.2em] uppercase px-4 py-2 rounded-full border cursor-default transition-all duration-200 ${
        active
          ? 'bg-brand text-black border-brand shadow-[0_0_10px_rgba(255,90,31,0.3)] font-bold'
          : 'text-white/50 border-white/12 hover:border-brand/40 hover:text-brand'
      }`}
    >
      {label}
    </span>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function SeriesSection() {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex flex-col">

      {/* ── Cinematic video: contrast + desaturate slightly for depth ── */}
      <video
        className="absolute inset-0 w-full h-full object-cover scale-[1.02]"
        style={{ filter: 'contrast(1.15) saturate(0.85) brightness(0.9)' }}
        src="/hero-bg-2.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* ── Layer 1: left-side gradient so left text pops ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)' }}
      />

      {/* ── Layer 2: top fade for navbar breathing room ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 30%)' }}
      />

      {/* ── Layer 3: bottom fade for bottom bar ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 35%)' }}
      />

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 flex-1 flex items-center px-6 md:px-10 lg:px-16 pt-28 md:pt-20 pb-20 md:pb-0">
        <div className="w-full flex flex-col md:flex-row items-start justify-between gap-12">

          {/* LEFT: Name + role + social */}
          <div className="flex-1 w-full max-w-[500px]">

            {/* THE BIG NAME */}
            <h1
              className="font-display font-black uppercase leading-[0.85] tracking-tight text-white"
              style={{
                fontSize: 'clamp(64px, 9vw, 120px)',
                textShadow: '0 2px 40px rgba(0,0,0,0.5)',
              }}
            >
              DHRUV
              <br />
              ARORA
            </h1>

            {/* Role badge */}
            <div className="flex items-center gap-3 mt-5">
              <div className="h-px w-6 bg-brand/50" />
              <p className="font-mono text-[11px] tracking-[0.25em] text-white/70 uppercase">
                DISTRIBUTED SYSTEMS <span className="text-brand">&</span> AGENTIC AI
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-10">
              <a
                href="https://github.com/dhruvarora12"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:border-brand hover:text-brand hover:shadow-[0_0_15px_rgba(255,90,31,0.3)] active:scale-90 transition-all duration-300 bg-black/40 backdrop-blur-sm"
              >
                <Github size={15} strokeWidth={1.5} />
              </a>
              <a
                href="https://www.linkedin.com/in/dhruvarora11/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:border-brand hover:text-brand hover:shadow-[0_0_15px_rgba(255,90,31,0.3)] active:scale-90 transition-all duration-300 bg-black/40 backdrop-blur-sm"
              >
                <Linkedin size={15} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* RIGHT: Technical specs — frosted glass backing ── */}
          <div
            className="w-full md:min-w-[340px] md:max-w-[420px] self-start mt-4 md:mt-1 rounded-xl px-5 py-5 backdrop-blur-sm"
            style={{ background: 'rgba(0,0,0,0.45)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <p className="font-mono text-[9px] tracking-[0.35em] text-white/25 uppercase mb-4">
              Technical Profile
            </p>
            <div className="space-y-0">
              {SPECS.map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-start justify-between py-3 border-b border-white/[0.06] group gap-4"
                >
                  <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase group-hover:text-brand transition-colors whitespace-nowrap pt-0.5">
                    {spec.label}
                  </span>
                  <span className="font-mono text-[11px] text-white/80 group-hover:text-white transition-colors text-right leading-relaxed">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR: status + tags ── */}
      <div className="relative z-10 hidden md:flex items-end justify-between px-6 md:px-10 lg:px-16 pb-10 flex-shrink-0">

        {/* Open to work status */}
        <div className="flex items-center gap-3.5 bg-black/60 backdrop-blur-md border border-brand/20 rounded-2xl px-5 py-3.5 hover:bg-black/80 hover:border-brand/50 hover:shadow-[0_0_20px_rgba(255,90,31,0.15)] transition-all duration-300">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] text-green-500 uppercase font-bold">Open to Work</p>
            <p className="font-sans text-[12px] text-white/80 mt-0.5">Delhi, India • SDE / AI-ML Roles</p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex items-center gap-2 flex-wrap justify-end max-w-[420px]">
          {TAGS.map((tag, i) => (
            <TagPill key={tag} label={tag} active={i === 0} />
          ))}
        </div>
      </div>

    </section>
  )
}
