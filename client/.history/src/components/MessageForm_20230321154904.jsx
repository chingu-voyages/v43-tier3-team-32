import React, { useState } from 'react'

const MessageForm = () => {
    const [message, setMessage] = useState("")
    const [attachment, setAttachment] = useState("")
    const [preview, setPreview] = useState("")

  return (
    <div className="flex justify-center items-center ">MessageForm</div>
  )
}

export default MessageForm