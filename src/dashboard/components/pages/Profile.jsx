import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Mail, Phone, MapPin, GraduationCap, Briefcase, Edit2, Save } from 'lucide-react'

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 9876543210',
    location: 'Mumbai, India',
    education: 'Bachelor of Technology - Computer Science',
    experience: 'Fresher',
    bio: 'Passionate about technology and eager to learn. Looking for internship opportunities to apply my skills.'
  })

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
        >
          {isEditing ? <Save size={18} /> : <Edit2 size={18} />}
          {isEditing ? 'Save' : 'Edit Profile'}
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 h-32"></div>
        <div className="px-6 pb-6">
          <div className="flex justify-center -mt-12 mb-6">
            <div className="w-24 h-24 rounded-full border-4 border-white bg-primary-100 flex items-center justify-center">
              <User size={48} className="text-primary-600" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  />
                ) : (
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-gray-400" />
                    <span>{profile.name}</span>
                  </div>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                ) : (
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-gray-400" />
                    <span>{profile.email}</span>
                  </div>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                ) : (
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-gray-400" />
                    <span>{profile.phone}</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="location"
                    value={profile.location}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                ) : (
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-gray-400" />
                    <span>{profile.location}</span>
                  </div>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Education</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="education"
                    value={profile.education}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                ) : (
                  <div className="flex items-center gap-2">
                    <GraduationCap size={16} className="text-gray-400" />
                    <span>{profile.education}</span>
                  </div>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Experience Level</label>
                {isEditing ? (
                  <select
                    name="experience"
                    value={profile.experience}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                  >
                    <option>Fresher</option>
                    <option>1-2 Years</option>
                    <option>3-5 Years</option>
                    <option>5+ Years</option>
                  </select>
                ) : (
                  <div className="flex items-center gap-2">
                    <Briefcase size={16} className="text-gray-400" />
                    <span>{profile.experience}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
            {isEditing ? (
              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 border rounded-lg"
              />
            ) : (
              <p className="text-gray-600">{profile.bio}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile