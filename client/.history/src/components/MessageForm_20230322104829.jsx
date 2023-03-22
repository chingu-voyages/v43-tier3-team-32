import React, { useState } from 'react'
import {PaperAirplaneIcon, PaperClipIcon, XMarkIcon } from "@heroicons/react/24/outline"
import Dropzone from 'react-dropzone'

const MessageForm = ({props, activeChat}) => {
    const [message, setMessage] = useState("")
    const [attachment, setAttachment] = useState("")
    const [preview, setPreview] = useState("")

    const handleChange = (e) => setMessage(e.target.value)
    const handleSubmit = async() => {
        const date = new Date()
        .toISOString()
        .replace("T", "")
        .replace("Z", `${Math.floor(Math.random()*1000)} +00:00`);

        const attach = attachment ? [{}]
    }

  return (
    <div className="flex justify-center items-center h-24 gap-2 border-t-2">
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
        <div className='flex justify-between items-center w-4/5 gap-3 !border-2-blue-600 !px-2'>
            <div className='basis-full relative -top-3'>
                <input 
                    className='absolute top-0 left-0 !z-20 !w-full px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block rounded-md sm:text-sm focus:ring-1'
                    type="text"
                    value={message}
                    onChange={handleChange}
                    placeholder="Start conversation ..."
                />
            </div>
            <div className='flex justify-between items-center gap-4'>
                <Dropzone 
                    className="w-6 h-3"
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
                                className="text-blue-600 !w-5 !h-5 cursor-pointer"
                                onClick={open} />
                        </div>
                    )}
                </Dropzone>
                <PaperAirplaneIcon 
                    className="text-blue-600 !w-5 !h-5 cursor-pointer"
                    onClick={() => {
                        setPreview("");
                    }}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    </div>
  )
}

export default MessageForm