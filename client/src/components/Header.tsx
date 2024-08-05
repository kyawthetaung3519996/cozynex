import {
  IoHomeSharp,
  IoChatbubbleEllipsesSharp,
  IoNotificationsCircleSharp,
  IoPersonAdd,
  IoPeopleSharp,
  IoSearchSharp,
} from "react-icons/io5";
import user_logo from "./../assets/images/user.jpg";

function Header() {
  return (
    <div className="flex justify-between items-center shadow-md p-2 bg-white">
      <div className="flex gap-2 md:gap-8 lg:gap-16">
        <img src="/cozynex_logo.png" alt="logo" className="w-10 h-10" />
        
        <div className="flex items-center border-2 rounded-lg px-2">
          <IoSearchSharp className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none ml-2 hidden lg:block"
          />
        </div>
      </div>

      <ul className="gap-2 md:gap-8 lg:gap-16 hidden md:flex">
        <li className="flex flex-col items-center hover:text-blue-500 cursor-pointer">
          <IoHomeSharp className="text-[20px]" />
          <span className="text-[12px]">Home</span>
        </li>
        <li className="flex flex-col items-center hover:text-blue-500 cursor-pointer">
          <IoPersonAdd className="text-[20px]" />
          <span className="text-[12px]">Network</span>
        </li>
        <li className="flex flex-col items-center hover:text-blue-500 cursor-pointer">
          <IoPeopleSharp className="text-[20px]" />
          <span className="text-[12px]">Group</span>
        </li>
      </ul>

      <ul className="flex gap-2 md:gap-8 lg:gap-16 items-center">
        <li className="flex flex-col items-center hover:text-blue-500 cursor-pointer">
          <IoChatbubbleEllipsesSharp className="text-[20px]" />
          <span className="text-[12px]">Message</span>
        </li>
        <li className="flex flex-col items-center hover:text-blue-500 cursor-pointer">
          <IoNotificationsCircleSharp className="text-[20px]" />
          <span className="text-[12px]">Notifications</span>
        </li>
        <li className="flex flex-col items-center hover:text-blue-500 cursor-pointer">
          <img src={user_logo} alt="user" className="W-9 h-9 rounded-full" />
        </li>
      </ul>
    </div>
  );
}

export default Header;
