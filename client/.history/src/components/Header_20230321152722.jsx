import React from 'react'
import { ChatBubbleOvalLeftEllipsisIcon, PhoneIcon } from "@heroicons/react/24/outline"

const Header = ({ chat }) => {
  return (
    <div className="flex justify-between !px-4 !py-8 !border-b-blue-500 items-center">
        <div className="flex">
            <ChatBubbleOvalLeftEllipsisIcon className='w-10 h-10 text-blue-600'/>
            <h2 className="font-semibold text-2xl h-10 text-blue-600 ml-6 text-bold">{chat.title}</h2>
        </div>
        <div className="flex">
            <PhoneIcon className="w-8 h-8 text-blue-600"/>
            <p className='m-6'>{chat.description}</p>
        </div>
    </div>
  )
}

export default Header