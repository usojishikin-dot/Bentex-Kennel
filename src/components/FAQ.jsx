import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../data/content';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="faq" className="section-padding bg-white">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
                        Got Questions?
                    </span>
                    <h2 className="section-title">Adoption FAQs</h2>
                    <p className="section-subtitle">
                        Everything you need to know about adopting your new best friend
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="mb-4"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-5 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-colors text-left"
                            >
                                <span className="font-semibold text-gray-900 pr-4">
                                    {faq.question}
                                </span>
                                <motion.span
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    className="text-2xl text-gray-400 flex-shrink-0"
                                >
                                    ▼
                                </motion.span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-5 bg-white border border-gray-100 rounded-b-2xl -mt-2">
                                            <p className="text-gray-600 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <p className="text-gray-600 mb-4">
                        Still have questions? We're here to help!
                    </p>
                    <a href="#contact" className="btn-secondary">
                        Contact Us
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
