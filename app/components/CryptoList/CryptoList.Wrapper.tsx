"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import CryptoList from "./CryptoList.Card";
import { getQueryOptionCrypto } from "@/hooks/getQueryOptionCrypto";
import { useState } from "react";

const CryptoListWrapper: React.FC = () => {
  const { data, error, isLoading } = useSuspenseQuery(getQueryOptionCrypto);

  // TODO: set data value to cryptoList context for filtering
  // const { cryptoList, setCryptoList } = useCryptoListContext();
  // useEffect(() => {
  //   if (data) {
  //     setCryptoList(data);
  //   }
  // }, [data]);

  const [activeBuyButton, setActiveBuyButton] = useState<string>("");

  const handleShowBuyCard = (symbol: string) => {
    setActiveBuyButton(symbol);

    setTimeout(() => {
      setActiveBuyButton("");
    }, 10 * 1000);
  };

  if (isLoading) return <p>isLoading</p>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  return (
    <div className="crypto-list-wrapper">
      {data?.map((crypto) => (
        <CryptoList
          key={crypto.id}
          logo={crypto.logo}
          name={crypto.name}
          currencySymbol={crypto.currencySymbol}
          color={crypto.color}
          latestPrice={crypto.latestPrice.toString()}
          day={Number(crypto.day)}
          week={Number(crypto.week)}
          month={Number(crypto.month)}
          year={Number(crypto.year)}
          activeBuyButton={activeBuyButton}
          handleShowBuyCard={handleShowBuyCard}
        />
      ))}
    </div>
  );
};

export default CryptoListWrapper;
