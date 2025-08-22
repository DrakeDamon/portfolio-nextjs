import './globals.css';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: "David (Drake) Damon — Data Engineer",
  description: "Cloud-first, AI-accelerated data engineer (GCP, Databricks, BigQuery, dbt).",
  metadataBase: new URL('https://drakedamon.github.io/portfolio-nextjs'),
  openGraph: {
    title: "David (Drake) Damon — Data Engineer",
    description: "Production ETL/ELT, dbt, MLflow. Clean case studies & metrics.",
    url: "https://drakedamon.github.io/portfolio-nextjs",
    siteName: "David Damon Portfolio",
    images: [],
    type: "website"
  },
  twitter: { card: 'summary_large_image' }
};

export default function RootLayout({ children }: PropsWithChildren) {
  const personLd = {
    "@context":"https://schema.org",
    "@type":"Person",
    "name":"David Damon",
    "jobTitle":"Data Engineer",
    "email":"mailto:dddamon06@gmail.com",
    "telephone":"+1-316-609-8566",
    "address":{"@type":"PostalAddress","addressLocality":"Tampa","addressRegion":"FL","addressCountry":"US"},
    "sameAs":[
      "https://www.linkedin.com/in/drakedamon",
      "https://github.com/DrakeDamon"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-neutral-800 px-3 py-2 rounded">
            Skip to main content
          </a>
          <Navbar />
          <main id="main" className="container mx-auto px-4 md:px-6">{children}</main>
          <Footer />
        </ThemeProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(personLd)}} />
      </body>
    </html>
  );
}