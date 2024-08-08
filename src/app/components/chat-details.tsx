import { Ban, Bell, Search, TriangleAlert, UserPlus, X, File } from "lucide-react";
import Image from "next/image";

export default function ChatDetails() {
  return (
    <div className="flex flex-col w-[19%] p-4">
      <div className="flex justify-between mt-4 w-full">
        <span className="text-white text-lg mb-1">Chat Details</span>
        <X size={30} color="#FFFFFF" className="cursor-pointer" />
      </div>
      <div className="flex justify-center space-x-4 mt-10">
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
      <div className="flex justify-between items-center mt-8 w-full ">
        <span className="text-white text-lg">Photos and Videos</span>
        <span className="text-[#a3a3a3] text-xs underline cursor-pointer">See all</span>
      </div>
      <div className="grid gap-y-2 grid-cols-3 mt-4">
        <Image src="/media1.jpg" className="rounded-lg w-24 h-20" alt="avatar" width={500} height={500} />
        <Image src="/media1.jpg" className="rounded-lg w-24 h-20" alt="avatar" width={500} height={500} />
        <Image src="/media1.jpg" className="rounded-lg w-24 h-20" alt="avatar" width={500} height={500} />
        <Image src="/media1.jpg" className="rounded-lg w-24 h-20" alt="avatar" width={500} height={500} />
        <Image src="/media1.jpg" className="rounded-lg w-24 h-20" alt="avatar" width={500} height={500} />
        <span className="text-[#a3a3a3] text-base px-8 py-8">32+</span>
      </div>
      <div className="flex justify-between items-center mt-8 w-full ">
        <span className="text-white text-lg">Shared Files</span>
        <span className="text-[#a3a3a3] text-xs underline cursor-pointer">See all</span>
      </div>
      <div className="flex flex-col space-y-4 mt-4">
        <div className="flex justify-start items-center space-x-4">
          <div className="cursor-pointer bg-[#202329] rounded-lg py-4 px-4 w-fit">
            <File size={20} color="#FFFFFF" className="cursor-pointer" />
          </div>
          <span className="text-white text-sm">Endorsement_Letter.pdf</span>
        </div>
        <div className="flex justify-start items-center space-x-4">
          <div className="cursor-pointer bg-[#202329] rounded-lg py-4 px-4 w-fit">
            <File size={20} color="#FFFFFF" className="cursor-pointer" />
          </div>
          <span className="text-white text-sm">Weekly_Report.docx</span>
        </div>
        <div className="flex justify-start items-center space-x-4">
          <div className="cursor-pointer bg-[#202329] rounded-lg py-4 px-4 w-fit">
            <File size={20} color="#FFFFFF" className="cursor-pointer" />
          </div>
          <span className="text-white text-sm">Monthly_Sales.xlsx</span>
        </div>

      </div>
    </div>
  )
}