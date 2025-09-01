export interface CaseStudy {
  title: string
  slug: string
  summary: string
  role: string
  dates: string
  stack: string[]
  metrics: Array<{
    label: string
    value: string
    description: string
  }>
  links?: {
    repo?: string
    demo?: string
    dashboard?: string
  }
  content: string
  published: boolean
}

export const allCaseStudies: CaseStudy[] = [
  {
    title: "Earthquakes Lakehouse (Azure)",
    slug: "earthquakes-lakehouse",
    summary: "ADF → ADLS Gen2 → Databricks Delta (Bronze/Silver/Gold) with dbt marts and Azure Monitor alerts.",
    role: "Data Engineer",
    dates: "2024",
    stack: ["Azure", "ADF", "ADLS Gen2", "Databricks/Delta", "dbt", "GitHub Actions", "Azure Monitor"],
    metrics: [
      { label: "ADF Schedule", value: "18:00", description: "Daily refresh time" },
      { label: "Medallion", value: "B/S/G", description: "Bronze → Silver → Gold" },
      { label: "Quality", value: "dbt tests", description: "not_null, accepted_values" },
      { label: "Alerts", value: "Azure Monitor", description: "Failure notifications" }
    ],
    links: {
      repo: "https://github.com/DrakeDamon/azure-mini-quake"
    },
    content: `
<h2 id="problem">Problem</h2>
<p>Operationalize ingest and curation for USGS earthquake events with reproducible schedules, quality checks, and business-ready marts.</p>

<h2 id="architecture">Architecture</h2>
<pre><code>ADF (Copy, params) → ADLS Gen2 (raw) → Databricks (Bronze → Silver → Gold) → dbt marts (eq_daily_metrics, eq_top100)</code></pre>
<ul>
<li><strong>ADF</strong>: Parameterized Copy (start/end date, min magnitude) and daily schedule</li>
<li><strong>Databricks</strong>: Bronze persist, Silver normalization (event time, magnitude bucket, lat/lon/depth)</li>
<li><strong>dbt</strong>: Gold marts with tests (not_null, accepted_values) enforced in CI</li>
<li><strong>Ops</strong>: GitHub Actions CI; Azure Monitor alerts on failures; SPN + Secret Scopes</li>
<li><strong>Runbook</strong>: Structured logging with row counts for triage</li>
<li><strong>Security</strong>: Least-privilege IAM, Secret Scopes for OAuth</li>
<li><strong>Cost</strong>: Partitioning and pruning in Delta tables</li>
<li><a href="https://github.com/DrakeDamon/azure-mini-quake/blob/main/README.md" target="_blank" rel="noopener noreferrer">Repository README</a></li>
  </ul>
<h2 id="results-impact">Results &amp; Impact</h2>
<ul>
  <li>Daily SLAs with alerting via Azure Monitor</li>
  <li>Contracted marts powering dashboard-friendly metrics</li>
  <li>CI-enforced tests gatekeeping quality</li>
</ul>
`,
    published: true
  },
  {
    title: "Taxi Lakehouse (Azure)",
    slug: "taxi-lakehouse",
    summary: "ADF Copy to ADLS, Databricks Bronze/Silver, and dbt Gold fact fct_taxi_daily with email alerts and CI integration.",
    role: "Data Engineer",
    dates: "2024",
    stack: ["Azure", "ADF", "ADLS Gen2", "Databricks/Delta", "dbt", "GitHub Actions"],
    metrics: [
      { label: "ADF Schedule", value: "06:00", description: "Daily trigger" },
      { label: "Layers", value: "Bronze/Silver", description: "Refined ingestion" },
      { label: "Gold", value: "fct_taxi_daily", description: "Business fact table" },
      { label: "Alerts", value: "Email", description: "On failure" }
    ],
    links: {
      repo: "https://github.com/DrakeDamon/azure-mini-taxi"
    },
    content: `
<h2 id="problem">Problem</h2>
<p>Deliver a reliable, scheduled taxi pipeline with validated Gold facts and pragmatic ops for failures and notebook deployment.</p>

<h2 id="architecture">Architecture</h2>
<pre><code>ADF Copy → ADLS Gen2 (raw) → Databricks (Bronze → Silver) → dbt (Gold: fct_taxi_daily)</code></pre>
<ul>
<li><strong>ADF</strong>: Daily 06:00 trigger; strict/warn validation toggle; robust filename handling</li>
<li><strong>Databricks</strong>: Bronze ingestion; Silver cleansing and feature columns</li>
<li><strong>dbt</strong>: Gold marts with tests and CI; contracts enforced</li>
<li><strong>Ops</strong>: GitHub Actions to import notebooks; failure alerts via email</li>
<li><a href="https://github.com/DrakeDamon/azure-mini-taxi/blob/main/README.md" target="_blank" rel="noopener noreferrer">Repository README</a></li>
</ul>
<h2 id="results-impact">Results &amp; Impact</h2>
<ul>
  <li>Predictable daily runs with actionable failure notifications</li>
  <li>dbt Gold fact fct_taxi_daily enables downstream BI</li>
  <li>Resilient ingestion handles raw filename variability</li>
</ul>
`,
    published: true
  },
  {
    title: "SEC EDGAR Financials Warehouse",
    slug: "sec-edgar-warehouse", 
    summary: "Production-style lakehouse architecture processing SEC financial data with BigQuery, dbt, and automated data quality validation.",
    role: "Data Engineer",
    dates: "2024",
    stack: ["GCP", "BigQuery", "dbt", "Great Expectations", "GitHub Actions", "Looker Studio", "Python"],
    metrics: [
      {
        label: "dbt Tests Passed",
        value: "14/14",
        description: "100% data quality validation"
      },
      {
        label: "GE Validations", 
        value: "100%",
        description: "All data quality checks passing"
      },
      {
        label: "Query Cost Reduction",
        value: "80-90%",
        description: "Via partition/cluster optimization"
      },
      {
        label: "Automation",
        value: "Daily 06:00 UTC",
        description: "Automated refresh schedule"
      }
    ],
    links: {
      repo: "https://github.com/DrakeDamon/sec-edgar-warehouse",
      dashboard: "https://lookerstudio.google.com/sec-edgar-dashboard"
    },
    content: `
<h2 id="problem">Problem</h2>
<p>Financial data analysis requires reliable, up-to-date SEC filing information that's expensive to query and difficult to maintain. Analysts need a fast, cost-effective way to access standardized financial metrics across thousands of companies with guaranteed data quality.</p>

<h2 id="constraints">Constraints</h2>
<ul>
<li>SEC API rate limits requiring careful throttling</li>
<li>Raw filing data inconsistencies and format variations</li>
<li>BigQuery costs scaling with data volume scanned</li>
<li>Need for daily automated updates with zero manual intervention</li>
<li>Data quality requirements for financial accuracy</li>
</ul>

<h2 id="architecture">Architecture</h2>
<p>Built a production-style lakehouse following the medallion architecture pattern:</p>
<pre><code>SEC API → GCS (Raw NDJSON) → BigQuery Raw → dbt Transform → BigQuery Curated → Looker Studio</code></pre>

<h3>Data Flow</h3>
<ol>
<li><strong>Extract</strong>: Rate-limited SEC API calls → GCS storage (NDJSON format)</li>
<li><strong>Load</strong>: Batch loads to BigQuery raw tables with schema validation</li>
<li><strong>Transform</strong>: dbt models creating staging → intermediate → mart layers</li>
<li><strong>Serve</strong>: Curated tables optimized for BI consumption</li>
</ol>

<h2 id="results-impact">Results & Impact</h2>
<h3>Performance Optimization</h3>
<ul>
<li><strong>Query Cost Reduction</strong>: 80-90% reduction in scanned bytes through partition pruning and clustering</li>
<li><strong>Query Speed</strong>: TTM trend queries execute in seconds vs. minutes</li>
<li><strong>Looker Studio</strong>: Dashboard stays responsive with optimized data model</li>
</ul>

<h3>Data Quality</h3>
<ul>
<li><strong>100% Validation Success</strong>: All dbt tests and Great Expectations checks passing</li>
<li><strong>Zero Data Issues</strong>: Automated quality gates prevent bad data propagation</li>
<li><strong>Audit Trail</strong>: Complete lineage and validation history in BigQuery</li>
</ul>
    `,
    published: true
  },
  {
    title: "Cloud-Native Crypto ETL",
    slug: "crypto-etl",
    summary: "Serverless cryptocurrency data pipeline using Cloud Run Jobs, BigQuery, and Terraform with automated cost optimization.", 
    role: "Data Engineer",
    dates: "2024",
    stack: ["Python", "Docker", "Cloud Run Jobs", "Cloud Scheduler", "BigQuery", "GCS", "Secret Manager", "dbt", "Terraform", "Great Expectations"],
    metrics: [
      {
        label: "Monthly Cost",
        value: "~$2.36", 
        description: "Total BigQuery query spend"
      },
      {
        label: "Architecture",
        value: "Serverless",
        description: "ETL → Transform → Validate → Visualize"
      },
      {
        label: "Automation", 
        value: "Daily/6-hourly",
        description: "Scheduled data ingestion"
      },
      {
        label: "Infrastructure",
        value: "100% Code",
        description: "Terraform-managed resources"
      }
    ],
    links: {
      repo: "https://github.com/DrakeDamon/crypto-etl-pipeline",
      dashboard: "https://lookerstudio.google.com/crypto-dashboard"
    },
    content: `
<h2 id="problem">Problem</h2>
<p>Cryptocurrency market analysis requires real-time price data, technical indicators, and trend analysis across multiple assets. Manual data collection is unreliable, and existing solutions are expensive or lack the flexibility needed for custom analytics.</p>

<h2 id="architecture">Architecture</h2>
<p>Designed a serverless, cost-optimized data pipeline using Google Cloud Platform:</p>
<pre><code>CoinGecko API → Cloud Run Jobs → GCS → BigQuery → dbt → Looker Studio</code></pre>

<h2 id="results-impact">Results & Impact</h2>
<h3>Cost Optimization</h3>
<ul>
<li><strong>Monthly spend</strong>: ~$2.36 for BigQuery queries</li>
<li><strong>Partition pruning</strong>: Eliminates unnecessary data scanning</li>
<li><strong>Clustering</strong>: Optimizes queries by asset symbol</li>
<li><strong>Serverless architecture</strong>: Zero idle costs</li>
</ul>
    `,
    published: true
  },
  {
    title: "Recruit Reveal - Low-Latency Model Serving",
    slug: "recruit-reveal",
    summary: "Machine learning model deployment on Databricks with Python SQL UDFs for real-time NFL draft predictions.",
    role: "ML Engineer / Data Engineer", 
    dates: "2024",
    stack: ["Databricks", "PySpark", "SQL Warehouse", "Unity Catalog", "Python", "XGBoost", "MLflow", "Node.js", "Express", "Next.js"],
    metrics: [
      {
        label: "Model Type",
        value: "XGBoost Multi-class",
        description: "QB/RB/WR position prediction"
      },
      {
        label: "Feature Engineering",
        value: "Reproducible", 
        description: "Z-scores, OOF encoding, missing flags"
      },
      {
        label: "Model Tracking",
        value: "MLflow",
        description: "@production alias deployment"
      },
      {
        label: "Serving",
        value: "SQL UDFs",
        description: "JSON probability responses"
      }
    ],
    links: {
      repo: "https://github.com/DrakeDamon/recruit-reveal",
      demo: "https://recruit-reveal-demo.com"
    },
    content: `
<h2 id="problem">Problem</h2>
<p>NFL draft analysts need real-time player evaluation tools that can predict draft position and success probability across different positions. Traditional scouting relies on subjective evaluation, while data-driven approaches often lack the speed and accessibility needed for live draft analysis.</p>

<h2 id="architecture">Architecture</h2>
<p>Built an end-to-end ML pipeline on Databricks with real-time serving capabilities:</p>
<pre><code>Raw Data → Feature Engineering → XGBoost Training → MLflow Registry → SQL UDFs → REST API → Next.js UI</code></pre>

<h2 id="results-impact">Results & Impact</h2>
<h3>Model Performance</h3>
<ul>
<li><strong>Cross-validation accuracy</strong>: 78% across all position predictions</li>
<li><strong>Position-specific performance</strong>: QB (82%), RB (76%), WR (74%)</li>
<li><strong>Sub-second latency</strong>: <200ms response times for prediction requests</li>
</ul>
    `,
    published: true
  }
]
