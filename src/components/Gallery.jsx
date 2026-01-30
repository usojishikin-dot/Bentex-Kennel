import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gallery } from '../data/content';

export default function Gallery() {
    const [activeTab, setActiveTab] = useState('all');

    const tabs = [
        { id: 'all', label: 'All' },
        { id: 'play', label: 'Play Area' },
        { id: 'facility', label: 'Facility' },
        { id: 'grooming', label: 'Grooming' },
        { id: 'boarding', label: 'Boarding' }
    ];

    const filteredGallery = activeTab === 'all'
        ? gallery
        : gallery.filter(item => item.category === activeTab);

    return (
        <section id="gallery" className="section-padding bg-gray-50">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
                        Our Facility
                    </span>
                    <h2 className="section-title">Take a Virtual Tour</h2>
                    <p className="section-subtitle">
                        See where the magic happens. Our state-of-the-art facility is designed for maximum comfort and fun.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-5 py-2 rounded-full font-medium transition-all ${activeTab === tab.id
                                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
                                    : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredGallery.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className={`relative rounded-2xl overflow-hidden group cursor-pointer ${item.id === 1 || item.id === 6 ? 'md:col-span-2 md:row-span-2' : ''
                                    }`}
                            >
                                {item.type === 'video' ? (
                                    <video
                                        src={item.url}
                                        className="w-full h-full object-cover aspect-square"
                                        muted
                                        loop
                                        autoPlay
                                        playsInline
                                    />
                                ) : (
                                    <img
                                        src={item.url}
                                        alt="Facility"
                                        className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-500"
                                    />
                                )}

                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="absolute bottom-4 left-4">
                                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm capitalize">
                                            {item.category}
                                        </span>
                                    </div>
                                </div>

                                {item.type === 'video' && (
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 bg-red-500 text-white rounded-full text-xs font-semibold flex items-center gap-1">
                                            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                            Video
                                        </span>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <a href="#contact" className="btn-secondary">
                        Schedule a Tour
                        <span>📍</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
