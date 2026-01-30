import { motion } from 'framer-motion';
import { services } from '../data/content';

export default function Pricing() {
    const pricingTiers = [
        {
            name: 'Basic Boarding',
            price: 45,
            period: 'per night',
            description: 'Perfect for well-socialized pups',
            features: [
                'Comfortable private suite',
                'Daily exercise & playtime',
                'Fresh meals included',
                'Basic grooming check',
                'Photo updates'
            ],
            popular: true
        },
        {
            name: 'Premium Boarding',
            price: 75,
            period: 'per night',
            description: 'Extra love and attention',
            features: [
                'Luxury suite with TV',
                'Extended play sessions',
                'Premium organic meals',
                'Daily video calls',
                'Spa bath included',
                'One-on-one attention'
            ],
            popular: true
        },
        {
            name: 'VIP Suite',
            price: 120,
            period: 'per night',
            description: 'The ultimate pampering experience',
            features: [
                'Private indoor/outdoor suite',
                'Personal caretaker',
                'Gourmet meal options',
                '24/7 webcam access',
                'Full grooming session',
                'Aromatherapy & massage',
                'Airport pickup/dropoff'
            ],
            popular: true
        }
    ];

    return (
        <section id="pricing" className="section-padding bg-gray-50">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
                        Simple Pricing
                    </span>
                    <h2 className="section-title">Transparent & Fair Pricing</h2>
                    <p className="section-subtitle">
                        No hidden fees, no surprises. Choose the perfect plan for your furry friend.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {pricingTiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative bg-white rounded-3xl p-8 ${tier.popular
                                ? 'border-2 border-indigo-500 shadow-xl shadow-indigo-100 scale-105'
                                : 'border border-gray-200 shadow-soft'
                                }`}
                        >


                            <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                            <p className="text-gray-500 text-sm mb-6">{tier.description}</p>

                            <div className="mb-6">
                                <span className="text-4xl font-extrabold text-gray-900">${tier.price}</span>
                                <span className="text-gray-500 ml-2">{tier.period}</span>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {tier.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-600">
                                        <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">
                                            ✓
                                        </span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className={`block text-center py-3 px-6 rounded-full font-semibold transition-all ${tier.popular
                                    ? 'btn-primary w-full'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                Book Now
                            </a>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-gray-500 mt-36"
                >
                    Need a custom package? <a href="#contact" className="text-indigo-600 font-semibold hover:underline">Contact us</a> for personalized pricing.
                </motion.p>
            </div>
        </section>
    );
}
