import { Github, ArrowUpRight } from 'lucide-react'

// ─── Data ─────────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    index: '01',
    title: 'Voice-to-Voice AI Interviewer',
    role: 'Backend & AI Engineer',
    highlights: [
      'Engineered a low-latency voice loop using WebSockets and Deepgram STT, orchestrated by LangChain and GPT-4 for autonomous technical interviews.',
      'Implemented FAISS for vector-based resume parsing and RAG, enabling intelligent candidate-job matching with 30% higher precision.',
      'Built an asynchronous FastAPI backend backed by MongoDB to manage complex, stateful interview sessions in real-time.'
    ],
    tech: ['FastAPI', 'LangChain', 'FAISS', 'WebSockets', 'MongoDB'],
    github: 'https://github.com/dhruvarora12/ai-voice-to-voice-interviewer-with-LLM-'
  },
  {
    index: '02',
    title: 'Distributed Remote Access System',
    role: 'Systems Engineer',
    highlights: [
      'Developed a concurrent, cross-platform Go agent capable of real-time shell execution and asynchronous file operations.',
      'Architected a NestJS backend utilizing Prisma ORM to manage persistent WebSocket connections for low-latency telemetry monitoring.',
      'Engineered automated network scanning (ARP/ICMP) to deploy minimal shell agents into resource-constrained IoT environments.'
    ],
    tech: ['Go', 'NestJS', 'WebSockets', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/dhruvarora12/remote-access-golang-agent-with-nestjs-backend-swagger-for-Network-protocols'
  },
  {
    index: '03',
    title: 'Distributed Auth & Session Engine',
    role: 'Backend Engineer',
    highlights: [
      'Engineered a high-performance, Passport-free authentication system using NestJS and GraphQL for stateless authorization.',
      'Integrated Redis for distributed session storage and ultra-fast token blacklisting across multiple microservices.',
      'Architected the database schema using TypeORM and MySQL, containerizing the entire environment with Docker for reliable orchestration.'
    ],
    tech: ['NestJS', 'GraphQL', 'Redis', 'MySQL', 'Docker'],
    github: 'https://github.com/dhruvarora12/nest-js-graphql-authentication-with-bycrpt-jst-redis'
  }
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
  return (
    <div className="group relative flex flex-col justify-between p-8 border border-white/10 bg-white/[0.01] hover:bg-white/[0.03] hover:border-brand/40 hover:shadow-[0_0_30px_rgba(255,90,31,0.1)] transition-all duration-500 rounded-xl">
      {/* Index number bg */}
      <div className="absolute right-6 top-4 font-display font-black text-[120px] leading-none text-white/[0.02] group-hover:text-brand/[0.05] transition-colors pointer-events-none select-none">
        {project.index}
      </div>

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-8">
          <h3 className="font-display text-[32px] md:text-[40px] font-bold tracking-tight uppercase leading-none text-white group-hover:text-brand transition-colors">
            {project.title}
          </h3>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-brand hover:border-brand hover:text-black active:scale-95 hover:shadow-[0_0_15px_rgba(255,90,31,0.5)] transition-all duration-300 flex-shrink-0"
          >
            <Github size={16} strokeWidth={1.5} />
          </a>
        </div>

        <p className="font-mono text-[11px] tracking-[0.2em] text-brand/80 uppercase mb-8">
          {project.role}
        </p>

        <ul className="space-y-4 mb-10">
          {project.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-4 text-white/80 font-sans text-[14px] leading-relaxed">
              <span className="text-brand pt-1.5"><ArrowUpRight size={12} strokeWidth={3} /></span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative z-10 flex flex-wrap gap-2 mt-auto pt-8 border-t border-white/[0.05]">
        {project.tech.map((t) => (
          <span key={t} className="font-mono text-[10px] tracking-widest text-white/80 px-3 py-1.5 bg-brand/10 border border-brand/20 rounded-full">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 lg:px-16 py-32 overflow-hidden pb-40 md:pb-28" style={{ background: '#0f0800' }}>
      {/* ── Minimalist Background ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Very faint bottom glow for projects grid */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 z-0"
        style={{
          background: 'radial-gradient(ellipse at bottom, rgba(255,90,31,0.2) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 w-full h-full animate-fade-in">
      {/* Label */}
      <p className="font-mono text-[10px] tracking-[0.35em] text-white/25 uppercase mb-6">
        02 / Projects
      </p>

      <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
        <h2 className="font-display text-[40px] md:text-[80px] leading-[0.85] tracking-tight uppercase text-white drop-shadow-[0_0_20px_rgba(255,90,31,0.2)]">
          Selected
          <br />
          <span className="text-brand">Works</span>
        </h2>
        <a
          href="https://github.com/dhruvarora12"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 font-mono text-[11px] tracking-widest text-brand hover:text-brand/80 active:scale-95 uppercase transition-all duration-200"
        >
          View all on GitHub
          <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.index} project={p} />
        ))}
      </div>
      </div>
    </section>
  )
}
