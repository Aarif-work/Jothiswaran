import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!publicKey || publicKey === 'YOUR_PUBLIC_KEY') {
            setStatus({ type: 'error', message: 'EmailJS keys are missing in .env file.' });
            return;
        }

        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        // Initialize with Public Key
        emailjs.init(publicKey);

        const formData = new FormData(formRef.current);
        const name = formData.get('user_name');
        const email = formData.get('user_email');
        const message = formData.get('message');

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams)
            .then(() => {
                setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
                formRef.current.reset();
            })
            .catch((error) => {
                console.error('EmailJS Error:', error);
                setStatus({ type: 'error', message: 'Something went wrong. Please check your EmailJS settings.' });
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

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
                                        <p className="text-lg font-bold text-slate-700">jothiswaran1607@gmail.com</p>
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

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border-white"
                    >
                        <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        required
                                        placeholder="John Doe"
                                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all text-slate-800"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Email</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        required
                                        placeholder="john@example.com"
                                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all text-slate-800"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    placeholder="How can I help you?"
                                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all text-slate-800 resize-none"
                                ></textarea>
                            </div>

                            {status.message && (
                                <div className={`p-4 rounded-2xl flex items-center gap-3 text-sm font-bold ${status.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-rose-50 text-rose-700 border border-rose-100'}`}>
                                    {status.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                                    {status.message}
                                </div>
                            )}

                            <button
                                disabled={isSubmitting}
                                className={`w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-black transition-all hover:shadow-xl hover:shadow-black/20 active:scale-[0.98] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
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
