import Image from "next/image";


export default function UserChat({ user }: { user: any }) {
  return (
    <div className={`flex space-x-2 px-2 rounded-lg py-2 cursor-pointer hover:bg-[#2E333D] ${user.id === 1 ? "bg-[#2E333D]" : ""} `} key={user.id}>
      <Image src={user.avatar} className="rounded-lg w-16 h-16" alt="avatar" width={500} height={500} />
      <div className="flex flex-col space-y-1 w-full">
        <span className="text-white mb-1">{user.name}</span>
        <span className="text-sm text-[#828498]">{user.message}</span>
      </div>
      <div className="flex flex-col w-20 h-auto">
        <span className="text-xs text-[#a3a3a3]">{user.time}</span>
        <div className="mt-auto flex justify-center items-center mb-2 w-full">
          <span className="text-xs text-white  text-center bg-[#6B8AFD] px-2 rounded-full ">2</span>
        </div>
        
      </div>
      
    </div>
  )
}