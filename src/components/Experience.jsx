import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const experiences = [
    {
        type: "Program",
        title: "Oracle Naan Mudhalvan Initiative",
        org: "Academic Training",
        period: "2024",
        desc: "Intensive training program focused on software development and industry readiness.",
        icon: Award
    },
    {
        type: "Education",
        title: "BSc Student",
        org: "NSAC College",
        period: "2023 - Present",
        desc: "Currently pursuing a Bachelor of Science degree, maintaining a focus on core programming concepts.",
        icon: GraduationCap
    },
    {
        type: "Leadership",
        title: "Class Representative",
        org: "NSAC College",
        period: "2024 - Present",
        desc: "Serving as a student leader to coordinate between faculty and peers.",
        icon: Briefcase
    }
];

const Experience = () => {
    return (
        <section className="section-padding bg-slate-50">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Experience & Leadership</h2>
                <div className="w-16 h-1.5 bg-primary-500 rounded-full mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary-50 rounded-bl-[4rem] flex items-start justify-end p-6 transition-colors group-hover:bg-primary-500">
                            <exp.icon className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors" />
                        </div>

                        <div className="mt-4">
                            <span className="text-[10px] font-black uppercase tracking-widest text-primary-500 mb-2 block">{exp.type}</span>
                            <h3 className="text-xl font-bold text-slate-800 leading-tight mb-1">{exp.title}</h3>
                            <p className="text-primary-600 font-semibold text-sm mb-4">{exp.org}</p>
                            <p className="text-slate-500 text-sm italic mb-4">{exp.period}</p>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {exp.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
