import React from 'react';

// Product Grid Section Data
const shopProducts = [
    {
        id: 'drizzle',
        name: '"Drizzle"',
        fullName: 'Extra Virgin Olive Oil',
        price: 21,
        badge: 'FINISHING OIL',
        description: 'Made for eating, never heating.',
        image: '/assets/drizzle_vitabox_1765228886215.png',
        accentColor: '#FFFFFF'
    },
    {
        id: 'sizzle',
        name: '"Sizzle"',
        fullName: 'Extra Virgin Olive Oil',
        price: 16,
        badge: 'COOKING OIL',
        description: 'Use it every day, in every way.',
        image: '/assets/sizzle_vitabox_1765228905529.png',
        accentColor: '#FFFFFF'
    },
    {
        id: 'frizzle',
        name: '"Frizzle"',
        fullName: 'High Heat Cooking Oil',
        price: 14,
        badge: 'HIGH HEAT COOKING OIL',
        description: 'Your new high heat kitchen hero.',
        image: '/assets/frizzle_vitabox_1765228919925.png',
        accentColor: '#FFFFFF'
    }
];

const ProductGridSection: React.FC = () => {
    return (
        <section className="w-full bg-[#f5ebe0] px-6 md:px-12 py-20">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {shopProducts.map((product) => (
                    <div key={product.id} className="flex flex-col group cursor-pointer">
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
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductGridSection;
