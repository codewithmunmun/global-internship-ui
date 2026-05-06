import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Users, Briefcase, Award, TrendingUp, Shield } from 'lucide-react'

const solutions = [
  {
    icon: CheckCircle,
    title: "Structured Global Internship",
    description: "Industry-aligned program designed for real impact"
  },
  {
    icon: Briefcase,
    title: "Real-World Projects",
    description: "Work on actual industry use cases"
  },
  {
    icon: Users,
    title: "Structured Mentorship",
    description: "1-on-1 guidance from industry experts"
  },
  {
    icon: TrendingUp,
    title: "Career Support",
    description: "End-to-end placement assistance"
  }
]

const Solution = () => {
  return (
    <section id="solution" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary-600 font-semibold mb-2 block">Our Solution</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Bridging the Gap
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive program that transforms students into industry-ready professionals
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex gap-4 p-4 rounded-xl hover:bg-primary-50 transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <solution.icon className="text-primary-600" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl p-8">
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="text-primary-600" size={32} />
                  <span className="font-bold text-lg">Program Highlights</span>
                </div>
                <ul className="space-y-3">
                  {['4-8 Weeks Program', 'Online / Hybrid Mode', 'Global Exposure', 'Industry Certificate'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle size={18} className="text-primary-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Solution