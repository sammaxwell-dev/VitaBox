import React from 'react';

const PillButton: React.FC<{
    children: React.ReactNode;
    className?: string;
    variant?: 'primary' | 'secondary' | 'white';
}> = ({ children, className = '', variant = 'primary' }) => {
    const baseStyles = "rounded-full px-6 py-2 font-mono uppercase text-sm tracking-wide transition-transform hover:scale-105 active:scale-95 border border-transparent";

    const variants = {
        primary: "bg-graza-lime text-graza-darkGreen border-graza-darkGreen/10",
        secondary: "bg-graza-lime text-graza-darkGreen text-xs px-4 py-2 flex items-center gap-2",
        white: "bg-white text-black hover:bg-gray-100"
    };

    return (
        <button className={`${baseStyles} ${variants[variant]} ${className}`}>
            {children}
        </button>
    );
};

export default PillButton;
