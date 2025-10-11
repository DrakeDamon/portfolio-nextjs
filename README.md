# David Damon - Data Engineer Portfolio

A professional portfolio website built with Next.js 14, TypeScript, and Tailwind CSS, showcasing production-ready data engineering expertise with clean presentation and modern architecture.

## ✨ Features

- **Professional Design**: Clean, recruiter-friendly interface with clear value proposition
- **Production Metrics**: Real project data with 116K+ records processed and 58% deduplication rates
- **Modern Tech Stack**: Next.js 14 App Router with TypeScript and Tailwind CSS
- **Fully Responsive**: Mobile-first design with optimal viewing on all devices
- **Static Export Ready**: Optimized for GitHub Pages deployment with performance focus
- **Case Study Format**: Detailed project documentation with metrics and technical details

## 🎯 Portfolio Highlights

### **Featured Projects**
1. **E-commerce Data Warehouse** - Production-ready GCP + BigQuery + dbt with 18/19 tests passing
2. **Earthquakes Lakehouse** - Azure medallion architecture with ADF → ADLS Gen2 → Databricks
3. **Recruit Reveal** - Low-latency ML model serving with XGBoost and MLflow
4. **SEC EDGAR Warehouse** - 80-90% cost reduction through BigQuery optimization
5. **Crypto ETL Pipeline** - $2.36/mo operational costs with Terraform IaC

### **Key Metrics Dashboard**
- **18/19 dbt Tests** - Comprehensive data quality validation
- **80-90% Cost Reduction** - Query optimization achievements
- **116K+ Records Processed** - Production-scale data processing
- **8 sec Pipeline Speed** - End-to-end transformation performance

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17.0+ (required for Next.js 14)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (GitHub Pages)
GITHUB_PAGES=true npm run build

# Generate sitemap
npm run build
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Homepage with featured projects
│   ├── projects/          # Case studies and project showcase
│   │   ├── page.tsx       # Projects listing with metrics
│   │   └── [slug]/        # Individual case study pages
│   ├── resume/            # Professional resume page
│   ├── experience/        # Detailed work experience
│   ├── skills/            # Technical skills showcase
│   └── contact/           # Contact information
├── components/
│   ├── ui/                # Core UI components (Button, Card, Chip)
│   ├── CTAGroup.tsx       # Call-to-action component
│   ├── StatsBar.tsx       # Performance metrics display
│   ├── ProjectSpotlight.tsx # Featured project card
│   ├── ProjectMiniCard.tsx # Secondary project cards
│   ├── navigation.tsx     # Site navigation
│   └── footer.tsx         # Site footer
├── data/
│   └── case-studies.ts    # Project data and metadata
└── content/
    └── case-studies/      # MDX case study content
        ├── ecommerce-warehouse.mdx
        ├── sec-edgar-warehouse.mdx
        ├── crypto-etl.mdx
        └── recruit-reveal.mdx
```

## 💼 Professional Content

### **Core Technical Skills**
- **Cloud & Orchestration**: Azure Data Factory, Airflow, Azure Monitor, ARM Templates
- **Storage & Compute**: ADLS Gen2, GCS, Databricks (Spark, Delta Lake), BigQuery
- **Transform & Modeling**: PySpark, dbt (Core), SQL (window functions), Medallion architecture
- **Quality & Governance**: dbt tests (not_null/unique/accepted_values), Great Expectations
- **Ops & CI/CD**: GitHub Actions, structured logging, runbooks, Docker
- **Programming**: Python 3.11 (OOP, Pandas, requests, typing), REST/JSON APIs

### **Production Achievements**
- **116,294 records processed** with intelligent deduplication (E-commerce warehouse)
- **58% data deduplication** rate with zero data loss
- **18/19 comprehensive tests passing** across all data quality validations
- **Complete audit trail** with 17,996 QA records for governance
- **8-second end-to-end pipeline** execution for production workloads

## 🎨 Design & Layout

### **Homepage Structure**
1. **Hero Section**: Professional introduction with technical skills
2. **Performance Metrics**: Real project statistics and achievements
3. **About Preview**: Professional summary with technical focus
4. **Featured Projects**: Showcase of key data engineering work
5. **Clear Navigation**: Easy access to detailed case studies

### **Professional Presentation**
- **Clean Layout**: Optimized for hiring manager review
- **Strategic Project Order**: Most impressive work featured prominently
- **Multiple Engagement Options**: Projects, resume, and contact pathways
- **Performance Metrics**: Quantified achievements for credibility

## 🌐 Deployment & Performance

### **GitHub Pages Optimized**
```bash
# Build with GitHub Pages configuration
GITHUB_PAGES=true npm run build

# Files in `out/` directory ready for deployment
npm run deploy
```

### **Performance Features**
- **Minimal Dependencies**: Lean tech stack for optimal loading
- **Static Export**: CDN-ready with no server requirements
- **Responsive Design**: Optimized for all device sizes
- **SEO Optimized**: Proper meta tags and structured data

## 📝 Content Management

### **Easy Updates**
- **Homepage**: Edit `src/app/page.tsx` for hero and featured projects
- **Projects**: Update `src/data/case-studies.ts` and MDX files in `content/`
- **Resume**: Modify `src/app/resume/page.tsx` for professional details
- **Metrics**: Update `src/components/StatsBar.tsx` for performance data

### **Adding New Projects**
1. Create MDX file in `content/case-studies/`
2. Add project data to `src/data/case-studies.ts`
3. Update homepage featured projects if needed

## 🔧 Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Content**: MDX for rich case study content
- **Deployment**: Static Export for GitHub Pages
- **Theme**: Custom emerald-focused professional theme

## 📊 Project Impact

### **E-commerce Data Warehouse** (Featured)
- **116,294 → 79,153 records**: 32% intelligent deduplication
- **Production-Ready CI/CD**: GitHub Actions with Workload Identity Federation
- **Zero Data Loss**: Complete audit trail with comprehensive testing
- **Modern Architecture**: Cloud-native medallion pattern on GCP

### **Business Value Demonstrated**
- **Cost Optimization**: 80-90% query cost reduction (SEC EDGAR)
- **Operational Efficiency**: $2.36/mo infrastructure costs (Crypto ETL)
- **Data Quality**: 100% validation success across all projects
- **Performance**: Sub-second ML model serving (Recruit Reveal)

## 📞 Professional Contact

- **Email**: dddamon06@gmail.com
- **Phone**: (316) 609-8566
- **Location**: Tampa, FL
- **LinkedIn**: [linkedin.com/in/drakedamon](https://www.linkedin.com/in/drakedamon/)
- **GitHub**: [github.com/DrakeDamon](https://github.com/DrakeDamon)
- **Portfolio**: [drakedamon.github.io/portfolio-nextjs](https://drakedamon.github.io/portfolio-nextjs/)

---

**Built for Impact** - A professional portfolio showcasing production-ready data engineering expertise with quantified business value and modern presentation. 🚀