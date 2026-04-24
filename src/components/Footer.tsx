export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-primary animate-pulse" />
          <span className="uppercase tracking-widest">secure_channel: active</span>
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/Hakley10" target="_blank" rel="noreferrer" className="hover:text-primary">GITHUB</a>
          <a href="https://www.linkedin.com/in/heng-hakley-677b9a3b8/" target="_blank" rel="noreferrer" className="hover:text-primary">LINKEDIN</a>

        </div>
      </div>
    </footer>
  );
}
