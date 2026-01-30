import { motion } from 'framer-motion';
import { businessInfo } from '../data/content';

export default function CTA() {
    return (
        <section id="contact" className="section-padding bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute -top-20 -left-20 w-60 h-60 bg-white rounded-full opacity-10 blur-3xl" />
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-400 rounded-full opacity-10 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-400 rounded-full opacity-10 blur-3xl" />
            </div>

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <span className="inline-block text-6xl mb-6">🐾</span>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                        Ready to Give Your Pup the <span className="text-amber-300">Best Care</span> They Deserve?
                    </h2>

                    <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
                        Join thousands of happy pet parents who trust us with their furry family members.
                        Book your first visit today and see the difference.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                        <motion.a
                            href="#"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Book Now
                            <span>→</span>
                        </motion.a>
                        <motion.a
                            href={`tel:${businessInfo.phone}`}
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            📞 Call Us
                        </motion.a>
                        <motion.a
                            href={`https://wa.me/${businessInfo.phone.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white rounded-full font-bold text-lg hover:bg-green-600 hover:shadow-lg transition-all"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            💬 WhatsApp
                        </motion.a>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-6 text-center">
                        <div className="p-4">
                            <p className="text-indigo-200 text-sm mb-1">Call Us</p>
                            <p className="text-white font-bold text-lg">{businessInfo.phone}</p>
                        </div>
                        <div className="p-4">
                            <p className="text-indigo-200 text-sm mb-1">Email Us</p>
                            <p className="text-white font-bold text-lg">{businessInfo.email}</p>
                        </div>
                        <div className="p-4">
                            <p className="text-indigo-200 text-sm mb-1">Visit Us</p>
                            <p className="text-white font-bold text-lg">{businessInfo.address}</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-16 bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20"
                >
                    <h3 className="text-2xl font-bold text-white text-center mb-8">
                        Get a Free Quote
                    </h3>

                    <form className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-indigo-200 text-sm font-medium mb-2">Your Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full px-5 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-indigo-200 focus:bg-white/20 focus:border-white/40 transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-indigo-200 text-sm font-medium mb-2">Email Address</label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className="w-full px-5 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-indigo-200 focus:bg-white/20 focus:border-white/40 transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-indigo-200 text-sm font-medium mb-2">Phone Number</label>
                            <input
                                type="tel"
                                placeholder="+1 (555) 123-4567"
                                className="w-full px-5 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-indigo-200 focus:bg-white/20 focus:border-white/40 transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-indigo-200 text-sm font-medium mb-2">Service Needed</label>
                            <select className="w-full px-5 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:bg-white/20 focus:border-white/40 transition-all">
                                <option value="" className="text-gray-900">Select a service</option>
                                <option value="boarding" className="text-gray-900">Dog Boarding</option>
                                <option value="walking" className="text-gray-900">Dog Walking</option>
                                <option value="grooming" className="text-gray-900">Dog Grooming</option>
                                <option value="adoption" className="text-gray-900">Dog Adoption</option>
                                <option value="breeding" className="text-gray-900">Dog Breeding</option>
                            </select>
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-indigo-200 text-sm font-medium mb-2">Tell us about your pup</label>
                            <textarea
                                rows={4}
                                placeholder="Breed, age, any special needs..."
                                className="w-full px-5 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-indigo-200 focus:bg-white/20 focus:border-white/40 transition-all resize-none"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <button
                                type="submit"
                                className="w-full py-4 bg-amber-400 hover:bg-amber-500 text-gray-900 rounded-xl font-bold text-lg transition-all hover:shadow-lg"
                            >
                                Get My Free Quote 🐾
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
