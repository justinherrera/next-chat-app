import { EllipsisVertical } from "lucide-react";
import Image from "next/image";

export default function UserChatInfo() {
  return (
    <div className="flex space-x-2 px-2 py-2 cursor-pointer">
      <Image src="/avatar1.jpg" className="rounded-lg w-12 h-12" alt="avatar" width={500} height={500} />
      <div className="flex items-center w-full">
        <span className="text-white text-xl mb-1">Kim Zairra</span>
        <EllipsisVertical className="ml-auto" color="#2E333D" />
      </div>
    </div>
  )
}