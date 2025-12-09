import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

// Filter only single products for the grid (exclude bundles if desired, or include them)
const shopProducts = products.filter(p => !p.isBundle);

// Utility function to shuffle array
const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

const ProductGridSection: React.FC = () => {
    const [shuffledProducts, setShuffledProducts] = useState<typeof shopProducts>([]);
    const [showAll, setShowAll] = useState(false);

    // Shuffle products on mount
    useEffect(() => {
        setShuffledProducts(shuffleArray(shopProducts));
    }, []);

    const displayedProducts = showAll ? shuffledProducts : shuffledProducts.slice(0, 3);

    return (
        <section className="w-full bg-[#f5ebe0] px-6 md:px-12 py-20">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
                    {displayedProducts.map((product) => (
                        <Link to={`/product/${product.id}`} key={product.id} className="flex flex-col group cursor-pointer">
                            {/* Card */}
                            <div className="relative aspect-[4/5] bg-[#e6ded5] rounded-[2.5rem] overflow-hidden mb-8 transition-transform duration-500 ease-out group-hover:-translate-y-2 shadow-sm hover:shadow-md">
                                {/* Image filling the container */}
                                <div className="absolute inset-0">
                                    <img
                                        src={product.image}
                                        alt={product.fullName}
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                {/* Oval Badge */}
                                <div className="absolute top-6 left-6 z-10 w-fit">
                                    <div className="border border-graza-darkGreen rounded-[100%] px-5 py-2 w-fit backdrop-blur-sm bg-white/10">
                                        <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-graza-darkGreen whitespace-nowrap block">
                                            {product.badge}
                                        </span>
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="absolute top-7 right-8 z-10">
                                    <span className="font-mono text-lg text-graza-darkGreen tracking-wide">
                                        ${product.price}
                                    </span>
                                </div>
                            </div>

                            {/* Typography */}
                            <div className="text-center flex flex-col items-center gap-1">
                                <h3 className="font-logo text-4xl md:text-[2.5rem] leading-[1.1] text-graza-darkGreen text-center tracking-normal">
                                    <span className="block mb-1">{product.name}</span>
                                    <span className="block underline decoration-1 underline-offset-4 decoration-graza-darkGreen/30 font-serif italic text-3xl md:text-4xl">
                                        {product.fullName}
                                    </span>
                                </h3>
                                <p className="font-mono text-base text-graza-darkGreen/80 mt-4 max-w-[280px] leading-relaxed">
                                    {product.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Show More Button */}
                {!showAll && shuffledProducts.length > 3 && (
                    <div className="flex justify-center">
                        <button
                            onClick={() => setShowAll(true)}
                            className="group flex items-center gap-3 px-8 py-4 bg-graza-darkGreen text-graza-lime rounded-full font-mono font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:bg-graza-lime hover:text-graza-darkGreen hover:scale-105 border-2 border-graza-darkGreen shadow-lg"
                        >
                            SHOW MORE
                            <ChevronDown size={20} className="transition-transform duration-300 group-hover:translate-y-1" />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductGridSection;
