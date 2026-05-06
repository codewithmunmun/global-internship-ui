import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Bell, Lock, Mail, Shield } from 'lucide-react'

const Settings = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true
  })

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Settings</h1>
      
      <div className="space-y-6">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="text-primary-600" />
            <h2 className="text-xl font-bold text-gray-900">Notifications</h2>
          </div>
          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span>Email Notifications</span>
              <button
                onClick={() => setNotifications({...notifications, email: !notifications.email})}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                  notifications.email ? 'bg-primary-600' : 'bg-gray-300'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  notifications.email ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </label>
            <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span>Push Notifications</span>
              <button
                onClick={() => setNotifications({...notifications, push: !notifications.push})}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                  notifications.push ? 'bg-primary-600' : 'bg-gray-300'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  notifications.push ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </label>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="text-primary-600" />
            <h2 className="text-xl font-bold text-gray-900">Security</h2>
          </div>
          <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
            Change Password
          </button>
          <button className="w-full text-left p-3 bg-gray-50 rounded-lg mt-2 hover:bg-gray-100 transition">
            Enable Two-Factor Authentication
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="text-primary-600" />
            <h2 className="text-xl font-bold text-gray-900">Email Preferences</h2>
          </div>
          <label className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <input type="checkbox" className="w-4 h-4 text-primary-600" defaultChecked />
            <span>Receive internship recommendations</span>
          </label>
          <label className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg mt-2">
            <input type="checkbox" className="w-4 h-4 text-primary-600" />
            <span>Receive marketing emails</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Settings