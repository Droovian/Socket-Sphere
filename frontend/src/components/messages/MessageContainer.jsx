import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { useState } from 'react'

const MessageContainer = () => {
    const [chatSelected, setChatSelected] = useState(false);

  return (
    <div className='md:min-w-[450px] flex flex-col'>
    {chatSelected ? <NoChatSelected/> : (
        <>
        <div className='bg-black px-4 py-2 mb-2 text-white'>
            <span>To:</span>{" "}
            <span className='text-gray-200 font-bold'>Dhruv</span>
        </div>

        <Messages/>
        <MessageInput/>
    </>
    )}
    </div>
  )
}

export default MessageContainer

export const NoChatSelected = () => {
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='flex flex-col items-center gap-2 px-4 text-center sm:text-lg md:text-xl  font-semibold'>
                <p className='text-black font-bold text-2xl'>Welcome Dhruv !</p>
                <p className='font-light text-lg text-gray-500'>Select a chat to start messaging</p>
            </div>
        </div>
    );
}