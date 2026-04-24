import { skills } from "@/data/projects";

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24 scroll-mt-20 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-2">
          [ profile ]
        </h2>
        <p className="text-3xl sm:text-4xl font-semibold mb-8 tracking-tight">About</p>

        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground max-w-3xl">
          <p>
            I'm Hakley — I'm a computer science student who's genuinely interested in frontend web
            development and UI/UX design. I enjoy building clean, responsive websites and turning
            ideas and designs into real, usable interfaces .I'm motivated, adaptable, and always
            looking for opportunities to grow and gain real world experience as a frontend
            developer.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="bg-card border border-border rounded-lg p-5">
              <div className="font-mono text-[10px] uppercase text-muted-foreground mb-3 tracking-wider">
                {group}
              </div>
              <ul className="space-y-1.5">
                {items.slice(0, 4).map((i) => (
                  <li key={i} className="text-sm">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
