import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Amit Raj',
    achievement: 'IIT Bombay, AIR 245',
    course: 'IIT-JEE',
    rating: 5,
    text: 'The faculty at Dhananjay Tutorials helped me clear my concepts in Physics and Chemistry. Their systematic approach and regular tests prepared me perfectly for JEE Advanced.',
    initials: 'AR',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    name: 'Priya Sharma',
    achievement: 'AIIMS Delhi, NEET 2025',
    course: 'NEET',
    rating: 5,
    text: 'The Biology classes here are exceptional. The teachers make complex topics easy to understand. I scored 650+ in NEET thanks to their guidance.',
    initials: 'PS',
    color: 'bg-green-100 text-green-700',
  },
  {
    name: 'Rahul Kumar',
    achievement: 'IIT Delhi, 98.5% CBSE',
    course: 'Foundation',
    rating: 5,
    text: 'I joined the foundation course in 9th grade. The early preparation and strong basics helped me crack both board exams and JEE with excellent scores.',
    initials: 'RK',
    color: 'bg-purple-100 text-purple-700',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            What Students Say
          </h2>
          <p className="text-gray-600 text-lg">
            Hear from our students who have achieved their dreams with Dhananjay Tutorials.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-gray-50 rounded-2xl p-8 relative shadow-lg shadow-gray-200/50"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${testimonial.color}`}>
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-primary font-medium">{testimonial.achievement}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
