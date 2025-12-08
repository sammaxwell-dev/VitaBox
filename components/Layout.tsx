import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
    return (
        <div className="w-full min-h-screen bg-[#f5ebe0]">
            <Navbar />
            <Outlet />
            <footer className="w-full py-8 bg-[#f5ebe0] border-t border-graza-darkGreen/10 mt-auto">
                <div className="max-w-[1400px] mx-auto px-6 text-center">
                    <p className="font-mono text-xs text-graza-darkGreen/40 uppercase tracking-widest">
                        All Rights Reserved. Developed by Shamil Musaev.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
