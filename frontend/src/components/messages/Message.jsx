import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img
                    src='https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-lkx11465.png'
                    alt="Tailwind css bubble component"
                />

            </div>

        </div>

        <div className={`chat-bubble text-white bg-blue-500`}>
            Hi what's up?
        </div>

        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>
            12:42
        </div>
      
    </div>
  )
}

export default Message
