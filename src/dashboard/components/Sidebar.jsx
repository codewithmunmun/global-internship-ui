import React from 'react'
import { motion } from 'framer-motion'
import { LayoutDashboard, FileText, Briefcase, User, Settings, LogOut, ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react'

const Sidebar = ({ activePage, setActivePage, sidebarOpen, setSidebarOpen }) => {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'applications', label: 'Applications', icon: FileText },
    { id: 'internships', label: 'Internships', icon: Briefcase },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]

  return (
    <motion.aside
      initial={{ width: sidebarOpen ? 256 : 80 }}
      animate={{ width: sidebarOpen ? 256 : 80 }}
      className="fixed left-0 top-0 h-full bg-gradient-to-b from-primary-900 to-primary-800 text-white shadow-xl z-20"
    >
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-primary-700">
          <div className="flex items-center gap-3">
            <GraduationCap size={32} />
            {sidebarOpen && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-bold text-lg"
              >
                DigitalLearn
              </motion.span>
            )}
          </div>
        </div>

        <nav className="flex-1 py-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${
                activePage === item.id
                  ? 'bg-primary-700 border-r-4 border-white'
                  : 'hover:bg-primary-800'
              }`}
            >
              <item.icon size={20} />
              {sidebarOpen && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm"
                >
                  {item.label}
                </motion.span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-primary-700">
          <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-primary-800 rounded-lg transition-colors">
            <LogOut size={20} />
            {sidebarOpen && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm"
              >
                Logout
              </motion.span>
            )}
          </button>
        </div>

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="absolute -right-3 top-20 bg-primary-600 rounded-full p-1 shadow-lg"
        >
          {sidebarOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </button>
      </div>
    </motion.aside>
  )
}

export default Sidebar