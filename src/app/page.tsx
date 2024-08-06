import Image from "next/image";
import SideMenu from "./components/side-menu";

export default function Home() {
  return (
    <div className="flex h-screen">
      <SideMenu />
    </div>
  );
}
