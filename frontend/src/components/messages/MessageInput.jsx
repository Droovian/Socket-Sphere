import React from 'react';

const MessageInput = () => {
  return (
    <div className="bg-white p-4 flex items-center">
      <input
        type="text"
        placeholder="Type a message..."
        className="flex-1 border-2 border-gray-300 text-gray-200 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
      />
      <button
        className="ml-2 bg-black text-white py-2 px-4 rounded-md hover:bg-green-500 focus:outline-none focus:ring focus:border-blue-300"
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
