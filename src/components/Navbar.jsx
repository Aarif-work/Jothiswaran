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

            const scrollPosition = window.scrollY + 100;
            navItems.forEach((item) => {
                const element = document.getElementById(item.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSegment(item.id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <>
            {/* Header / Top Navbar */}
            <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 py-4 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20 py-3' : 'bg-transparent py-6'
                }`}>
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <div
                        onClick={() => scrollToSection('hero')}
                        className={`text-2xl font-black tracking-tighter cursor-pointer transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'
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
                        className={`lg:hidden p-2 rounded-xl transition-all ${isScrolled ? 'bg-slate-100 text-slate-900' : 'bg-white/10 text-white backdrop-blur-md'
                            }`}
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Mobile Dropdown Menu (Header Style) */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-slate-100 overflow-hidden"
                        >
                            <div className="p-6 flex flex-col gap-4">
                                {navItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`flex items-center justify-between p-4 rounded-2xl transition-all ${activeSegment === item.id ? 'bg-slate-900 text-white' : 'text-slate-500 active:bg-slate-50'
                                            }`}
                                    >
                                        <span className="text-sm font-bold uppercase tracking-widest">{item.label}</span>
                                        <item.icon size={16} />
                                    </button>
                                ))}
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="w-full mt-2 bg-slate-900 text-white p-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-lg"
                                >
                                    <MessageSquare size={16} />
                                    Get In Touch
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Backdrop for mobile menu to allow closing without hiding page */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-[90] bg-slate-900/10 backdrop-blur-[2px] lg:hidden"
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
