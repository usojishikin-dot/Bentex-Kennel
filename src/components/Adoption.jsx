import { motion } from 'framer-motion';
import { adoptionDogs } from '../data/content';

export default function Adoption() {
    return (
        <section id="adoption" className="section-padding bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-semibold mb-4">
                        ❤️ Adopt, Don't Shop
                    </span>
                    <h2 className="section-title">Meet Your New Best Friend</h2>
                    <p className="section-subtitle">
                        These loving pups are looking for their forever homes. Could you be the one?
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {adoptionDogs.map((dog, index) => (
                        <motion.div
                            key={dog.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-soft card-hover group"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={dog.images[0]}
                                    alt={dog.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-700">
                                        {dog.size}
                                    </span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                <div className="absolute bottom-4 left-4">
                                    <h3 className="text-2xl font-bold text-white">{dog.name}</h3>
                                    <p className="text-white/80 text-sm">{dog.age}</p>
                                </div>
                            </div>

                            <div className="p-5">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {dog.temperamentTags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {dog.description}
                                </p>

                                <a
                                    href="#contact"
                                    className="w-full inline-flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-rose-200 transition-all"
                                >
                                    Schedule Meet & Greet
                                    <span>❤️</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <p className="text-gray-600 mb-6">
                        Can't adopt but still want to help? Consider fostering or donating.
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <a href="#contact" className="btn-secondary">
                            Learn About Fostering
                        </a>
                        <a href="#contact" className="btn-primary bg-gradient-to-r from-rose-500 to-pink-500">
                            Make a Donation
                            <span>💝</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
