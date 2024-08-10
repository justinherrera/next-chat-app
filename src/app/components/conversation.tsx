import { SendHorizontal } from "lucide-react";
import Image from "next/image";
import UserChatInfo from "@/app/components/chats/user-chat-info";
import ChatInput from "./chat-input";
import ChatDetails from "./chats/chat-details";

export default function Conversation() {
  return (
    <div className="pl-0 pr-0 py-0 w-[75%] flex">
      <div className="pl-4 flex flex-col w-full rounded-r-3xl bg-[#202329] mb-4">
        <UserChatInfo />
        <div className="flex flex-col space-y-4 h-full w-full p-4 overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] ">

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
          <div className="flex flex-col justify-start w-full">
            <div className="flex bg-[#2E333D] p-4 rounded-lg rounded-bl-none w-fit">
              <span className="text-white text-sm">Okay! See you later.</span>
            </div>
          </div>
          <div className="flex flex-col justify-end items-end w-full">
            <div className="flex bg-[#6B8AFD] p-4 rounded-lg rounded-br-none">
              <span className="text-white text-sm">Great.</span>
            </div>
            <span className="text-[#828498] text-xs mt-1 mr-2 block ">Seen</span>
          </div>



        </div>
        <div className="flex items-center mt-auto mb-4 px-4">
          <ChatInput />
          <SendHorizontal color="#9CA3AF" size={20} className="cursor-pointer" />
        </div>
      
      </div>
      <ChatDetails />
    </div>
    
  )
}