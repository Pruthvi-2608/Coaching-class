import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, BookOpen, Users, Trophy } from 'lucide-react'

const stats = [
  { icon: BookOpen, value: '15+', label: 'Years Experience' },
  { icon: Users, value: '5000+', label: 'Students Taught' },
  { icon: Trophy, value: '98%', label: 'Success Rate' },
]

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.querySelector(id)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen bg-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/3 rounded-full translate-y-1/2 -translate-x-1/4" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-accent text-sm font-semibold mb-6"
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Admissions Open for 2026-27
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              Building{' '}
              <span className="text-accent">Future</span>{' '}
              Leaders Through Quality Education
            </h1>

            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
              Join Dhananjay Tutorials for comprehensive coaching in IIT-JEE, NEET,
              and Foundation courses. Your success story begins here.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#enrollment')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary-dark font-semibold rounded-full hover:bg-accent-dark transition-colors shadow-lg shadow-accent/25"
              >
                Enroll Now
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#courses')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white hover:text-primary transition-all"
              >
                <BookOpen size={20} />
                Explore Courses
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <stat.icon className="w-5 h-5 text-accent mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold text-accent">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4 transform rotate-3">
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30"
              >
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=500&fit=crop"
                  alt="Students studying"
                  className="w-full h-48 sm:h-64 object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30 mt-8"
              >
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=500&fit=crop"
                  alt="Classroom"
                  className="w-full h-48 sm:h-64 object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30 -mt-8"
              >
                <img
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=500&fit=crop"
                  alt="Library"
                  className="w-full h-48 sm:h-64 object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30"
              >
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=500&fit=crop"
                  alt="Graduation"
                  className="w-full h-48 sm:h-64 object-cover"
                />
              </motion.div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call us now</p>
                  <p className="font-bold text-primary">+91 00000 00000</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}