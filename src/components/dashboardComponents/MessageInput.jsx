"use client"

// MessageInput.js
import React, { useState } from 'react';

const MessageInput = () => {
    const [message, setMessage] = useState('');

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    }

    const handleSendMessage = () => {
        // Logic to send message
        console.log('Sending message:', message);
        // Reset message input
        setMessage('');
    }

    return (
        <div className="flex items-center justify-between mt-4">
            <input
                type="text"
                value={message}
                onChange={handleMessageChange}
                placeholder="Type your message..."
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
            <button
                onClick={handleSendMessage}
                className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2"
            >
                Send
            </button>
        </div>
    );
}

export default MessageInput;
