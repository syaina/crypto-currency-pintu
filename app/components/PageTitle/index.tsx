'use client';

import SearchIcon from '@/icons/Search.svg';

import { useState } from 'react';
import dynamic from 'next/dynamic';

const SearchResult = dynamic(() => import('@/components/SearchResult'));

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
      <button
        onClick={handleShowSearchResult}
        className="flex gap-4 py-3 px-4 bg-[rgba(242,242,242,1)] rounded-lg w-[24rem] relative cursor-pointer"
      >
        <SearchIcon />
        <div className="text-sm">
          <p className="text-[rgba(146,147,150,1)]">Cari aset di Pintu</p>
        </div>

        <SearchResult
          isShow={isShowSearchResult}
          handleShowSearchResult={handleShowSearchResult}
        />
      </button>
    </div>
  );
};

export default PageTitle;
