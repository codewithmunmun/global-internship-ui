import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, ArrowRight, Calendar, Users } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Start Your Global Internship Today
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Build Experience • Get Job-Ready • Stand Out in Market
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <button className="group bg-white text-primary-600 px-8 py-4 rounded-full font-bold hover:bg-primary-50 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
              Apply Now
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              <Calendar size={20} />
              Schedule Consultation
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 border-t border-primary-700"
          >
            <div className="flex items-center gap-2">
              <Phone size={20} />
              <span>+91 7678444327</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={20} />
              <span>info@digitallearn.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={20} />
              <span>Limited Seats Available</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA