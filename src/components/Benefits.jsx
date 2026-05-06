import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, FileText, Users, Briefcase, Award, Target } from 'lucide-react'

const benefits = [
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Accelerate your career trajectory with real experience"
  },
  {
    icon: FileText,
    title: "Strong Portfolio",
    description: "Build an impressive portfolio of real projects"
  },
  {
    icon: Users,
    title: "Networking",
    description: "Connect with industry professionals and peers"
  },
  {
    icon: Briefcase,
    title: "Job Placement",
    description: "Access to our partner company network"
  },
  {
    icon: Award,
    title: "Global Recognition",
    description: "Internationally recognized certification"
  },
  {
    icon: Target,
    title: "Interview Success",
    description: "85% higher interview success rate"
  }
]

const Benefits = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-50 to-primary-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary-600 font-semibold mb-2 block">Career Impact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What You Gain
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your future with these powerful benefits
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <benefit.icon className="text-primary-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits