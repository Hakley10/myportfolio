import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const channels = [
  { icon: Mail, label: "Email", value: "hakleyheng@gmail.com", href: "mailto:hakleyheng@gmail.com" },
  { icon: Github, label: "GitHub", value: "Hakley10", href: "https://github.com/Hakley10" },
  { icon: Linkedin, label: "LinkedIn", value: "Heng Hakley", href: "https://www.linkedin.com/in/heng-hakley-677b9a3b8/" },

];

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24 scroll-mt-20 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-2">
          [ open_channel ]
        </h2>
        <p className="text-3xl sm:text-4xl font-semibold mb-4 tracking-tight">
          Let's build something.
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mb-10">
          I'm currently taking on select engineering projects and consulting engagements.
          Reach out on whichever channel suits you.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 p-5 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <div className="size-11 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                <c.icon className="size-5" />
              </div>
              <div className="min-w-0">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {c.label}
                </div>
                <div className="font-medium truncate">{c.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
