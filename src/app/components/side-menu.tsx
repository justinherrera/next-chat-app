"use client"

import { MessageCircle, UserPlus, Users, Archive, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


export default function SideMenu() {
  const params = usePathname()
  const router = useRouter()
  console.log(params)
  return (
  <div className="flex flex-col h-full w-[5%] p-4">
    <div className="flex flex-col space-y-4">
      <div className={`flex flex-col justify-center items-center space-y-2 cursor-pointer ${params === "/" ? "bg-[#464646]" : ""} rounded-lg py-2 px-4`} onClick={() => router.push("/")}>
        <MessageCircle color={params === "/" ? "#FFFFFF" : "#9c9c9c"} size={24} />
        <span className={`text-xs ${params === "/" ? "text-white" : "text-[#9c9c9c]"}`}>Chats</span>
      </div>
      <div className={`flex flex-col justify-center items-center space-y-2 cursor-pointer ${params === "/people" ? "bg-[#464646]" : ""} rounded-lg py-2 px-4`} onClick={() => router.push("/people")}>
        <Users color={params === "/people" ? "#FFFFFF" : "#9c9c9c"} size={24} />
        <span className={`text-xs ${params === "/people" ? "text-white" : "text-[#9c9c9c]"}`}>People</span>
      </div>
      <div className={`flex flex-col justify-center items-center space-y-2 cursor-pointer ${params === "/requests" ? "bg-[#464646]" : ""} rounded-lg py-2 px-4`} onClick={() => router.push("/requests")}>
        <UserPlus color={params === "/requests" ? "#FFFFFF" : "#9c9c9c"} size={24} />
        <span className={`text-xs ${params === "/requests" ? "text-white" : "text-[#9c9c9c]"}`}>Requests</span>
      </div>
      <div className={`flex flex-col justify-center items-center space-y-2 cursor-pointer ${params === "/archive" ? "bg-[#464646]" : ""} rounded-lg py-2 px-4`} onClick={() => router.push("/archieve")}>
        <Archive color={params === "/archieve" ? "#FFFFFF" : "#9c9c9c"} size={24} />
        <span className={`text-xs ${params === "/archieve" ? "text-white" : "text-[#9c9c9c]"}`}>Archive</span>
      </div>
    </div>

    <div className="flex flex-col justify-center items-center space-y-2 cursor-pointer mt-auto">
      <Settings color="#9c9c9c" size={24} />
      <span className="text-xs text-[#9c9c9c]">Settings</span>
    </div>
  </div>
)
}