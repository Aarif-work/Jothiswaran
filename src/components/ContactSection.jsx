import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactSection = () => {
    return (
        <section id="contact" className="section-padding bg-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Let's Connect</h2>
                    <p className="text-slate-500 max-w-lg mx-auto">
                        Whether you have a question or just want to say hi, my inbox is always open!
                    </p>
                    <div className="w-20 h-2 bg-black rounded-full mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="glass-card p-8 rounded-[2rem] shadow-xl shadow-slate-200/50">
                            <h3 className="text-2xl font-bold text-slate-800 mb-8">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest text-slate-400">Email Me</p>
                                        <p className="text-lg font-bold text-slate-700">jothiswaran@email.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest text-slate-400">Location</p>
                                        <p className="text-lg font-bold text-slate-700">Paramakudi, Tamil Nadu</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest text-slate-400">Call/WhatsApp</p>
                                        <p className="text-lg font-bold text-slate-700">+91 00000 00000</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900 p-8 rounded-[2rem] text-white overflow-hidden relative">
                            <div className="relative z-10">
                                <h4 className="text-xl font-bold mb-2">Available for freelance</h4>
                                <p className="text-slate-400 text-sm">Open for tutoring and web development projects.</p>
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
                        </div>
                    </motion.div>

                    {/* Contact Form (Visual) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border-white"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                                    <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all text-slate-800" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Email</label>
                                    <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all text-slate-800" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Message</label>
                                <textarea rows="4" placeholder="How can I help you?" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all text-slate-800 resize-none"></textarea>
                            </div>
                            <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-black transition-all hover:shadow-xl hover:shadow-black/20 active:scale-[0.98]">
                                Send Message
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
