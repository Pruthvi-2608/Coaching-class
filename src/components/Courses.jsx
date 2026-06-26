import React from 'react'
import { motion } from 'framer-motion'
import { Atom, Heart, GraduationCap, Check, ArrowRight } from 'lucide-react'

const courses = [
  {
    icon: Atom,
    title: 'IIT-JEE Preparation',
    description: 'Intensive coaching for JEE Main & Advanced with focus on conceptual clarity and problem-solving skills.',
    features: ['Physics, Chemistry & Mathematics', 'Daily Practice Problems', 'Mock Tests & Analysis', 'Doubt Clearing Sessions'],
    price: '₹45,000/year',
    color: 'from-blue-500/10 to-blue-600/5',
    iconColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Heart,
    title: 'NEET Preparation',
    description: 'Specialized medical entrance coaching with expert faculty and comprehensive study material.',
    features: ['Physics, Chemistry & Biology', 'NCERT-Based Curriculum', 'Previous Year Analysis', 'Regular Assessments'],
    price: '₹42,000/year',
    color: 'from-green-500/10 to-green-600/5',
    iconColor: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: GraduationCap,
    title: 'Foundation Courses',
    description: 'Building strong fundamentals for students in classes 8-10 to prepare them for future competitive exams.',
    features: ['Maths & Science Focus', 'Olympiad Preparation', 'School Exam Support', 'Personality Development'],
    price: '₹35,000/year',
    color: 'from-purple-500/10 to-purple-600/5',
    iconColor: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function Courses() {
  const scrollToEnroll = () => {
    const element = document.querySelector('#enrollment')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="courses" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            Our Programs
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Courses We Offer
          </h2>
          <p className="text-gray-600 text-lg">
            Comprehensive coaching programs designed to help you excel in competitive exams and build a strong academic foundation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 overflow-hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className={`w-14 h-14 ${course.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                <course.icon className={`w-7 h-7 ${course.iconColor}`} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{course.description}</p>

              <ul className="space-y-3 mb-6">
                {course.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div>
                  <p className="text-xs text-gray-500">Starting from</p>
                  <p className="text-xl font-bold text-primary">{course.price}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToEnroll}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-dark transition-colors"
                >
                  Enroll
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}