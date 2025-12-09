
import React, { useState, useEffect } from 'react';
import { products, Product } from '../data/products';
import { Link } from 'react-router-dom';
import { Filter } from 'lucide-react';

const ProductsPage: React.FC = () => {
    const [filter, setFilter] = useState<string>('all');
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

    // Categories for filter
    const categories = [
        { id: 'all', label: 'All' },
        { id: 'oils', label: 'Olive Oils' },
        { id: 'pantry', label: 'Pantry' },
        { id: 'sets', label: 'Sets & Bundles' }
    ];

    useEffect(() => {
        if (filter === 'all') {
            setFilteredProducts(products);
        } else if (filter === 'oils') {
            setFilteredProducts(products.filter(p => !p.isBundle && (p.id === 'drizzle' || p.id === 'sizzle' || p.id === 'frizzle')));
        } else if (filter === 'pantry') {
            setFilteredProducts(products.filter(p => !p.isBundle && p.id !== 'drizzle' && p.id !== 'sizzle' && p.id !== 'frizzle'));
        } else if (filter === 'sets') {
            setFilteredProducts(products.filter(p => p.isBundle));
        }
    }, [filter]);

    return (
        <div className="min-h-screen bg-[#f5ebe0] pt-32 pb-20">
            {/* Header */}
            <div className="container mx-auto px-6 mb-16 text-center">
                <h1 className="font-logo text-6xl md:text-8xl text-graza-darkGreen mb-6">
                    Shop All
                </h1>
                <p className="font-mono text-graza-darkGreen/60 uppercase tracking-widest max-w-lg mx-auto">
                    From our groves to your table. Authentic, fresh, and full of flavor.
                </p>
            </div>

            {/* Filter */}
            <div className="container mx-auto px-6 mb-12">
                <div className="flex flex-wrap justify-center gap-4">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            className={`px-6 py-2 rounded-full font-mono text-sm uppercase tracking-widest border transition-all duration-300 ${filter === cat.id
                                    ? 'bg-graza-darkGreen text-white border-graza-darkGreen'
                                    : 'bg-transparent text-graza-darkGreen border-graza-darkGreen/30 hover:border-graza-darkGreen'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {filteredProducts.map((product) => (
                        <Link
                            to={product.isBundle ? `/bundle/${product.id}` : `/product/${product.id}`}
                            key={product.id}
                            className="group flex flex-col"
                        >
                            {/* Card Image */}
                            <div
                                className="aspect-[4/5] rounded-[2rem] overflow-hidden relative mb-6 transition-transform duration-500 group-hover:-translate-y-2 shadow-sm group-hover:shadow-md"
                                style={{ backgroundColor: product.bgColor }}
                            >
                                <img
                                    src={product.image}
                                    alt={product.fullName}
                                    className="w-full h-full object-cover object-center absolute inset-0"
                                />

                                {/* Badge */}
                                {product.badge && (
                                    <div className="absolute top-4 left-4">
                                        <span className={`inline-block px-4 py-1.5 rounded-full backdrop-blur-md bg-white/20 border border-white/30 font-mono text-[10px] tracking-widest uppercase ${product.textColor.includes('white') ? 'text-white' : 'text-graza-darkGreen'}`}>
                                            {product.badge}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Info */}
                            <div className="flex flex-col items-center text-center gap-2">
                                <h3 className="font-logo text-3xl text-graza-darkGreen">
                                    {product.name}
                                </h3>
                                <p className="font-serif italic text-graza-darkGreen/60 text-lg">
                                    {product.fullName}
                                </p>
                                <span className="font-mono text-graza-darkGreen font-bold mt-1">
                                    ${product.price}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
