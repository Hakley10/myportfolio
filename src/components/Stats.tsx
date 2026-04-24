const stats = [
  { label: "Cumulative Commits", value: "14,292", color: "bg-primary", w: "w-3/4" },
  { label: "Prod Deployments", value: "1,408", color: "bg-neon-blue", w: "w-1/2" },
  { label: "Uptime Rating", value: "99.98%", color: "bg-primary", w: "w-full" },
  { label: "OSS Contributions", value: "472", color: "bg-neon-pink", w: "w-1/4" },
];

export function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((s) => (
        <div key={s.label} className="p-6 bg-card/50 border border-border rounded-lg">
          <div className="font-mono text-[10px] text-muted-foreground uppercase mb-2 tracking-wider">
            {s.label}
          </div>
          <div className="text-3xl font-bold text-foreground tabular-nums tracking-tighter">
            {s.value}
          </div>
          <div className="mt-3 w-full h-1 bg-muted rounded-full overflow-hidden">
            <div className={`${s.w} h-full ${s.color}`} />
          </div>
        </div>
      ))}
    </div>
  );
}
