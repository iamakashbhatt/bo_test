// pages/index.tsx
import Image from "next/image";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import reorder from "@/assets/images/Reorder.svg";
import stockValue from "@/assets/images/StockValue.svg";
import outOfStock from "@/assets/images/Outofstock.svg";
import Info from "@/assets/images/Info.svg";
import Arrow from "@/assets/images/arrow.svg";
import settings from "@/assets/images/settings.svg";

import searchIcon from "@/assets/images/table/searchIcon.svg";
import Edit from "@/assets/images/table/Edit.svg";
import History from "@/assets/images/table/History.svg";
import Report from "@/assets/images/table/Report.svg";
import Link from "@/assets/images/table/Link.svg";

import Back from "@/assets/images/pagination/Back.svg";
import Forward from "@/assets/images/pagination/Forward.svg";
import doubleleft from "@/assets/images/pagination/doubleleft.svg";
import doubleright from "@/assets/images/pagination/doubleright.svg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Home: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };
  const [activeTab, setActiveTab] = useState("itemMaster");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  let dummyData = [
    {
      image: stockValue,
      heading: "Stock Value",
      text: "RM over 60 days",
      price: "₹ 3,17,500",
    },
    {
      image: stockValue,
      heading: "Stock Value",
      text: "PM over 60 days",
      price: "₹ 3,17,500",
    },
    {
      image: reorder,
      heading: "Items Below",
      text: "Reorder Level",
      price: "10",
    },
    {
      image: outOfStock,
      heading: "Item Out",
      text: "of Stock",
      price: "10",
    },
  ];
  return (
    <div>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isCollapsed={isSidebarCollapsed} />
      <main
        className="p-4 mt-16 transition-all duration-300"
        style={{ marginLeft: isSidebarCollapsed ? "4rem" : "16rem" }}
      >
        <div className="flex border-b border-gray-300 mb-4">
          <div
            className={`cursor-pointer pb-2 mr-8 ${
              activeTab === "itemMaster"
                ? "text-[#6B54C8] border-b-2 border-[#6B54C8] font-bold"
                : "text-gray-600 font-semibold"
            }`}
            onClick={() => handleTabClick("itemMaster")}
          >
            Item Master
          </div>
          <div
            className={`cursor-pointer pb-2 ${
              activeTab === "stockMovement"
                ? "text-[#6B54C8] border-b-2 border-[#6B54C8] font-bold"
                : "text-gray-600 font-semibold"
            }`}
            onClick={() => handleTabClick("stockMovement")}
          >
            Stock Movement
          </div>
        </div>

        {/* Content for active tab */}
        <div>
          {activeTab === "itemMaster" && (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {dummyData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-lg overflow-hidden flex flex-row items-center p-4"
                    >
                      <Image
                        src={item.image}
                        alt="Card Image"
                        width={20} // Adjust width as needed
                        height={20} // Adjust height as needed
                        className="w-1/3 h-12 w-8 mr-4"
                      />
                      <div className="flex-grow">
                        <p className="text-sm  mb-1">{item.heading}</p>
                        <p
                          className={`text-sm ${
                            index == 0 || index == 1 ? "text-yellow-500" : ""
                          } mb-2`}
                        >
                          {item.text}
                        </p>
                      </div>
                      <div className="font-bold text-lg">{item.price}</div>
                    </div>
                  );
                })}
              </div>
              {/* New Section */}
              <div className="flex justify-between items-center bg-white p-4 rounded-lg ">
                <div className="flex items-center">
                  <p className="text-2xl font-semibold mr-4">Item Master</p>
                  <Image
                    src={Info}
                    alt="Settings Icon"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="flex space-x-4">
                  <button className="flex items-center bg-gray-300 text-[#6B54C8] py-2 px-4 rounded">
                    <Image
                      src={settings}
                      alt="Settings Icon"
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    <span>Action</span>
                    <Image
                      src={Arrow}
                      alt="Down Arrow Icon"
                      width={16}
                      height={16}
                      className="ml-2"
                    />
                  </button>
                  <button className="flex items-center bg-[#6B54C8] text-white py-2 px-4 rounded">
                    +<span>Add Item</span>
                  </button>
                </div>
              </div>
              {/* Categories and Show/Hide Columns */}
              <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <div className="flex space-x-8">
                  {[
                    "Category",
                    "Supply",
                    "Location",
                    "Status",
                    "Show/Hide Columns",
                  ].map((item) => (
                    <div key={item} className="flex flex-col">
                      <p className="font-semibold mb-2">{item}</p>
                      <select className="border border-gray-300 rounded-md p-2 w-48">
                        <option>{`${
                          item == "Show/Hide Columns"
                            ? "13 Column Selected"
                            : "All"
                        }`}</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                      </select>
                    </div>
                  ))}
                </div>
              </div>
              <Table />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;

