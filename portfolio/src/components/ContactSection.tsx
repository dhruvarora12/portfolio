import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'

const LINKS = [
  {
    label: 'Email',
    value: 'aroradhruv67@gmail.com',
    href: 'mailto:aroradhruv67@gmail.com',
    icon: <Mail size={24} strokeWidth={1.5} />,
  },
  {
    label: 'LinkedIn',
    value: 'Connect',
    href: 'https://www.linkedin.com/in/dhruvarora11/',
    icon: <Linkedin size={24} strokeWidth={1.5} />,
  },
  {
    label: 'GitHub',
    value: 'Follow',
    href: 'https://github.com/dhruvarora12',
    icon: <Github size={24} strokeWidth={1.5} />,
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 lg:px-16 py-32 overflow-hidden pb-40 md:pb-28" style={{ background: '#0f0800' }}>
      {/* ── Minimalist Background ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="relative z-10 w-full h-full animate-fade-in flex flex-col justify-center">
      {/* Large watermark text */}
      <p
        className="absolute bottom-20 md:bottom-0 right-0 font-display font-black text-[clamp(60px,18vw,220px)] leading-none tracking-tight text-white/[0.025] uppercase pointer-events-none select-none"
      >
        CONTACT
      </p>

      {/* Label */}
      <p className="font-mono text-[10px] tracking-[0.35em] text-white/25 uppercase mb-6 relative z-10">
        03 / Contact
      </p>

      {/* Heading */}
      <h2 className="font-display text-[40px] md:text-[80px] leading-[0.85] tracking-tight uppercase text-white drop-shadow-[0_0_20px_rgba(255,90,31,0.2)] mb-8 relative z-10">
        Let's Build
        <br />
        <span className="text-brand">Something.</span>
      </h2>
      
      <div className="font-sans text-[16px] text-white/80 max-w-[500px] leading-relaxed mb-16 relative z-10 space-y-4">
        <p>
          I'm currently based in New Delhi, India, and actively interviewing for my next role in backend engineering or AI orchestration. Whether you're building scalable microservices, deploying agentic AI, or just want to talk system architecture, my inbox is always open.
        </p>
        <p>
          The fastest way to reach me is via email.
        </p>
      </div>

      {/* Links list */}
      <div className="max-w-3xl relative z-10 flex flex-col">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row md:items-center justify-between p-6 border border-white/10 mb-4 bg-white/5 rounded-xl hover:bg-brand/[0.05] hover:border-brand/40 hover:shadow-[0_0_20px_rgba(255,90,31,0.15)] active:scale-[0.98] transition-all duration-300"
            >
              <div className="flex items-center gap-6 mb-4 md:mb-0">
                <span className="text-white/40 group-hover:text-brand transition-colors">
                  {link.icon}
                </span>
                <span className="font-display text-[24px] tracking-tight uppercase text-white group-hover:text-brand transition-colors">
                  {link.label}
                </span>
              </div>
              
              <div className="flex items-center gap-4 text-white/50 font-mono text-[11px] tracking-widest uppercase">
                <span className="group-hover:text-white/90 transition-colors">{link.value}</span>
                <ArrowUpRight size={14} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-brand transition-all duration-300" />
              </div>
            </a>
          ))}
      </div>

      {/* Footer minimal */}
      <div className="absolute bottom-10 left-6 lg:left-16 flex items-center gap-4 relative z-10 mt-20 mb-10 md:mb-0">
        <div className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
        <p className="font-mono text-[10px] tracking-widest text-white/30 uppercase">
          BUILD &copy; 2026
        </p>
      </div>
      </div>
    </section>
  )
}
