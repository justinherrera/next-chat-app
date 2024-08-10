import Image from "next/image";
import SideMenu from "@/app/components/side-menu";
import ChatConversation from "./components/chats/chat-conversation";
import ChatDetails from "@/app/components/chats/chat-details";

export default function Home() {
  return (
    <div className="flex h-screen bg-[#131313] pt-4">
      <SideMenu />
      <ChatConversation />
    </div>
  );
}
