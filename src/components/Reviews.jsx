import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { reviews, stats } from '../data/content';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Reviews() {
    return (
        <section id="reviews" className="section-padding bg-white overflow-hidden">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
                        Testimonials
                    </span>
                    <h2 className="section-title">What Pet Parents Say</h2>
                    <p className="section-subtitle">
                        Don't just take our word for it. Here's what our happy customers have to share.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl"
                        >
                            <p className="text-4xl font-extrabold text-indigo-600 mb-1">{stat.value}</p>
                            <p className="text-gray-600 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={24}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                        className="pb-14"
                    >
                        {reviews.map((review) => (
                            <SwiperSlide key={review.id}>
                                <div className="bg-gray-50 p-8 rounded-3xl h-full">
                                    <div className="flex items-center gap-4 mb-6">
                                        <img
                                            src={review.image}
                                            alt={review.ownerName}
                                            className="w-14 h-14 rounded-full object-cover"
                                        />
                                        <div>
                                            <p className="font-bold text-gray-900">{review.ownerName}</p>
                                            <p className="text-sm text-gray-500">Parent of {review.dogName}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <span
                                                key={i}
                                                className={`text-xl ${i < review.rating ? 'text-amber-400' : 'text-gray-300'}`}
                                            >
                                                ★
                                            </span>
                                        ))}
                                    </div>

                                    <p className="text-gray-600 leading-relaxed italic">
                                        "{review.comment}"
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-8 text-center"
                >
                    <a
                        href="https://google.com/reviews"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:underline"
                    >
                        See all reviews on Google
                        <span>→</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
