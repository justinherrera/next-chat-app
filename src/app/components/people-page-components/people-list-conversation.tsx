import Chats from "@/app/components/chats/chats";
import Conversation from "@/app/components/conversation";
import PeopleList from "@/app/components/people-page-components/people-list";


export default function ChatConversation() {
  return (
    <div className="flex w-[76%] bg-[#202329] rounded-3xl">
      <PeopleList />
      <Conversation />
    </div>
  )
}