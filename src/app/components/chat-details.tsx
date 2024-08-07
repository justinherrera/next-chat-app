import { Ban, Bell, Search, TriangleAlert, UserPlus, X } from "lucide-react";


export default function ChatDetails() {
  return (
    <div className="flex flex-col w-[19%] p-4">
      <div className="flex justify-between mt-4 w-full">
        <span className="text-white text-xl mb-1">Chat Details</span>
        <X size={30} color="#FFFFFF" className="cursor-pointer" />
      </div>
      <div className="flex justify-center space-x-4 mt-12">
        <div className="cursor-pointer bg-[#202329] rounded-lg py-4 px-4">
          <Search size={24} color="#FFFFFF" className="cursor-pointer" />
        </div>
        <div className="cursor-pointer bg-[#202329] rounded-lg py-4 px-4">
          <Bell size={24} color="#FFFFFF" className="cursor-pointer" />
        </div>
        <div className="cursor-pointer bg-[#202329] rounded-lg py-4 px-4">
          <UserPlus size={24} color="#FFFFFF" className="cursor-pointer" />
        </div>
        {/* <div className="cursor-pointer bg-[#202329] rounded-lg py-4 px-4">
          <TriangleAlert size={24} color="#FFFFFF" className="cursor-pointer" />
        </div> */}
        <div className="cursor-pointer bg-[#202329] rounded-lg py-4 px-4">
          <Ban size={24} color="#FFFFFF" className="cursor-pointer" />
        </div>
      </div>
      <div className="flex justify-between mt-8 w-full">
        <span className="text-white text-xl mb-1">Media</span>
        <span className="text-[#a3a3a3] text-xs underline mb-1">See all</span>
      </div>
    </div>
  )
}