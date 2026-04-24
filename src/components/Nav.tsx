import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const links = [
  { href: "#projects", label: "// projects" },
  { href: "#about", label: "// about" },
  { href: "#cv", label: "// cv" },
  { href: "#contact", label: "// contact" },
];

export function Nav() {
  const { theme, toggle } = useTheme();
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <div className="size-8 bg-primary/15 border border-primary/40 rounded flex items-center justify-center font-mono font-bold text-primary text-sm">
            &gt;_
          </div>
          <span className="font-mono font-medium tracking-tight text-foreground hidden sm:inline">
            HAKLEY.PORTFOLIO
          </span>
        </a>
        <div className="flex items-center gap-6 font-mono text-xs">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-primary transition-colors uppercase tracking-widest hidden sm:inline"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="size-9 inline-flex items-center justify-center rounded-md border border-border bg-card hover:border-primary/50 hover:text-primary transition-colors"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
        </div>
      </div>
    </nav>
  );
}
