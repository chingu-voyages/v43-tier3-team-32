import React from 'react'
import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from 'react-chat-engine-advanced'
import 

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
            renderChatHeader={(chat) => <Header chat={chat} /> }
            className="h-full bg-blue-600"
        />
    </div>
  )
}

export default Chat