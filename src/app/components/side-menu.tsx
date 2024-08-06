import { MessageCircle, UserPlus, Users, Archive, Settings } from "lucide-react";


export default function SideMenu() {
  return (
  <div className="flex flex-col h-full bg-[#131313] p-8">
    <div className="flex flex-col space-y-8">
      <div className="flex flex-col justify-center items-center space-y-2 cursor-pointer">
        <MessageCircle color="#FFFFFF" size={30} />
        <span className="text-xs text-white">All Chats</span>
      </div>
      <div className="flex flex-col justify-center items-center space-y-2 cursor-pointer">
        <Users color="#FFFFFF" size={30} />
        <span className="text-xs text-white">People</span>
      </div>
      <div className="flex flex-col justify-center items-center space-y-2 cursor-pointer">
        <UserPlus color="#FFFFFF" size={30} />
        <span className="text-xs text-white">Requests</span>
      </div>
      <div className="flex flex-col justify-center items-center space-y-2 cursor-pointer">
        <Archive color="#FFFFFF" size={30} />
        <span className="text-xs text-white">Archive</span>
      </div>
    </div>

    <div className="flex flex-col justify-center items-center space-y-2 cursor-pointer mt-auto">
      <Settings color="#FFFFFF" size={30} />
      <span className="text-xs text-white">Settings</span>
    </div>
  </div>
)
}