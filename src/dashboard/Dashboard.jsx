import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Overview from './pages/Overview'
import Applications from './pages/Applications'
import Internships from './pages/Internships'
import Profile from './pages/Profile'
import Settings from './pages/Settings'

const Dashboard = () => {
  const [activePage, setActivePage] = useState('overview')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const renderPage = () => {
    switch(activePage) {
      case 'overview':
        return <Overview />
      case 'applications':
        return <Applications />
      case 'internships':
        return <Internships />
      case 'profile':
        return <Profile />
      case 'settings':
        return <Settings />
      default:
        return <Overview />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activePage={activePage} setActivePage={setActivePage} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}

export default Dashboard