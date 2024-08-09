import Image from "next/image";
import SideMenu from "@/app/components/side-menu";
import PeopleList from "@/app/components/people-page-components/people-list";
import PeopleListConversation from "@/app/components/people-page-components/people-list-conversation";
import ChatDetails from "@/app/components/chats/chat-details";
// import ChatConversation from "./components/chat-conversation";
// import ChatDetails from "@/app/components/chat-details";

export default function People() {
  return (
    <div className="flex h-screen bg-[#131313]">
      <SideMenu />
      {/* <PeopleList /> */}
      <PeopleListConversation />  
      <ChatDetails />
    </div>
  );
}
