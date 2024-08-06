import { EllipsisVertical, Mic, Paperclip, SendHorizontal } from "lucide-react";
import Image from "next/image";
import UserChatInfo from "@/app/components/user-chat-info";
import ChatInput from "./chat-input";

export default function Conversation() {
  return (
    <div className="p-4 w-[75%] flex flex-col">
      <UserChatInfo />
      <div className="flex flex-col space-y-4 h-full w-full p-4 overflow-y-scroll">

        <div className="flex justify-end w-full">
          <div className="flex bg-[#6B8AFD] p-4 rounded-lg rounded-br-none">
            <span className="text-white text-sm">Hey!</span>
          </div>
        </div>
        <div className="flex justify-end w-full">
          <div className="flex bg-[#6B8AFD] p-4 rounded-lg rounded-br-none">
            <span className="text-white text-sm">I heard that you got promoted.</span>
          </div>
        </div>
        <div className="flex justify-end w-full">
          <div className="flex bg-[#6B8AFD] p-4 rounded-lg rounded-br-none">
            <span className="text-white text-sm">Lets have a dinner tonight and celebrate your promotion.</span>
          </div>
        </div>
        <div className="flex justify-start w-full">
          <div className="flex bg-[#2E333D] p-4 rounded-lg rounded-bl-none w-fit">
            <span className="text-white text-sm">Yes, sure. I will be there after shift</span>
          </div>
        </div>
        <div className="flex justify-start w-full">
          <div className="flex bg-[#2E333D] p-4 rounded-lg rounded-bl-none w-fit">
            <span className="text-white text-sm">Are we going to invite some friends?</span>
          </div>
        </div>
        <div className="flex justify-end w-full">
          <div className="flex bg-[#6B8AFD] p-4 rounded-lg rounded-br-none">
            <span className="text-white text-sm">Yes but they are still in the meeting.</span>
          </div>
        </div>
        <div className="flex justify-end w-full">
          <div className="flex bg-[#6B8AFD] p-4 rounded-lg rounded-br-none">
            <span className="text-white text-sm">Lets meet in the cafeteria.</span>
          </div>
        </div>
        <div className="flex justify-end w-full">
          <div className="flex bg-[#6B8AFD] p-4 rounded-lg rounded-br-none">
            <span className="text-white text-sm">I will tell them after the meeting.</span>
          </div>
        </div>
        <div className="flex justify-start w-full">
          <div className="flex bg-[#2E333D] p-4 rounded-lg rounded-bl-none w-fit">
            <span className="text-white text-sm">Okay! See you later.</span>
          </div>
        </div>


      </div>
      <div className="flex items-center mt-auto px-4">
        <ChatInput />
        <SendHorizontal color="#9CA3AF" size={20} className="cursor-pointer" />
      </div>
     
    </div>
  )
}