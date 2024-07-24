import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import useListenMessages from '../../hooks/useListenMessages'

const Messages = () => {
  const {messages,loading} = useGetMessages()
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(()=>{
      lastMessageRef?.current?.scrollIntoView({ behavior: "smooth" })

    },1000)
  },[messages])

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading && messages?.length > 0 && messages.map((message) => (   
        // <Message key={message.id} message={message} />
        <div key={message?._id} ref={lastMessageRef}>
          <Message message={message} />
          </div>
      ))}
    {!loading && messages?.length === 0 && <p className='text-center'>Send message to start conversation</p>}
      

    </div>
  )
}

export default Messages
