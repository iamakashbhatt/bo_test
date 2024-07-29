// components/Sidebar.tsx
import Image from "next/image";
import React, { useState } from "react";
import sidebar_1 from "@/assets/images/sidebar/sidebar1.svg";
import sidebar_2 from "@/assets/images/sidebar/sidebar2.svg";
import sidebar_3 from "@/assets/images/sidebar/sidebar3.svg";
import sidebar_4 from "@/assets/images/sidebar/sidebar4.svg";
import sidebar_5 from "@/assets/images/sidebar/sidebar5.svg";
import sidebar_6 from "@/assets/images/sidebar/sidebar6.svg";

interface SidebarProps {
  isCollapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed }) => {
  const [activeIndex, setActiveIndex] = useState(0); // Default to first icon

  const sidebarIcons = [
    {
      icons: sidebar_1,
      text: "Inventory",
    },
    {
      icons: sidebar_6,
      text: "Purchase Order",
    },
    {
      icons: sidebar_5,
      text: "GRN",
    },
    {
      icons: sidebar_4,
      text: "Vender Management",
    },
    {
      icons: sidebar_2,
      text: "Material Management",
    },
    {
      icons: sidebar_3,
      text: "Warehouse Management",
    },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-screen p-4 transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      } z-20`}
    >
      <nav className={`flex flex-col items-start space-y-6 mt-24`}>
        {sidebarIcons.map((item, index) => (
          <div
            key={index}
            className={`flex items-center p-2 cursor-pointer transition-colors duration-300 ${
              activeIndex === index
                ? "bg-blue-100 text-blue-800 rounded-lg"
                : "hover:bg-gray-200 rounded-full"
            } ${!isCollapsed ? "w-full" : ""}`} // Full width when expanded
            onClick={() => setActiveIndex(index)}
          >
            <Image
              src={item.icons}
              alt={`Sidebar icon ${index + 1}`}
              width={24}
              height={24}
              className={`transition-transform duration-300 ${
                activeIndex === index ? "scale-125" : "scale-100"
              }`}
            />
            {!isCollapsed && (
              <p className="ml-3 text-sm font-medium truncate">{item.text}</p> // Added truncate to handle overflow
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
