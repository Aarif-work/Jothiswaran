import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Layout, Smartphone } from 'lucide-react';

const services = [
    {
        title: "Software Development",
        desc: "Building robust desktop and command-line applications using C++ and Java.",
        icon: Terminal,
        color: "bg-blue-500"
    },
    {
        title: "Web Development",
        desc: "Creating responsive, modern websites using HTML, Tailwind CSS, and React.",
        icon: Code,
        color: "bg-primary-500"
    },
    {
        title: "UI Design",
        desc: "Structuring clean, student-centric interfaces with a focus on usability.",
        icon: Layout,
        color: "bg-indigo-500"
    },
    {
        title: "Mobile Optimization",
        desc: "Ensuring web experiences are fast and accessible on all smartphone devices.",
        icon: Smartphone,
        color: "bg-violet-500"
    }
];

const Services = () => {
    return (
        <section className="section-padding bg-white relative overflow-hidden">
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">What I Offer</h2>
                <p className="text-slate-500">Skills translated into services</p>
                <div className="w-16 h-1.5 bg-primary-500 rounded-full mt-4"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 transition-all duration-300 group"
                    >
                        <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform`}>
                            <service.icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            {service.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
