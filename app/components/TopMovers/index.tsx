"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import TopMoversCard from "./TopMovers.Card";
import { getQueryOptionCrypto } from "@/hooks/getQueryOptionCrypto";

const TopMovers: React.FC = () => {
  const { data: cyptoCurrency } = useSuspenseQuery(getQueryOptionCrypto);

  // Sort crypto currency to get top 6 highest day growth
  const topMoverCrypto = [...cyptoCurrency]
    .sort((a, b) => Math.abs(Number(b.day)) - Math.abs(Number(a.day)))
    .slice(0, 6);

  return (
    <div className="py-16 px-4 md:p-0 my-4">
      <h2 className="text-xl font-semibold mb-2 font-secondary">
        🔥 Top Movers (24 Jam)
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
        {topMoverCrypto.map((top) => (
          <TopMoversCard
            key={top.id}
            name={top.name}
            logo={top.logo}
            color={top.color}
            price={top.latestPrice}
            growth={Number(top.day)}
            symbol={top.currencySymbol}
          />
        ))}
      </div>
    </div>
  );
};

export default TopMovers;
