import Card from "@/components/ui/card";
import Button from "@/components/ui/button";

export default function ProjectMiniCard({
  title,
  blurb,
  tags,
  href,
}: {
  title: string;
  blurb: string;
  tags: string[];
  href: string;
}) {
  return (
    <Card className="p-5 h-full flex flex-col">
      <h4 className="font-semibold text-emerald-400">{title}</h4>
      <p className="text-sm text-neutral-400 mt-2 flex-1">{blurb}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="text-[11px] border border-neutral-800 rounded px-2 py-0.5 text-neutral-300"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4">
        <Button href={href}>View Case Study</Button>
      </div>
    </Card>
  );
}