import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PillButton from '../components/PillButton';
import SpinningStar from '../components/SpinningStar';
import { products } from '../data/products';

const BundlePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    // Data handling
    const bundles = products.filter(p => p.isBundle);
    const product = id ? products.find(p => p.id === id && p.isBundle) : null;

    // Redirect if ID is present but not found (optional)
    useEffect(() => {
        if (id && !product) {
            // navigate('/bundles'); 
        }
    }, [id, product, navigate]);

    // Detail View
    if (product) {
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
                                {product.badge || 'Bundle'}
                            </span>
                            <SpinningStar className="text-current" />
                        </div>

                        <h1 className="font-logo text-7xl md:text-8xl leading-[0.9]">
                            {product.name}
                        </h1>
                        <h2 className="font-serif italic text-3xl md:text-4xl opacity-80">
                            {product.fullName}
                        </h2>

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

    // List View (Default)
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
                    {bundles.map((bundle) => (
                        <div key={bundle.id} onClick={() => navigate(`/bundle/${bundle.id}`)} className={`rounded-[3rem] p-8 flex flex-col items-center hover:-translate-y-2 transition-transform duration-300 cursor-pointer ${bundle.id === 'trio' ? 'bg-[#f5ebe0] border-4 border-graza-darkGreen relative z-10 transform scale-105' : 'bg-[#f5ebe0]'}`}>
                            {bundle.id === 'trio' && (
                                <div className="absolute top-4 right-4 z-20 bg-graza-darkGreen text-white px-3 py-1 rounded-full text-xs font-mono uppercase shadow-md">Best Value</div>
                            )}
                            <div className="relative z-10 mb-6 w-full">
                                <img src={bundle.image} alt={bundle.name} className="w-full h-auto drop-shadow-xl" />
                            </div>
                            <h3 className="font-logo text-4xl text-graza-darkGreen mb-2">{bundle.name}</h3>
                            <p className="font-mono text-sm text-graza-darkGreen/70 mb-6">{bundle.fullName}</p>
                            <PillButton className="w-full justify-center">Add - ${bundle.price}</PillButton>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BundlePage;
