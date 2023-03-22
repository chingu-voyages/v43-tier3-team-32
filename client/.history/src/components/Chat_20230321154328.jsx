import React from 'react'
import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from 'react-chat-engine-advanced'
import Header from './Header'
import MessageForm from './MessageF'

const Chat = () => {
    const chatProps = useMultiChatLogic(
        import.meta.env.VITE_PROJECT_ID,
        "testUser",
        "1234"
    )

  return (
    <div className='flex flex-col'>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} 
            renderChatHeader={(chat) => <Header chat={chat} /> }
            className="h-screen"
            renderMessageForm={(props)=> {
                return (
                    <MessageForm props={props} activeChat={chatprops.chat} />
                )
            }}
        />
    </div>
  )
}

export default Chat