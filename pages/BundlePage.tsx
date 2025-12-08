import React from 'react';
import { useParams } from 'react-router-dom';
import PillButton from '../components/PillButton';
import SpinningStar from '../components/SpinningStar';

const BundlePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    // If duplicate pages issue: "Duo" and "Trio" linking to the same generic page. 
    // We will handle them as distinct detail views if an ID is present.

    if (id === 'duo' || id === 'trio' || id === 'starter') {
        const isDuo = id === 'duo';
        const isStarter = id === 'starter'; // Basic handling if starter is needed down the line

        // Determine content based on ID
        let product = {
            name: '"The Duo"',
            description: 'The perfect pair. Sizzle for cooking, Drizzle for finishing. The only two olive oils you need.',
            price: 35,
            image: '/assets/shop_duo_set.png',
            bgColor: '#a8e6a1', // light green
            textColor: 'text-graza-darkGreen'
        };

        if (!isDuo && !isStarter) {
            // Trio
            product = {
                name: '"The Trio"',
                description: 'The complete kitchen collection. Sizzle, Drizzle, and our special zesty lemon infusion.',
                price: 50,
                image: '/assets/shop_trio_set.png',
                bgColor: '#f2c94c', // yellow
                textColor: 'text-graza-darkGreen'
            };
        } else if (isStarter) {
            product = {
                name: '"The Starter Kit"',
                description: 'Everything you need to get cooking. Sizzle, Drizzle, and a spout meant for friends.',
                price: 40,
                image: '/assets/shop_duo_set.png', // Fallback image
                bgColor: '#e6e6e6',
                textColor: 'text-graza-darkGreen'
            };
        }

        return (
            <div className={`min-h-screen w-full pt-32 pb-20 px-6 trantision-colors duration-500`} style={{ backgroundColor: product.bgColor }}>
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left: Image */}
                    <div className="relative">
                        <div className="absolute top-10 left-10 w-full h-[500px] rounded-[3rem] -z-10 bg-white/20 transform translate-x-4 translate-y-4"></div>
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full max-w-[500px] mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Right: Info */}
                    <div className={`flex flex-col gap-6 ${product.textColor}`}>
                        <div className="flex items-center gap-2">
                            <SpinningStar className="text-current" />
                            <span className="font-mono uppercase tracking-widest text-sm">
                                Most Popular
                            </span>
                            <SpinningStar className="text-current" />
                        </div>

                        <h1 className="font-logo text-7xl md:text-8xl leading-[0.9]">
                            {product.name}
                        </h1>

                        <p className="font-mono text-lg leading-relaxed max-w-md">
                            {product.description}
                        </p>

                        <div className="flex items-center gap-6 mt-8">
                            <span className="font-mono text-3xl">
                                ${product.price}
                            </span>
                            <PillButton className="bg-graza-darkGreen text-white hover:bg-graza-darkGreen/90 px-10 py-4 text-base">
                                Add to Cart
                            </PillButton>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Default List View (for /bundles)
    return (
        <div className="min-h-screen w-full pt-32 pb-20 px-6 bg-[#dbe655]">
            <div className="max-w-[1200px] mx-auto text-center">
                <h1 className="font-logo text-6xl md:text-8xl text-graza-darkGreen mb-4">
                    The Bundles
                </h1>
                <p className="font-mono text-xl text-graza-darkGreen max-w-2xl mx-auto mb-16">
                    More oil, less money. Simple math for better cooking.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Bundle Card 1 */}
                    <div className="bg-[#f5ebe0] rounded-[3rem] p-8 flex flex-col items-center hover:-translate-y-2 transition-transform duration-300">
                        <img src="/assets/shop_duo_set.png" alt="Duo" className="w-full h-auto mb-6 drop-shadow-xl" />
                        <h3 className="font-logo text-4xl text-graza-darkGreen mb-2">The Duo</h3>
                        <p className="font-mono text-sm text-graza-darkGreen/70 mb-6">Sizzle + Drizzle</p>
                        <PillButton className="w-full justify-center">Add - $35</PillButton>
                    </div>

                    {/* Bundle Card 2 - FIXING OVERLAP: Removed overflow hidden if present, adjusted z-index */}
                    <div className="bg-[#f5ebe0] rounded-[3rem] p-8 flex flex-col items-center hover:-translate-y-2 transition-transform duration-300 transform scale-105 border-4 border-graza-darkGreen relative z-10">
                        <div className="absolute top-4 right-4 z-20 bg-graza-darkGreen text-white px-3 py-1 rounded-full text-xs font-mono uppercase shadow-md">Best Value</div>
                        <div className="relative z-10 mb-6 w-full">
                            <img src="/assets/shop_trio_set.png" alt="Trio" className="w-full h-auto drop-shadow-xl" />
                        </div>
                        <h3 className="font-logo text-4xl text-graza-darkGreen mb-2">The Trio</h3>
                        <p className="font-mono text-sm text-graza-darkGreen/70 mb-6">Complete collection</p>
                        <PillButton className="w-full justify-center">Add - $50</PillButton>
                    </div>

                    {/* Bundle Card 3 */}
                    <div className="bg-[#f5ebe0] rounded-[3rem] p-8 flex flex-col items-center hover:-translate-y-2 transition-transform duration-300">
                        <img src="/assets/sizzle_vitabox_1765228905529.png" alt="Refill" className="w-full h-auto mb-6 drop-shadow-xl" />
                        <h3 className="font-logo text-4xl text-graza-darkGreen mb-2">The Refill</h3>
                        <p className="font-mono text-sm text-graza-darkGreen/70 mb-6">Keep it flowing</p>
                        <PillButton className="w-full justify-center">Add - $28</PillButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BundlePage;
