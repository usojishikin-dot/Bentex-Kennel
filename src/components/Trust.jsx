import { motion } from 'framer-motion';
import { trustFeatures } from '../data/content';

export default function Trust() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="section-padding bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-40 h-40 bg-indigo-500 rounded-full opacity-20 blur-3xl" />
                <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-500 rounded-full opacity-20 blur-3xl" />
            </div>

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-white/10 text-indigo-200 rounded-full text-xl font-semibold mb-20 backdrop-blur-sm">
                        Why Choose Us
                    </span>
                    <h2 className="section-title text-white">
                        Why Families Trust Us
                    </h2>
                    <p className="section-subtitle text-indigo-200">
                        We go above and beyond to ensure your furry family member receives the love and care they deserve.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {trustFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="group bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform shadow-lg">
                                {feature.icon}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3">
                                {feature.title}
                            </h3>

                            <p className="text-indigo-200 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-32 bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20"
                >
                    <div className="grid md:grid-cols-3 gap-8 text-center mt-20">
                        <div>
                            <p className="text-5xl font-extrabold text-white mb-2">15,000+</p>
                            <p className="text-indigo-200 font-medium">Dogs Cared For</p>
                        </div>
                        <div>
                            <p className="text-5xl font-extrabold text-white mb-2">4.9★</p>
                            <p className="text-indigo-200 font-medium">Average Rating</p>
                        </div>
                        <div>
                            <p className="text-5xl font-extrabold text-white mb-2">8+ Years</p>
                            <p className="text-indigo-200 font-medium">of Excellence</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
