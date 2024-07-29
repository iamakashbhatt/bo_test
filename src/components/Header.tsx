// components/Header.tsx
import React from "react";
import Image from "next/image";
import menu from "@/assets/images/menu.svg";
import Notification from "@/assets/images/Notification.svg";
import Vector from "@/assets/images/settings.svg";
import Ellipse from "@/assets/images/Ellipse.svg";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="w-full p-4 bg-white text-black flex items-center justify-between fixed top-0 left-0 z-30 shadow-md border-b border-gray-200">
      <div className="flex items-center">
        <Image
          src={menu}
          alt="Menu"
          width={40}
          height={40}
          onClick={toggleSidebar}
          className="cursor-pointer"
        />
      </div>
      <div className="flex space-x-6">
        <Image src={Notification} alt="Notification" width={40} height={40} />
        <Image src={Vector} alt="Settings" width={40} height={40} />
        <Image src={Ellipse} alt="Profile" width={40} height={40} />
      </div>
    </header>
  );
};

export default Header;
