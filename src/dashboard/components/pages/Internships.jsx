import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, MapPin, Clock, DollarSign } from 'lucide-react'

const Internships = () => {
  const internships = [
    {
      id: 1,
      title: 'Frontend Developer Intern',
      company: 'Tech Innovations',
      location: 'Remote',
      duration: '3 months',
      stipend: '$500/month',
      skills: ['React', 'Tailwind', 'JavaScript']
    },
    {
      id: 2,
      title: 'Digital Marketing Intern',
      company: 'Growth Hackers',
      location: 'Hybrid',
      duration: '2 months',
      stipend: '$400/month',
      skills: ['SEO', 'Content Writing', 'Analytics']
    },
    {
      id: 3,
      title: 'Data Analyst Intern',
      company: 'DataMinds',
      location: 'Remote',
      duration: '4 months',
      stipend: '$600/month',
      skills: ['Python', 'SQL', 'Tableau']
    },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Available Internships</h1>
      
      <div className="grid gap-6">
        {internships.map((internship) => (
          <motion.div
            key={internship.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition"
          >
            <div className="flex flex-wrap justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{internship.title}</h2>
                <p className="text-gray-600">{internship.company}</p>
              </div>
              <button className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition">
                Apply Now
              </button>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={16} />
                <span className="text-sm">{internship.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock size={16} />
                <span className="text-sm">{internship.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <DollarSign size={16} />
                <span className="text-sm">{internship.stipend}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {internship.skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Internships