import React, { ReactElement } from "react";
import Link from "next/link";
import NavLink  from "next/link";
import {
  HomeModernIcon,
  ChartPieIcon,
  BellAlertIcon,
  ClipboardDocumentListIcon,
  PowerIcon,
  CogIcon,
} from "@heroicons/react/20/solid";
import { title } from "process";

type MenuItem = {
  name: string;
  icon: ReactElement | null;
  link: string;
  isActive: boolean;
};
const menu1: MenuItem[] = [
  {
    name: "Home",
    icon: <HomeModernIcon width={18} className="text-gray-800" />,
    link: "/",
    isActive: true,
  },
  {
    name: "Category",
    icon: <ChartPieIcon width={18} className="text-gray-800" />,
    link: "/category",
    isActive: false,
  },
  {
    name: "Jenis",
    icon: <BellAlertIcon width={18} className="text-gray-800" />,
    link: "/jenis",
    isActive: false,
  },
];
const menu2: MenuItem[] = [
  {
    name: "Menu",
    icon: <ClipboardDocumentListIcon width={18} className="text-gray-800" />,
    link: "/menu",
    isActive: false,
  },
  {
    name: "Stok",
    icon: <ChartPieIcon width={18} className="text-gray-800" />,
    link: "/stok",
    isActive: false,
  },
  {
    name: "Pelanggan",
    icon: <ChartPieIcon width={18} className="text-gray-800" />,
    link: "/pelanggan",
    isActive: false,
  },
  {
    name: "Meja",
    icon: <ChartPieIcon width={18} className="text-gray-800" />,
    link: "/meja",
    isActive: false,
  },
  {
    name: "Pemesanan",
    icon: <ChartPieIcon width={18} className="text-gray-800" />,
    link: "/pemesanan",
    isActive: false,
  },
];
const menu3: MenuItem[] = [
  {
    name: "Login",
    icon: <PowerIcon width={18} className="text-gray-800" />,
    link: "/",
    isActive: false,
  },
  {
    name: "Register",
    icon: <ChartPieIcon width={18} className="text-gray-800" />,
    link: "/category",
    isActive: false,
  },
  {
    name: "Eror",
    icon: <BellAlertIcon width={18} className="text-gray-800" />,
    link: "/jenis",
    isActive: false,
  },
];

const Menus: React.FC<{ menu: MenuItem[] }> = ({ menu }) => {
  return (
    <div className="py-5">
      <h6 className="mb-4 text-xs sm:text-sm text-center sm:text-left sm:px-5">{title}</h6>
      <ul>
        {menu.map((menu, index) => {
          const menuActive = menu.isActive
            ? "bg-blue-300 bg-opacity-30 px-3 border border-blue-100 text-blue-800 py-2 flex"
            : "px-3 py-2 flex";
          const textActive = menu.isActive ? "text-blue-800" : "text-gray-700";
          return (
            <li key={index} className={`${menuActive} cursor-pointer`}>
              <NavLink href={menu.link} className="flex">
                {menu.icon}
                <div
                  className={`ml-2 text-gray-800${textActive} hidden sm:block`}
                >
                  {menu.name}
                </div>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const MainHeader = () => {
  return (
    <div className="App">
      <section className="w-20 sm:w-64 bg-indigo-600	 h-screen">
        <div className="border-b p-5 text-center sm:text-left">
          <span className="sm:block">Coffee Shop</span>
          {/* <span className="sm:hidden">DUI</span> */}
        </div>
        <div className="p-5 border-b text-sm">
          <Menus menu={menu1} />
        </div>
        <div className="p-5 border-b text-sm">
          <Menus menu={menu2} />
        </div>
        <div className="p-5 border-b text-sm">
          <Menus menu={menu3} />
        </div>
        <div className="flex mx-5 mt-8 bg-neutral-200 bg-opacity-5 border border-blue-100 rounded-md p-1 sm:p-2">
          <img
            src="https://i.pinimg.com/564x/2f/f6/4f/2ff64fb1e3e540e0dae7bd0fb691eb86.jpg"
            alt="img-profile"
            className="object-over w-8 h-8 sm:w-10 sm:h-10 rounded-full"
          />
          <div className="flex-1 ml-3 items-center text-gray-900 hidden sm:block">
            <div className="text-md">D I N O</div>
            <div className="text-xs">Administrator</div>
          </div>
          <CogIcon width={18} />
        </div>
      </section>
    </div>
  );
};

export default MainHeader;
