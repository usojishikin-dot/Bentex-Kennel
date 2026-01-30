import { motion } from 'framer-motion';
import { services } from '../data/content';

export default function Services() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="services" className="section-padding bg-white">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-xl font-semibold mb-4">
                        Our Services
                    </span>
                    <h2 className="section-title">Everything Your Pup Needs</h2>
                    <p className="section-subtitle">
                        From overnight stays to spa treatments, we offer comprehensive care tailored to your dog's unique personality.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={cardVariants}
                            className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-3xl border border-gray-100 card-hover cursor-pointer"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {service.name}
                            </h3>

                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                {service.description}
                            </p>



                            <ul className="space-y-2 mb-5">
                                {service.features.slice(0, 2).map((feature, index) => (
                                    <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                        <span className="text-green-500">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 text-indigo-600 font-semibold group-hover:gap-3 transition-all"
                            >
                                Learn More
                                <span>→</span>
                            </a>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <a href="#contact" className="btn-primary">
                        Get a Free Quote
                        <span>→</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
