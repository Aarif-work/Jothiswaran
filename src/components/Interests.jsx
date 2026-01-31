import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Dumbbell } from 'lucide-react';

const interests = [
    {
        icon: Trophy,
        label: 'Cricket & Sports',
        desc: 'Passionate cricket player; regularly playing sports and outdoor games.'
    },
    {
        icon: Dumbbell,
        label: 'Team Sports & Fitness',
        desc: 'Strong interest in team sports and maintaining personal fitness.'
    },
];

const Interests = () => {
    return (
        <section className="section-padding bg-slate-900 text-white rounded-t-[3rem] -mt-10 relative z-20 pb-32">
            <div className="mb-10 text-center pt-8">
                <h2 className="text-3xl font-bold mb-2">Sports & Interests</h2>
                <p className="text-slate-400">What keeps me energized outside study</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
                {interests.map((item, index) => (
                    <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-6 bg-white/5 border border-white/10 p-5 rounded-3xl"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 shadow-lg group-hover:bg-white group-hover:text-black transition-all duration-300">
                            <item.icon className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">{item.label}</h3>
                            <p className="text-slate-400 text-sm">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Interests;
