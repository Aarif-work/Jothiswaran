import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
    return (
        <section className="section-padding bg-slate-50 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">
                <div className="mb-10 lg:mb-16 text-center">
                    <h2 className="text-3xl font-black text-slate-900 mb-2 leading-tight">My Education</h2>
                    <div className="w-12 h-1.5 bg-black rounded-full mx-auto"></div>
                </div>

                <div className="space-y-8 relative">
                    {/* Modern Vertical Line */}
                    <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-black via-slate-200 to-transparent lg:left-[23px]"></div>

                    {/* Education Item */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative pl-12 lg:pl-16 group"
                    >
                        {/* Icon Circle */}
                        <div className="absolute left-0 top-0 w-10 h-10 rounded-2xl bg-white border-2 border-black flex items-center justify-center text-black shadow-lg shadow-black/5 group-hover:bg-black group-hover:text-white transition-all duration-300 lg:w-12 lg:h-12">
                            <GraduationCap className="w-5 h-5 lg:w-6 lg:h-6" />
                        </div>

                        <div className="glass-card p-6 rounded-[2rem] border-white shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary-500/10 transition-all">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <span className="px-3 py-1 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                                    Currently Pursuing
                                </span>
                                <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                                    <Calendar size={12} />
                                    2023 - 2026
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-1">BSc Student</h3>
                            <div className="flex items-center gap-1.5 text-slate-600 font-semibold text-sm mb-4">
                                <MapPin size={14} />
                                NSAC College, Koviloor
                            </div>

                            <div className="p-4 bg-slate-50/80 rounded-2xl border border-slate-100 italic text-slate-600 text-sm leading-relaxed">
                                "Focusing on core programming concepts, software development lifecycles, and logic building."
                            </div>
                        </div>
                    </motion.div>

                    {/* Academic Achievement / Secondary Item could go here */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="relative pl-12 lg:pl-16 group"
                    >
                        <div className="absolute left-1.5 top-0 w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 border-2 border-white shadow-sm lg:left-2.5">
                            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                        </div>

                        <div className="pt-1">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-loose">
                                Higher Secondary Education
                            </p>
                            <p className="text-slate-500 text-sm">Completed schooling with focus on Science & Math.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
