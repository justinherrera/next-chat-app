import { EllipsisVertical, Phone, Video } from "lucide-react";
import Image from "next/image";

export default function UserChatInfo() {
  return (
    <div className="flex space-x-2 px-2 py-2">
      <Image src="/avatar1.jpg" className="rounded-lg w-12 h-12" alt="avatar" width={500} height={500} />
      <div className="flex items-center w-full">
        <span className="text-white text-xl mb-1">Kim Zairra</span>
        <div className="flex space-x-6 ml-auto">
          <Phone color="#828498" className="cursor-pointer" />
          <Video color="#828498" className="cursor-pointer" />
          <EllipsisVertical color="#828498" className="cursor-pointer" />
        </div>

      </div>
    </div>
  )
}