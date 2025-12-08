import React from 'react';
import { X } from 'lucide-react';
import PillButton from '../components/PillButton';
import ProductShowcase from '../components/ProductShowcase';
import ProductGridSection from '../components/ProductGridSection';

const LandingPage: React.FC = () => {
    const [isDiscountVisible, setIsDiscountVisible] = React.useState(true);

    return (
        <div className="w-full">
            {/* Hero Section */}
            <div
                className="relative min-h-screen w-full font-sans selection:bg-graza-lime selection:text-graza-darkGreen"
                style={{
                    background: `url('/assets/hero.jpeg') center center/cover no-repeat`
                }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/15 z-[1] pointer-events-none"></div>

                {/* Note: Navbar is handled by Layout in parent */}

                {/* Main Hero Content */}
                <section className="relative w-full h-screen flex flex-col justify-end pb-12 md:pb-16 px-6 md:px-12 z-[2]">
                    {/* Content Overlay */}
                    <div className="relative z-30 w-full flex flex-col md:flex-row items-end justify-between gap-8 max-w-[1600px] mx-auto">
                        {/* Main Headline & CTA */}
                        <div className="flex flex-col items-start gap-8 max-w-3xl">
                            <h2 className="font-logo text-white text-[clamp(2.75rem,4vw,5rem)] leading-[1.05] tracking-[0.01em] drop-shadow-[0_10px_90px_rgba(0,0,0,0.5)] italic font-light">
                                <span className="block">The perfect gift for</span>
                                <span className="block">someone with great taste!</span>
                            </h2>
                            <PillButton className="bg-graza-lime text-graza-darkGreen hover:bg-[#dbe655] font-bold text-sm md:text-base px-8 py-3 md:py-4 tracking-widest border border-black/5 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                                SHOP THE VITABOX GIFT SHOP
                            </PillButton>
                        </div>
                        {/* Floating Discount Pill */}
                        {isDiscountVisible && (
                            <div className="md:absolute md:bottom-8 md:right-0 transition-opacity duration-300">
                                <PillButton
                                    variant="secondary"
                                    className="shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] font-bold"
                                    onClick={() => setIsDiscountVisible(false)}
                                >
                                    EXCLUSIVE DISCOUNT? <X size={14} />
                                </PillButton>
                            </div>
                        )}
                    </div>
                </section>
            </div>

            <ProductShowcase />
            <ProductGridSection />
        </div>
    );
};

export default LandingPage;
