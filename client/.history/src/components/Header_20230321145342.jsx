import React from 'react'
import { ChatBubbleOvalLeftEllipsisIcon, PhoneIcon } from "@heroicons/react/24/outline"

const Header = ({ chat }) => {
  return (
    <div className="flex justify-between px-4 !important py-8 !important border-b-blue-500 !important items-center">
        <div>
            <ChatBubbleOvalLeftEllipsisIcon className=''/>
            <h2 className=""></h2>
        </div>
    </div>
  )
}

export default Header