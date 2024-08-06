import Chats from "@/app/components/chats";
import Conversation from "@/app/components/conversation";


export default function ChatConversation() {
  return (
    <div className="flex w-[94%] bg-[#202329] ">
      <Chats />
      <Conversation />
    </div>
  )
}