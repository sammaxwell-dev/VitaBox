import React, { useState, useEffect } from 'react';
import SpinningStar from './SpinningStar';

// Product data for the showcase slider
const products = [
    {
        badge: "CUTE & PRE-WRAPPED",
        title: '"Glass Duo"\nGift Set',
        description: "Sizzle & Drizzle in one super cute box!",
        cta: "SHOP GIFT SET",
        image: "/assets/showcase_giftset_vitabox_1765228945039.png",
        bgColor: "#a8e6a1" // acid green
    },
    {
        badge: "BACK IN STOCK",
        title: "The Chips",
        description: "Perfectly salty, extra crispy, and slow fried in EVOO.",
        cta: "GET THE CHIPS",
        image: "/assets/showcase_chips_vitabox_1765228961322.png",
        bgColor: "#f2c94c" // yellow
    },
    {
        badge: "NEW ARRIVAL",
        title: "The Oil",
        description: "Premium extra virgin olive oil for everyday cooking.",
        cta: "GET THE OIL",
        image: "/assets/showcase_oil_vitabox_1765228974717.png",
        bgColor: "#7cb342" // green
    },
    {
        badge: "BESTSELLER",
        title: "The Set",
        description: "Everything you need for the perfect kitchen setup.",
        cta: "GET THE SET",
        image: "/assets/drizzle_vitabox_1765228886215.png",
        bgColor: "#cedf37" // lime
    }
];

const ProductShowcase: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % products.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    };

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % products.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const product = products[currentIndex];

    return (
        <section className="w-full bg-[#f5ebe0]">
            {/* Top announcement bar */}
            <div className="flex items-center justify-center gap-4 py-5 border-b border-dashed border-[#b5a899]">
                <SpinningStar className="text-[#6b6b6b] text-xl" />
                <p className="font-mono text-sm tracking-wider text-[#5c5c5c]">
                    Now Serving Olives from: Alentejo, Portugal
                </p>
                <span className="text-[#5c5c5c] mx-2">⁞</span>
                <p className="font-mono text-sm tracking-wider text-[#5c5c5c]">
                    Harvesting Season: October - January
                </p>
                <SpinningStar className="text-[#6b6b6b] text-xl" />
            </div>

            {/* Main content */}
            <div
                className="min-h-[650px] flex items-center transition-colors duration-700"
                style={{ backgroundColor: product.bgColor }}
            >
                <div className="max-w-[1200px] mx-auto w-full px-6 md:px-16 py-16 flex flex-col md:flex-row items-center gap-16">

                    {/* Left side - Text content */}
                    <div className="flex-1 flex flex-col items-start gap-5">
                        {/* Badge */}
                        <div className="flex items-center gap-3">
                            <SpinningStar className="text-graza-darkGreen text-lg" />
                            <span className="font-mono text-sm tracking-[0.2em] text-graza-darkGreen uppercase">{product.badge}</span>
                            <SpinningStar className="text-graza-darkGreen text-lg" />
                        </div>

                        {/* Title */}
                        <h2 className="font-logo text-graza-darkGreen text-5xl md:text-7xl font-normal italic leading-[1.1] whitespace-pre-line">
                            {product.title}
                        </h2>

                        {/* Description */}
                        <p className="font-mono text-graza-darkGreen/80 text-base max-w-md leading-relaxed">
                            {product.description}
                        </p>

                        {/* CTA Button */}
                        <button className="mt-4 px-10 py-4 border-2 border-graza-darkGreen rounded-full font-mono text-sm tracking-[0.15em] text-graza-darkGreen bg-transparent hover:bg-graza-darkGreen hover:text-white transition-colors uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
                            {product.cta}
                        </button>

                        {/* Navigation arrows */}
                        <div className="flex items-center mt-8">
                            <button
                                onClick={prevSlide}
                                className="w-16 h-12 border-2 border-graza-darkGreen rounded-l-full flex items-center justify-center hover:bg-graza-darkGreen hover:text-white transition-colors text-graza-darkGreen"
                            >
                                <span className="text-lg">←</span>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-16 h-12 border-2 border-l-0 border-graza-darkGreen rounded-r-full flex items-center justify-center hover:bg-graza-darkGreen hover:text-white transition-colors text-graza-darkGreen"
                            >
                                <span className="text-lg">→</span>
                            </button>
                        </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="flex-1 flex justify-center md:justify-end">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full max-w-[550px] h-[500px] md:h-[580px] object-cover rounded-2xl shadow-2xl border-4 border-white/20"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
