import React from 'react'
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext';
import { extractTime } from '../../../utils/extractTime';
const Message = ({ message }) => {

    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const fromUser = message.senderId === authUser._id;
    const chatClass = fromUser ? "chat-end" : "chat-start";
    const profilePic = fromUser ? authUser.profilePic : selectedConversation?.profilePic;
    const bubbleColour = fromUser ? "bg-blue-500" : "";
    const formattedTime = extractTime(message.createdAt);

  return (
    <div className={`chat ${chatClass}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'> 
                <img alt="Tailwind CSS chat bubble component" src={profilePic} />
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleColour} pb-2`}>
            {message.message}
        </div>
        <div className="chat-footer opacity-50">
            {formattedTime}
        </div>
    </div>
  )
}

export default Message