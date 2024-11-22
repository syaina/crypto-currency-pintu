"use client";

import SearchIcon from "@/icons/Search.svg";

import { useState } from "react";
import SearchResult from "@/components/SearchResult";

const PageTitle: React.FC = () => {
  const [isShowSearchResult, setIsShowSearchResult] = useState<boolean>(false);

  const handleShowSearchResult = () => {
    setIsShowSearchResult(!isShowSearchResult);
  };

  return (
    <div className="heading flex justify-between items-center mb-8">
      <h1 className="text-xl md:text-[28px] md:leading-[34px] font-semibold  font-secondary">
        Harga Crypto dalam Rupiah Hari Ini
      </h1>

      <div className="relative flex gap-4 py-3 px-4 h-[44px] bg-[rgba(242,242,242,1)] rounded-lg w-[24rem] cursor-pointer">
        {isShowSearchResult ? (
          <SearchResult handleShowSearchResult={handleShowSearchResult} />
        ) : (
          <button
            onClick={handleShowSearchResult}
            className="flex gap-4 cursor-pointer absolute top-0 left-0 py-3 px-4 w-full h-[44px]"
          >
            <SearchIcon />
            <div className="text-sm">
              <p className="text-[rgba(146,147,150,1)]">Cari aset di Pintu</p>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default PageTitle;
