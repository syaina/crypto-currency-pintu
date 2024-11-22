"use client";

import "./Header.css";

import Link from "next/link";
import PintuLogo from "@/icons/PintuLogo.svg";
import ArrowUp from "@/icons/ArrowUp.svg";
import Image from "next/image";
import HeaderDropdown from "@/components/Header/Header.Dropdown";

const Header: React.FC = () => {
  return (
    <header className="py-8 px-6 md:px-4 md:py-2 lg:px-0 max-w-[1140px] h-[64px] mx-auto flex justify-between items-center">
      <Link href="https://pintu.co.id">
        <PintuLogo />
      </Link>

      <nav className="flex justify-between items-center gap-6">
        <ul className="flex gap-2 items-center">
          <li className="menu flex items-center font-medium text-sm cursor-pointer relative">
            <p className="px-4 py-2">Fitur</p>
            <HeaderDropdown title="FITUR" />
          </li>
          <li className="menu flex items-center font-medium text-sm cursor-pointer relative">
            <p className="px-4 py-2">Trading</p>
            <HeaderDropdown title="TRADING" />
          </li>
          <li className="menu flex items-center font-medium text-sm cursor-pointer relative">
            <p className="px-4 py-2">Edukasi</p>
            <HeaderDropdown title="EDUKASI" className="left-[-150px]" />
          </li>
          <li className="menu flex items-center font-medium text-sm cursor-pointer relative">
            <p className="px-4 py-2">Lainnya</p>
            <HeaderDropdown title="LAINNYA" className="left-[-200px]" />
          </li>
        </ul>

        <div className="flex gap-6 items-center">
          <Link
            href="https://pintu.co.id/download"
            className="flex font-semibold text-sm px-4 py-2 border border-black rounded-full"
          >
            Download App
          </Link>

          <button className="language-switcher flex gap-1 items-center cursor-pointer">
            <Image
              src="https://pintu.co.id/static/images/i18n/id.svg"
              alt="Language Bahasa"
              width={24}
              height={24}
            />
            <ArrowUp className="rotate-180" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
