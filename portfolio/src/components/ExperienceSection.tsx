// ─── Data ─────────────────────────────────────────────────────────────────────

const EXPERIENCES = [
  {
    role: 'SDE-1',
    company: 'LENS Corporation',
    bullets: [
      'Architected multi-tenant RBAC systems and containerized microservices via Docker to guarantee enterprise-grade data isolation.',
      'Engineered a Railway Arbitration Portal and Vehicle Telematics system, integrating real-time video and geospatial tracking.',
      'Orchestrated a polyglot database layer (PostgreSQL/Neon, MySQL, Avian) with Redis caching, optimizing routing and minimizing API latency.'
    ],
    stack: ['NestJS', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker']
  },
  {
    role: 'Artificial Intelligence Intern',
    company: 'Hapticware Intelligence',
    bullets: [
      'Engineered an automated financial analyzer utilizing RAG patterns with LlamaIndex and LlamaParse to pull precise data from unstructured reports.',
      'Integrated and deployed frontier models (Anthropic Claude, Meta Llama) via AWS Bedrock to build a highly scalable summarization engine.',
      'Built asynchronous NLP workflows that transformed complex financial data into structured insights for production-level use.'
    ],
    stack: ['LlamaIndex', 'AWS Bedrock', 'NLP', 'Python', 'Generative AI']
  }
]

// ─── Section ──────────────────────────────────────────────────────────────────

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 lg:px-16 py-32 overflow-hidden pb-40 md:pb-28" style={{ background: '#0f0800' }}>
      {/* ── Minimalist Background ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="relative z-10 w-full h-full animate-fade-in">
      {/* Label */}
      <p className="font-mono text-[10px] tracking-[0.35em] text-white/25 uppercase mb-6">
        01 / Experience
      </p>

      <h2 className="font-display text-[40px] md:text-[80px] leading-[0.85] tracking-tight uppercase text-white drop-shadow-[0_0_20px_rgba(255,90,31,0.2)] mb-16">
        Career
        <br />
        <span className="text-brand">Timeline</span>
      </h2>

      <div className="max-w-4xl space-y-0">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.company}
            className="group relative pl-8 md:pl-24 py-10 border-l border-white/10 hover:border-brand/50 transition-all duration-500 hover:bg-white/[0.02] hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]"
          >
            {/* Timeline dot */}
            <div className="absolute left-[-6px] top-12 w-[11px] h-[11px] rounded-full bg-black border-2 border-white/20 group-hover:border-brand group-hover:shadow-[0_0_10px_rgba(255,90,31,0.8)] transition-all duration-300 z-10" />

            {/* Right: Content */}
            <div>
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-4">
                <h3 className="font-display text-[26px] md:text-[32px] font-bold tracking-tight uppercase text-white group-hover:text-brand transition-colors">
                  {exp.role}
                </h3>
                <p className="font-mono text-[11px] tracking-[0.2em] text-white/70 uppercase">
                  {exp.company}
                </p>
              </div>

              <ul className="mt-6 space-y-4">
                {exp.bullets.map((bullet, bi) => (
                  <li key={bi} className="flex items-start gap-3.5">
                    <span className="font-mono text-brand/60 text-[12px] mt-1 flex-shrink-0">—</span>
                    <p className="font-sans text-[15.5px] text-white/85 leading-relaxed group-hover:text-white transition-colors">
                      {bullet}
                    </p>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2.5 mt-8">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[10px] tracking-widest text-brand/90 px-3 py-1.5 bg-brand/10 border border-brand/20 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Bottom border */}
        <div className="border-t border-white/8" />
      </div>
      </div>
    </section>
  )
}
