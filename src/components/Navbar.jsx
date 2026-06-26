import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Courses', href: '#courses' },
  { name: 'About', href: '#about' },
  { name: 'Results', href: '#results' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Enroll', href: '#enrollment' },
  { name: 'Payment', href: '#payment' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navLinks.map(link => link.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollToSection('#home') }}
              className="flex items-center gap-3 group"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg transition-colors ${
                isScrolled ? 'bg-primary text-white' : 'bg-white text-primary'
              }`}>
                DT
              </div>
              <div className="hidden sm:block">
                <h1 className={`font-display font-bold text-xl leading-tight transition-colors ${
                  isScrolled ? 'text-primary' : 'text-white'
                }`}>
                  Dhananjay Tutorials
                </h1>
                <p className={`text-xs font-medium tracking-wider uppercase transition-colors ${
                  isScrolled ? 'text-gray-500' : 'text-white/70'
                }`}>
                  Excellence in Education
                </p>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href) }}
                  className={`relative px-3 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeSection === link.href.slice(1)
                      ? isScrolled
                        ? 'text-primary bg-primary/10'
                        : 'text-white bg-white/20'
                      : isScrolled
                        ? 'text-gray-600 hover:text-primary hover:bg-gray-50'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="hidden lg:block">
              <a
                href="#enrollment"
                onClick={(e) => { e.preventDefault(); scrollToSection('#enrollment') }}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isScrolled
                    ? 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/25'
                    : 'bg-white text-primary hover:bg-white/90 shadow-lg shadow-black/10'
                }`}
              >
                Enroll Now
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-primary hover:bg-primary/10' : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href) }}
                  className={`text-2xl font-display font-bold ${
                    activeSection === link.href.slice(1)
                      ? 'text-primary'
                      : 'text-gray-600'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#enrollment"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                onClick={(e) => { e.preventDefault(); scrollToSection('#enrollment') }}
                className="mt-4 px-8 py-3 bg-primary text-white rounded-full font-semibold text-lg"
              >
                Enroll Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}