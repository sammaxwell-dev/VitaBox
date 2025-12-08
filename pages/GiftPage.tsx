import React from 'react';
import PillButton from '../components/PillButton';
import SpinningStar from '../components/SpinningStar';

const GiftPage: React.FC = () => {
    return (
        <div className="min-h-screen w-full bg-[#fdd835] text-graza-darkGreen">
            {/* Festive Header */}
            <div className="pt-32 pb-16 px-6 text-center overflow-hidden">
                <div className="inline-flex items-center gap-4 mb-6 animate-bounce">
                    <SpinningStar className="text-2xl" />
                    <span className="font-mono uppercase tracking-[0.3em] font-bold">Gift Shop Open</span>
                    <SpinningStar className="text-2xl" />
                </div>
                <h1 className="font-logo text-[12vw] leading-[0.8] tracking-tighter mix-blend-multiply">
                    GIVE THE<br />GOOD STUFF
                </h1>
            </div>

            {/* Hero Image Section */}
            <div className="w-full h-[60vh] relative overflow-hidden">
                <img src="/assets/shop_dinner_party.png" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover opacity-90" alt="Gift header" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#fdd835] to-transparent"></div>
            </div>

            {/* Product Focus */}
            <div className="max-w-4xl mx-auto px-6 -mt-32 relative z-10 pb-32">
                <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-[20px_20px_0px_0px_rgba(45,62,45,0.1)] border-4 border-graza-darkGreen">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <img src="/assets/shop_dinner_party.png" alt="Dinner Party" className="w-full md:w-1/2 rounded-2xl rotate-3 border border-graza-darkGreen/20" />
                        <div className="flex flex-col gap-6">
                            <h2 className="font-logo text-5xl">The "Dinner Party" Pack</h2>
                            <p className="font-mono text-lg opacity-80">
                                Everything needed to host the perfect evening. Chips, oils, and vibes included.
                            </p>
                            <ul className="font-mono text-sm space-y-2 list-disc list-inside opacity-75">
                                <li>1x Sizzle (750ml)</li>
                                <li>1x Drizzle (500ml)</li>
                                <li>1x Bag of Chips</li>
                                <li>1x Party Guide</li>
                            </ul>
                            <div className="flex items-center justify-between mt-4">
                                <span className="font-logo text-3xl">$65</span>
                                <PillButton>Gift This</PillButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GiftPage;
