import React from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, FileText, Brain, TrendingUp } from 'lucide-react'

const problems = [
  {
    icon: AlertCircle,
    title: "No Real-World Experience",
    description: "Theoretical knowledge without practical application",
    color: "from-red-500 to-red-600"
  },
  {
    icon: FileText,
    title: "Weak Resume & Low Confidence",
    description: "Struggling to stand out in interviews",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Brain,
    title: "Education ≠ Industry Readiness",
    description: "Gap between college curriculum and job requirements",
    color: "from-yellow-500 to-yellow-600"
  },
  {
    icon: TrendingUp,
    title: "High Competition",
    description: "Low differentiation in a crowded job market",
    color: "from-red-500 to-red-600"
  }
]

const Problems = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary-600 font-semibold mb-2 block">The Challenge</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Gap Between Education & Employment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Degrees are common. Skills are rare. Let's bridge this gap together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${problem.color} rounded-xl flex items-center justify-center mb-5`}>
                <problem.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-primary-100 rounded-full px-6 py-3">
            <p className="text-primary-800 font-semibold">
              💡 "Degrees are common. Skills are rare."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Problems