import { motion } from 'framer-motion';
import { businessInfo } from '../data/content';

export default function Hero() {


    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-200 rounded-full opacity-30 blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-200 rounded-full opacity-30 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-100 rounded-full opacity-20 blur-3xl" />
            </div>

            <div className="container-custom relative z-10 pt-40 pb-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">

                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                            Your Dog Deserves{' '}
                            <span className="text-gradient">Premium Care</span>{' '}
                            & Endless Love
                        </h1>

                        <p className="text-lg text-gray-600 mb-8 max-w-lg">
                            At {businessInfo.name}, we treat every pup like family. From cozy boarding to spa-day grooming,
                            your furry friend is in safe, loving hands—always.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <motion.a
                                href="#contact"
                                className="btn-primary text-lg px-8 py-4"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Book a Visit
                                <span>→</span>
                            </motion.a>
                            <motion.a
                                href="#services"
                                className="btn-secondary text-lg px-8 py-4"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                View Services
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative mt-20"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <video
                                src="/hero-video.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-[400px] md:h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>



                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </section>
    );
}
