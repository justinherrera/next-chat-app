import Image from "next/image";


export default function UserChat({ user, key }: { user: any, key: number }) {
  return (
    <div className={`flex space-x-2 px-2 rounded-lg py-2 cursor-pointer hover:bg-[#2E333D] ${key === 0 ? "bg-[#2E333D]" : ""} `} key={key}>
      <Image src={user.avatar} className="rounded-lg w-16 h-16" alt="avatar" width={500} height={500} />
      <div className="flex flex-col space-y-1 w-full">
        <span className="text-white mb-1">{user.name}</span>
        <span className="text-sm text-[#a3a3a3]">{user.message}</span>
      </div>
      <div className="w-20 ">
        <span className="text-xs text-[#a3a3a3]">{user.time}</span>
      </div>
    </div>
  )
}