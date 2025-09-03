# **DAVID DAMON**

Tampa, FL • (316) 609‑8566 • dddamon06@gmail.com • [LinkedIn](https://www.linkedin.com/in/drakedamon/) | [GitHub](https://github.com/DrakeDamon) | [Portfolio](https://github.com/DrakeDamon/Portfolio)

## **DATA ENGINEER — AZURE LAKEHOUSE (ADF · ADLS Gen2 · Azure Databricks/Spark/Delta · dbt · Azure Monitor · ARM · GitHub Actions)**

Azure, **AI‑accelerated** data engineer building production lakehouses end‑to‑end: **ADF** ingest → **ADLS Gen2** → **Databricks Delta (Bronze/Silver/Gold)** → **dbt** Gold marts, operationalized with **GitHub Actions** CI/CD, **Service Principal \+ Secret Scopes (OAuth)**, and **Azure Monitor** alerts.

---

## **CORE SKILLS**

* **Azure Data Platform:** Azure Data Factory (Copy, triggers, params), ADLS Gen2, Azure Databricks (Spark, Delta Lake), Azure Monitor (alerts), ARM templates, Databricks Secret Scopes (Service Principal OAuth)

* **Data Engineering:** PySpark/Spark; Medallion (Bronze/Silver/Gold); dbt (Core); SQL (window functions); data contracts; partition/cluster strategies

* **Ops & CI/CD:** GitHub Actions, scheduled triggers, alerting, structured logging, runbooks, cost/perf tuning; Docker

* **Programming:** Python 3.11 (OOP/typing/requests/tenacity, Pandas); REST/JSON interop

* **Quality & Governance:** dbt tests (not\_null/unique/accepted\_values), Great Expectations (where used), least‑privilege IAM

---

## **PROJECTS**

### **Azure** 

### **Earthquakes Lakehouse**

###  **— ADF → ADLS Gen2 → Databricks (Delta) \+ dbt, Azure Monitor Alerts**

Built an **ADF → ADLS Gen2 → Databricks Delta (Bronze/Silver/Gold)** pipeline for **USGS Earthquake** data with **parameterized ingestion**, **daily 18:00 scheduling**, **dbt** Gold marts (eq\_daily\_metrics, eq\_top100, eq\_gold\_dashboard), **GitHub Actions** CI for dbt, and **Azure Monitor** failure alerts; secured with **Service Principal \+ Databricks Secret Scope** (OAuth).

* Parameterized ADF Copy (start/end date, min magnitude) → ADLS quakes/raw.

* Databricks notebook writes **Bronze → Silver → Gold**; Silver normalizes event time, magnitude bucket, lat/lon/depth.

* dbt tests (**not\_null**, **accepted\_values**) enforced in CI; runbook prints row counts for fast triage.

### **Azure** 

### **Taxi Lakehouse**

###  **— ADF → ADLS Gen2 → Databricks (Delta) \+ dbt, Schedule & Alerts**

End‑to‑end Azure pipeline: **ADF Copy** ingests taxis CSV → ADLS; **Databricks** notebook refines **Bronze → Silver**; **dbt** builds Gold fact **fct\_taxi\_daily**.

* Daily ADF trigger **06:00** with email **alert rule** on failure; strict/warn validation toggle & resilient raw filename handling.

* **GitHub Actions** imports /Shared/bronze\_silver; optional **ARM** template for reproducible infra.

### **Recruit Reveal — Low‑Latency Model Serving on Databricks**

**Databricks (Spark, SQL Warehouse, Unity Catalog)**, **MLflow**, Node/Express, Next.js, Python

* Engineered feature pipelines (z‑scores, OOF‑smoothed State encoding, missing‑flag logic) and trained **XGBoost** multi‑class models with **MLflow @production** aliases.

* Deployed **Python SQL UDFs** (e.g., rr\_predict\_qb/rb/wr) returning JSON probabilities from **SQL Warehouse**; **/meta** diagnostics; **Next.js** wizard UI.

* Hardened with numeric‑only matrices and dtype guards to prevent train/serve regressions.

### **SEC EDGAR Financials Warehouse — GCP \+ BigQuery \+ dbt \+ GE (Looker Studio)**

**GCP (BigQuery, GCS)**, **dbt (Core)**, **Great Expectations**, **GitHub Actions** (SA auth), Looker Studio

* Lakehouse: sec\_raw → sec\_curated\_\* → sec\_viz; dbt marts **fct\_financials\_quarterly** (partition period\_end\_date, cluster cik), **dim\_company**, KPIs **kpi\_company\_latest**, **kpi\_ttm\_revenue** (rolling 4Q with ticker backfill).

* **Quality & Ops:** **14/14 dbt tests**, **100% GE validations**, bash **smoke\_check**; **06:00 UTC** daily; partition+cluster cut scanned bytes **\~80–90%** on TTM queries.

### **Cloud‑Native** 

### **Crypto**

###  **ETL — GCP \+ dbt \+ Terraform \+ GE (Looker Studio)**

**Cloud Run Jobs**, **Cloud Scheduler**, **BigQuery**, **GCS**, **dbt**, **Terraform**, **Great Expectations**

* Ingested to GCS; **partitioned/clustered** BigQuery tables; rolling analytics (7/30/90‑day MAs, returns, volatility, **golden‑cross**).

* dbt tests/docs; **GE** validations **logged to BigQuery**; **\~$2.36/mo** query spend with bytes‑scanned proof; Makefile flows; AI‑assist with tests as guardrails.

---

## **EXPERIENCE**

**React Engineer (Contract) —** DevSoft, Tampa, FL | Jun 2022 – Present  
 Built and maintained React apps for 1,000+ users with performance optimizations (code‑splitting, lazy‑loading) and REST integrations; reduced median load time \~40%.

**Biology Teacher** — Freedom High School (HCPS), Tampa, FL | Aug 2023 – Present

Analyzed performance data for 150+ students; used visualization/statistical summaries to guide instruction with an 8‑member team.

---

## **CERTIFICATIONS**

AWS Certified Cloud Practitioner • Databricks Certified Data Engineer Associate

---

## **EDUCATION**

**Flatiron School** — Full‑Stack Web Development (Python/Flask & JavaScript), 2025 — Tampa, FL

**Friends University** — B.S., Biology, 2021 — Wichita, KS

