import React, { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import PillButton from './PillButton';

const NewsletterSection: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Subscribed:', email);
        alert('Thanks for joining the club!');
        setEmail('');
    };

    return (
        <section className="w-full relative py-24 px-6 bg-graza-darkGreen text-graza-lime overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
                </svg>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
                <div className="space-y-4">
                    <h2 className="font-logo text-5xl md:text-7xl italic text-[#f8f8f8]">
                        Join the VitaBox Club
                    </h2>
                    <p className="font-mono text-xl text-graza-lime/90 max-w-xl mx-auto">
                        Get 10% off your first order, plus exclusive access to new drops and recipes.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
                    <div className="relative flex-grow">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-graza-darkGreen" size={20} />
                        <input
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full h-14 pl-12 pr-4 bg-[#f8f8f8] text-graza-darkGreen placeholder-graza-darkGreen/50 font-mono rounded-full focus:outline-none focus:ring-4 focus:ring-graza-lime/50 transition-all"
                            required
                        />
                    </div>
                    <PillButton
                        type="submit"
                        className="h-14 px-8 bg-graza-lime text-graza-darkGreen hover:bg-white hover:scale-105 font-bold tracking-widest text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] whitespace-nowrap"
                    >
                        SUBSCRIBE <ArrowRight size={20} className="ml-2" />
                    </PillButton>
                </form>

                <p className="text-xs font-sans text-white/50 mt-8">
                    By subscribing you agree to our Terms & Privacy Policy. No spam, ever.
                </p>
            </div>
        </section>
    );
};

export default NewsletterSection;
