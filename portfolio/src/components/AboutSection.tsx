const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    skills: ['Go', 'TypeScript', 'Python', 'JavaScript', 'C++', 'SQL'],
  },
  {
    title: 'Backend & APIs',
    skills: ['NestJS', 'FastAPI', 'Node.js', 'WebSockets', 'GraphQL', 'Microservices'],
  },
  {
    title: 'Data & Infra',
    skills: ['PostgreSQL', 'Redis', 'MongoDB', 'Docker', 'AWS', 'Prisma'],
  },
  {
    title: 'AI / ML',
    skills: ['LangChain', 'LlamaIndex', 'FAISS', 'Deepgram', 'RAG', 'Generative AI'],
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 lg:px-16 py-32 overflow-hidden" style={{ background: '#0f0800' }}>
      {/* ── Minimalist Background: Noise & Subtle Glow ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at 80% 20%, rgba(255,90,31,0.18) 0%, transparent 55%)',
        }}
      />
      
      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full animate-fade-in text-white/90">
      {/* Section label */}
      <p className="font-mono text-[10px] tracking-[0.35em] text-white/25 uppercase mb-6">
        00 / About
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start max-w-6xl">
        {/* Left: Bio */}
        <div>
          <h2 className="font-display font-bold text-[40px] md:text-[56px] leading-[0.9] tracking-tight uppercase mb-8">
            SYSTEMS ARCHITECT BY TRADE.
            <br />
            <span className="text-white/40">AI ENGINEER BY OBSESSION.</span>
          </h2>

          <div className="space-y-6 flex-1 mt-auto font-sans text-white/85 text-[17px] leading-relaxed max-w-[540px]">
            <p>
              I got into tech because I wanted to build intelligent systems. But after training a few models, I realized something important: the smartest AI in the world is useless if the API serving it is slow or the database crashes.
            </p>
            <p>
              That’s how I ended up in the backend trenches. These days, my focus is strictly on building the infrastructure that makes AI actually work at scale. I spend my time deep in Go, NestJS, and polyglot databases, making sure the systems I design can handle heavy traffic without breaking a sweat.
            </p>
            <p className="text-[16px] text-white/70">
              Whether I'm writing concurrent systems, setting up RAG pipelines, or testing new agentic workflows in Antigravity, my goal is always the same: build fast, resilient architecture that solves real problems. I just like making things work, and making them work fast.
            </p>
          </div>
        </div>

        {/* Right: Skills & Education */}
        <div className="space-y-12">
          {/* Education */}
          <div>
            <h3 className="font-mono text-[10px] tracking-[0.2em] text-brand uppercase mb-4">
              Education
            </h3>
            <div className="p-6 border border-white/10 rounded-xl bg-white/[0.01]">
              <h4 className="font-display font-medium text-[22px] tracking-wide text-white uppercase leading-none">
                Vellore Institute of Technology
              </h4>
              <p className="font-mono text-[11px] text-white/50 mt-2">B.Tech in Computer Science (Specialization in AI & ML)</p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {SKILL_CATEGORIES.map((category) => (
              <div key={category.title} className="space-y-4">
              <h3 className="font-mono text-[10px] tracking-[0.2em] text-brand uppercase">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[10px] tracking-wider text-white/70 px-3 py-1.5 border border-white/10 rounded-full cursor-default hover:border-brand/50 hover:text-brand hover:shadow-[0_0_10px_rgba(255,90,31,0.2)] active:scale-95 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
