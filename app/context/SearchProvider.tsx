"use client";

import { CryptoCurrenciesType } from "@/interfaces/CryptoCurrencies";
import { createContext, ReactNode, useMemo, useState } from "react";

interface SearchContext {
  searchResult: CryptoCurrenciesType[] | [];
  setSearchResult: (results: CryptoCurrenciesType[]) => void;
}

export const SearchContext = createContext<SearchContext>({
  searchResult: [],
  setSearchResult: () => {},
});

export const SearchProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchResult, setSearchResult] = useState<CryptoCurrenciesType[]>([]);

  const value = useMemo(
    () => ({
      searchResult,
      setSearchResult,
    }),
    [searchResult]
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
