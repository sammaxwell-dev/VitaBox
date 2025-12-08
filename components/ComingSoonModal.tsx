import React from 'react';
import { X } from 'lucide-react';
import SpinningStar from './SpinningStar';

interface ComingSoonModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ComingSoonModal: React.FC<ComingSoonModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
            <div
                className="relative bg-[#f5ebe0] border border-graza-darkGreen rounded-3xl p-12 max-w-md w-full mx-6 flex flex-col items-center gap-6 shadow-2xl animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-graza-darkGreen hover:bg-graza-darkGreen/10 rounded-full transition-colors"
                >
                    <X size={24} />
                </button>

                <div className="relative w-24 h-24 flex items-center justify-center">
                    <div className="absolute inset-0 border-4 border-dashed border-graza-darkGreen/20 rounded-full animate-spin-slow"></div>
                    <SpinningStar className="text-graza-darkGreen text-5xl" />
                </div>

                <div className="text-center space-y-2">
                    <h2 className="font-logo text-4xl text-graza-darkGreen">Coming Soon</h2>
                    <p className="font-mono text-graza-darkGreen/70 text-sm">
                        We're still cooking up something special here. Check back soon!
                    </p>
                </div>

                <button
                    onClick={onClose}
                    className="mt-4 px-8 py-3 bg-graza-lime text-graza-darkGreen font-mono text-xs font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform"
                >
                    Got it
                </button>
            </div>

            {/* Click outside to close */}
            <div className="absolute inset-0 -z-10" onClick={onClose}></div>
        </div>
    );
};

export default ComingSoonModal;
