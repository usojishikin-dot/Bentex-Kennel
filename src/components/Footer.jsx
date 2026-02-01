import { motion } from 'framer-motion';
import { businessInfo } from '../data/content';
import { InstagramIcon, FacebookIcon, TwitterIcon, TikTokIcon } from './icons/SocialIcons';

export default function Footer() {
    const socialIcons = {
        instagram: InstagramIcon,
        facebook: FacebookIcon,
        twitter: TwitterIcon,
        tiktok: TikTokIcon
    };

    const footerLinks = [
        {
            title: 'Adopt',
            links: [
                { name: 'Available Dogs', href: '#dogs' },
                { name: 'How Adoption Works', href: '#how-it-works' },
                { name: 'Adoption FAQs', href: '#faq' },
                { name: 'Success Stories', href: '#reviews' },
            ]
        },
        {
            title: 'About Us',
            links: [
                { name: 'Our Mission', href: '#about' },
                { name: 'Why Adopt', href: '#about' },
                { name: 'Contact Us', href: '#contact' },
            ]
        }
    ];

    return (
        <footer className="bg-slate-900 text-white">
            <div className="container-custom py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-3xl">🐾</span>
                                <span className="font-bold text-2xl">{businessInfo.name}</span>
                            </div>
                            <p className="text-gray-400 mb-6 max-w-sm">
                                {businessInfo.tagline}. We're dedicated to finding loving homes for every dog in our care.
                            </p>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-gray-400">
                                    <span>📍</span>
                                    <span>{businessInfo.address}</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-400">
                                    <span>📞</span>
                                    <a href={`tel:${businessInfo.phone}`} className="hover:text-white transition-colors">
                                        {businessInfo.phone}
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 text-gray-400">
                                    <span>✉️</span>
                                    <a href={`mailto:${businessInfo.email}`} className="hover:text-white transition-colors">
                                        {businessInfo.email}
                                    </a>
                                </div>
                            </div>

                            <div className="mt-6">
                                <p className="text-gray-500 text-sm mb-2">Visiting Hours:</p>
                                <p className="text-gray-400 text-sm">Mon-Fri: {businessInfo.hours.weekdays}</p>
                                <p className="text-gray-400 text-sm">Sat-Sun: {businessInfo.hours.weekends}</p>
                            </div>

                            {/* Social Media Icons */}
                            <div className="flex gap-4 mt-6">
                                {Object.entries(businessInfo.social).map(([platform, url]) => {
                                    const IconComponent = socialIcons[platform];
                                    return (
                                        <a
                                            key={platform}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-white/20 hover:text-white transition-all"
                                            aria-label={platform}
                                        >
                                            {IconComponent && <IconComponent className="w-5 h-5" />}
                                        </a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>

                    {footerLinks.map((column, index) => (
                        <motion.div
                            key={column.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h4 className="font-semibold text-lg mb-4">{column.title}</h4>
                            <ul className="space-y-3">
                                {column.links.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            target={link.href.startsWith('http') ? '_blank' : undefined}
                                            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="border-t border-gray-800">
                <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} {businessInfo.name}. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm">
                        Made with ❤️ for dogs everywhere
                    </p>
                </div>
            </div>
        </footer>
    );
}
