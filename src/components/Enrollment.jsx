import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Check,
  ChevronRight,
  User,
  Mail,
  Phone,
  BookOpen,
  Calendar,
  MapPin,
  GraduationCap,
  ArrowRight,
  X,
  CreditCard,
  Atom,
  Heart,
  Zap,
} from 'lucide-react'

const N8N_STUDENT_FORM_URL = import.meta.env.VITE_N8N_STUDENT_FORM_URL

const courses = [
  { id: 'iit-jee', name: 'IIT-JEE Preparation', price: 1, duration: '1 Year', icon: Atom },
  { id: 'neet', name: 'NEET Preparation', price: 42000, duration: '1 Year', icon: Heart },
  { id: 'foundation-8', name: 'Foundation Class 8', price: 25000, duration: '1 Year', icon: GraduationCap },
  { id: 'foundation-9', name: 'Foundation Class 9', price: 30000, duration: '1 Year', icon: GraduationCap },
  { id: 'foundation-10', name: 'Foundation Class 10', price: 35000, duration: '1 Year', icon: GraduationCap },
  { id: 'crash-course', name: 'Crash Course (3 Months)', price: 20000, duration: '3 Months', icon: Zap },
]

const batchTimings = [
  'Morning Batch (7:00 AM - 10:00 AM)',
  'Afternoon Batch (12:00 PM - 3:00 PM)',
  'Evening Batch (4:00 PM - 7:00 PM)',
  'Weekend Batch (Sat-Sun, 9:00 AM - 2:00 PM)',
]

export default function Enrollment() {
  const [step, setStep] = useState(1)
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    parentPhone: '',
    dob: '',
    address: '',
    city: '',
    pincode: '',
    currentClass: '',
    school: '',
    batchTiming: '',
    previousMarks: '',
    referral: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleCourseSelect = (course) => {
    setSelectedCourse(course)
    setStep(2)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!selectedCourse) return
    if (!N8N_STUDENT_FORM_URL) {
      setErrorMessage('Backend URL is not configured. Please set VITE_N8N_STUDENT_FORM_URL in .env.')
      return
    }

    setIsProcessing(true)
    setErrorMessage('')

    try {
      // Your n8n workflow expects $json.body.phone (Simple Memory uses {{$json.body.phone}})
      const payload = {
        body: {
          ...formData,
          phone: formData.phone,
          courseId: selectedCourse?.id,
        },
      }

      const res = await fetch(N8N_STUDENT_FORM_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await res.json().catch(() => null)

      if (!res.ok) {
        throw new Error(data?.message || `Request failed with status ${res.status}`)
      }

      if (data?.success === false) {
        throw new Error(data?.message || 'Enrollment failed')
      }

      setIsSubmitted(true)
    } catch (err) {
      setErrorMessage(err?.message || 'Something went wrong. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  const scrollToPayment = () => {
    const el = document.querySelector('#payment')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  if (isSubmitted) {
    return (
      <section id="enrollment" className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl p-10 shadow-xl"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="font-display text-3xl font-bold text-primary mb-4">Enrollment Successful!</h2>
            <p className="text-gray-600 mb-6">
              Thank you <span className="font-semibold">{formData.fullName}</span>! Your enrollment for{' '}
              <span className="font-semibold text-primary">{selectedCourse.name}</span> has been received.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mb-6 text-left">
              <p className="text-sm text-gray-500 mb-1">Enrollment ID</p>
              <p className="text-lg font-bold text-primary">
                DT2026{Math.random().toString(36).substr(2, 6).toUpperCase()}
              </p>
              <p className="text-sm text-gray-500 mt-4 mb-1">Course Fee</p>
              <p className="text-lg font-bold text-primary">₹{selectedCourse.price.toLocaleString()}</p>
            </div>
            <p className="text-gray-600 mb-6">Please complete the payment to confirm your seat.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToPayment}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors"
            >
              <CreditCard size={20} />
              Proceed to Payment
            </motion.button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="enrollment" className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-primary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            Admissions Open
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">Enroll Now</h2>
          <p className="text-gray-600 text-lg">
            Secure your seat for the upcoming academic year. Limited seats available per batch.
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                  step >= s ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'
                }`}
              >
                {step > s ? <Check size={18} /> : s}
              </div>
              <span className={`hidden sm:block text-sm font-medium ${step >= s ? 'text-primary' : 'text-gray-400'}`}>
                {s === 1 ? 'Select Course' : s === 2 ? 'Personal Details' : 'Confirmation'}
              </span>
              {s < 3 && <div className={`w-12 h-0.5 ${step > s ? 'bg-primary' : 'bg-gray-200'}`} />}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {courses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => handleCourseSelect(course)}
                  className={`bg-white rounded-2xl p-6 cursor-pointer border-2 transition-all shadow-lg hover:shadow-xl ${
                    selectedCourse?.id === course.id
                      ? 'border-primary shadow-primary/20'
                      : 'border-transparent hover:border-primary/30'
                  }`}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <course.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{course.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">Duration: {course.duration}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-400">Fee</p>
                      <p className="text-xl font-bold text-primary">₹{course.price.toLocaleString()}</p>
                    </div>
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {step === 2 && selectedCourse && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">{selectedCourse.name}</h3>
                    <p className="text-primary font-semibold">₹{selectedCourse.price.toLocaleString()}</p>
                  </div>
                  <button onClick={() => setStep(1)} className="text-gray-400 hover:text-gray-600">
                    <X size={20} />
                  </button>
                </div>

                {errorMessage && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-700 text-sm">
                    {errorMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User size={14} className="inline mr-1" /> Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail size={14} className="inline mr-1" /> Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone size={14} className="inline mr-1" /> Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone size={14} className="inline mr-1" /> Parent's Phone *
                      </label>
                      <input
                        type="tel"
                        name="parentPhone"
                        required
                        value={formData.parentPhone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="+91 98765 43211"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Calendar size={14} className="inline mr-1" /> Date of Birth *
                      </label>
                      <input
                        type="date"
                        name="dob"
                        required
                        value={formData.dob}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <GraduationCap size={14} className="inline mr-1" /> Current Class/Year *
                      </label>
                      <select
                        name="currentClass"
                        required
                        value={formData.currentClass}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Select Class</option>
                        <option value="8">Class 8</option>
                        <option value="9">Class 9</option>
                        <option value="10">Class 10</option>
                        <option value="11">Class 11</option>
                        <option value="12">Class 12</option>
                        <option value="dropper">Dropper/Repeat</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin size={14} className="inline mr-1" /> Address *
                    </label>
                    <textarea
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      rows={2}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="Enter your full address"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                      <input
                        type="text"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="City name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Pincode *</label>
                      <input
                        type="text"
                        name="pincode"
                        required
                        value={formData.pincode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="123456"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <BookOpen size={14} className="inline mr-1" /> School Name
                    </label>
                    <input
                      type="text"
                      name="school"
                      value={formData.school}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="Your school name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Batch Timing *</label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {batchTimings.map((timing) => (
                        <label
                          key={timing}
                          className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                            formData.batchTiming === timing
                              ? 'border-primary bg-primary/5'
                              : 'border-gray-200 hover:border-primary/30'
                          }`}
                        >
                          <input
                            type="radio"
                            name="batchTiming"
                            value={timing}
                            checked={formData.batchTiming === timing}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-primary"
                          />
                          <span className="text-sm">{timing}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-6 py-3 border-2 border-gray-200 text-gray-600 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isProcessing}
                      className="flex-1 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {isProcessing ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Complete Enrollment
                          <ArrowRight size={18} />
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

