import React from 'react'
import { motion } from 'framer-motion'
import { Search, Filter } from 'lucide-react'

const Applications = () => {
  const applications = [
    { id: 1, title: 'Web Development Intern', company: 'Tech Solutions', status: 'Under Review', date: '2024-01-15' },
    { id: 2, title: 'UI/UX Design Intern', company: 'Creative Studio', status: 'Interview Scheduled', date: '2024-01-10' },
    { id: 3, title: 'Data Science Intern', company: 'Analytics Corp', status: 'Rejected', date: '2024-01-05' },
  ]

  const getStatusColor = (status) => {
    if (status === 'Under Review') return 'bg-yellow-100 text-yellow-700'
    if (status === 'Interview Scheduled') return 'bg-blue-100 text-blue-700'
    if (status === 'Rejected') return 'bg-red-100 text-red-700'
    return 'bg-gray-100 text-gray-700'
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">My Applications</h1>
      
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="p-4 border-b flex flex-wrap gap-4 justify-between items-center">
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
            <Search size={18} className="text-gray-500" />
            <input type="text" placeholder="Search applications..." className="bg-transparent outline-none" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Filter size={18} />
            Filter
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Position</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Applied Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {applications.map((app) => (
                <motion.tr
                  key={app.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="hover:bg-gray-50"
                >
                  <td className="px-6 py-4 font-medium text-gray-900">{app.title}</td>
                  <td className="px-6 py-4 text-gray-600">{app.company}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(app.status)}`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{app.date}</td>
                  <td className="px-6 py-4">
                    <button className="text-primary-600 hover:text-primary-700 font-medium">View Details</button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Applications