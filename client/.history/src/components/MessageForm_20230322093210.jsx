import React, { useState } from 'react'
import {PaperClipIcon, XMarkIcon } from "@heroicons/react/24/outline"
import Dropzone from 'react-dropzone'

const MessageForm = () => {
    const [message, setMessage] = useState("")
    const [attachment, setAttachment] = useState("")
    const [preview, setPreview] = useState("")

    const handleChange = (e) => setMessage(e.target.value)

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
        <div className='flex justify-between items-center bg-black w-4/5 gap-3 !border-blue-600 !px-2'>
            <div className='basis-full relative -top-3'>
                <input 
                    className='absolute top-0 left-0 !z-20 !w-full text-gray-800 border-slate-400'
                    type="text"
                    value={message}
                    onChange={handleChange}
                    placeholder="Start conversation ..."
                />
            </div>
            <div className='flex justify-between items-center gap-4'>
                <Dropzone 
                    acceptedFiles=".jpeg,.jpg,.png"
                    multiple={true}
                    noClick={true}
                    onDrop={(acceptedFiles) =>{
                        setAttachment(acceptedFiles[0]);
                        setPreview(URL.createObjectURL(acceptedFiles[0]))
                    }}
                >
                    {({ getRootProps, getInputProps, open}) =>(
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <PaperClipIcon 
                                className=""
                                
                        </div>
                    )}
                </Dropzone>
            </div>
        </div>
    </div>
  )
}

export default MessageForm