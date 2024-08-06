import { EllipsisVertical, Paperclip } from "lucide-react";
import Image from "next/image";
import UserChatInfo from "@/app/components/user-chat-info";

export default function Conversation() {
  return (
    <div className="p-4 w-[75%] flex flex-col">
      <UserChatInfo />
      <div className="mt-auto">
        <Paperclip />
        <input type="text" className="" placeholder="Your messsage" />
      </div>
     
    </div>
  )
}