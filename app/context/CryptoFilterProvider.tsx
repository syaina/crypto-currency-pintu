"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from "react";

export type Filter =
  | "PRICE.ASC"
  | "PRICE.DESC"
  | "24H.ASC"
  | "24H.DESC"
  | "1W.ASC"
  | "1W.DESC"
  | "1M.ASC"
  | "1M.DESC"
  | "1Y.ASC"
  | "1Y.DESC"
  | null;

export interface CryptoFilterContextValue {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

const CryptoListContext = createContext<CryptoFilterContextValue | undefined>(
  undefined
);

export const CryptoFilterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [filter, setFilter] = useState<Filter>(null);

  const contextValue = useMemo(() => ({ filter, setFilter }), [filter]);

  return (
    <CryptoListContext.Provider value={contextValue}>
      {children}
    </CryptoListContext.Provider>
  );
};

export const useCryptoFilterContext = (): CryptoFilterContextValue => {
  const context = useContext(CryptoListContext);
  if (!context) {
    throw new Error(
      "useCryptoFilterContext must be used within a CryptoFilterProvider"
    );
  }
  return context;
};
