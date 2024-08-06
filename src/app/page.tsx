import Image from "next/image";
import SideMenu from "./components/side-menu";
import ChatConversation from "./components/chat-conversation";

export default function Home() {
  return (
    <div className="flex h-screen bg-[#131313]">
      <SideMenu />
      <ChatConversation />
    </div>
  );
}
