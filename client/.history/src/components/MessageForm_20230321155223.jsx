import React, { useState } from 'react'

const MessageForm = () => {
    const [message, setMessage] = useState("")
    const [attachment, setAttachment] = useState("")
    const [preview, setPreview] = useState("")

  return (
    <div className="flex justify-center items-center h-full gap-2">
        {preview && (
            <div className="">
                <img className="img-responsive" 
                    src={preview}
                    onLoad={()=> URL}
                    />
            </div>
        )}
    </div>
  )
}

export default MessageForm