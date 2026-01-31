import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, CheckCircle2, Star } from 'lucide-react';

const projects = [
    {
        title: "Attendance Management",
        subtitle: "Oracle Naan Mudhalvan Initiative",
        desc: "A professional solution built to streamline employee tracking for corporate environments. Managed large datasets with structured logic.",
        role: "Student Contributor",
        roleDesc: "Developed core program logic and interface components using modern practices.",
        tags: ["HTML", "Java", "C++"],
        color: "from-blue-600 to-indigo-700",
        features: ["Employee attendance entry", "Date-wise record tracking", "Cloud-ready storage logic", "Admin control panel"]
    }
];

const Projects = () => {
    return (
        <section className="section-padding bg-white relative overflow-hidden">
            {/* Decorative background circle */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-50"></div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12 relative z-10 text-center">
                    <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-3 tracking-tight">Featured Projects</h2>
                    <p className="text-slate-500 font-medium text-lg">Demonstrating technical excellence through real-world applications.</p>
                    <div className="w-16 h-2 bg-gradient-to-r from-slate-900 to-black rounded-full mt-6 mx-auto"></div>
                </div>

                <div className="flex flex-wrap justify-center gap-10 relative z-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-[#F8FAFC] rounded-[3rem] overflow-hidden border border-slate-100 shadow-2xl shadow-slate-200/60 w-full lg:max-w-5xl"
                        >
                            {/* Header Accent */}
                            <div className={`h-3 w-full bg-gradient-to-r ${project.color}`}></div>

                            <div className="p-8 lg:p-10">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-slate-900 group-hover:scale-110 transition-transform duration-500">
                                        <Code2 className="w-7 h-7" />
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="px-4 py-1.5 bg-white text-slate-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-slate-100 shadow-sm flex items-center gap-1">
                                            <Star size={10} className="fill-amber-400 text-amber-400" />
                                            Major Project
                                        </span>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-black text-slate-800 mb-1 leading-tight">{project.title}</h3>
                                <p className="text-sm font-bold text-slate-500 mb-6 uppercase tracking-wider">{project.subtitle}</p>

                                <p className="text-slate-600 text-sm leading-relaxed mb-8 font-medium">
                                    {project.desc}
                                </p>

                                {/* Mobile-Friendly Features Grid */}
                                <div className="mb-8">
                                    <p className="text-[10px] font-black uppercase text-slate-400 mb-4 tracking-[0.2em]">Core Functionalities</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {project.features.map(f => (
                                            <div key={f} className="flex items-center gap-2 p-3 bg-white rounded-2xl border border-slate-50 shadow-sm">
                                                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                                                <span className="text-xs font-bold text-slate-700">{f}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Role Section */}
                                <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2rem] text-white mb-8 shadow-xl shadow-slate-900/10">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center text-[10px] font-bold">ME</div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{project.role}</span>
                                    </div>
                                    <p className="text-xs text-slate-300 leading-relaxed italic">"{project.roleDesc}"</p>
                                </div>

                                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                                    <div className="flex gap-3">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-[10px] font-black text-slate-400 bg-slate-100 px-3 py-1.5 rounded-full uppercase tracking-widest">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-4">
                                        <button className="p-3 bg-white text-slate-400 hover:text-primary-500 rounded-xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
                                            <Github size={20} />
                                        </button>
                                        <button className="p-3 bg-slate-900 text-white rounded-xl shadow-lg shadow-slate-900/20 transition-all hover:scale-105">
                                            <ExternalLink size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
