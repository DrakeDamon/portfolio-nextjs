export interface CaseStudy {
  title: string
  slug: string
  summary: string
  role: string
  dates: string
  stack: string[]
  category: string
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
    title: "Tampa Rent Signals Data Pipeline",
    slug: "tampa-rent-signals",
    summary: "Production-ready data engineering pipeline integrating Zillow, ApartmentList, and FRED data with dbt Core, Great Expectations, and Dagster orchestration on Snowflake.",
    role: "Data Engineer",
    dates: "2024",
    category: "Data Warehouses",
    stack: ["Snowflake", "dbt Core", "Dagster", "Great Expectations", "FastAPI", "Python", "AWS S3", "Docker", "Render"],
    metrics: [
      {
        label: "Orchestration",
        value: "15 Assets",
        description: "Dagster software-defined assets"
      },
      {
        label: "Data Quality",
        value: "100+ Rules",
        description: "Great Expectations validations"
      },
      {
        label: "Asset Checks",
        value: "12 Checks",
        description: "Comprehensive validation pipeline"
      },
      {
        label: "API Endpoints",
        value: "9 Endpoints",
        description: "FastAPI production deployment"
      }
    ],
    links: {
      repo: "https://github.com/DrakeDamon/rental_signals",
      demo: "https://rental-signals.onrender.com"
    },
    content: `
<h2 id="problem">Problem</h2>
<p>Rental market data is fragmented across multiple sources (Zillow, ApartmentList, FRED), making it difficult to analyze trends, compare markets, and correlate economic indicators. Investors and analysts need a unified, production-grade data platform with historical tracking, data quality guarantees, and API access for real-time insights.</p>

<h2 id="constraints">Constraints</h2>
<ul>
<li>Multiple data sources with varying schemas and formats (wide vs long format)</li>
<li>Need for historical tracking with slowly changing dimensions (SCD Type 2)</li>
<li>Comprehensive data quality validation across Bronze, Silver, and Gold layers</li>
<li>Production-grade orchestration with monitoring and alerting</li>
<li>RESTful API deployment for external consumption</li>
<li>Cost-effective cloud data warehouse solution</li>
</ul>

<h2 id="architecture">Architecture</h2>
<p>Built a modern data platform implementing Bronze → Silver → Gold medallion architecture with Snowflake:</p>
<pre><code>AWS S3 (Raw CSV) → Snowflake Bronze → dbt Silver (Star Schema) → dbt Gold (Business Marts) → FastAPI (Render)</code></pre>

<h3>Data Flow</h3>
<ol>
<li><strong>Bronze Layer</strong>: Raw CSV ingestion from S3 (Zillow ZORI, ApartmentList, FRED CPI)</li>
<li><strong>Silver Layer</strong>: dbt-managed star schema with SCD Type 2 dimensions and fact tables</li>
<li><strong>Gold Layer</strong>: Business-ready mart models with pre-calculated analytics</li>
<li><strong>Orchestration</strong>: Dagster software-defined assets with Great Expectations validation</li>
<li><strong>API Layer</strong>: FastAPI deployment on Render with 9 production endpoints</li>
</ol>

<h3>Star Schema Design</h3>
<ul>
<li><strong>Dimensions</strong>: DIM_LOCATION (SCD Type 2), DIM_TIME, DIM_ECONOMIC_SERIES, DIM_DATA_SOURCE</li>
<li><strong>Facts</strong>: FACT_RENT_ZORI, FACT_RENT_APTLIST, FACT_ECONOMIC_INDICATOR</li>
<li><strong>Marts</strong>: mart_rent_trends, mart_market_rankings, mart_economic_correlation, mart_regional_summary</li>
</ul>

<h2 id="implementation">Implementation</h2>

<h3>Modern Data Stack</h3>
<ul>
<li><strong>dbt Core</strong>: 15+ models with staging, core, and mart layers; incremental processing for large datasets</li>
<li><strong>Dagster</strong>: 15 software-defined assets with automated scheduling, asset checks, and monitoring</li>
<li><strong>Great Expectations</strong>: 100+ validation rules with layer-specific quality gates</li>
<li><strong>Snowflake</strong>: Cloud data warehouse with clustering and partitioning optimization</li>
<li><strong>FastAPI</strong>: Production API with 9 endpoints for market data, trends, rankings, and analytics</li>
</ul>

<h3>Data Quality Framework</h3>
<ul>
<li><strong>100+ Validation Rules</strong>: Comprehensive business rule validation across all pipeline layers</li>
<li><strong>Bronze Validation</strong>: Schema validation, null checks, data type verification</li>
<li><strong>Silver Validation</strong>: Business rule enforcement, referential integrity, SCD Type 2 consistency</li>
<li><strong>Gold Validation</strong>: Metric accuracy, trend validation, cross-source consistency</li>
<li><strong>Operational Monitoring</strong>: Data freshness checks, pipeline health, quality score tracking</li>
<li><strong>Statistical Validation</strong>: Outlier detection, range checking, and data profiling</li>
</ul>

<h3>SCD Type 2 Implementation</h3>
<ul>
<li><strong>dbt Snapshots</strong>: Automated historical tracking for changing dimensions</li>
<li><strong>Effective Dating</strong>: EFFECTIVE_DATE, END_DATE, IS_CURRENT flags for time-travel queries</li>
<li><strong>Surrogate Keys</strong>: Immutable keys for fact table relationships</li>
</ul>

<h2 id="results-impact">Results & Impact</h2>

<h3>Orchestration Excellence</h3>
<ul>
<li><strong>15 Software-Defined Assets</strong>: Complete pipeline managed via Dagster with dependency tracking</li>
<li><strong>Automated Scheduling</strong>: Daily and weekly execution with smart re-computation</li>
<li><strong>Asset Checks</strong>: 12 comprehensive validation checks integrating Great Expectations</li>
<li><strong>Monitoring Dashboard</strong>: Built-in observability via Dagster UI with alerting</li>
</ul>

<h3>Data Quality Achievement</h3>
<ul>
<li><strong>100+ Validation Rules</strong>: Comprehensive Great Expectations validations across all pipeline layers</li>
<li><strong>12 Asset Checks</strong>: Dagster asset checks integrating Great Expectations for automated quality gates</li>
<li><strong>Zero Data Loss</strong>: Complete audit trail with data lineage tracking via mart_data_lineage</li>
<li><strong>Business Rule Enforcement</strong>: Automated validation of rent growth limits and CPI ranges</li>
<li><strong>Cross-Source Consistency</strong>: Unified metrics across Zillow, ApartmentList, and FRED</li>
<li><strong>Statistical Validation</strong>: Outlier detection, range checking, and automated data profiling</li>
</ul>

<h3>Historical Tracking</h3>
<ul>
<li><strong>SCD Type 2 Implementation</strong>: Full historical tracking using dbt snapshots</li>
<li><strong>Time-Travel Queries</strong>: Point-in-time analysis with effective dating</li>
<li><strong>Dimension Evolution</strong>: Track changes in location attributes and economic series</li>
</ul>

<h3>API Deployment</h3>
<ul>
<li><strong>9 Production Endpoints</strong>: Market data, trends, comparisons, price drops, rankings, analytics</li>
<li><strong>Live Deployment</strong>: Hosted on Render with auto-deploy from GitHub</li>
<li><strong>Interactive Documentation</strong>: Swagger UI and ReDoc for API exploration</li>
<li><strong>Production-Ready</strong>: Error handling, input validation, pagination, health monitoring</li>
</ul>

<h3>Technical Excellence</h3>
<ul>
<li><strong>Medallion Architecture</strong>: Industry-standard Bronze → Silver → Gold pattern</li>
<li><strong>Modern Stack</strong>: dbt Core + Dagster + Great Expectations + FastAPI</li>
<li><strong>Infrastructure as Code</strong>: AWS infrastructure with IAM policies and S3 automation</li>
<li><strong>Comprehensive Documentation</strong>: dbt docs, Dagster lineage, API documentation</li>
</ul>
    `,
    published: true
  },
  {
    title: "LeaseRadar - Full-Stack Rental Market Platform",
    slug: "leaseradar-fullstack",
    summary: "End-to-end full-stack application combining Next.js 14 frontend with FastAPI backend, featuring real-time market analytics, interactive data visualizations, and comprehensive rental market insights powered by Snowflake data warehouse.",
    role: "Full-Stack Engineer",
    dates: "2024",
    category: "ML/AI",
    stack: ["Next.js 14", "TypeScript", "FastAPI", "Snowflake", "Tailwind CSS", "Zustand", "Recharts", "Radix UI", "Python", "Docker", "Render"],
    metrics: [
      {
        label: "Frontend Components",
        value: "15+ Components",
        description: "Reusable React components"
      },
      {
        label: "API Endpoints",
        value: "9 Endpoints",
        description: "RESTful API with FastAPI"
      },
      {
        label: "Performance",
        value: "5min Cache",
        description: "Smart caching with TTL"
      },
      {
        label: "Accessibility",
        value: "WCAG AA",
        description: "Full keyboard navigation"
      }
    ],
    links: {
      repo: "https://github.com/DrakeDamon/rental_signals",
      demo: "https://rental-signals.onrender.com"
    },
    content: `
<h2 id="problem">Problem</h2>
<p>Rental market data is valuable but difficult to access and visualize for end users. Investors, renters, and analysts need an intuitive, responsive web application that combines real-time market data with interactive visualizations, price trend analysis, and comprehensive market insights—all backed by a production data warehouse.</p>

<h2 id="constraints">Constraints</h2>
<ul>
<li>Need for modern, responsive UI with mobile-first design</li>
<li>Real-time data integration from backend API</li>
<li>Complex state management for filters, watchlists, and user preferences</li>
<li>Performance optimization with caching and efficient data fetching</li>
<li>Accessibility requirements (WCAG 2.2 AA compliance)</li>
<li>Integration with Snowflake data warehouse via FastAPI backend</li>
</ul>

<h2 id="architecture">Architecture</h2>
<p>Built a modern full-stack application with clear separation of concerns:</p>
<pre><code>Next.js 14 (TypeScript) ↔ FastAPI (Python) ↔ Snowflake Data Warehouse ↔ dbt + Dagster Pipeline</code></pre>

<h3>Frontend Architecture</h3>
<ol>
<li><strong>Next.js 14 App Router</strong>: Server-side rendering with dynamic routes</li>
<li><strong>TypeScript</strong>: Type-safe development with strict mode</li>
<li><strong>Zustand State Management</strong>: Lightweight state with localStorage persistence</li>
<li><strong>API Client with Caching</strong>: 5-minute TTL cache for optimal performance</li>
<li><strong>Design System</strong>: Custom design tokens with light/dark theme support</li>
</ol>

<h3>Backend Architecture</h3>
<ol>
<li><strong>FastAPI</strong>: High-performance async API with automatic OpenAPI docs</li>
<li><strong>Snowflake Integration</strong>: Direct queries to production data warehouse</li>
<li><strong>Pydantic Models</strong>: Request/response validation with type safety</li>
<li><strong>Error Handling</strong>: Comprehensive HTTP status codes with structured responses</li>
<li><strong>Docker Deployment</strong>: Containerized application deployed on Render</li>
</ol>

<h2 id="implementation">Implementation</h2>

<h3>Frontend Features</h3>
<ul>
<li><strong>15+ React Components</strong>: SearchBar, FilterBar, RangeSlider, ResultCard, MarketCard, TrendChart, Map integration</li>
<li><strong>Responsive Design</strong>: Mobile-first with adaptive layouts (sm/md/lg/xl breakpoints)</li>
<li><strong>Interactive Charts</strong>: Recharts integration for 30/90-day price trend visualization</li>
<li><strong>Theme System</strong>: Light/dark/system theme with localStorage persistence</li>
<li><strong>Accessibility</strong>: WCAG AA compliant with keyboard navigation and ARIA labels</li>
<li><strong>Loading States</strong>: Skeleton components with shimmer animation</li>
</ul>

<h3>State Management</h3>
<ul>
<li><strong>Zustand Store</strong>: Centralized state for markets, filters, watchlist, and theme</li>
<li><strong>API Data Caching</strong>: 5-minute TTL cache prevents unnecessary refetches</li>
<li><strong>localStorage Persistence</strong>: Watchlist and alerts persist across sessions</li>
<li><strong>Hybrid Data Strategy</strong>: Market-level data from API, property-level from fixtures</li>
</ul>

<h3>API Integration</h3>
<ul>
<li><strong>9 RESTful Endpoints</strong>: Markets list, market details, trends, price drops, featured markets</li>
<li><strong>Standardized Responses</strong>: Consistent JSON format with metadata and pagination</li>
<li><strong>Error Handling</strong>: Graceful degradation with user-friendly error messages</li>
<li><strong>Query Parameters</strong>: Flexible filtering with state, limit, offset, threshold parameters</li>
</ul>

<h3>Design System</h3>
<ul>
<li><strong>Design Tokens</strong>: Colors, typography, spacing, shadows, motion with 4px rhythm</li>
<li><strong>Tailwind CSS</strong>: Utility-first styling with custom configuration</li>
<li><strong>Radix UI Primitives</strong>: Accessible component foundations</li>
<li><strong>Inter Font</strong>: 8 size scales (xs to 4xl) with consistent line heights</li>
</ul>

<h2 id="results-impact">Results & Impact</h2>

<h3>Frontend Excellence</h3>
<ul>
<li><strong>15+ Reusable Components</strong>: Modular architecture with TypeScript type safety</li>
<li><strong>WCAG AA Compliance</strong>: Full keyboard navigation and screen reader support</li>
<li><strong>Performance Optimized</strong>: 5-minute cache TTL reduces API calls and improves UX</li>
<li><strong>Responsive Design</strong>: Mobile-first approach with adaptive layouts for all screen sizes</li>
<li><strong>Theme Support</strong>: Light/dark/system themes with smooth transitions</li>
</ul>

<h3>Backend Integration</h3>
<ul>
<li><strong>9 Production Endpoints</strong>: Complete API coverage for market data and analytics</li>
<li><strong>Live Deployment</strong>: Hosted on Render with auto-deploy from GitHub</li>
<li><strong>Snowflake Integration</strong>: Direct queries to production data warehouse</li>
<li><strong>Interactive Documentation</strong>: Swagger UI and ReDoc for API exploration</li>
<li><strong>Error Handling</strong>: Comprehensive status codes with structured JSON responses</li>
</ul>

<h3>Full-Stack Features</h3>
<ul>
<li><strong>End-to-End Type Safety</strong>: TypeScript frontend + Pydantic backend validation</li>
<li><strong>Real-Time Data</strong>: Live market data from Snowflake via FastAPI</li>
<li><strong>Interactive Visualizations</strong>: Recharts integration for price trend analysis</li>
<li><strong>State Management</strong>: Zustand with localStorage persistence for user preferences</li>
<li><strong>Caching Strategy</strong>: Smart caching at both frontend and API levels</li>
</ul>

<h3>User Experience</h3>
<ul>
<li><strong>Market Discovery</strong>: Browse all markets with sorting and filtering</li>
<li><strong>Price Trend Analysis</strong>: Interactive charts showing 30/90-day rent trends</li>
<li><strong>Price Drop Detection</strong>: Automatic alerts for markets with rent decreases</li>
<li><strong>Watchlist Feature</strong>: Save and track favorite markets with localStorage</li>
<li><strong>Market Analytics</strong>: YoY/MoM growth rates, market temperature, quality scores</li>
</ul>

<h3>Technical Excellence</h3>
<ul>
<li><strong>Modern Stack</strong>: Next.js 14 + TypeScript + FastAPI + Snowflake</li>
<li><strong>Design System</strong>: Custom tokens with Tailwind CSS and Radix UI</li>
<li><strong>Performance</strong>: Smart caching, lazy loading, optimized bundle size</li>
<li><strong>Accessibility</strong>: WCAG AA with keyboard navigation and semantic HTML</li>
<li><strong>Developer Experience</strong>: TypeScript strict mode, ESLint, hot reload</li>
</ul>
    `,
    published: true
  },
  {
    title: "Real-Time Offers Engine — Kafka → Spark → S3 → SQS/Lambda",
    slug: "realtime-offers-engine",
    summary: "Built a sub-minute streaming pipeline that enriches card transactions and triggers SMS-style offers; PII-safe data lake in S3.",
    role: "Data Engineer",
    dates: "2024",
    category: "Real-time Streaming",
    stack: ["Apache Spark", "Confluent Kafka", "AWS S3", "AWS Lambda", "AWS SQS", "Python", "Real-time Streaming"],
    metrics: [
      {
        label: "End-to-End Latency",
        value: "30-60s",
        description: "Transaction to notification"
      },
      {
        label: "Processing Speed",
        value: "10K+/min",
        description: "Transactions per minute"
      },
      {
        label: "System Uptime",
        value: "99.9%",
        description: "Fault-tolerant architecture"
      },
      {
        label: "Monthly Cost",
        value: "~$50",
        description: "Demo workload operational cost"
      }
    ],
    links: {
      repo: "https://github.com/DrakeDamon/kafka-spark-streaming-pipeline-"
    },
    content: `
<h2 id="problem">Problem</h2>
<p>Marketing teams need to send relevant offers within seconds of customer transactions (e.g., 10% off groceries). The system must be reliable, low-cost, and privacy-aware with PII minimization.</p>

<h2 id="architecture">Architecture</h2>
<p>Built a production-ready streaming architecture:</p>
<pre><code>Kafka (Confluent) → Spark Structured Streaming → S3 (Parquet, partitioned by date) + SQS → Lambda for notifications</code></pre>

<h3>Key Features</h3>
<ul>
<li><strong>Real-time Processing</strong>: 30-60 second end-to-end latency</li>
<li><strong>PII Protection</strong>: Hashed phone numbers in data lake, raw only in notification path</li>
<li><strong>Fault Tolerance</strong>: Spark checkpointing for exactly-once processing</li>
<li><strong>Dual-Sink Pattern</strong>: Parallel writes to analytics (S3) and notifications (SQS)</li>
</ul>

<h2 id="implementation">Implementation</h2>
<ul>
<li><strong>Broadcast Joins</strong>: Efficient offer matching using broadcast variables</li>
<li><strong>Partitioned Storage</strong>: Date-based partitioning for optimal query performance</li>
<li><strong>Privacy by Design</strong>: SHA-256 phone hashing for lake storage</li>
<li><strong>Serverless Notifications</strong>: SQS + Lambda for scalable SMS delivery</li>
</ul>

<h2 id="results-impact">Results & Impact</h2>
<ul>
<li><strong>High Throughput</strong>: 10K+ transactions per minute processing capability</li>
<li><strong>Low Latency</strong>: P95 < 60 seconds for real-time offer delivery</li>
<li><strong>Cost Efficient</strong>: ~$50/month operational costs with serverless architecture</li>
<li><strong>Production Ready</strong>: Comprehensive error handling and monitoring</li>
</ul>
    `,
    published: true
  },
  {
    title: "E-commerce Data Warehouse",
    slug: "ecommerce-warehouse",
    summary: "Production-ready cloud-native data warehouse showcasing modern data engineering practices with Medallion Architecture on Google Cloud Platform.",
    role: "Data Engineer",
    dates: "2024",
    category: "Data Warehouses",
    stack: ["GCP", "BigQuery", "dbt Core", "GitHub Actions", "Workload Identity", "Mermaid", "Python"],
    metrics: [
      {
        label: "Records Processed",
        value: "116,294",
        description: "Raw CSV to analytics-ready tables"
      },
      {
        label: "Data Deduplication",
        value: "58%",
        description: "60,398 → 27,659 sales records"
      },
      {
        label: "Test Coverage",
        value: "18/19",
        description: "Comprehensive data quality tests"
      },
      {
        label: "Pipeline Speed",
        value: "8 seconds",
        description: "End-to-end transformation"
      }
    ],
    links: {
      repo: "https://github.com/DrakeDamon/E-commerce-warehouse"
    },
    content: `
<h2 id="problem">Problem</h2>
<p>E-commerce businesses need reliable, scalable data infrastructure to support analytics and business intelligence. Raw transactional data from multiple systems (CRM, ERP) requires cleaning, deduplication, and transformation into analytics-ready formats with guaranteed data quality and complete audit trails.</p>

<h2 id="constraints">Constraints</h2>
<ul>
<li>Multiple data sources with varying schemas and quality</li>
<li>Significant data duplication requiring intelligent deduplication strategies</li>
<li>Need for NULL-safe transformations and robust surrogate key generation</li>
<li>Production-grade CI/CD requirements with secure authentication</li>
<li>Complete audit trail for governance and compliance</li>
<li>Zero data loss tolerance for financial data</li>
</ul>

<h2 id="architecture">Architecture</h2>
<p>Built a cloud-native medallion architecture following modern data engineering best practices:</p>
<pre><code>CSV Sources → GCS → BigQuery Bronze → dbt Transform → Silver/Gold → BI Analytics</code></pre>

<h3>Data Flow</h3>
<ol>
<li><strong>Bronze Layer</strong>: Raw CSV ingestion to BigQuery (6 source tables, 116K+ records)</li>
<li><strong>Silver Layer</strong>: Cleaned and deduplicated data with quality validations</li>
<li><strong>Gold Layer</strong>: Star schema optimized for analytics with incremental MERGE</li>
<li><strong>QA Layer</strong>: Complete audit trail tracking all data quality issues</li>
</ol>

<h2 id="results-impact">Results & Impact</h2>
<h3>Data Processing Success</h3>
<ul>
<li><strong>116,294 → 79,153 records</strong>: 32% intelligent deduplication across all layers</li>
<li><strong>Zero Data Loss</strong>: Complete audit trail with 17,996 QA records</li>
<li><strong>100% Critical Coverage</strong>: 18/19 comprehensive tests passing</li>
<li><strong>Production Ready</strong>: 8-second end-to-end pipeline execution</li>
</ul>

<h3>Technical Excellence</h3>
<ul>
<li><strong>NULL-Safe Processing</strong>: 100% valid surrogate key generation</li>
<li><strong>Smart Deduplication</strong>: Priority-based customer record consolidation</li>
<li><strong>Complete Validation</strong>: Automated testing preventing data quality issues</li>
<li><strong>Enterprise CI/CD</strong>: GitHub Actions with Workload Identity Federation</li>
</ul>
    `,
    published: true
  },
  {
    title: "Earthquakes Lakehouse (Azure)",
    slug: "earthquakes-lakehouse",
    summary: "ADF → ADLS Gen2 → Databricks Delta (Bronze/Silver/Gold) with dbt marts and Azure Monitor alerts.",
    role: "Data Engineer",
    dates: "2024",
    category: "Lakehouses",
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
    category: "Lakehouses",
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
    category: "Data Warehouses",
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
    category: "ETL Pipelines",
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
    category: "ML/AI",
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
