import React from 'react'
import { motion } from 'framer-motion'
import { Check, Sparkles, Shield, Users, Clock, Award } from 'lucide-react'

const Pricing = () => {
  const features = [
    "Real-world projects",
    "1-on-1 mentorship",
    "Resume building",
    "Interview preparation",
    "LinkedIn optimization",
    "Industry certificate",
    "24/7 support access",
    "Job placement assistance"
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary-600 font-semibold mb-2 block">Investment</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No hidden fees. Everything you need to succeed.
          </p>
        </motion.div>

        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="p-8 text-white text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
                <Sparkles size={18} />
                <span className="text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-3xl font-bold mb-2">Premium Plan</h3>
              <div className="mb-4">
                <span className="text-5xl font-bold">$100</span>
                <span className="text-xl">/month</span>
              </div>
              <p className="text-primary-100 mb-6">Flexible duration (4-8 weeks)</p>
              <button className="w-full bg-white text-primary-600 px-6 py-3 rounded-full font-bold hover:bg-primary-50 transition-all transform hover:scale-105 shadow-lg">
                Get Started Now
              </button>
            </div>
            <div className="bg-white p-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Everything included:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check size={18} className="text-primary-600" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Pricing