import { Search } from "lucide-react";

export default function SearchInput() {
  return (
    <div className="flex justify-start items-center bg-[#2E333D] rounded-md py-2 px-4 space-x-2 w-full ">
      <Search color="#9CA3AF" size={20} />
      <input type="text" className="bg-[#2E333D] rounded-md placeholder:text-sm " placeholder="Search" />
    </div>
  )
}