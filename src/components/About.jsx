import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="section-padding bg-slate-50 relative z-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-3xl shadow-xl shadow-slate-200"
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary-100 flex items-center justify-center text-primary-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">About Me</h2>
                </div>

                <p className="text-slate-600 leading-relaxed text-lg">
                    I am a passionate <span className="font-semibold text-primary-600">BSc Student</span> currently pursuing my degree
                    at <span className="font-semibold text-slate-800">NSAC College, Koviloor</span>.
                    As someone who believes in the power of persistence, I thrive on learning new technologies
                    and building solutions that make an impact. My journey is driven by the philosophy:
                    <span className="italic block mt-2 text-primary-500 font-medium text-center">"I will always believe in myself"</span>
                </p>
            </motion.div>
        </section>
    );
};

export default About;
