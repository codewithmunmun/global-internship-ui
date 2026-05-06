import React from 'react'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/digitallearn-logo.svg" alt="DigitalLearn" className="h-10 w-auto" />
              <span className="text-xl font-bold text-white">DigitalLearn</span>
            </div>
            <p className="text-gray-400 mb-4">
              Building real careers through global internship programs.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-primary-400 transition">Home</a></li>
              <li><a href="#solution" className="hover:text-primary-400 transition">Program</a></li>
              <li><a href="#features" className="hover:text-primary-400 transition">Features</a></li>
              <li><a href="#pricing" className="hover:text-primary-400 transition">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Program</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary-400 transition">Internship Details</a></li>
              <li><a href="#" className="hover:text-primary-400 transition">Certification</a></li>
              <li><a href="#" className="hover:text-primary-400 transition">Success Stories</a></li>
              <li><a href="#" className="hover:text-primary-400 transition">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={18} className="flex-shrink-0 mt-1" />
                <span>+91 7678444327</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="flex-shrink-0 mt-1" />
                <span>info@digitallearn.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>Global Remote / Hybrid</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 DigitalLearn. All rights reserved. | Global Internship Program</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer