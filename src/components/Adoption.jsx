import { useState } from 'react';
import { motion } from 'framer-motion';
import { adoptionDogs } from '../data/content';

export default function Adoption() {
    const [filter, setFilter] = useState({ size: 'all', age: 'all', gender: 'all' });

    const filteredDogs = adoptionDogs.filter(dog => {
        if (filter.size !== 'all' && dog.size !== filter.size) return false;
        if (filter.age !== 'all' && dog.ageCategory !== filter.age) return false;
        if (filter.gender !== 'all' && dog.gender !== filter.gender) return false;
        return true;
    });

    return (
        <section id="dogs" className="section-padding bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-lg font-semibold mb-4">
                        Available for Adoption
                    </span>
                    <h2 className="section-title">Meet Your New Best Friend</h2>
                    <p className="section-subtitle">
                        These loving pups are looking for their forever homes. Could you be the one?
                    </p>
                </motion.div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 mb-10"
                >
                    <div className="flex items-center gap-2">
                        <label className="text-gray-600 font-medium">Size:</label>
                        <select
                            value={filter.size}
                            onChange={(e) => setFilter({ ...filter, size: e.target.value })}
                            className="px-4 py-2 bg-white rounded-full border border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
                        >
                            <option value="all">All Sizes</option>
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                        </select>
                    </div>
                    <div className="flex items-center gap-2">
                        <label className="text-gray-600 font-medium">Age:</label>
                        <select
                            value={filter.age}
                            onChange={(e) => setFilter({ ...filter, age: e.target.value })}
                            className="px-4 py-2 bg-white rounded-full border border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
                        >
                            <option value="all">All Ages</option>
                            <option value="Puppy">Puppy</option>
                            <option value="Adult">Adult</option>
                            <option value="Senior">Senior</option>
                        </select>
                    </div>
                    <div className="flex items-center gap-2">
                        <label className="text-gray-600 font-medium">Gender:</label>
                        <select
                            value={filter.gender}
                            onChange={(e) => setFilter({ ...filter, gender: e.target.value })}
                            className="px-4 py-2 bg-white rounded-full border border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
                        >
                            <option value="all">All</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </motion.div>

                {/* Dog Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredDogs.map((dog, index) => (
                        <motion.div
                            key={dog.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-soft card-hover group"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={dog.images[0]}
                                    alt={dog.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 flex gap-2">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">
                                        {dog.size}
                                    </span>
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">
                                        {dog.gender}
                                    </span>
                                </div>
                                {dog.vaccinated && (
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-semibold">
                                            ✓ Vaccinated
                                        </span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h3 className="text-2xl font-bold">{dog.name}</h3>
                                    <p className="text-white/80 text-sm">{dog.breed} • {dog.age}</p>
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

                                <div className="flex gap-2 mb-4">
                                    {dog.compatibility.kids && (
                                        <span className="text-xs text-gray-500">👶 Kids</span>
                                    )}
                                    {dog.compatibility.dogs && (
                                        <span className="text-xs text-gray-500">🐕 Dogs</span>
                                    )}
                                    {dog.compatibility.cats && (
                                        <span className="text-xs text-gray-500">🐱 Cats</span>
                                    )}
                                    {dog.compatibility.apartments && (
                                        <span className="text-xs text-gray-500">🏠 Apartments</span>
                                    )}
                                </div>

                                <a
                                    href="#contact"
                                    className="w-full inline-flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-rose-200 transition-all"
                                >
                                    Adopt {dog.name}
                                    <span>❤️</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {filteredDogs.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <p className="text-gray-500 text-lg">No dogs match your filters. Try adjusting your criteria!</p>
                    </motion.div>
                )}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <p className="text-gray-600 mb-6">
                        Can't find the right match? We get new dogs regularly. Sign up for alerts!
                    </p>
                    <a href="#contact" className="btn-secondary">
                        Get Notified of New Dogs
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
