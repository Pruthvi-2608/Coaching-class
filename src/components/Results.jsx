import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Target, Medal, Star } from 'lucide-react'

const achievements = [
  { icon: Trophy, value: '500+', label: 'IIT-JEE Qualifiers', suffix: '' },
  { icon: Target, value: '800+', label: 'NEET Qualifiers', suffix: '' },
  { icon: Medal, value: '50+', label: 'Top 100 Ranks', suffix: '' },
  { icon: Star, value: '95%', label: 'Board Distinctions', suffix: '' },
]

export default function Results() {
  return (
    <section id="results" className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 text-accent text-sm font-semibold rounded-full mb-4">
            Our Achievements
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Results That Speak
          </h2>
          <p className="text-white/80 text-lg">
            Our consistent track record of producing top rankers is a testament to our commitment to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors"
            >
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-accent" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">{item.value}</div>
              <div className="text-white/90 font-medium">{item.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Recent Toppers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Recent Toppers 2025</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { name: 'Rahul Sharma', exam: 'IIT-JEE', rank: 'AIR 45', score: '99.8%' },
              { name: 'Priya Patel', exam: 'NEET', rank: 'AIR 12', score: '710/720' },
              { name: 'Amit Kumar', exam: 'IIT-JEE', rank: 'AIR 89', score: '99.5%' },
            ].map((topper, index) => (
              <motion.div
                key={topper.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-white/10 rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-accent">
                  {topper.name.charAt(0)}
                </div>
                <h4 className="font-bold text-white text-lg">{topper.name}</h4>
                <p className="text-accent font-semibold">{topper.exam} - {topper.rank}</p>
                <p className="text-white/70 text-sm mt-1">Score: {topper.score}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
