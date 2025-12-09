import React from 'react';
import { MessageCircle } from 'lucide-react';

const ChatButton: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <div
                className={`fixed bottom-24 right-8 z-50 w-[350px] sm:w-[400px] h-[600px] bg-white rounded-2xl shadow-2xl transition-all duration-300 transform origin-bottom-right overflow-hidden border border-graza-darkGreen/10 ${isOpen
                    ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 scale-90 translate-y-4 pointer-events-none'
                    }`}
            >
                <iframe
                    src="https://bey.chat/c5f2e06a-fc1f-4c0a-a1b6-3b96f9006438"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                    allow="camera; microphone; fullscreen"
                    style={{ border: 'none', maxWidth: '100%', height: '100%' }}
                ></iframe>
            </div>

            <button
                className="fixed bottom-8 right-8 z-50 p-4 bg-graza-lime text-graza-darkGreen rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 group"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Chat"
            >
                {isOpen ? (
                    <div className="relative">
                        <MessageCircle size={28} className="opacity-0 absolute transition-opacity duration-300" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x transition-transform duration-300 rotate-0"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    </div>
                ) : (
                    <MessageCircle size={28} className="transition-transform group-hover:rotate-12" />
                )}
            </button>
        </>
    );
};

export default ChatButton;
