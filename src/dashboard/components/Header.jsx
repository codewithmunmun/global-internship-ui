import React from 'react'
import { Bell, Search, Menu } from 'lucide-react'

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden text-gray-600"
          >
            <Menu size={24} />
          </button>
          <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent ml-2 outline-none text-sm w-64"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center gap-3">
            <img
              src="https://ui-avatars.com/api/?name=John+Doe&background=2563eb&color=fff"
              alt="Avatar"
              className="w-8 h-8 rounded-full"
            />
            <div className="hidden md:block">
              <p className="text-sm font-semibold">John Doe</p>
              <p className="text-xs text-gray-500">Student</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header