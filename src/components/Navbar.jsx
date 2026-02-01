import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { businessInfo } from '../data/content';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Dogs', href: '#dogs' },
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'About', href: '#about' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/90 backdrop-blur-lg shadow-soft py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="container-custom flex items-center justify-between">
                <a href="#" className="flex items-center gap-2">
                    <span className="text-2xl">🐾</span>
                    <span className="font-bold text-xl text-gray-900">
                        {businessInfo.name}
                    </span>
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-700 hover:text-rose-500 font-medium transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="hidden md:block">
                    <a href="#dogs" className="btn-primary">
                        Adopt Now
                    </a>
                </div>

                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 text-gray-700"
                >
                    <span className="text-2xl">{isMobileMenuOpen ? '✕' : '☰'}</span>
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="container-custom py-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => {
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="block py-3 text-gray-700 hover:text-emerald-600 font-medium transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#dogs"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="btn-primary mt-4 w-full justify-center"
                            >
                                Adopt Now
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
