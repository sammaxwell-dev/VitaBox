import React, { useState, useEffect } from 'react';
import { Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import ComingSoonModal from './ComingSoonModal';

const ShopDropdown: React.FC<{
    isVisible: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onLinkClick: () => void;
}> = ({ isVisible, onMouseEnter, onMouseLeave, onLinkClick }) => {
    return (
        <div
            className={`absolute top-full left-0 w-full bg-[#dbe655] z-40 overflow-hidden transition-all duration-500 ease-in-out border-b border-graza-darkGreen/10 ${isVisible ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                }`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row px-8 py-12 gap-12">
                {/* Left Columns */}
                <div className="flex gap-16 flex-1">
                    {/* Shop Olive Oil */}
                    <div className="flex flex-col gap-6">
                        <h3 className="font-mono text-xs tracking-widest text-graza-darkGreen/60 uppercase font-bold">
                            Shop Olive Oil
                        </h3>
                        <ul className="flex flex-col gap-4 font-logo text-2xl text-graza-darkGreen">
                            <li>
                                <Link to="/bundle/duo" onClick={onLinkClick} className="hover:underline decoration-1 underline-offset-4 decoration-graza-darkGreen/30">
                                    "The Duo" Glass
                                </Link>
                            </li>
                            <li>
                                <Link to="/bundle/trio" onClick={onLinkClick} className="hover:underline decoration-1 underline-offset-4 decoration-graza-darkGreen/30">
                                    "The Trio"
                                </Link>
                            </li>
                            <li>
                                <Link to="/bundle/starter" onClick={onLinkClick} className="hover:underline decoration-1 underline-offset-4 decoration-graza-darkGreen/30">
                                    The "Starter Kit"
                                </Link>
                            </li>
                            <li>
                                <Link to="/subscribe" onClick={onLinkClick} className="hover:underline decoration-1 underline-offset-4 decoration-graza-darkGreen/30">
                                    Subscribe & Save
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Shop Individual Products */}
                    <div className="flex flex-col gap-6">
                        <h3 className="font-mono text-xs tracking-widest text-graza-darkGreen/60 uppercase font-bold">
                            Individual Products
                        </h3>
                        <ul className="flex flex-col gap-4 font-mono text-base text-graza-darkGreen font-medium">
                            <li>
                                <Link to="/product/drizzle" onClick={onLinkClick} className="hover:text-graza-darkGreen/70 transition-colors">
                                    Drizzle (Olive Oil)
                                </Link>
                            </li>
                            <li>
                                <Link to="/product/sizzle" onClick={onLinkClick} className="hover:text-graza-darkGreen/70 transition-colors">
                                    Sizzle (Olive Oil)
                                </Link>
                            </li>
                            <li>
                                <Link to="/product/frizzle" onClick={onLinkClick} className="hover:text-graza-darkGreen/70 transition-colors">
                                    Frizzle (High Heat)
                                </Link>
                            </li>
                            <li>
                                <Link to="/product/beebox" onClick={onLinkClick} className="hover:text-graza-darkGreen/70 transition-colors">
                                    BeeBox (Honey)
                                </Link>
                            </li>
                            <li>
                                <Link to="/product/zing" onClick={onLinkClick} className="hover:text-graza-darkGreen/70 transition-colors">
                                    Zing (Vinegar)
                                </Link>
                            </li>
                            <li>
                                <Link to="/product/spark" onClick={onLinkClick} className="hover:text-graza-darkGreen/70 transition-colors">
                                    Spark (Spices)
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Shop By Collection */}
                    <div className="flex flex-col gap-6">
                        <h3 className="font-mono text-xs tracking-widest text-graza-darkGreen/60 uppercase font-bold">
                            Collections
                        </h3>
                        <ul className="flex flex-col gap-4 font-mono text-base text-graza-darkGreen font-medium">
                            <li>
                                <Link to="/bundles" onClick={onLinkClick} className="hover:text-graza-darkGreen/70 transition-colors">
                                    Bundles
                                </Link>
                            </li>
                            <li>
                                <Link to="/gifts" onClick={onLinkClick} className="hover:text-graza-darkGreen/70 transition-colors font-bold">
                                    Gifts & More
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" onClick={onLinkClick} className="hover:text-graza-darkGreen/70 transition-colors">
                                    Shop All
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Featured Section (Right Side) */}
                <div className="flex flex-col gap-6 flex-[1.5]">
                    <h3 className="font-mono text-xs tracking-widest text-graza-darkGreen/60 uppercase font-bold">
                        Featured
                    </h3>
                    <div className="flex gap-6">
                        {/* Card 1 */}
                        <Link to="/gift/dinner-party" onClick={onLinkClick} className="flex flex-col gap-3 group cursor-pointer">
                            <div className="w-[180px] h-[180px] bg-white rounded-2xl overflow-hidden border border-graza-darkGreen/10 shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                                <img
                                    src="/assets/shop_dinner_party.png"
                                    alt="Dinner Party Pack"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="font-mono text-center text-graza-darkGreen text-sm font-bold group-hover:underline">
                                "Dinner Party" Pack
                            </p>
                        </Link>
                        {/* Card 2 */}
                        <Link to="/bundle/duo" onClick={onLinkClick} className="flex flex-col gap-3 group cursor-pointer">
                            <div className="w-[180px] h-[180px] bg-white rounded-2xl overflow-hidden border border-graza-darkGreen/10 shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                                <img
                                    src="/assets/shop_duo_set.png"
                                    alt="The Duo Gift Set"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="font-mono text-center text-graza-darkGreen text-sm font-bold group-hover:underline">
                                "The Duo" Gift Set
                            </p>
                        </Link>
                        {/* Card 3 */}
                        <Link to="/bundle/trio" onClick={onLinkClick} className="flex flex-col gap-3 group cursor-pointer">
                            <div className="w-[180px] h-[180px] bg-white rounded-2xl overflow-hidden border border-graza-darkGreen/10 shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                                <img
                                    src="/assets/shop_trio_set.png"
                                    alt="The Trio"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="font-mono text-center text-graza-darkGreen text-sm font-bold group-hover:underline">
                                "The Trio"
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isShopHovered, setIsShopHovered] = useState(false);
    const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleComingSoon = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsComingSoonOpen(true);
        setIsMobileMenuOpen(false);
    };

    const closeMenu = () => setIsShopHovered(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    // Calculate dynamic classes
    const isGreenState = isShopHovered;

    // Announcement Bar style
    const announcementHeight = scrolled && !isGreenState ? 'h-0 opacity-0' : 'h-[32px] opacity-100';
    const announcementBg = isGreenState ? 'bg-[#dbe655] text-graza-darkGreen border-graza-darkGreen/10' : 'bg-transparent text-white border-white/20';

    // Navbar Row style
    const navBg = isGreenState ? 'bg-[#dbe655]' : (scrolled ? 'bg-[#f5ebe0] shadow-md' : 'bg-transparent');
    const navText = isGreenState || scrolled ? 'text-graza-darkGreen' : 'text-white';
    const navPadding = scrolled && !isGreenState ? 'py-2' : 'py-4';

    return (
        <>
            <div className="fixed top-0 left-0 w-full z-50 flex flex-col transition-all duration-300">
                {/* Announcement Bar */}
                <div className={`w-full flex items-center justify-center border-b transition-all duration-300 overflow-hidden ${announcementHeight} ${announcementBg}`}>
                    <p className="font-mono text-xs md:text-sm tracking-widest uppercase animate-pulse">
                        NEW: GIFT SETS!!!
                    </p>
                </div>

                {/* Main Navbar */}
                <nav
                    className={`w-full px-6 flex justify-center items-center gap-8 transition-all duration-300 relative ${navBg} ${navPadding}`}
                    onMouseLeave={closeMenu}
                >
                    {/* Mobile Menu Button (Left) */}
                    <button
                        className={`md:hidden absolute left-6 p-2 ${navText}`}
                        onClick={toggleMobileMenu}
                    >
                        {isMobileMenuOpen ? <Search className="opacity-0" size={24} /> : ( // Placeholder to keep spacing or just absolute
                            <div className="flex flex-col gap-1.5 w-6">
                                <span className={`block w-full h-0.5 bg-current`}></span>
                                <span className={`block w-full h-0.5 bg-current`}></span>
                                <span className={`block w-full h-0.5 bg-current`}></span>
                            </div>
                        )}
                    </button>

                    {/* Logo (Center) */}
                    <div className={`transition-all duration-300 ${navText} z-50 relative`}>
                        <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                            <h1 className={`font-logo font-black tracking-tighter drop-shadow-md transition-all duration-300 ${scrolled ? 'text-3xl' : 'text-5xl'}`}>
                                VitaBox
                            </h1>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className={`hidden md:flex items-center gap-6 font-mono text-sm tracking-widest font-medium uppercase drop-shadow-sm transition-all duration-300 ${navText}`}>
                        <div
                            className="h-full flex items-center"
                            onMouseEnter={() => setIsShopHovered(true)}
                        >
                            <Link to="/products" className={`hover:underline decoration-graza-lime decoration-2 underline-offset-4 hidden md:block py-4 ${isShopHovered ? 'underline' : ''}`}>Shop</Link>
                        </div>
                        <a href="#" onClick={handleComingSoon} className="hover:underline decoration-graza-lime decoration-2 underline-offset-4 hidden md:block">Gift Shop</a>
                        <a href="#" onClick={handleComingSoon} className="hover:underline decoration-graza-lime decoration-2 underline-offset-4 hidden md:block">About</a>
                        <a href="#" onClick={handleComingSoon} className="hover:underline decoration-graza-lime decoration-2 underline-offset-4 hidden md:block">Blog</a>

                        {/* Desktop Icons */}
                        <div className="flex items-center gap-3">
                            <button className={`p-2 rounded-full transition-colors border ${isGreenState || scrolled
                                ? 'bg-transparent border-graza-darkGreen hover:bg-graza-darkGreen hover:text-white'
                                : 'bg-white/90 hover:bg-white border-transparent'
                                }`}>
                                <Search size={16} className={isGreenState || scrolled ? 'text-graza-darkGreen group-hover:text-white' : 'text-black'} />
                            </button>
                            <button className={`p-2 rounded-full transition-colors border ${isGreenState || scrolled
                                ? 'bg-transparent border-graza-darkGreen hover:bg-graza-darkGreen hover:text-white'
                                : 'bg-white/90 hover:bg-white border-transparent'
                                }`}>
                                <User size={16} className={isGreenState || scrolled ? 'text-graza-darkGreen group-hover:text-white' : 'text-black'} />
                            </button>
                            <button className={`rounded-full font-mono uppercase text-xs tracking-wide transition-all px-4 py-2 border ${isGreenState || scrolled
                                ? 'bg-transparent border-graza-darkGreen text-graza-darkGreen hover:bg-graza-darkGreen hover:text-white'
                                : 'bg-white text-black border-transparent hover:bg-gray-100'
                                }`}>
                                Cart [0]
                            </button>
                        </div>
                    </div>

                    {/* Mobile Cart Icon (Right) */}
                    <button className={`md:hidden absolute right-6 font-mono text-sm uppercase ${navText}`}>
                        Cart [0]
                    </button>

                    {/* Dropdown Menu (Desktop) */}
                    <ShopDropdown
                        isVisible={isShopHovered}
                        onMouseEnter={() => setIsShopHovered(true)}
                        onMouseLeave={closeMenu}
                        onLinkClick={closeMenu}
                    />
                </nav>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-[#dbe655] z-40 transition-transform duration-500 ease-in-out md:hidden flex flex-col pt-32 px-6 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <button onClick={toggleMobileMenu} className="absolute top-8 left-6 p-2 text-graza-darkGreen">
                        <User size={24} className="opacity-0" /> {/* Spacer */}
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-6 h-6">
                            <span className="absolute top-1/2 left-0 w-full h-0.5 bg-graza-darkGreen rotate-45 transform origin-center"></span>
                            <span className="absolute top-1/2 left-0 w-full h-0.5 bg-graza-darkGreen -rotate-45 transform origin-center"></span>
                        </span>
                    </button>

                    <div className="flex flex-col gap-8 font-logo text-4xl text-graza-darkGreen">
                        <Link to="/products" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
                        <Link to="/gifts" onClick={() => setIsMobileMenuOpen(false)}>Gift Shop</Link>
                        <a href="#" onClick={handleComingSoon}>About</a>
                        <a href="#" onClick={handleComingSoon}>Blog</a>
                        <a href="#" onClick={handleComingSoon}>Account</a>
                    </div>

                    <div className="mt-auto pb-12 font-mono text-sm text-graza-darkGreen/60 uppercase tracking-widest">
                        <p>Follow us @VitaBox</p>
                    </div>
                </div>
            </div>
            <ComingSoonModal
                isOpen={isComingSoonOpen}
                onClose={() => setIsComingSoonOpen(false)}
            />
        </>
    );
};

export default Navbar;
