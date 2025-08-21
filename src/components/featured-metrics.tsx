import { Card } from "./ui/card"

const metrics = [
  {
    value: "14/14",
    label: "dbt Tests Passed",
    description: "SEC EDGAR data quality"
  },
  {
    value: "80-90%",
    label: "Query Cost Reduction", 
    description: "BigQuery optimization"
  },
  {
    value: "40%",
    label: "Load Time Reduction",
    description: "React app optimization"
  },
  {
    value: "99.9%",
    label: "On-Time Delivery",
    description: "FedEx operations"
  }
]

export function FeaturedMetrics() {
  return (
    <section className="py-12">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Key Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <Card key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {metric.value}
              </div>
              <div className="font-semibold text-gray-900 dark:text-white mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {metric.description}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}