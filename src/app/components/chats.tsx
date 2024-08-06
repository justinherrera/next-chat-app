import { Search } from "lucide-react";
import SearchInput from "@/app/components/search-input";
import Image from "next/image";

const users = [
  {
    name: "Kim Zairra",
    avatar: "/avatar1.jpg",
    message: "Hello, how are you?",
    time: "1:27 AM"
  }
]


export default function Chats() {
  return (
    <div className="p-4 flex flex-col space-y-4 w-[25%]">
      <SearchInput />
      {
        users.map((user, index) => {
          return (<div className="flex space-x-2 px-2 bg-[#2E333D] rounded-lg py-2 cursor-pointer " key={index}>
            <Image src={user.avatar} className="rounded-lg" alt="avatar" width={50} height={50} />
            <div className="flex flex-col space-y-1 w-full">
              <span className="text-white">{user.name}</span>
              <span className="text-xs text-[#a3a3a3]">{user.message}</span>
            </div>
            <div className="w-20 ">
              <span className="text-xs text-[#a3a3a3]">{user.time}</span>
            </div>
          </div>)
        })
      }
    </div>
  )
}