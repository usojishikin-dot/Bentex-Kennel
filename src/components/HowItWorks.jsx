import { motion } from 'framer-motion';
import { howItWorks } from '../data/content';

export default function HowItWorks() {
    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
                        Simple Process
                    </span>
                    <h2 className="section-title">How It Works</h2>
                    <p className="section-subtitle">
                        Getting started is easy. Three simple steps to happy tails.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {howItWorks.map((step, index) => (
                        <motion.div
                            key={step.step}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="relative text-center"
                        >
                            {index < howItWorks.length - 1 && (
                                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-indigo-300 to-transparent" />
                            )}

                            <div className="relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-6 shadow-lg shadow-indigo-200">
                                <span className="text-3xl font-bold text-white">{step.step}</span>
                                <div className="absolute inset-0 rounded-full bg-white opacity-0 hover:opacity-10 transition-opacity" />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {step.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <a href="#contact" className="btn-primary text-lg">
                        Start Your Journey
                        <span>🐾</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
