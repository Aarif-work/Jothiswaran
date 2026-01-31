import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { name: 'C++', level: 'Advanced', color: 'bg-blue-500' },
    { name: 'Java', level: 'Intermediate', color: 'bg-red-500' },
    { name: 'HTML', level: 'Expert', color: 'bg-orange-500' },
    { name: 'Tailwind CSS', level: 'Advanced', color: 'bg-sky-400' },
    { name: 'React', level: 'Beginner', color: 'bg-cyan-400' },
];

const Skills = () => {
    return (
        <section className="section-padding bg-white">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Technical Skills</h2>
                <div className="w-16 h-1.5 bg-black rounded-full"></div>
            </div>

            <div className="flex flex-wrap gap-4">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center bg-slate-50 border border-slate-100 p-4 rounded-2xl w-[100px] flex-grow text-center shadow-sm"
                    >
                        <div className={`w-3 h-3 rounded-full ${skill.color} mb-3 shadow-[0_0_10px_${skill.color}]`}></div>
                        <span className="font-bold text-slate-800">{skill.name}</span>
                        <span className="text-xs text-slate-400 mt-1 uppercase tracking-tighter">{skill.level}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
