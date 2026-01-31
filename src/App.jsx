import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Interests from './components/Interests';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import ContactSection from './components/ContactSection';
import Navbar from './components/Navbar';

function App() {
    useEffect(() => {
        // Add smooth scroll behavior
        document.documentElement.style.scrollBehavior = 'smooth';
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-slate-200 overflow-x-hidden">
            <Navbar />

            {/* Background Decorative Elements - Removed to keep it clean/black */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-slate-200/5 blur-[150px] rounded-full"></div>
            </div>

            <main className="relative z-0 w-full max-w-7xl mx-auto lg:shadow-2xl">
                <Hero />

                <div className="relative z-10 max-w-6xl mx-auto bg-white">
                    <div id="about" className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 items-stretch">
                        <About />
                        <Skills />
                    </div>

                    <div id="experience">
                        <Experience />
                    </div>

                    <div id="projects" className="bg-white">
                        <Projects />
                    </div>

                    <div id="education" className="bg-slate-50">
                        <Education />
                    </div>

                    <div id="services">
                        <Services />
                    </div>
                </div>

                <div className="relative z-10 bg-white">
                    <div id="interests">
                        <Interests />
                    </div>
                    <ContactSection />
                </div>

                {/* Minimal Bottom Space */}
                <div className="py-12 bg-white flex justify-center border-t border-slate-50">
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">&copy; 2026 S. Jothiswaran</p>
                </div>
            </main>
        </div>
    );
}

export default App;
