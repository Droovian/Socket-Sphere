import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations'
import { SpinnerCircular } from 'spinners-react'

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  console.log(conversations);
  // console.log(conversations);

  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIdx={idx === conversations.length - 1} 
        />
      ))}

      {loading ? <SpinnerCircular /> : null}
    </div>
  );
};

export default Conversations;
