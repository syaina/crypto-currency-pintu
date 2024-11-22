"use client";

import Image from "next/image";
import Link from "next/link";

interface SearchResultListProps {
  name: string;
  logo: string;
  symbol: string;
}

const SearchResultList = (props: SearchResultListProps) => {
  return (
    <Link
      href={`https://pintu.co.id/market/${props.symbol.toLowerCase()}`}
      className="search-card flex justify-between items-center p-2 mb-2 cursor-pointer hover:bg-[rgb(242,242,242)] rounded-lg"
    >
      <div className="flex items-center">
        <Image
          src={props.logo}
          alt={props.name}
          width={16}
          height={16}
          className="mr-2"
        />
        <p className="font-medium text-base">{props.name}</p>
      </div>
      <p className="font-normal text-base text-[rgb(135,137,140)]">
        {props.symbol}
      </p>
    </Link>
  );
};

export default SearchResultList;