const data = [
  {
    itemCode: "SKU001",
    itemName: "Product 11",
    category: "Raw Material",
    currentStockLevel: 435,
    reorderStockLevel: 25,
    uom: "Kg",
    loc: "WH 1",
    batchLot: 57559,
    expiryDate: "12/09/2025",
    status: "green",
  },
  {
    itemCode: "SKU002",
    itemName: "Product 12",
    category: "Consumable",
    currentStockLevel: 647,
    reorderStockLevel: 25,
    uom: "Kg",
    loc: "WH 1",
    batchLot: 44024,
    expiryDate: "07/01/2027",
    status: "red",
  },
  {
    itemCode: "SKU003",
    itemName: "Product 13",
    category: "Consumable",
    currentStockLevel: 0,
    reorderStockLevel: 25,
    uom: "Kg",
    loc: "WH 1",
    batchLot: 43112,
    expiryDate: "12/07/2027",
    status: "black",
  },
  {
    itemCode: "SKU004",
    itemName: "Product 14",
    category: "Finished Product",
    currentStockLevel: 234,
    reorderStockLevel: 25,
    uom: "Kg",
    loc: "WH 1",
    batchLot: 69043,
    expiryDate: "21/03/2026",
    status: "green",
  },
  {
    itemCode: "SKU005",
    itemName: "Product 15",
    category: "Finished Product",
    currentStockLevel: 436,
    reorderStockLevel: 25,
    uom: "Kg",
    loc: "WH 1",
    batchLot: 78501,
    expiryDate: "05/11/2025",
    status: "green",
  },
];

const statusColors: any = {
  green: "bg-green-500",
  red: "bg-red-500",
  black: "bg-black",
};

