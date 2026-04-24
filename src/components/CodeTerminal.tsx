export function CodeTerminal() {
  return (
    <div className="bg-card/80 border border-border rounded-xl p-5 font-mono text-sm glow-shadow">
      <div className="flex items-center justify-between mb-4 border-b border-border pb-2">
        <span className="text-muted-foreground text-xs">~ portfolio_init.sh</span>
        <div className="flex gap-1.5">
          <div className="size-2.5 rounded-full bg-destructive/60" />
          <div className="size-2.5 rounded-full bg-amber-500/60" />
          <div className="size-2.5 rounded-full bg-primary/60" />
        </div>
      </div>
      <div className="space-y-1.5 leading-relaxed">
        <Line n={1}><span className="text-syntax-keyword">const</span> <span className="text-syntax-var">developer</span> = {"{"}</Line>
        <Line n={2}><span className="pl-4 inline-block">name: <span className="text-syntax-string">'Heng Hakley'</span>,</span></Line>
        <Line n={3}><span className="pl-4 inline-block">role: <span className="text-syntax-string">'Frontend Developer'</span>,</span></Line>
        <Line n={4}><span className="pl-4 inline-block">stack: [<span className="text-syntax-string">'JS'</span>, <span className="text-syntax-string">'React'</span>, <span className="text-syntax-string">'Node.js'</span>],</span></Line>
        <Line n={5}><span className="pl-4 inline-block">available: <span className="text-syntax-keyword">true</span>,</span></Line>
        <Line n={6}>{"};"}</Line>
        <Line n={7}>
          <span className="inline-block w-2 h-4 bg-primary align-middle cursor-blink" />
        </Line>
      </div>
    </div>
  );
}

function Line({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <span className="text-syntax-comment/60 text-right w-6 select-none">{n}</span>
      <span className="text-foreground">{children}</span>
    </div>
  );
}
