import React from 'react'
import { ChatBubbleOvalLeftEllipsisIcon, PhoneIcon } from "@heroicons/react/24/outline"

const Header = ({ chat }) => {
  return (
    <div className="flex justify-between px-4 !important py-8 !important border-b-blue-500 !important items-center">
        <div className="flex">
            <ChatBubbleOvalLeftEllipsisIcon className='w-10 h-10 text-blue-600'/>
            <h2 className="text-2xl h-10 text-blue-600 ml-6 font">{chat.title}</h2>
        </div>
        <div className="flex">
            <PhoneIcon className="phone"/>
        </div>
    </div>
  )
}

export default Header