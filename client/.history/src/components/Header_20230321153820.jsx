import React from 'react'
import { ChatBubbleOvalLeftEllipsisIcon, PhoneIcon } from "@heroicons/react/24/outline"

const Header = ({ chat }) => {
    console.log("chat.description", chat.description)
  return (
    <div className="flex justify-between !px-4 !py-6 !border-b-blue-500 items-center">
        <div className="flex">
            <ChatBubbleOvalLeftEllipsisIcon className='w-10 h-10 text-blue-600'/>
            <h2 className="font-semibold text-2xl h-10 text-blue-600 ml-6 text-bold">{chat.title}</h2>
        </div>
        <div className="flex">
            <PhoneIcon className="w-8 h-8 text-blue-600"/>
            { chat.description !== "⬅️ ⬅️ ⬅️" ?(<p className='m-2'>{chat.description}</p>):
                (<p className='m-2 text-blue-600 text-xl font-semibold'>No Chat</p>)
            }
        </div>
    </div>
  )
}

export default Header