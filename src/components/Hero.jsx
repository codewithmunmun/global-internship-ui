import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Users, Briefcase } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100 pt-20">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
                🚀 Launching Your Career
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                Global Internship
              </span>
              <br />
              <span className="text-gray-900">Program</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Build Experience. Get Job-Ready. Stand Out in the Global Market.
              <br />
              Transform your academic knowledge into real-world expertise.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group bg-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                Apply Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-primary-50 transition-all">
                Learn More
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200"
            >
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="text-primary-600" size={24} />
                  <span className="text-2xl font-bold text-gray-900">500+</span>
                </div>
                <p className="text-sm text-gray-600">Students Placed</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Briefcase className="text-primary-600" size={24} />
                  <span className="text-2xl font-bold text-gray-900">50+</span>
                </div>
                <p className="text-sm text-gray-600">Partner Companies</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Zap className="text-primary-600" size={24} />
                  <span className="text-2xl font-bold text-gray-900">95%</span>
                </div>
                <p className="text-sm text-gray-600">Success Rate</p>
              </div>
            </motion.div>
          </div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative animate-float">
              <img 
                src="/hero-illustration.svg" 
                alt="Global Internship" 
                className="w-full max-w-lg mx-auto"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/600x500/2563eb/white?text=Global+Internship'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero