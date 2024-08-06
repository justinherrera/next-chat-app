import { EllipsisVertical, Mic, Paperclip, SendHorizontal } from "lucide-react";
import Image from "next/image";
import UserChatInfo from "@/app/components/user-chat-info";
import ChatInput from "./chat-input";

export default function Conversation() {
  return (
    <div className="p-4 w-[75%] flex flex-col">
      <UserChatInfo />
      <div className="flex items-center mt-auto px-4">
        <ChatInput />
        <SendHorizontal color="#9CA3AF" size={20} className="cursor-pointer" />
      </div>
     
    </div>
  )
}