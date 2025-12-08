import React from 'react';
import { MessageCircle } from 'lucide-react';

const ChatButton: React.FC = () => {
    return (
        <button
            className="fixed bottom-8 right-8 z-50 p-4 bg-graza-lime text-graza-darkGreen rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 group"
            onClick={() => console.log('Chat open')}
            aria-label="Open Chat"
        >
            <MessageCircle size={28} className="transition-transform group-hover:rotate-12" />
        </button>
    );
};

export default ChatButton;
