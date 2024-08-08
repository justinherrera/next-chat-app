import Image from "next/image";
import SideMenu from "@/app/components/side-menu";
import ChatConversation from "./components/chat-conversation";
import ChatDetails from "@/app/components/chat-details";

export default function Home() {
  return (
    <div className="flex h-screen bg-[#131313]">
      <SideMenu />
      <ChatConversation />
      <ChatDetails />
    </div>
  );
}
