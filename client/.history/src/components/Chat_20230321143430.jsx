import React from 'react'
import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from 'react-chat-engine-advanced'

const Chat = () => {
    const chatProps = useMultiChatLogic(
        import.meta.env.VITE_PROJECT_ID,
        "testUser",
        "123"
    )

  return (
    <div className='flex flex-col'>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} 
        className="h-full"
        />
    </div>
  )
}

export default Chat