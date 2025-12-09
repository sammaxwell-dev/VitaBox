import React from 'react';

const MarqueeSection: React.FC = () => {
    const items = [
        "FREE SHIPPING $50+",
        "VEGAN",
        "CRUELTY FREE",
        "100% ORGANIC",
        "NON-GMO",
        "SUSTAINABLY SOURCED",
        "PLASTIC FREE"
    ];

    return (
        <section className="w-full bg-graza-darkGreen text-graza-lime py-3 overflow-hidden border-y-2 border-graza-lime relative">
            {/* Diagonal Stripe Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="w-full h-full" style={{
                    backgroundImage: `repeating-linear-gradient(
                        45deg,
                        transparent,
                        transparent 10px,
                        rgba(206, 223, 55, 0.3) 10px,
                        rgba(206, 223, 55, 0.3) 20px
                    )`
                }} />
            </div>

            <div className="flex whitespace-nowrap overflow-hidden relative z-10">
                {[...Array(3)].map((_, i) => (
                    <div
                        key={i}
                        className="flex animate-marquee min-w-full shrink-0 items-center justify-around"
                    >
                        {items.map((item, index) => (
                            <React.Fragment key={index}>
                                <span className="font-mono font-bold text-sm md:text-base tracking-[0.3em] mx-6 uppercase">
                                    {item}
                                </span>
                                <span className="text-sm opacity-60">★</span>
                            </React.Fragment>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MarqueeSection;
