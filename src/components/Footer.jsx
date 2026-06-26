import React from 'react'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, ArrowUp } from 'lucide-react'

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Courses', href: '#courses' },
  { name: 'About Us', href: '#about' },
  { name: 'Results', href: '#results' },
  { name: 'Enroll', href: '#enrollment' },
  { name: 'Payment', href: '#payment' },
  { name: 'Contact', href: '#contact' },
]

const courses = [
  'IIT-JEE Preparation',
  'NEET Preparation',
  'Foundation 8-10',
  'Crash Courses',
  'Test Series',
  'Doubt Sessions',
]

const support = [
  'FAQs',
  'Scholarships',
  'Career Guidance',
  'Privacy Policy',
  'Terms of Service',
  'Refund Policy',
]

export default function Footer() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-display font-bold text-xl text-primary">
                DT
              </div>
              <div>
                <h3 className="font-display font-bold text-xl">Dhananjay Tutorials</h3>
                <p className="text-xs text-white/60 tracking-wider uppercase">Excellence in Education</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Empowering students with quality education and guidance since 2009. 
              We are committed to nurturing talent and building future leaders.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube, Phone].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -3, scale: 1.1 }}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold text-accent mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href) }}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold text-accent mb-6">Our Courses</h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course}>
                  <a
                    href="#courses"
                    onClick={(e) => { e.preventDefault(); scrollToSection('#courses') }}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold text-accent mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">123 Education Complex, Main Road, Near City Center, Your City - 123456</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-white/70 text-sm">+91 98765 43210<br/>+91 98765 43211</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-white/70 text-sm">info@dhananjaytutorials.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Dhananjay Tutorials. All rights reserved.
          </p>
          <p className="text-white/50 text-sm flex items-center gap-1">
            Made with <span className="text-accent">♥</span> for students
          </p>
        </div>
      </div>
    </footer>
  )
}
