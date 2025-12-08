import React from 'react';
import { useParams } from 'react-router-dom';
import PillButton from '../components/PillButton';
import SpinningStar from '../components/SpinningStar';

const SingleProductPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    // Mock data based on ID
    const isSizzle = id === 'sizzle';
    const product = {
        name: isSizzle ? 'Sizzle' : 'Drizzle',
        fullName: 'Extra Virgin Olive Oil',
        description: isSizzle
            ? 'Harvested from 100% Picual olives in Jaén, Spain. It has a high smoke point and peppery finish.'
            : 'Harvested from 100% Picual olives. It’s punchy, bold, and perfect for finishing dishes.',
        price: isSizzle ? 16 : 21,
        bgColor: isSizzle ? '#dbe655' : '#7cb342', // Lime / Green
        textColor: isSizzle ? 'text-graza-darkGreen' : 'text-white',
        image: isSizzle ? '/assets/sizzle_vitabox_1765228905529.png' : '/assets/drizzle_vitabox_1765228886215.png'
    };

    return (
        <div className={`min-h-screen w-full pt-32 pb-20 px-6 ${isSizzle ? 'bg-[#f5ebe0]' : 'bg-[#e8f5e9]'}`}>
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left: Image */}
                <div className="relative">
                    <div className={`absolute top-10 left-10 w-full h-[500px] rounded-[3rem] -z-10 transform translate-x-4 translate-y-4`}
                        style={{ backgroundColor: product.bgColor }}></div>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full max-w-[500px] mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Right: Info */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-2">
                        <SpinningStar className="text-graza-darkGreen" />
                        <span className="font-mono uppercase tracking-widest text-sm text-graza-darkGreen">
                            Single Origin
                        </span>
                        <SpinningStar className="text-graza-darkGreen" />
                    </div>

                    <h1 className="font-logo text-7xl md:text-8xl text-graza-darkGreen leading-[0.9]">
                        "{product.name}"
                    </h1>
                    <h2 className="font-serif italic text-3xl md:text-4xl text-graza-darkGreen/80">
                        {product.fullName}
                    </h2>

                    <p className="font-mono text-lg leading-relaxed text-graza-darkGreen max-w-md">
                        {product.description}
                    </p>

                    <div className="flex items-center gap-6 mt-8">
                        <span className="font-mono text-3xl text-graza-darkGreen">
                            ${product.price}
                        </span>
                        <PillButton className="bg-graza-darkGreen text-white hover:bg-graza-darkGreen/90 px-10 py-4 text-base">
                            Add to Cart
                        </PillButton>
                    </div>

                    <div className="mt-12 p-6 border border-graza-darkGreen/20 rounded-2xl bg-white/50">
                        <h3 className="font-bold text-graza-darkGreen uppercase tracking-wide mb-2">Taste Profile</h3>
                        <div className="flex gap-2 flex-wrap">
                            {['Grass', 'Pepper', 'Tomato Leaf', 'Almond'].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-graza-lime/30 text-graza-darkGreen rounded-full text-xs font-mono uppercase">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProductPage;
