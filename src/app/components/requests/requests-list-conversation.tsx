import Chats from "@/app/components/chats";
import Conversation from "@/app/components/conversation";
import PeopleList from "@/app/components/people-page-components/people-list";
import RequestsList from "@/app/components/requests/requests-list";


export default function RequestsListConversation() {
  return (
    <div className="flex w-[76%] bg-[#202329] rounded-3xl">
      <RequestsList />
      <Conversation />
    </div>
  )
}