import React, { useState, useEffect } from 'react';
import { products, Product } from '../data/products';
import { Link } from 'react-router-dom';

const ProductsPage: React.FC = () => {
    const [filter, setFilter] = useState<string>('all');
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

    // Categories for filter logic
    const categories = [
        { id: 'all', label: 'All' },
        { id: 'oils', label: 'Olive Oil' },
        { id: 'sets', label: 'Bundles' },
        { id: 'pantry', label: 'Gifts & More' } // Renaming "Pantry" to "Gifts & More" to match Glug Club nav somewhat
    ];

    useEffect(() => {
        if (filter === 'all') {
            setFilteredProducts(products);
        } else if (filter === 'oils') {
            setFilteredProducts(products.filter(p => !p.isBundle && (p.id === 'drizzle' || p.id === 'sizzle' || p.id === 'frizzle')));
        } else if (filter === 'pantry') {
            // Include honey, vinegar, gifts here for now
            setFilteredProducts(products.filter(p => !p.isBundle && p.id !== 'drizzle' && p.id !== 'sizzle' && p.id !== 'frizzle'));
        } else if (filter === 'sets') {
            setFilteredProducts(products.filter(p => p.isBundle));
        }
    }, [filter]);

    return (
        <div className="min-h-screen bg-[#F3EFE3] pt-32 pb-20 font-mono text-graza-darkGreen">
            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="font-serif text-6xl md:text-8xl mb-4 tracking-tight">
                    Join the Glug Club
                </h1>
            </div>

            {/* Filter Bar (Dotted Style) */}
            <div className="border-t border-b border-dashed border-graza-darkGreen/40 mb-16">
                <div className="container mx-auto max-w-[1400px]">
                    <div className="flex w-full">
                        {categories.map((cat, index) => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={`flex-1 py-4 text-sm font-bold tracking-widest uppercase transition-colors relative
                                    ${index !== categories.length - 1 ? 'border-r border-dashed border-graza-darkGreen/40' : ''}
                                    ${filter === cat.id ? 'bg-[#dbe655]' : 'hover:bg-black/5'}
                                `}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-12">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="group flex flex-col items-center">
                            {/* Card Media Hover Effect */}
                            <Link
                                to={product.isBundle ? `/bundle/${product.id}` : `/product/${product.id}`}
                                className="relative w-full aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-white mb-6 cursor-pointer"
                            >
                                {/* Default Image */}
                                <img
                                    src={product.image}
                                    alt={product.fullName}
                                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0 z-10"
                                />

                                {/* Hover Visual (Video/Gif/Image) */}
                                {product.hoverVisual ? (
                                    product.hoverVisual.endsWith('.mp4') || product.hoverVisual.endsWith('.webm') ? (
                                        <video
                                            src={product.hoverVisual}
                                            muted
                                            loop
                                            autoPlay={false} // Can enable autoPlay on hover via JS, but clean swapping video z-index or opacity is easier
                                            className="absolute inset-0 w-full h-full object-cover z-0"
                                        // onMouseEnter={(e) => e.currentTarget.play()} // React synthetic event
                                        // onMouseLeave={(e) => e.currentTarget.pause()}
                                        />
                                    ) : (
                                        <img
                                            src={product.hoverVisual}
                                            alt={`${product.fullName} hover`}
                                            className="absolute inset-0 w-full h-full object-cover z-0"
                                        />
                                    )
                                ) : (
                                    // Fallback if no hover visual
                                    <div className="absolute inset-0 bg-[#dbe655] flex items-center justify-center z-0">
                                        <span className="font-serif text-2xl italic">See Details</span>
                                    </div>
                                )}

                                {/* Stickers / Badges */}
                                {product.badge && (
                                    <div className="absolute top-4 right-4 z-20">
                                        <div className="bg-[#dbe655] text-graza-darkGreen w-24 h-24 rounded-full flex items-center justify-center p-2 transform rotate-12 shadow-sm border border-graza-darkGreen border-dashed">
                                            <span className="font-serif italic text-center font-bold text-sm leading-tight">
                                                {product.badge}
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </Link>

                            {/* Product Info */}
                            <div className="text-center w-full px-4 mb-4">
                                <h3 className="font-serif text-3xl mb-1">
                                    "{product.name}"
                                </h3>
                                <p className="font-mono text-sm opacity-80 mb-6 h-10">
                                    {product.fullName}
                                </p>
                            </div>

                            {/* Add Button */}
                            <Link
                                to={product.isBundle ? `/bundle/${product.id}` : `/product/${product.id}`}
                                className="w-full max-w-[280px]"
                            >
                                <button className="w-full bg-[#dbe655] hover:bg-[#cdd845] text-graza-darkGreen font-mono font-bold py-3 rounded-full border-2 border-graza-darkGreen shadow-[4px_4px_0px_0px_rgba(20,40,24,1)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(20,40,24,1)] transition-all uppercase tracking-widest flex items-center justify-center gap-2">
                                    <span>Add</span>
                                    <span>—</span>
                                    <span>${product.price}</span>
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
