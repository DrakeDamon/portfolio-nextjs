"use client"

import { useState } from "react"
import Button from "@/components/ui/button"
import Chip from "@/components/ui/chip"

export interface ProjectCategory {
  id: string
  label: string
  description: string
  count: number
}

interface ProjectCategoryFilterProps {
  categories: ProjectCategory[]
  activeCategory: string
  onCategoryChange: (categoryId: string) => void
}

export default function ProjectCategoryFilter({
  categories,
  activeCategory,
  onCategoryChange
}: ProjectCategoryFilterProps) {
  return (
    <div className="space-y-4">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-2">Project Categories</h2>
        <p className="text-neutral-400 text-sm">Explore different types of data engineering solutions</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-3">
        <Button
          onClick={() => onCategoryChange('all')}
          className={`transition-all duration-200 ${
            activeCategory === 'all'
              ? 'bg-emerald-500 text-neutral-900'
              : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
          }`}
        >
          All Projects ({categories.reduce((sum, cat) => sum + cat.count, 0)})
        </Button>
        
        {categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`transition-all duration-200 ${
              activeCategory === category.id
                ? 'bg-emerald-500 text-neutral-900'
                : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
            }`}
          >
            {category.label} ({category.count})
          </Button>
        ))}
      </div>
      
      {activeCategory !== 'all' && (
        <div className="text-center">
          <p className="text-sm text-neutral-400">
            {categories.find(cat => cat.id === activeCategory)?.description}
          </p>
        </div>
      )}
    </div>
  )
}
