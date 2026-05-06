import React from 'react'
import { motion } from 'framer-motion'
import StatsCard from '../components/StatsCard'
import { CheckCircle, Clock, Award, TrendingUp } from 'lucide-react'

const Overview = () => {
  const stats = [
    { title: 'Applications', value: '3', icon: CheckCircle, color: 'from-green-500 to-green-600' },
    { title: 'In Progress', value: '2', icon: Clock, color: 'from-blue-500 to-blue-600' },
    { title: 'Certificates', value: '1', icon: Award, color: 'from-purple-500 to-purple-600' },
    { title: 'Success Rate', value: '85%', icon: TrendingUp, color: 'from-orange-500 to-orange-600' },
  ]

  const recentActivities = [
    { id: 1, activity: 'Applied for Web Development Internship', date: '2 days ago', status: 'pending' },
    { id: 2, activity: 'Completed Resume Workshop', date: '5 days ago', status: 'completed' },
    { id: 3, activity: 'Scheduled mentorship session', date: '1 week ago', status: 'completed' },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard Overview</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{activity.activity}</p>
                  <p className="text-sm text-gray-500">{activity.date}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  activity.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {activity.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recommended Internships</h2>
          <div className="space-y-4">
            {[
              { title: 'Frontend Developer Intern', company: 'Tech Corp', deadline: '5 days left' },
              { title: 'Digital Marketing Intern', company: 'Growth Agency', deadline: '2 days left' },
              { title: 'Data Analyst Intern', company: 'Data Insights', deadline: '1 week left' },
            ].map((internship, index) => (
              <div key={index} className="p-4 border rounded-lg hover:border-primary-500 transition cursor-pointer">
                <h3 className="font-semibold text-gray-900">{internship.title}</h3>
                <p className="text-sm text-gray-600">{internship.company}</p>
                <p className="text-xs text-primary-600 mt-2">{internship.deadline}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview