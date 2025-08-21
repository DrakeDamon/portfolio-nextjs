# David Damon - Portfolio

A clean, fast portfolio website built with Next.js 14, TypeScript, and Tailwind CSS, showcasing data engineering expertise.

## ✨ Features

- **Lightning Fast**: Minimal dependencies for optimal performance
- **Clean Design**: Simple, professional interface focusing on content
- **Dark/Light Mode**: System-aware theme switching
- **Fully Responsive**: Mobile-first design approach
- **Accessible**: Skip links, keyboard navigation, WCAG compliance
- **Static Export Ready**: Optimized for GitHub Pages deployment

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17.0+ (required for Next.js 14)
- npm or yarn

### Installation

```bash
# Install dependencies (minimal set)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Export static site
npm run build
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── projects/          # Projects showcase
│   ├── skills/            # Technical skills
│   └── contact/           # Contact information
├── components/
│   ├── ui/                # Simple UI components
│   ├── theme-provider.tsx # Theme management
│   ├── navigation.tsx     # Site navigation
│   ├── hero-section.tsx   # Landing section
│   └── featured-metrics.tsx # Key achievements
└── globals.css           # Minimal global styles
```

## 💼 Content

All content is based on the actual resume and includes:

### Projects
1. **SEC EDGAR Financials Warehouse** - GCP + BigQuery + dbt production lakehouse
2. **Cloud-Native Crypto ETL** - Serverless data pipeline with Terraform
3. **Recruit Reveal** - Low-latency ML model serving on Databricks

### Skills (Resume-Accurate)
- **Languages**: Python, SQL, JavaScript, TypeScript
- **Data Engineering**: PySpark, Databricks, Data Lakehouse patterns
- **GCP**: BigQuery, Cloud Run Jobs, GCS, Secret Manager
- **MLOps**: MLflow, XGBoost, scikit-learn pipelines
- **Ops**: Docker, GitHub Actions, dbt, Terraform

### Key Metrics
- 14/14 dbt tests passed (SEC EDGAR data quality)
- 80-90% query cost reduction (BigQuery optimization)
- 40% load time reduction (React optimization)
- 99.9% on-time delivery (FedEx operations)

## 🎯 Performance Optimizations

- **Minimal Dependencies**: Only essential packages (Next.js, React, next-themes)
- **No Complex Libraries**: Removed shadcn/ui, lucide-react, class-variance-authority
- **Simple Components**: Custom lightweight UI components
- **Static Export**: Ready for CDN deployment
- **Clean CSS**: Removed complex design tokens and CSS-in-JS overhead

## 🌐 Deployment

Configured for static export to work with:
- **GitHub Pages** (recommended)
- **Netlify**
- **Vercel**
- Any static hosting service

### GitHub Pages Setup
```bash
npm run build
# Files in `out/` directory ready for deployment
```

## 📝 Content Updates

To update portfolio content:
- **Projects**: Edit `src/app/projects/page.tsx`
- **Skills**: Edit `src/app/skills/page.tsx` 
- **Hero Section**: Edit `src/components/hero-section.tsx`
- **Metrics**: Edit `src/components/featured-metrics.tsx`

## 🔧 Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Theme**: next-themes
- **Deployment**: Static Export

## 📊 Bundle Size

Significantly reduced from original:
- Removed: shadcn/ui, radix-ui, lucide-react, clsx, tailwind-merge
- Added: Only next-themes for theme switching
- Result: Faster builds, smaller bundles, better performance

## 📞 Contact

- **Email**: dddamon06@gmail.com
- **Phone**: (316) 609-8566
- **Location**: Tampa, FL
- **LinkedIn**: [linkedin.com/in/drakedamon](https://www.linkedin.com/in/drakedamon/)
- **GitHub**: [github.com/DrakeDamon](https://github.com/DrakeDamon)

---

Built with ❤️ focusing on speed, simplicity, and accurate representation of data engineering expertise.