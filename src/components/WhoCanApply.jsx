import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Users, Briefcase, Target, CheckCircle } from 'lucide-react'

const audiences = [
  {
    icon: GraduationCap,
    title: "Students",
    description: "Current college students looking for real-world experience",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Users,
    title: "Fresh Graduates",
    description: "Recent graduates ready to launch their careers",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Briefcase,
    title: "Career Switchers",
    description: "Professionals transitioning to new fields",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Target,
    title: "Entry-Level Professionals",
    description: "Early career professionals seeking growth",
    color: "from-orange-500 to-orange-600"
  }
]

const WhoCanApply = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary-600 font-semibold mb-2 block">Who Can Apply</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Perfect for Everyone
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our program is designed for motivated individuals at any stage
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 text-center hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${audience.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <audience.icon className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{audience.title}</h3>
              <p className="text-gray-600 mb-4">{audience.description}</p>
              <CheckCircle className="text-primary-600 mx-auto" size={20} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhoCanApply