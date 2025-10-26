import Card from "@/components/ui/card";

const STATS: { value: string; label: string }[] = [
  { value: "9", label: "Production Projects" },
  { value: "100+", label: "Data Quality Rules" },
  { value: "10K+", label: "Events/Min Processed" },
  { value: "99.9%", label: "System Uptime" },
];

export default function StatsBar() {
  return (
    <Card className="p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-2xl font-semibold text-emerald-400">{s.value}</div>
            <div className="text-xs text-neutral-400">{s.label}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}