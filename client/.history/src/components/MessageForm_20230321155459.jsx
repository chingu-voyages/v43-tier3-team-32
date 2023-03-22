import React, { useState } from 'react'

const MessageForm = () => {
    const [message, setMessage] = useState("")
    const [attachment, setAttachment] = useState("")
    const [preview, setPreview] = useState("")

  return (
    <div className="flex justify-center items-center h-full gap-2">
        {preview && (
            <div className="relative">
                <img 
                    className="w-8 h" 
                    src={preview}
                    onLoad={()=> URL.revokeObjectURL(preview)}
                    alt="Preview"
                    />
            </div>
        )}
    </div>
  )
}

export default MessageForm