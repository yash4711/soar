import { Bell, Search, Menu } from "lucide-react";
import { useSelector } from "react-redux";

export function Header({ onMenuClick, title = "Overview" }) {
  const profilePhoto = useSelector((state) => state?.auth?.user?.profilePhoto);
  return (
    <header className="h-16 border-b border-gray-200 bg-white px-4 sm:px-6 flex items-center justify-between">
      <div className="flex items-center">
        <button
          className="mr-4 p-2 lg:hidden"
          onClick={onMenuClick}
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-xl sm:text-2xl font-semibold text-[#2B3674]">
          {title}
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A3AED0]" />
          <input
            className="w-64 sm:w-80 pl-10 pr-4 py-2 rounded-full bg-[#F4F7FE] border-none text-[#2B3674] placeholder-[#A3AED0]"
            placeholder="Search for something"
            type="search"
          />
        </div>
        <button className="relative p-2 hover:bg-gray-100 rounded-full">
          <Bell className="w-6 h-6 text-[#A3AED0]" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>
        <img
          src={profilePhoto ?? "/placeholder.svg?height=40&width=40"}
          alt="Profile"
          className="w-8 cursor-pointer h-8 sm:w-10 sm:h-10 rounded-full"
        />
      </div>
    </header>
  );
}
