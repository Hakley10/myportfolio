import { ArrowUpRight } from "lucide-react";

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: { label: string; color: "matrix" | "blue" | "pink" }[];
  image: string;
  url?: string;
};

const tagStyles: Record<Project["tags"][number]["color"], string> = {
  matrix: "bg-primary/10 border-primary/30 text-primary",
  blue: "bg-neon-blue/10 border-neon-blue/30 text-neon-blue",
  pink: "bg-neon-pink/10 border-neon-pink/30 text-neon-pink",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url ?? "#"}
      target="_blank"
      rel="noreferrer"
      className="group relative block"
    >
      <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-neon-blue/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-card border border-border rounded-xl overflow-hidden">
        <div className="px-4 py-2 bg-muted/40 flex items-center justify-between border-b border-border">
          <div className="flex gap-1.5">
            <div className="size-2 rounded-full bg-muted-foreground/30" />
            <div className="size-2 rounded-full bg-muted-foreground/30" />
            <div className="size-2 rounded-full bg-muted-foreground/30" />
          </div>
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-tight">
            {project.id}
          </span>
        </div>
        <div className="aspect-video bg-muted relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5">
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((t) => (
                <span
                  key={t.label}
                  className={`px-2 py-0.5 border font-mono text-[10px] rounded ${tagStyles[t.color]}`}
                >
                  {t.label}
                </span>
              ))}
            </div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                <p className="text-muted-foreground text-sm mt-1 max-w-md">
                  {project.description}
                </p>
              </div>
              <ArrowUpRight className="size-5 text-foreground/60 group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
