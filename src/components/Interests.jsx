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
        <section className="section-padding bg-slate-900 text-white rounded-t-[2.5rem] -mt-8 relative z-20 pb-20">
            <div className="mb-10 text-center pt-10">
                <h2 className="text-3xl font-bold mb-2">Sports & Interests</h2>
                <p className="text-slate-400">What keeps me energized outside study</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto px-6">
                {interests.map((item, index) => (
                    <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-5 bg-white/5 border border-white/10 p-5 rounded-2xl min-w-[300px] max-w-md w-full hover:bg-white/10 transition-colors"
                    >
                        <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-white group-hover:text-black transition-all duration-300">
                            <item.icon className="w-7 h-7" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold leading-tight mb-1">{item.label}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Interests;
