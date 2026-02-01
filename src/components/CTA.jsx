import { useState } from 'react';
import { motion } from 'framer-motion';
import { businessInfo } from '../data/content';
import { InstagramIcon, FacebookIcon, TwitterIcon, TikTokIcon } from './icons/SocialIcons';

export default function CTA() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        housing: '',
        experience: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const socialIcons = {
        instagram: InstagramIcon,
        facebook: FacebookIcon,
        twitter: TwitterIcon,
        tiktok: TikTokIcon
    };

    return (
        <section id="contact" className="section-padding bg-gradient-to-br from-rose-50 via-amber-50 to-orange-50">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-semibold mb-4">
                            Ready to Adopt?
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Give a Dog a{' '}
                            <span className="text-gradient">Second Chance</span>
                        </h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            Every dog deserves a loving home. Fill out the adoption inquiry form and take the first step toward welcoming your new best friend.
                        </p>

                        <div className="space-y-4 mb-8">
                            <motion.a
                                href={`tel:${businessInfo.phone}`}
                                className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-soft hover:shadow-md transition-shadow"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-xl">
                                    📞
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Call Us</p>
                                    <p className="font-semibold text-gray-900">{businessInfo.phone}</p>
                                </div>
                            </motion.a>

                            <motion.a
                                href={`mailto:${businessInfo.email}`}
                                className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-soft hover:shadow-md transition-shadow"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-xl">
                                    ✉️
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email Us</p>
                                    <p className="font-semibold text-gray-900">{businessInfo.email}</p>
                                </div>
                            </motion.a>

                            <motion.div
                                className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-soft"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-xl">
                                    📍
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Visit Us</p>
                                    <p className="font-semibold text-gray-900">{businessInfo.address}</p>
                                </div>
                            </motion.div>
                        </div>

                        <div className="flex gap-4">
                            {Object.entries(businessInfo.social).map(([platform, url]) => {
                                const IconComponent = socialIcons[platform];
                                return (
                                    <a
                                        key={platform}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-soft hover:shadow-md transition-all hover:-translate-y-1 text-gray-600 hover:text-rose-500"
                                    >
                                        {IconComponent && <IconComponent className="w-5 h-5" />}
                                    </a>
                                );
                            })}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-8 shadow-xl"
                    >
                        {!submitted ? (
                            <>
                                <h3 className="text-2xl font-bold mb-2">Adoption Inquiry</h3>
                                <p className="text-gray-600 mb-6">Tell us a bit about yourself and we'll be in touch!</p>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name *"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none transition"
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address *"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none transition"
                                        />
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone Number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none transition"
                                        />
                                        <select
                                            name="housing"
                                            value={formData.housing}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none transition"
                                        >
                                            <option value="">Housing Type</option>
                                            <option value="house">House with Yard</option>
                                            <option value="apartment">Apartment</option>
                                            <option value="condo">Condo</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <select
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none transition"
                                    >
                                        <option value="">Dog Experience Level</option>
                                        <option value="first">First-time Owner</option>
                                        <option value="some">Some Experience</option>
                                        <option value="experienced">Experienced Owner</option>
                                    </select>

                                    <textarea
                                        name="message"
                                        placeholder="Tell us about yourself and any specific dogs you're interested in..."
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none transition resize-none"
                                    />

                                    <label className="flex items-start gap-3 cursor-pointer">
                                        <input type="checkbox" required className="mt-1 w-4 h-4 text-rose-500 rounded" />
                                        <span className="text-sm text-gray-600">
                                            I understand that submitting this form does not guarantee adoption. I agree to be contacted by {businessInfo.name}.
                                        </span>
                                    </label>

                                    <motion.button
                                        type="submit"
                                        className="w-full py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-rose-200 transition-all"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Submit Adoption Inquiry ❤️
                                    </motion.button>
                                </form>
                            </>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <div className="text-6xl mb-6">🎉</div>
                                <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                                <p className="text-gray-600 mb-6">
                                    We've received your adoption inquiry. Our team will review your application and get back to you within 24-48 hours.
                                </p>
                                <p className="text-gray-500 text-sm">
                                    In the meantime, feel free to browse more of our adorable dogs!
                                </p>
                                <a href="#dogs" className="btn-primary mt-6 inline-block">
                                    Browse More Dogs
                                </a>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
