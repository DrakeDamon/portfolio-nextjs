import Card from "@/components/ui/card";

const STATS: { value: string; label: string }[] = [
  { value: "18/19", label: "dbt Tests" },
  { value: "80–90%", label: "Cost Reduction" },
  { value: "116K+", label: "Records Processed" },
  { value: "8 sec", label: "Pipeline Speed" },
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