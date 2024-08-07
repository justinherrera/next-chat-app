import Chats from "@/app/components/chats";
import Conversation from "@/app/components/conversation";


export default function ChatConversation() {
  return (
    <div className="flex w-[80%] bg-[#202329] rounded-3xl">
      <Chats />
      <Conversation />
    </div>
  )
}