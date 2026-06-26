import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CreditCard, Smartphone, Building2, Check, Lock, Shield, ArrowRight, X, QrCode, Wallet } from 'lucide-react'

const paymentMethods = [
  { id: 'upi', name: 'UPI', icon: Smartphone, description: 'Google Pay, PhonePe, Paytm' },
  { id: 'card', name: 'Credit/Debit Card', icon: CreditCard, description: 'Visa, Mastercard, RuPay' },
  { id: 'netbanking', name: 'Net Banking', icon: Building2, description: 'All major banks' },
  { id: 'qr', name: 'Scan & Pay', icon: QrCode, description: 'QR Code payment' },
  { id: 'wallet', name: 'Wallets', icon: Wallet, description: 'Paytm, Mobikwik, Amazon Pay' },
]

const upiApps = [
  { name: 'Google Pay', color: 'bg-blue-50 text-blue-600' },
  { name: 'PhonePe', color: 'bg-purple-50 text-purple-600' },
  { name: 'Paytm', color: 'bg-cyan-50 text-cyan-600' },
  { name: 'BHIM', color: 'bg-orange-50 text-orange-600' },
]

const banks = [
  'State Bank of India', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 
  'Bank of Baroda', 'Punjab National Bank', 'Canara Bank', 'Union Bank'
]

