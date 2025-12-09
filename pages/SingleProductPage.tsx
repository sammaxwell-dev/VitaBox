import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PillButton from '../components/PillButton';
import SpinningStar from '../components/SpinningStar';
import { products } from '../data/products';

const SingleProductPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    // Find product by ID
    const product = products.find(p => p.id === id);

    // Redirect to 404 or shop if not found (simple effect)
    useEffect(() => {
        if (!product) {
            // navigate('/'); // Optional: redirect to home or show error
        }
    }, [product, navigate]);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-32">
                <h1 className="font-logo text-4xl text-graza-darkGreen">Product not found</h1>
            </div>
        );
    }

    return (
        <div className={`min-h-screen w-full pt-32 pb-20 px-6 trantision-colors duration-500`} style={{ backgroundColor: product.bgColor }}>
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left: Image */}
                <div className="relative">
                    {/* Background blob/shape - using a slightly darker/different shade if needed, or keeping transparent/white alpha */}
                    <div className="absolute top-10 left-10 w-full h-[500px] rounded-[3rem] -z-10 transform translate-x-4 translate-y-4 bg-black/5"></div>
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
                        <span className="font-mono uppercase tracking-widest text-sm opacity-80">
                            {product.badge || 'Single Origin'}
                        </span>
                        <SpinningStar className="text-current" />
                    </div>

                    <h1 className="font-logo text-7xl md:text-8xl leading-[0.9]">
                        "{product.name}"
                    </h1>
                    <h2 className="font-serif italic text-3xl md:text-4xl opacity-80">
                        {product.fullName}
                    </h2>

                    <p className="font-mono text-lg leading-relaxed max-w-md opacity-90">
                        {product.description}
                    </p>

                    <div className="flex items-center gap-6 mt-8">
                        <span className="font-mono text-3xl">
                            ${product.price}
                        </span>
                        <PillButton className="bg-graza-darkGreen text-white hover:bg-graza-darkGreen/90 px-10 py-4 text-base shadow-lg border-2 border-transparent hover:border-graza-lime">
                            Add to Cart
                        </PillButton>
                    </div>

                    {product.tasteProfile && (
                        <div className="mt-12 p-6 border border-current rounded-2xl bg-white/20 backdrop-blur-sm">
                            <h3 className="font-bold uppercase tracking-wide mb-2 opacity-90">Taste Profile</h3>
                            <div className="flex gap-2 flex-wrap">
                                {product.tasteProfile.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-white/30 backdrop-blur-md rounded-full text-xs font-mono uppercase font-bold">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SingleProductPage;
