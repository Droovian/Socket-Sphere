import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../Skeletons/MessageSkeleton';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();
  // const messagesArray = Array.isArray(messages) ? messages : [];
  
  useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);
   
  return (
    <div className='flex-1 overflow-auto px-4 py-1'>
        {!loading &&
          messages.length > 0 &&
          messages.map((message) => (
            <div key={message._id}
            ref={lastMessageRef}>
              <Message message={message} />
            </div>
          ))}

        {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
        {!loading && messages.length === 0 && (
          <p className='text-center'>Send a message to start the conversation</p>
        )}
    </div>
  )
}

export default Messages