export default function Payment() {
  const [selectedMethod, setSelectedMethod] = useState('upi')
  const [upiId, setUpiId] = useState('')
  const [selectedBank, setSelectedBank] = useState('')
  const [cardDetails, setCardDetails] = useState({ number: '', expiry: '', cvv: '', name: '' })
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [showQR, setShowQR] = useState(false)

  const handlePayment = async (e) => {
    e.preventDefault()
    setIsProcessing(true)
    await new Promise(resolve => setTimeout(resolve, 3000))
    setIsProcessing(false)
    setIsSuccess(true)
  }

  if (isSuccess) {
    return (
      <section id="payment" className="py-20 lg:py-28 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl p-10 shadow-xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Check className="w-12 h-12 text-green-600" />
            </motion.div>
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
            <p className="text-gray-600 mb-6">Your enrollment has been confirmed.</p>

            <div className="bg-gray-50 rounded-xl p-6 mb-6 text-left space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500">Transaction ID</span>
                <span className="font-semibold text-gray-900">TXN{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Amount Paid</span>
                <span className="font-semibold text-primary">₹45,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Payment Method</span>
                <span className="font-semibold text-gray-900">{paymentMethods.find(m => m.id === selectedMethod)?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Date & Time</span>
                <span className="font-semibold text-gray-900">{new Date().toLocaleString()}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => window.print()}
                className="px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
              >
                Download Receipt
              </button>
              <button
                onClick={() => setIsSuccess(false)}
                className="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors"
              >
                Make Another Payment
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="payment" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            Secure Payment
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Fee Payment
          </h2>
          <p className="text-gray-600 text-lg">
            Complete your course fee payment securely. All transactions are encrypted and protected.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Order Summary</h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900">IIT-JEE Preparation</p>
                    <p className="text-sm text-gray-500">1 Year Program</p>
                  </div>
                  <p className="font-semibold text-gray-900">₹45,000</p>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900">Registration Fee</p>
                    <p className="text-sm text-gray-500">One-time</p>
                  </div>
                  <p className="font-semibold text-gray-900">₹2,000</p>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900">Study Material</p>
                    <p className="text-sm text-gray-500">Books & DPPs</p>
                  </div>
                  <p className="font-semibold text-gray-900">₹3,000</p>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Subtotal</span>
                    <span className="font-semibold">₹50,000</span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-gray-500">Early Bird Discount</span>
                    <span className="font-semibold text-green-600">-₹5,000</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total Amount</span>
                  <span className="text-2xl font-bold text-primary">₹45,000</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Secure SSL Encryption</span>
              </div>
            </div>
          </motion.div>

          {/* Payment Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
              <div className="flex items-center gap-2 mb-6">
                <Lock className="w-5 h-5 text-primary" />
                <span className="font-semibold text-gray-900">Secure Payment Gateway</span>
              </div>

              {/* Payment Methods */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => { setSelectedMethod(method.id); setShowQR(false) }}
                    className={`p-4 rounded-xl border-2 transition-all text-center ${
                      selectedMethod === method.id
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-primary/30'
                    }`}
                  >
                    <method.icon className={`w-6 h-6 mx-auto mb-2 ${
                      selectedMethod === method.id ? 'text-primary' : 'text-gray-400'
                    }`} />
                    <p className="text-xs font-medium text-gray-900">{method.name}</p>
                    <p className="text-[10px] text-gray-500 mt-1">{method.description}</p>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {/* UPI Payment */}
                {selectedMethod === 'upi' && !showQR && (
                  <motion.form
                    key="upi"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handlePayment}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Select UPI App</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {upiApps.map((app) => (
                          <button
                            key={app.name}
                            type="button"
                            className={`p-3 rounded-xl border-2 transition-all ${app.color} border-transparent hover:border-current`}
                          >
                            <Smartphone className="w-6 h-6 mx-auto mb-1" />
                            <p className="text-xs font-medium">{app.name}</p>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Enter UPI ID</label>
                      <div className="flex gap-3">
                        <input
                          type="text"
                          value={upiId}
                          onChange={(e) => setUpiId(e.target.value)}
                          placeholder="name@upi"
                          className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => setShowQR(true)}
                          className="px-4 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                        >
                          <QrCode className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                      <p className="text-sm text-yellow-800">
                        <span className="font-semibold">Note:</span> You will receive a payment request on your UPI app. 
                        Please approve it to complete the payment.
                      </p>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isProcessing || !upiId}
                      className="w-full py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isProcessing ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Pay ₹45,000
                          <ArrowRight size={18} />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}

                {/* QR Code */}
                {showQR && (
                  <motion.div
                    key="qr"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center"
                  >
                    <div className="bg-white p-6 rounded-2xl border-2 border-dashed border-gray-300 inline-block">
                      <div className="w-48 h-48 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                        <QrCode className="w-32 h-32 text-gray-400" />
                      </div>
                      <p className="text-sm text-gray-600 mb-4">Scan with any UPI app</p>
                      <div className="flex justify-center gap-2 mb-4">
                        {upiApps.map((app) => (
                          <div key={app.name} className={`w-8 h-8 rounded-lg ${app.color} flex items-center justify-center`}>
                            <Smartphone className="w-4 h-4" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => setShowQR(false)}
                      className="mt-4 text-primary font-medium hover:underline"
                    >
                      Pay via UPI ID instead
                    </button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handlePayment}
                      disabled={isProcessing}
                      className="w-full mt-6 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isProcessing ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Verifying Payment...
                        </>
                      ) : (
                        <>I have completed the payment</>
                      )}
                    </motion.button>
                  </motion.div>
                )}

                {/* Card Payment */}
                {selectedMethod === 'card' && (
                  <motion.form
                    key="card"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handlePayment}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={cardDetails.number}
                          onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                          className="w-full px-4 py-3 pl-12 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                        />
                        <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                        <input
                          type="text"
                          value={cardDetails.expiry}
                          onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
                          placeholder="MM/YY"
                          maxLength={5}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                        <div className="relative">
                          <input
                            type="password"
                            value={cardDetails.cvv}
                            onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
                            placeholder="123"
                            maxLength={3}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                          />
                          <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Card Holder Name</label>
                      <input
                        type="text"
                        value={cardDetails.name}
                        onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
                        placeholder="Name as on card"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      />
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Shield className="w-4 h-4 text-green-500" />
                      <span>Your card details are secured with 256-bit SSL encryption</span>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isProcessing}
                      className="w-full py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isProcessing ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Pay ₹45,000
                          <ArrowRight size={18} />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}

                {/* Net Banking */}
                {selectedMethod === 'netbanking' && (
                  <motion.form
                    key="netbanking"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handlePayment}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Select Your Bank</label>
                      <div className="grid grid-cols-2 gap-3">
                        {banks.map((bank) => (
                          <button
                            key={bank}
                            type="button"
                            onClick={() => setSelectedBank(bank)}
                            className={`p-4 rounded-xl border-2 text-left transition-all ${
                              selectedBank === bank
                                ? 'border-primary bg-primary/5'
                                : 'border-gray-200 hover:border-primary/30'
                            }`}
                          >
                            <Building2 className={`w-5 h-5 mb-2 ${
                              selectedBank === bank ? 'text-primary' : 'text-gray-400'
                            }`} />
                            <p className="text-sm font-medium">{bank}</p>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                      <p className="text-sm text-blue-800">
                        <span className="font-semibold">Note:</span> You will be redirected to your bank's secure 
                        net banking page to complete the payment.
                      </p>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isProcessing || !selectedBank}
                      className="w-full py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isProcessing ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Redirecting...
                        </>
                      ) : (
                        <>
                          Pay ₹45,000
                          <ArrowRight size={18} />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}

                {/* Wallet Payment */}
                {selectedMethod === 'wallet' && (
                  <motion.form
                    key="wallet"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handlePayment}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Select Wallet</label>
                      <div className="grid grid-cols-3 gap-3">
                        {['Paytm', 'Mobikwik', 'Amazon Pay', 'FreeCharge', 'JioMoney', 'Airtel Money'].map((wallet) => (
                          <button
                            key={wallet}
                            type="button"
                            className="p-4 rounded-xl border-2 border-gray-200 hover:border-primary/30 transition-all text-center"
                          >
                            <Wallet className="w-6 h-6 mx-auto mb-2 text-primary" />
                            <p className="text-xs font-medium">{wallet}</p>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number linked to Wallet</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isProcessing}
                      className="w-full py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isProcessing ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Pay ₹45,000
                          <ArrowRight size={18} />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
