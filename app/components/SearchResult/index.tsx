'use client';

import SearchIcon from '@/icons/Search.svg';
import CrossIcon from '@/icons/Cross.svg';
import Image from 'next/image';

interface SearchResultProps {
  isShow: boolean;
  handleShowSearchResult: () => void;
}

const SearchResult = (props: SearchResultProps) => {
  return (
    <div
      className={`search-container ${
        props.isShow ? '' : 'hidden'
      } absolute top-0 left-0 w-full bg-white border rounded-lg`}
    >
      <div className="flex gap-4 py-3 px-4 m-4 mb-0 bg-[rgb(242,242,242)] rounded-lg">
        <SearchIcon />
        <div className="text-sm text-[rgba(146,147,150,1)]">
          Cari aset di Pintu
        </div>
        <CrossIcon
          className="absolute right-[2rem] cursor-pointer z-10"
          onClick={props.handleShowSearchResult}
        />
      </div>
      <div className="search-result-wrapper h-[20rem] overflow-y-scroll px-4 mt-4">
        {/* {Array.from({ length: 100 }).map(() => (
          <a
            href="https://pintu.co.id/market/btc"
            className="search-card flex justify-between items-center p-2 mb-2 cursor-pointer hover:bg-[rgb(242,242,242)] rounded-lg"
          >
            <div className="flex items-center">
              <Image
                src="https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_BTC.svg"
                alt="Bitcoin"
                width={16}
                height={16}
                className="mr-2"
              />
              <p className="font-medium text-base">Bitcoin</p>
            </div>
            <p className="font-normal text-base text-[rgb(135,137,140)]">BTC</p>
          </a>
        ))} */}
      </div>
    </div>
  );
};

export default SearchResult;
