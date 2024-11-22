"use client";

import { CryptoCurrenciesType } from "@/interfaces/CryptoCurrencies";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from "react";

export interface CryptoListContextValue {
  cryptoList: CryptoCurrenciesType[];
  setCryptoList: (value: CryptoCurrenciesType[]) => void;
}

const CryptoListContext = createContext<CryptoListContextValue | undefined>(
  undefined
);

export const CryptoListProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cryptoList, setCryptoList] = useState<CryptoCurrenciesType[]>([]);

  const contextValue = useMemo(
    () => ({ cryptoList, setCryptoList }),
    [cryptoList]
  );

  return (
    <CryptoListContext.Provider value={contextValue}>
      {children}
    </CryptoListContext.Provider>
  );
};

export const useCryptoListContext = (): CryptoListContextValue => {
  const context = useContext(CryptoListContext);
  if (!context) {
    throw new Error(
      "useCryptoListContext must be used within a CryptoListProvider"
    );
  }
  return context;
};
