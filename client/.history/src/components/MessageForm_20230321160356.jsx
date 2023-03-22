import React, { useState } from 'react'
import {XMarkIcon } from "@heroicons/react/24/outline"

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
                <XMarkIcon 
                    className='absolute top-0 right-0 !text-red-600 !w-3 !h-3 cursor-pointer'
                    onClick={()=> {
                        setPreview("");
                        setAttachment("");
                    }}
                />
            </div>
        )}
        <div className='flex justify-between '>
            <div className=''>
                <input />
            </div>
        </div>
    </div>
  )
}

export default MessageForm