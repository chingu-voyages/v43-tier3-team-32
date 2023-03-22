import React from 'react'
import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from 'react-chat-engine-advanced'

const Chat = () => {
    const chatProps = useMultiChatLogic(
        import.meta.env.VITE_PROJECT
    )

  return (
    <div>Chat</div>
  )
}

export default Chat