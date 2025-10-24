import Button from '@/components/ui/button'
import Card from '@/components/ui/card'
import Chip from '@/components/ui/chip'

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-emerald-400">Resume</h1>
        <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
          Data Engineer delivering production-grade lakehouses and analytics platforms across cloud environments.
        </p>
        <Button href="/resume.pdf" className="mb-8 text-lg px-8 py-3">
          📄 Download Resume (PDF)
        </Button>
      </div>
      
      <Card className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-2 text-emerald-400">David Damon</h2>
          <p className="text-xl text-neutral-300 mb-2">Data Engineer</p>
          <p className="text-lg text-neutral-400 mb-4">ETL/ELT · Cloud Platforms (Azure, GCP) · Databricks/Spark/Delta · dbt · Monitoring · CI/CD</p>
          <div className="flex flex-wrap justify-center gap-6 text-neutral-400">
            <span>📍 Tampa, FL</span>
            <span>📧 dddamon06@gmail.com</span>
            <span>📞 (316) 609-8566</span>
            <span>🔗 linkedin.com/in/drakedamon</span>
            <span>💻 github.com/DrakeDamon</span>
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <h3 className="text-2xl font-semibold mb-4 text-emerald-400">Profile</h3>
            <p className="text-neutral-300">
              Data Engineer delivering production-grade lakehouses and analytics platforms across cloud environments. Experienced in orchestrating ETL/ELT pipelines, building medallion architectures, applying data quality frameworks, and operationalizing deployments with CI/CD and monitoring. Strong focus on clean architecture, profiling, config-driven pipelines, and clear documentation to ensure scalability and reliability.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold mb-4 text-emerald-400">Core Skills</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-emerald-400">Cloud & Orchestration</h4>
                <p className="text-neutral-300 text-sm">Azure Data Factory, Airflow, Azure Monitor, ARM Templates</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-emerald-400">Storage & Compute</h4>
                <p className="text-neutral-300 text-sm">ADLS Gen2, GCS, Databricks (Spark, Delta Lake), BigQuery, SQL Warehouse</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-emerald-400">Transform & Modeling</h4>
                <p className="text-neutral-300 text-sm">PySpark, dbt (Core), SQL (window functions), Medallion architecture</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-emerald-400">Quality & Governance</h4>
                <p className="text-neutral-300 text-sm">dbt tests (not_null/unique/accepted_values), Great Expectations, IAM principles</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-emerald-400">Ops & CI/CD</h4>
                <p className="text-neutral-300 text-sm">GitHub Actions, structured logging, runbooks, cost/perf optimization, Docker</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-emerald-400">Programming & Interop</h4>
                <p className="text-neutral-300 text-sm">Python 3.11 (OOP, Pandas, requests, typing), REST/JSON APIs</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-semibold mb-4 text-emerald-400">Selected Projects</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-emerald-400 mb-2">Tampa Rent Signals Data Pipeline — <span className="text-neutral-400 font-normal">Snowflake + dbt + Dagster + FastAPI (Production Ready)</span></h4>
                <ul className="text-neutral-300 space-y-1 text-sm">
                  <li>• Built production data warehouse with <strong>Bronze → Silver → Gold</strong> medallion architecture processing Zillow, ApartmentList, and FRED data</li>
                  <li>• Orchestrated <strong>15 software-defined assets</strong> via Dagster with automated scheduling, asset checks, and monitoring</li>
                  <li>• Implemented <strong>SCD Type 2</strong> historical tracking using dbt snapshots; <strong>100+ Great Expectations validations</strong> with 100% test coverage</li>
                  <li>• Deployed <strong>9 FastAPI endpoints</strong> on Render with Snowflake integration for rental market analytics and price tracking</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-emerald-400 mb-2">Real-Time Offer Notification System — <span className="text-neutral-400 font-normal">Kafka + Spark Streaming + AWS (Production Ready)</span></h4>
                <ul className="text-neutral-300 space-y-1 text-sm">
                  <li>• Built production streaming pipeline processing <strong>10K+ transactions/minute</strong> with <strong>P95 &lt; 60 seconds</strong> end-to-end latency</li>
                  <li>• Implemented dual-sink pattern: S3 data lake (PII-hashed) + SQS notifications with <strong>exactly-once processing</strong></li>
                  <li>• Deployed on AWS with Lambda SMS delivery, Athena analytics, and <strong>99.9% uptime</strong> with fault tolerance</li>
                  <li>• Designed secure architecture with <strong>PII protection</strong>, SASL_SSL encryption, and comprehensive monitoring</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-emerald-400 mb-2">E-commerce Data Warehouse — <span className="text-neutral-400 font-normal">GCP + BigQuery + dbt + GitHub Actions (Production Ready)</span></h4>
                <ul className="text-neutral-300 space-y-1 text-sm">
                  <li>• Built cloud-native medallion architecture processing <strong>116K+ records</strong> with <strong>58% intelligent deduplication</strong></li>
                  <li>• Implemented NULL-safe transformations, incremental MERGE models, and <strong>18/19 comprehensive tests passing</strong></li>
                  <li>• Deployed CI/CD pipeline with Workload Identity Federation; <strong>complete audit trail</strong> with 17,996 QA records</li>
                  <li>• Generated interactive dbt documentation and <strong>zero data loss</strong> enterprise-grade reliability</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-emerald-400 mb-2">Earthquakes Lakehouse — <span className="text-neutral-400 font-normal">ADF → ADLS Gen2 → Databricks (Delta) + dbt, Azure Monitor</span></h4>
                <ul className="text-neutral-300 space-y-1 text-sm">
                  <li>• Parameterized ingestion (start/end date, min magnitude) from USGS into ADLS</li>
                  <li>• Databricks Bronze → Silver → Gold refinement; dbt marts for daily metrics, top 100 quakes, dashboards</li>
                  <li>• Enforced dbt tests in CI; daily scheduled loads; Monitor alerts + triage runbook</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-emerald-400 mb-2">Taxi Lakehouse — <span className="text-neutral-400 font-normal">ADF → ADLS Gen2 → Databricks (Delta) + dbt</span></h4>
                <ul className="text-neutral-300 space-y-1 text-sm">
                  <li>• Automated CSV ingestion to ADLS; Bronze → Silver transformation in Databricks; dbt marts for daily metrics</li>
                  <li>• Daily 06:00 trigger, email alerts, validation toggles; optional ARM deployment</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-emerald-400 mb-2">Recruit Reveal — <span className="text-neutral-400 font-normal">Low-Latency Model Serving on Databricks</span></h4>
                <ul className="text-neutral-300 space-y-1 text-sm">
                  <li>• Feature pipelines (z-scores, encodings, missing-value flags)</li>
                  <li>• XGBoost models tracked in MLflow; deployed as SQL UDFs returning JSON predictions</li>
                  <li>• Hardened with dtype guards; surfaced through a Next.js evaluation UI</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-emerald-400 mb-2">SEC EDGAR Financials Warehouse — <span className="text-neutral-400 font-normal">GCP + BigQuery + dbt + GE (Looker Studio)</span></h4>
                <ul className="text-neutral-300 space-y-1 text-sm">
                  <li>• Ingested SEC filings into a medallion architecture (sec_raw → sec_curated → sec_viz)</li>
                  <li>• Partitioned/clustered BigQuery marts cut scanned bytes by <strong>80–90%</strong></li>
                  <li>• 14 dbt tests, 100% GE validations; daily scheduled pipeline with smoke checks</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-emerald-400 mb-2">Cloud-Native Crypto ETL — <span className="text-neutral-400 font-normal">GCP + dbt + Terraform + GE (Looker Studio)</span></h4>
                <ul className="text-neutral-300 space-y-1 text-sm">
                  <li>• Cloud Run Jobs + Scheduler → GCS → BigQuery partitioned tables</li>
                  <li>• Rolling analytics (7/30/90-day MAs, volatility, golden-cross)</li>
                  <li>• dbt + GE validations; <strong>~$2.36/mo</strong> query spend with bytes-scanned proof</li>
                  <li>• Makefile-driven workflows with AI-assist tests</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-semibold mb-4 text-emerald-400">Experience</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-emerald-400">React Engineer (Contract)</h4>
                <p className="text-neutral-400 text-sm mb-2">DevSoft, Tampa, FL | Jun 2022 – Present</p>
                <ul className="text-neutral-300 space-y-1 text-sm">
                  <li>• Built React apps with code-splitting, lazy-loading, and REST API integrations</li>
                  <li>• Reduced median load time by <strong>~40%</strong> through performance optimizations</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-emerald-400">Biology Teacher</h4>
                <p className="text-neutral-400 text-sm mb-2">Freedom High School (HCPS), Tampa, FL | Aug 2023 – Present</p>
                <ul className="text-neutral-300 space-y-1 text-sm">
                  <li>• Analyzed data for <strong>150+ students</strong>, producing visualization/statistical reports</li>
                  <li>• Informed instruction for an 8-member team using data insights</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-semibold mb-4 text-emerald-400">Education</h3>
            <div className="space-y-3">
              <div>
                <h4 className="text-lg font-semibold text-emerald-400">Flatiron School</h4>
                <p className="text-neutral-300 text-sm">Full-Stack Web Development (Python/Flask & JavaScript), 2025 — Tampa, FL</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-emerald-400">Friends University</h4>
                <p className="text-neutral-300 text-sm">B.S., Biology, 2021 — Wichita, KS</p>
              </div>
            </div>
          </section>

          <div className="text-center mt-8 pt-6 border-t border-neutral-800">
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/projects">View All Projects</Button>
              <Button href="/contact" className="bg-neutral-800 text-neutral-300 hover:bg-neutral-700">Get In Touch</Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}