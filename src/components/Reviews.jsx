import { motion } from 'framer-motion';
import { reviews } from '../data/content';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Reviews() {
    return (
        <section id="reviews" className="section-padding bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                        🏠 Happy Families
                    </span>
                    <h2 className="section-title">Adoption Success Stories</h2>
                    <p className="section-subtitle">
                        Hear from families who found their perfect match through us
                    </p>
                </motion.div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    className="pb-12"
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-3xl p-6 shadow-soft h-full"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src={review.image}
                                        alt={review.ownerName}
                                        className="w-14 h-14 rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-gray-900">
                                            {review.ownerName}
                                        </h4>
                                        <p className="text-sm text-gray-500">
                                            Adopted {review.dogName}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-1 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <span key={i} className="text-amber-400">★</span>
                                    ))}
                                </div>

                                <p className="text-gray-600 leading-relaxed">
                                    "{review.comment}"
                                </p>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-8 text-center"
                >
                    <p className="text-gray-600 mb-6">
                        Ready to write your own success story?
                    </p>
                    <a href="#dogs" className="btn-primary">
                        Find Your Match
                        <span>❤️</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
