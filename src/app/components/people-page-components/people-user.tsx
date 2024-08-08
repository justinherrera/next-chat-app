import Image from "next/image";

const users = [
  {
    id: 1,
    name: "Kim Zairra",
    avatar: "/avatar1.jpg",
  },
  {
    id: 2,
    name: "John Doe",
    avatar: "/avatar2.jpg",
  },
  {
    id: 3,
    name: "Jack Smith",
    avatar: "/avatar3.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    avatar: "/avatar5.jpg",
  },
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
export default function PeopleUser() {
  return (
    <div className="flex flex-col space-y-2">
      {
        users.map((user, index) => {
          return (<div className="flex space-x-2 px-2 rounded-lg py-2 cursor-pointer hover:bg-[#2E333D]" key={user.id}>
            <Image src={user.avatar} className="rounded-lg w-12 h-12" alt="avatar" width={500} height={500} />
            <div className="flex flex-col space-y-1 w-full">
              <span className="text-white ">{user.name}</span>
            </div>
          </div>)
        })
      }
     
    </div>

  )
}