import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CodeTerminal } from "@/components/CodeTerminal";
import { ProjectCard } from "@/components/ProjectCard";
import { Stats } from "@/components/Stats";
import { AboutSection } from "@/components/AboutSection";
import { CVSection } from "@/components/CVSection";
import { ContactSection } from "@/components/ContactSection";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import portrait from "@/assets/picture.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div id="top" className="min-h-dvh bg-background text-foreground relative">
      <div className="absolute inset-0 scanlines pointer-events-none opacity-40" />
      <div className="relative">
        <Nav />

        {/* HERO */}
        <header className="px-6 pt-16 pb-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 px-3 py-1 bg-primary/5 border border-primary/20 rounded-full mb-8">
                <span className="size-2 bg-primary rounded-full animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
                  System Status: Available for work
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[0.95] text-balance">
                Building the <span className="text-gradient">digital core</span> of tomorrow.
              </h1>

              <p className="mt-8 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-[55ch] text-pretty">
                I'm a frontend developer specializing in responsive web interfaces, modern
                JavaScript frameworks, and user-centered design.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-mono text-xs font-bold uppercase tracking-widest rounded-md hover:opacity-90 transition-opacity"
                >
                  View Projects <ArrowRight className="size-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-card border border-border text-foreground font-mono text-xs font-bold uppercase tracking-widest rounded-md hover:border-primary/50 hover:text-primary transition-colors"
                >
                  Get In Touch
                </a>
              </div>

              <div className="mt-10">
                <CodeTerminal />
              </div>
            </div>

            {/* PHOTO */}
            <div className="lg:col-span-5">
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-br from-primary/30 via-neon-blue/20 to-neon-pink/20 rounded-2xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="relative rounded-2xl overflow-hidden border border-border bg-card glow-shadow">
                  <img
                    src={portrait}
                    alt="Portrait of Alex Rivera"
                    width={896}
                    height={1152}
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-card/60 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-foreground/80">
                    <span className="px-2 py-0.5 rounded bg-background/60 backdrop-blur border border-border">
                      cam_01 ● live
                    </span>
                    <span className="px-2 py-0.5 rounded bg-background/60 backdrop-blur border border-border">
                      52.5200° N
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest">
                    <span className="text-primary">// Hakley</span>
                    <span className="text-muted-foreground">principal_eng</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* PROJECTS */}
        <section
          id="projects"
          className="px-6 py-20 bg-muted/20 border-y border-border scroll-mt-20"
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-2">
                [ deployment_registry ]
              </h2>
              <p className="text-3xl sm:text-4xl font-semibold text-foreground">
                Featured Projects
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>

            <div className="mt-16">
              <Stats />
            </div>
          </div>
        </section>

        <AboutSection />
        <CVSection />
        <ContactSection />

        <Footer />
      </div>
    </div>
  );
}
