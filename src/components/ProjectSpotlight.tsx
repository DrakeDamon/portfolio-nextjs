import Card from "@/components/ui/card";
import Button from "@/components/ui/button";

export default function ProjectSpotlight({
  title,
  subtitle,
  tags,
  caseStudyHref,
  repoHref,
}: {
  title: string;
  subtitle: string;
  tags: string[];
  caseStudyHref: string;
  repoHref?: string;
}) {
  return (
    <Card className="p-6 md:p-8 relative overflow-hidden">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="text-2xl font-semibold text-emerald-400">{title}</h3>
          <p className="text-neutral-300 mt-2">{subtitle}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="text-xs border border-neutral-800 rounded px-2 py-0.5 text-neutral-300"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-5 flex gap-3">
            <Button href={caseStudyHref}>Open Case Study</Button>
            {repoHref && (
              <Button href={repoHref} className="bg-neutral-200 hover:bg-white text-neutral-900">
                View Repo
              </Button>
            )}
          </div>
        </div>
        {/* simple abstract art block to avoid images */}
        <div className="h-40 md:h-56 rounded-2xl bg-gradient-to-br from-emerald-600/20 via-emerald-400/10 to-transparent border border-neutral-800" />
      </div>
    </Card>
  );
}