"use client"

import CTAGroup from "@/components/CTAGroup";
import StatsBar from "@/components/StatsBar";
import ProjectCategoryFilter, { ProjectCategory } from "@/components/ProjectCategoryFilter";
import FilteredProjectGrid from "@/components/FilteredProjectGrid";
import Card from "@/components/ui/card";
import Chip from "@/components/ui/chip";
import Button from "@/components/ui/button";
import { allCaseStudies } from "@/data/case-studies";
import { useState, useMemo } from "react";

export default function Page() {
  const heroChips = ["Azure", "ADF", "Databricks/Delta", "dbt", "GitHub Actions"];
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = useMemo(() => {
    const categoryMap = new Map<string, number>();
    const categoryDescriptions = {
      'Real-time Streaming': 'Real-time data processing with sub-minute latency',
      'Data Warehouses': 'Cloud-native data warehouses with medallion architecture',
      'Lakehouses': 'Azure-based data lakehouses with Bronze/Silver/Gold layers',
      'ML/AI': 'Machine learning model deployment and serving',
      'ETL Pipelines': 'Extract, Transform, Load pipelines with automation'
    };

    allCaseStudies.forEach(project => {
      if (project.published) {
        categoryMap.set(project.category, (categoryMap.get(project.category) || 0) + 1);
      }
    });

    return Array.from(categoryMap.entries()).map(([id, count]) => ({
      id,
      label: id,
      description: categoryDescriptions[id as keyof typeof categoryDescriptions] || '',
      count
    }));
  }, []);

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

        {/* PROJECT CATEGORIES & FILTERING */}
        <div className="space-y-8">
          <ProjectCategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          
          <FilteredProjectGrid activeCategory={activeCategory} />
        </div>
      </section>
    </div>
  );
}
