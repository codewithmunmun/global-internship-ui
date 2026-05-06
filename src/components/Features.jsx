import React from 'react'
import { motion } from 'framer-motion'
import { Code, Users, FileText, Linkedin, Briefcase, Award, Zap, Globe } from 'lucide-react'

const features = [
  {
    icon: Code,
    title: "Live Projects",
    description: "Work on real-world industry projects",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Users,
    title: "Mentor Guidance",
    description: "1-on-1 sessions with industry experts",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: FileText,
    title: "Resume Boost",
    description: "Professional resume building assistance",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Briefcase,
    title: "Interview Prep",
    description: "Mock interviews and feedback",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Linkedin,
    title: "LinkedIn Optimization",
    description: "Profile enhancement for recruiters",
    color: "from-cyan-500 to-cyan-600"
  },
  {
    icon: Award,
    title: "Industry Certificate",
    description: "Recognized certification upon completion",
    color: "from-red-500 to-red-600"
  }
]

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary-600 font-semibold mb-2 block">What You Get</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Program Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to succeed in your career journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features