const Table = () => {
  type DataItem = {
    itemCode: string;
    itemName: string;
    category: string;
    currentStockLevel: number;
    reorderStockLevel: number;
    uom: string;
    loc: string;
    batchLot: number;
    expiryDate: string;
    status: string;
  };
  const headerToKeyMap: { [header: string]: keyof DataItem } = {
    "Item Code": "itemCode",
    "Item Name": "itemName",
    Category: "category",
    "Current Stk. Level": "currentStockLevel",
    "Reorder Stk. Lvl.": "reorderStockLevel",
    UOM: "uom",
    "Loc.": "loc",
    "Batch/Lot #": "batchLot",
    "Expiry Date": "expiryDate",
    Status: "status",
    Actions: "status",
  };
  type SortConfig = {
    key: keyof DataItem;
    direction: "ascending" | "descending";
  };
  const [search, setSearch] = useState<string>("");
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);

  const sortedData = React.useMemo(() => {
    let sortableData = [...data];
    if (sortConfig !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData.filter((item) =>
      item.itemName.toLowerCase().includes(search.toLowerCase())
    );
  }, [sortConfig, search]);

  const requestSort = (key: keyof DataItem) => {
    let direction: "ascending" | "descending" = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key: keyof DataItem) => {
    if (sortConfig && sortConfig.key === key) {
      if (sortConfig.direction === "ascending") {
        return "^";
      } else {
        return "v";
      }
    }
    return null;
  };
  return (
    <div className="container mx-auto py-4">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead>
          <tr className="w-full bg-custom-blue  text-white rounded-t-lg">
            {Object.keys(headerToKeyMap).map((header, index) => (
              <th
                key={index}
                className={`py-2 px-4 border-r text-left ${
                  index === 0 ? "rounded-tl-lg" : ""
                } ${
                  index === Object.keys(headerToKeyMap).length - 1
                    ? "rounded-tr-lg"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{header}</span>
                  {header !== "Status" && header !== "Actions" && (
                    <button onClick={() => requestSort(headerToKeyMap[header])}>
                      <IoIosArrowUp />
                      <IoIosArrowDown />
                    </button>
                  )}
                </div>
                {index <= 2 && (
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search"
                      className="p-2 pl-8 w-full text-gray-800 rounded border border-gray-300"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <div className="absolute top-0 left-0 flex items-center h-full pl-2">
                      <Image
                        src={searchIcon}
                        alt="Search Icon"
                        width={16}
                        height={16}
                      />
                    </div>
                  </div>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="py-2 px-4 border-r">{item.itemCode}</td>
              <td className="py-2 px-4 border-r text-primary  flex items-center space-x-2">
                <span className="font-semibold ">{item.itemName}</span>
                <Image
                  src={Link}
                  alt="Edit Icon"
                  width={16}
                  height={16}
                  className="cursor-pointer"
                />
              </td>
              <td className="py-2 px-4 border-r">{item.category}</td>
              <td className="py-2 px-4 border-r flex items-center space-x-2 justify-between">
                <span>{item.currentStockLevel}</span>{" "}
                <Image
                  src={Edit}
                  alt="Edit Icon"
                  width={16}
                  height={16}
                  className="cursor-pointer"
                />
              </td>
              <td className="py-2 px-4 border-r">{item.reorderStockLevel}</td>
              <td className="py-2 px-4 border-r">{item.uom}</td>
              <td className="py-2 px-4 border-r">{item.loc}</td>
              <td className="py-2 px-4 border-r">{item.batchLot}</td>
              <td className="py-2 px-4 border-r">{item.expiryDate}</td>
              <td className="py-2 px-4 border-r">
                <span
                  className={`inline-block w-4 h-4 rounded-full ${
                    statusColors[item.status]
                  }`}
                ></span>
              </td>
              <td className="flex py-2 px-4 justify-around">
                <Image
                  src={History}
                  alt="Edit Icon"
                  width={16}
                  height={16}
                  className="cursor-pointer"
                />{" "}
                <Image
                  src={Report}
                  alt="Edit Icon"
                  width={16}
                  height={16}
                  className="cursor-pointer"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center items-center p-4">
        <div className="flex items-center space-x-4">
          {/* Text for Rows per Page */}
          <span className="text-sm">Rows per page:</span>

          {/* Items Per Page Dropdown */}
          <select className="p-2 border rounded" defaultValue="10" disabled>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>

          <div className="flex">
            <Image
              src={doubleleft}
              alt="Edit Icon"
              width={16}
              height={16}
              className="cursor-pointer"
            />{" "}
            <Image
              src={Back}
              alt="Edit Icon"
              width={16}
              height={16}
              className="cursor-pointer"
            />{" "}
            <span className="text-sm">1</span>
            <Image
              src={Forward}
              alt="Edit Icon"
              width={16}
              height={16}
              className="cursor-pointer"
            />{" "}
            <Image
              src={doubleright}
              alt="Edit Icon"
              width={16}
              height={16}
              className="cursor-pointer"
            />
          </div>
          <span className="text-sm">{`1 to 10 of 12`}</span>
        </div>
      </div>
    </div>
  );
};
