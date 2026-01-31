import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpeg';
import landscapeImg from '../assets/landscape.jpg';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen w-full overflow-hidden">
            {/* Background Image Container - Fixed for Desktop, Absolute for Mobile */}
            <div className="absolute lg:fixed inset-0 z-0 pointer-events-none bg-black">
                {/* Mobile Portrait Image */}
                <motion.img
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src={profileImg}
                    alt="S. Jothiswaran Portrait"
                    className="w-full h-full object-cover object-center lg:hidden"
                />
                {/* Desktop Landscape Image */}
                <motion.img
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src={landscapeImg}
                    alt="S. Jothiswaran Landscape"
                    className="hidden lg:block w-full h-full object-cover object-center"
                />
                {/* Balanced Gradients for clarity and readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent hidden lg:block"></div>
            </div>

            {/* Hero Content - This will scroll over the fixed background */}
            <div className="relative z-10 pt-[50vh] pb-24 px-8 text-white min-h-screen flex flex-col justify-end drop-shadow-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false }}
                >
                    <h1 className="text-5xl font-bold mb-2 tracking-tight text-white drop-shadow-lg">
                        S. Jothiswaran
                    </h1>
                    <p className="text-xl text-slate-100 italic mb-6 drop-shadow-md">
                        “I will always believe in myself”
                    </p>

                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Paramakudi, India
                    </div>
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;
