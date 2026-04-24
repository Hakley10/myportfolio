import { Download, Mail, MapPin, Globe } from "lucide-react";
import { experience, education, skills } from "@/data/projects";

export function CVSection() {
  return (
    <section id="cv" className="px-6 py-24 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-2">
              [ curriculum_vitae ]
            </h2>
            <p className="text-3xl sm:text-4xl font-semibold tracking-tight">Resume</p>
          </div>
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-mono text-xs font-bold uppercase tracking-widest rounded-md hover:opacity-90 transition-opacity"
          >
            <Download className="size-4" /> Download PDF
          </a>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground border-y border-border py-4 mb-12">
          <span className="inline-flex items-center gap-2">
            <Mail className="size-3.5 text-primary" />
            <span>hakleyheng@gmail.com</span>
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-3.5 text-primary" />
            <span>Phnom Penh</span>
          </span>
          <span className="inline-flex items-center gap-2">
            <Globe className="size-3.5 text-primary" />
            <span>hakley.com</span>
          </span>
        </div>

        <SubHeading>// experience</SubHeading>
        <div className="space-y-10 mb-16">
          {experience.map((e) => (
            <div key={e.company} className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                {e.year}
                <div className="text-foreground/60 normal-case mt-1">{e.location}</div>
              </div>
              <div className="md:col-span-3">
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="text-xl font-semibold">{e.role}</h3>
                  <span className="text-primary font-mono text-sm">@ {e.company}</span>
                </div>
                <ul className="mt-3 space-y-1.5 text-muted-foreground">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="text-primary font-mono shrink-0">›</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <SubHeading>// skills</SubHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="bg-card border border-border rounded-lg p-5">
              <div className="font-mono text-[10px] uppercase text-muted-foreground mb-3 tracking-wider">
                {group}
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-primary/10 border border-primary/20 text-primary font-mono text-xs rounded"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <SubHeading>// education</SubHeading>
        {education.map((e) => (
          <div key={e.degree} className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
              {e.year}
            </div>
            <div className="md:col-span-3">
              <h3 className="text-lg font-semibold">{e.degree}</h3>
              <p className="text-muted-foreground">{e.school}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6">{children}</h3>
  );
}
