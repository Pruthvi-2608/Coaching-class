import React from 'react'
import { motion } from 'framer-motion'
import { Award, BookOpen, Users, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Expert Faculty',
    description: 'Highly qualified teachers with years of experience in competitive exam coaching.',
  },
  {
    icon: BookOpen,
    title: 'Study Material',
    description: 'Comprehensive, well-researched notes and practice materials updated regularly.',
  },
  {
    icon: Users,
    title: 'Small Batch Size',
    description: 'Personalized attention with limited students per batch for better interaction.',
  },
  {
    icon: TrendingUp,
    title: 'Track Record',
    description: 'Consistent results with top ranks in IIT-JEE, NEET, and board examinations.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="row-span-2 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&h=700&fit=crop"
                  alt="Classroom"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop"
                  alt="Teaching"
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop"
                  alt="Students"
                  className="w-full h-40 object-cover"
                />
              </div>
            </div>

            {/* Experience Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-6 bg-primary text-white rounded-2xl p-6 shadow-xl"
            >
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm opacity-90">Years of<br/>Excellence</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              About Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Why Choose Dhananjay Tutorials?
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Since 2009, Dhananjay Tutorials has been a beacon of academic excellence, 
              nurturing thousands of students to achieve their dreams. Our student-centric 
              approach and experienced faculty make us the preferred choice for competitive 
              exam preparation.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const el = document.querySelector('#enrollment')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
            >
              Join Us Today
              <Award size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

