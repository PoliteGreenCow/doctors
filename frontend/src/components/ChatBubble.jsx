import React, { useState } from 'react';

const ChatBubble = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {/* Bubble Button */}
            <div className="bg-blue-500 text-white py-2 px-4 rounded-full shadow-md cursor-pointer transition-all duration-300"
                 onClick={toggleChat}
                 style={{ transform: isOpen ? 'scale(0)' : 'scale(1)' }}
            >
                <div className="flex items-center space-x-2">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M17.293 6.293a1 1 0 0 1 1.414 1.414l-11 11a1 1 0 0 1-1.414 0l-11-11a1 1 0 1 1 1.414-1.414L12 15.086l5.293-5.293a1 1 0 0 1 1.414 0z"/>
                    </svg>
                    <span>HealthMate AI</span>
                </div>
            </div>

            {/* Modal or iframe */}
            {isOpen && (
              <div className="fixed bottom-0 right-0 left-0 top-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
              <div className="bg-black rounded-lg p-3 pr-3 pb-3 w-5/6 md:w-3/4 lg:w-2/3 xl:w-1/2 h-5/6 fixed bottom-15 right-12">
    <iframe
        src="https://health-rjwx.onrender.com/"
        title="HealthMateAI"
        className="w-full h-full"
        style={{ border: 'none' }}
    ></iframe>
    <button className="absolute top-2 right-2 text-white-500 hover:text-white-700"
            onClick={toggleChat}>
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"/>
        </svg>
    </button>
</div>

          </div>
          
            )}
        </div>
    );
};

export default ChatBubble;
