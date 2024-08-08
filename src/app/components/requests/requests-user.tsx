import { CircleCheck, CircleX } from "lucide-react";
import Image from "next/image";

const users = [
  {
    id: 5,
    name: "Michael Brown",
    avatar: "/avatar4.jpg",
  },
  {
    id: 6,
    name: "Sarah Johnson",
    avatar: "/avatar6.jpg",
  },
  {
    id: 7,
    name: "James Wilson",
    avatar: "/avatar2.jpg",
  },
  {
    name: "Robert Miller",
    avatar: "/avatar3.jpg",
  },
  {
    id: 9,
    name: "David Martinez",
    avatar: "/avatar4.jpg",
  },
  {
    id: 10,
    name: "Aliah Anderson",
    avatar: "/avatar1.jpg",
  },
];
export default function RequestsUser() {
  return (
    <div className="flex flex-col space-y-2">
      {
        users.map((user, index) => {
          return (<div className="flex space-x-2 px-2 rounded-lg py-2 cursor-pointer hover:bg-[#2E333D]" key={user.id}>
            <Image src={user.avatar} className="rounded-lg w-12 h-12" alt="avatar" width={500} height={500} />
            <div className="flex space-y-1 w-full">
              <div className="flex flex-col space-y-1 w-full">
                <span className="text-white ">{user.name}</span>
                <span className="text-sm text-[#828498]">Please accept my request</span>
              </div>
              <div className="flex space-x-2 ml-auto">
                <CircleCheck color="#9c9c9c" size={22} />
                <CircleX color="#9c9c9c" size={22}  />
              </div>
            </div>
          </div>)
        })
      }
     
    </div>

  )
}