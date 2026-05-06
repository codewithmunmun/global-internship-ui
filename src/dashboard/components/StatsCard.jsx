import React from 'react'
import { motion } from 'framer-motion'

const StatsCard = ({ title, value, icon: Icon, color }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl shadow-sm p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center`}>
          <Icon className="text-white" size={24} />
        </div>
        <span className="text-2xl font-bold text-gray-900">{value}</span>
      </div>
      <h3 className="text-gray-600 font-medium">{title}</h3>
    </motion.div>
  )
}

export default StatsCard