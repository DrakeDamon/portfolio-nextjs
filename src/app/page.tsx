import CTAGroup from "@/components/CTAGroup";
import StatsBar from "@/components/StatsBar";
import ProjectSpotlight from "@/components/ProjectSpotlight";
import ProjectMiniCard from "@/components/ProjectMiniCard";
import Card from "@/components/ui/card";
import Chip from "@/components/ui/chip";
import Button from "@/components/ui/button";

export default function Page() {
  const heroChips = ["Azure", "ADF", "Databricks/Delta", "dbt", "GitHub Actions"];

  return (
    <div className="container mx-auto px-4 md:px-6">
      <section className="py-12 md:py-16 space-y-12">
        {/* HERO */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            David Damon
          </h1>
          <p className="text-neutral-300 max-w-2xl mx-auto">
            ETL/ELT · Cloud Platforms (Azure, GCP) · Databricks/Spark/Delta · dbt · Monitoring · CI/CD
          </p>
          <div className="flex justify-center flex-wrap gap-2">
            {heroChips.map((c) => (
              <Chip key={c}>{c}</Chip>
            ))}
          </div>
          <CTAGroup className="justify-center" />
        </div>

        {/* METRICS */}
        <StatsBar />

        {/* ABOUT PREVIEW */}
        <Card className="p-6">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold mb-2 text-emerald-400">About Me</h2>
              <p className="text-neutral-300">
                Data Engineer delivering production-grade lakehouses and analytics platforms across cloud
                environments. Experienced in orchestrating ETL/ELT, building medallion architectures,
                applying data quality frameworks, and operationalizing deployments with CI/CD and monitoring.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Data Lakehouse", "ADF Pipelines", "Databricks Delta", "Azure Monitor"].map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </div>
            <div className="md:col-span-1">
              <div className="rounded-2xl border border-neutral-800 h-28 md:h-full bg-neutral-900/40 flex items-center justify-center text-neutral-500">
                {/* keeps visual balance without images */}
                <span className="text-sm">Building reliable data systems</span>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <Button href="/experience" className="bg-neutral-200 hover:bg-white text-neutral-900">Learn More</Button>
          </div>
        </Card>

        {/* FEATURED PROJECTS */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-emerald-400">Featured Projects</h2>

          {/* Spotlight (largest) - E-commerce Data Warehouse */}
          <ProjectSpotlight
            title="E-commerce Data Warehouse"
            subtitle="Production-ready cloud-native data warehouse with Medallion Architecture processing 116K+ records with 58% intelligent deduplication and comprehensive CI/CD pipeline."
            tags={["GCP", "BigQuery", "dbt Core", "GitHub Actions", "Workload Identity"]}
            caseStudyHref="/projects/ecommerce-warehouse"
            repoHref="https://github.com/DrakeDamon/E-commerce-warehouse"
          />

          {/* Secondary cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectMiniCard
              title="Earthquakes Lakehouse (Azure)"
              blurb="ADF → ADLS Gen2 → Databricks Delta (B/S/G) with dbt Gold marts and Azure Monitor alerts."
              tags={["Azure", "ADF", "ADLS Gen2", "Databricks/Delta", "dbt"]}
              href="/projects/earthquakes-lakehouse"
            />
            <ProjectMiniCard
              title="Recruit Reveal — ML Model Serving"
              blurb="Low-latency XGBoost model serving on Databricks with MLflow tracking and Next.js frontend."
              tags={["Databricks", "XGBoost", "MLflow", "Next.js"]}
              href="/projects/recruit-reveal"
            />
          </div>

          {/* All Projects CTA */}
          <div className="flex justify-center">
            <Button href="/projects">View All Projects</Button>
          </div>
        </div>
      </section>
    </div>
  );
}