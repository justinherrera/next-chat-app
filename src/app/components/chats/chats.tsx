import { Search } from "lucide-react";
import SearchInput from "@/app/components/search-input";
import UserChat from "@/app/components/user-chat";


const users = [
  {
    id: 1,
    name: "Kim Zairra",
    avatar: "/avatar1.jpg",
    message: "Okay! See you later.",
    time: "1:27 AM"
  },
  {
    id: 2,
    name: "John Doe",
    avatar: "/avatar2.jpg",
    message: "Are we still on for the meeting?",
    time: "2:15 PM"
  },
  {
    id: 3,
    name: "Jack Smith",
    avatar: "/avatar3.jpg",
    message: "Can you send me the report?",
    time: "3:45 PM"
  },
  {
    id: 4,
    name: "Emily Davis",
    avatar: "/avatar5.jpg",
    message: "Happy birthday!",
    time: "4:30 PM"
  },
  {
    id: 5,
    name: "Michael Brown",
    avatar: "/avatar4.jpg",
    message: "Let's catch up soon.",
    time: "5:20 PM"
  },
  {
    id: 6,
    name: "Sarah Johnson",
    avatar: "/avatar6.jpg",
    message: "I've sent the files.",
    time: "6:10 PM"
  },
  {
    id: 7,
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
    id: 9,
    name: "David Martinez",
    avatar: "/avatar4.jpg",
    message: "Looking forward to our meeting.",
    time: "9:25 PM"
  },
  {
    id: 10,
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
    <div className="p-4 pr-0 pb-0 flex flex-col space-y-4 w-[25%] bg-[#202329] rounded-l-3xl mb-4">
      <SearchInput />
      <div className="overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {
        users.map((user, index) => {
          return <UserChat user={user} key={index} />
        })
      }
      </div>

    </div>
  )
}