"use client";

import SearchIcon from "@/icons/Search.svg";
import CrossIcon from "@/icons/Cross.svg";
import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getQueryOptionCrypto } from "@/hooks/getQueryOptionCrypto";
import { CryptoCurrenciesType } from "@/interfaces/CryptoCurrencies";
import SearchResultList from "./SearchResult.List";

interface SearchResultProps {
  handleShowSearchResult: () => void;
}

const SearchResult: React.FC<SearchResultProps> = (props) => {
  const [keyword, setKeyword] = useState("");
  const { data } = useQuery(getQueryOptionCrypto);
  const [searchResult, setSearchResult] = useState<CryptoCurrenciesType[]>(
    data ?? []
  );

  // Shows result based on keyword
  const result = useMemo(() => {
    if (keyword.length < 1) {
      return data;
    }

    const res = searchResult.filter((crypto) =>
      crypto.name.toLowerCase().includes(keyword.toLowerCase())
    );

    return res;
  }, [keyword, data, searchResult]);

  const handleCrossButton = () => {
    setKeyword("");
    props.handleShowSearchResult();
  };

  useEffect(() => {
    setSearchResult(data ?? []);
  }, [data]);

  return (
    <div
      className={`search-container absolute top-0 left-0 w-full bg-white border rounded-lg z-40`}
    >
      <div className="flex gap-4 py-1 px-4 m-4 mb-0 bg-[rgb(242,242,242)] rounded-lg items-center">
        <SearchIcon className="shrink-0" />
        <input
          type="text"
          className="text-sm w-full mr-4 border-none bg-transparent focus:outline-none py-1"
          style={{ border: "none! important" }}
          placeholder="Cari aset di Pintu"
          value={keyword}
          onChange={(event) => setKeyword(event.currentTarget.value)}
        />

        <button
          onClick={handleCrossButton}
          className="absolute right-[2rem] cursor-pointer z-10"
        >
          <CrossIcon />
        </button>
      </div>
      <div className="search-result-wrapper h-[20rem] overflow-y-scroll px-4 mt-4">
        {result?.length ? (
          result?.map((res) => (
            <SearchResultList
              key={res.id}
              logo={res.logo}
              symbol={res.currencySymbol}
              name={res.name}
            />
          ))
        ) : (
          <div className="mt-10 text-center">
            <p className="text-sm font-semibold">
              &#34;{keyword}&#34; Tidak Ditemukan
            </p>
            <p className="text-sm text-[#87898C] font-normal">
              Kata kunci tidak sesuai atau aset belum ada di Pintu
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
