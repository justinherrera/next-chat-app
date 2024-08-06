import { EllipsisVertical } from "lucide-react";
import Image from "next/image";
import UserChatInfo from "@/app/components/user-chat-info";

export default function Conversation() {
  return (
    <div className="p-4 w-[75%]">
      <UserChatInfo />
    </div>
  )
}