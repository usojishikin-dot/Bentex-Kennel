import { motion } from 'framer-motion';
import { trustFeatures, stats } from '../data/content';

export default function Trust() {
    return (
        <section id="about" className="section-padding bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-white/10 text-amber-300 rounded-full text-sm font-semibold mb-4">
                        Why Adopt From Us
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-6">
                        A Safe, Loving Path to Adoption
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        We're committed to ethical adoption practices and finding the perfect match for every dog and family.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {trustFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-400/30 transition-colors"
                        >
                            <span className="text-4xl mb-4 block">{feature.icon}</span>
                            <h3 className="text-xl font-semibold mb-3 text-white">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-amber-500/20 to-rose-500/20 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10"
                >
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <div key={index}>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, type: 'spring' }}
                                    className="text-4xl md:text-5xl font-bold text-white mb-2"
                                >
                                    {stat.value}
                                </motion.div>
                                <p className="text-gray-300 font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                        Every adoption helps us rescue more dogs. When you adopt, you're not just gaining a companion—you're saving a life.
                    </p>
                    <a href="#dogs" className="btn-primary">
                        Find Your Match
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
