import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Briefcase, Code, Heart, Home, MessageSquare, Menu, X } from 'lucide-react';

const navItems = [
    { id: 'hero', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'projects', icon: Code, label: 'Projects' },
    { id: 'interests', icon: Heart, label: 'Interests' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSegment, setActiveSegment] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const scrollPosition = window.scrollY + 120; // Offset for navbar

            for (const item of navItems) {
                const element = document.getElementById(item.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const top = rect.top + window.scrollY;
                    const bottom = top + element.offsetHeight;

                    if (scrollPosition >= top && scrollPosition < bottom) {
                        setActiveSegment(item.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll Lock for Mobile Menu
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const scrollToSection = (id) => {
        const isMobile = window.innerWidth < 1024;
        const scrollBehavior = isMobile ? 'auto' : 'smooth';

        if (id === 'hero') {
            window.scrollTo({ top: 0, behavior: scrollBehavior });
            setIsOpen(false);
            return;
        }
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: scrollBehavior });
            setIsOpen(false);
        }
    };

    return (
        <>
            {/* Header / Top Navbar */}
            <header className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 px-6 pointer-events-auto ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20 py-3' : 'bg-transparent py-6'}`}>
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <div
                        onClick={() => scrollToSection('hero')}
                        className={`text-2xl font-black tracking-tighter cursor-pointer transition-colors relative z-10 ${isScrolled ? 'text-slate-900' : 'text-white'
                            }`}
                    >
                        JOTHI<span className={isScrolled ? 'text-slate-900' : 'text-white'}>.</span>
                    </div>

                    {/* Desktop Links */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`text-xs font-bold uppercase tracking-[0.2em] transition-all relative group ${isScrolled ? 'text-slate-500 hover:text-slate-900' : 'text-white/70 hover:text-white'
                                    }`}
                            >
                                {item.label}
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-current transition-all duration-300 ${activeSegment === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}></span>
                            </button>
                        ))}
                        <button
                            onClick={() => scrollToSection('contact')}
                            className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${isScrolled ? 'bg-slate-900 text-white shadow-lg' : 'bg-white text-slate-900'
                                }`}
                        >
                            Contact
                        </button>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`lg:hidden p-2 rounded-xl transition-all relative z-20 ${isScrolled ? 'bg-slate-100 text-slate-900' : 'bg-white/10 text-white backdrop-blur-md'
                            }`}
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Mobile Full Screen Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="lg:hidden fixed inset-0 bg-white z-[10000] flex flex-col p-8 pt-24"
                        >
                            <div className="flex flex-col gap-6">
                                {navItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`flex items-center justify-between p-6 rounded-3xl transition-all ${activeSegment === item.id
                                            ? 'bg-slate-900 text-white shadow-xl'
                                            : 'bg-slate-50 text-slate-600 active:bg-slate-100'
                                            }`}
                                    >
                                        <span className="text-lg font-black uppercase tracking-widest">{item.label}</span>
                                        <item.icon size={24} />
                                    </button>
                                ))}
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="w-full mt-4 bg-slate-900 text-white p-6 rounded-3xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-4 shadow-2xl shadow-slate-900/20"
                                >
                                    <MessageSquare size={20} />
                                    Get In Touch
                                </button>
                            </div>

                            {/* Close button inside the full screen menu */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-6 right-6 p-4 rounded-2xl bg-slate-100 text-slate-900"
                            >
                                <X size={24} />
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
};

export default Navbar;
