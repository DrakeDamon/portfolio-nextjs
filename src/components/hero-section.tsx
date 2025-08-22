"use client"

import Button from "./ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      
      <div className="container mx-auto max-w-6xl px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-black tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            DAVID DAMON
          </motion.h1>
          
          <div className="flex flex-wrap justify-center items-center gap-2 mb-8">
            {["DATA ENGINEER", "GCP", "DATABRICKS", "BIGQUERY", "MLflow", "dbt", "Terraform"].map((tech, index) => (
              <motion.span 
                key={tech}
                className="px-3 py-1 text-sm font-semibold bg-primary/10 text-primary rounded-full border border-primary/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Cloud-first, AI-accelerated data engineer who builds production ETL/ELT on GCP & Databricks, 
            tracks models with MLflow, and ships results to UIs and APIs—optimized for reliability, observability, and cost.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Button size="lg" asChild>
              <Link href="/projects">
                View Projects →
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a 
                href="https://www.linkedin.com/in/drakedamon/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a 
                href="https://github.com/DrakeDamon"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Button>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <span>Tampa, FL</span>
            <span>•</span>
            <span>(316) 609-8566</span>
            <span>•</span>
            <span>dddamon06@gmail.com</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}