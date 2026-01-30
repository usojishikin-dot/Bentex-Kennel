import { useState } from 'react';
import { motion } from 'framer-motion';
import { businessInfo } from '../data/content';

export default function Footer() {
    const [email, setEmail] = useState('');

    const quickLinks = [
        { name: 'Boarding', href: '#services' },
        { name: 'Grooming', href: '#services' },
        { name: 'Dog Walking', href: '#services' },
        { name: 'Adoption', href: '#adoption' },
        { name: 'Pricing', href: '#pricing' },
    ];

    const supportLinks = [
        { name: 'FAQ', href: '#faq' },
        { name: 'Contact Us', href: '#contact' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cancellation Policy', href: '#' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail('');
    };

    return (
        <footer className="bg-gray-900 text-white">
            <div className="container-custom py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="lg:col-span-1">
                        <a href="#" className="flex items-center gap-2 mb-6">
                            <span className="text-3xl">🐾</span>
                            <span className="text-xl font-bold">{businessInfo.name}</span>
                        </a>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            {businessInfo.tagline}. Providing premium care for your furry family members since 2016.
                        </p>
                        <div className="flex gap-4">
                            {Object.entries(businessInfo.social).map(([platform, url]) => (
                                <a
                                    key={platform}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-800 hover:bg-indigo-600 rounded-full flex items-center justify-center transition-colors"
                                >
                                    {platform === 'instagram' && '📷'}
                                    {platform === 'facebook' && '👍'}
                                    {platform === 'twitter' && '🐦'}
                                    {platform === 'tiktok' && '🎵'}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Support</h4>
                        <ul className="space-y-3">
                            {supportLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Contact & Hours</h4>
                        <div className="space-y-4 text-gray-400">
                            <p className="flex items-start gap-3">
                                <span className="text-xl">📍</span>
                                <span>{businessInfo.address}</span>
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="text-xl">📞</span>
                                <a href={`tel:${businessInfo.phone}`} className="hover:text-white transition-colors">
                                    {businessInfo.phone}
                                </a>
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="text-xl">✉️</span>
                                <a href={`mailto:${businessInfo.email}`} className="hover:text-white transition-colors">
                                    {businessInfo.email}
                                </a>
                            </p>
                            <div className="pt-4 border-t border-gray-800">
                                <p className="font-medium text-white mb-2">Hours</p>
                                <p>Mon-Fri: {businessInfo.hours.weekdays}</p>
                                <p>Sat-Sun: {businessInfo.hours.weekends}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex-1">
                            <h4 className="font-bold text-lg mb-3">Stay Updated</h4>
                            <p className="text-gray-400 text-sm mb-4">
                                Get tips, updates, and special offers delivered to your inbox.
                            </p>
                            <form onSubmit={handleSubmit} className="flex gap-3 max-w-md">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="flex-1 px-5 py-3 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:border-indigo-500 transition-colors"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full font-semibold transition-colors"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} {businessInfo.name}. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-sm">
                            Made with ❤️ for dogs everywhere
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
