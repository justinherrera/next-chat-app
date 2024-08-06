import { Search } from "lucide-react";
import SearchInput from "@/app/components/search-input";
import Image from "next/image";

const users = [
  {
    name: "Kim Zairra",
    avatar: "/avatar1.jpg",
    message: "Hello, how are you?",
    time: "1:27 AM"
  },
  {
    name: "John Doe",
    avatar: "/avatar2.jpg",
    message: "Are we still on for the meeting?",
    time: "2:15 PM"
  },
  {
    name: "Jack Smith",
    avatar: "/avatar3.jpg",
    message: "Can you send me the report?",
    time: "3:45 PM"
  },
  {
    name: "Emily Davis",
    avatar: "/avatar5.jpg",
    message: "Happy birthday!",
    time: "4:30 PM"
  },
  {
    name: "Michael Brown",
    avatar: "/avatar4.jpg",
    message: "Let's catch up soon.",
    time: "5:20 PM"
  },
  {
    name: "Sarah Johnson",
    avatar: "/avatar6.jpg",
    message: "I've sent the files.",
    time: "6:10 PM"
  },
  {
    name: "James Wilson",
    avatar: "/avatar2.jpg",
    message: "Did you finish the project?",
    time: "7:00 PM"
  },
  {
    name: "Robert Miller",
    avatar: "/avatar3.jpg",
    message: "I'll be there in 10 minutes.",
    time: "8:15 PM"
  },
  {
    name: "David Martinez",
    avatar: "/avatar4.jpg",
    message: "Looking forward to our meeting.",
    time: "9:25 PM"
  },
  {
    name: "Aliah Anderson",
    avatar: "/avatar1.jpg",
    message: "Can we reschedule?",
    time: "10:35 PM"
  },
  // {
  //   name: "Wendy Thomas",
  //   avatar: "/avatar6.jpg",
  //   message: "I'll send you the details.",
  //   time: "11:45 PM"
  // }
];



export default function Chats() {
  return (
    <div className="p-4 pb-0 flex flex-col space-y-4 w-[25%]">
      <SearchInput />
      <div className="overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {
        users.map((user, index) => {
          return (<div className={`flex space-x-2 px-2 rounded-lg py-2 cursor-pointer hover:bg-[#2E333D] ${index === 0 ? "bg-[#2E333D]" : ""} `} key={index}>
            <Image src={user.avatar} className="rounded-lg w-16 h-16" alt="avatar" width={500} height={500} />
            <div className="flex flex-col space-y-1 w-full">
              <span className="text-white mb-1">{user.name}</span>
              <span className="text-sm text-[#a3a3a3]">{user.message}</span>
            </div>
            <div className="w-20 ">
              <span className="text-xs text-[#a3a3a3]">{user.time}</span>
            </div>
          </div>)
        })
      }
      </div>

    </div>
  )
}