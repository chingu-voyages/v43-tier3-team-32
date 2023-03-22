import React from 'react'
import { ChatBubbleOvalLeftEllipsisIcon, PhoneIcon } from "@heroicons/react/24/outline"

const Header = ({ chat }) => {
  return (
    <div className="flex justify-between px-4 !important py-8 !important border-b-blue-500 !important items-center">
        <div className="flex">
            <ChatBubbleOvalLeftEllipsisIcon className=''/>
            <h2 className="">{chat.title}</h2>
        </div>
        <div className="flex">
            <PhoneIcon />
        </div>
    </div>
  )
}

export default Header