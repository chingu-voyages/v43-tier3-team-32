import React, { useState } from 'react'
import {XMarkIcon } from "@heroicons/react/"

const MessageForm = () => {
    const [message, setMessage] = useState("")
    const [attachment, setAttachment] = useState("")
    const [preview, setPreview] = useState("")

  return (
    <div className="flex justify-center items-center h-full gap-2">
        {preview && (
            <div className="relative">
                <img 
                    className="w-10 h-10" 
                    src={preview}
                    onLoad={()=> URL.revokeObjectURL(preview)}
                    alt="Preview"
                    />
                <XMarkIcon />
            </div>
        )}
    </div>
  )
}

export default MessageForm