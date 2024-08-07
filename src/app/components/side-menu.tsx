

import { MessageCircle, UserPlus, Users, Archive, Settings } from "lucide-react";


export default function SideMenu() {
  return (
  <div className="flex flex-col h-full w-[5%] p-4">
    <div className="flex flex-col space-y-8">
      <div className="flex flex-col justify-center items-center space-y-2 cursor-pointer bg-[#464646] rounded-lg py-2 px-4">
        <MessageCircle color="#FFFFFF" size={24} />
        <span className="text-xs text-white">Chats</span>
      </div>
      <div className="flex flex-col justify-center items-center space-y-2 cursor-pointer">
        <Users color="#9c9c9c" size={24} />
        <span className="text-xs text-[#9c9c9c]">People</span>
      </div>
      <div className="flex flex-col justify-center items-center space-y-2 cursor-pointer">
        <UserPlus color="#9c9c9c" size={24} />
        <span className="text-xs text-[#9c9c9c]">Requests</span>
      </div>
      <div className="flex flex-col justify-center items-center space-y-2 cursor-pointer">
        <Archive color="#9c9c9c" size={24} />
        <span className="text-xs text-[#9c9c9c]">Archive</span>
      </div>
    </div>

    <div className="flex flex-col justify-center items-center space-y-2 cursor-pointer mt-auto">
      <Settings color="#9c9c9c" size={24} />
      <span className="text-xs text-[#9c9c9c]">Settings</span>
    </div>
  </div>
)
}