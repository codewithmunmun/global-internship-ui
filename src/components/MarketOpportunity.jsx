import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Users, Globe, Target } from 'lucide-react'

const stats = [
  { label: "Global Graduates Yearly", value: "10M+", icon: Users, progress: 85 },
  { label: "Companies Prefer Experienced", value: "78%", icon: Target, progress: 78 },
  { label: "Remote Work Growth", value: "300%", icon: Globe, progress: 95 },
  { label: "Skill Gap in Freshers", value: "65%", icon: TrendingUp, progress: 65 }
]

const MarketOpportunity = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-700 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Market Opportunity
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            The world produces millions of graduates, but only a few are truly job-ready
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-primary-100 mb-4">{stat.label}</p>
              <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${stat.progress}%` }}
                  transition={{ delay: 0.5, duration: 1 }}
                  viewport={{ once: true }}
                  className="bg-white h-full rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-white/10 rounded-full px-8 py-4 backdrop-blur-sm">
            <Globe className="animate-pulse" size={28} />
            <span className="text-lg font-semibold">Rise of Remote/Global Work Culture</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MarketOpportunity