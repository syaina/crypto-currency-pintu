"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

import CurrencyGrowth from "../CurrencyGrowth";
import { thousandSeparator } from "@/utils/thousandSeparator";

interface CryptoListProps {
  name: string;
  currencySymbol: string;
  latestPrice: string;
  day: number;
  week: number;
  month: number;
  year: number;
  logo: string;
  color: string;
  activeBuyButton: string;
  handleShowBuyCard: (symbol: string) => void;
}

const CryptoListBuyCard = dynamic(
  () => import("@/components/CryptoList/CryptoList.BuyCard")
);

const CryptoList: React.FC<CryptoListProps> = (props) => {
  const { logo, name, currencySymbol, latestPrice, color, activeBuyButton } =
    props;

  const timePeriods = ["day", "week", "month", "year"] as const;

  return (
    <div className="crypto-list-body grid grid-cols-[26%_14%_1fr_1fr_1fr_1fr_9%] items-center font-semibold border border-[rgb(229,231,235)] border-t-0">
      <div className="text-base flex gap-6 p-5">
        <Image
          className="crypto-logo"
          src={logo}
          width={32}
          height={32}
          alt={name}
          style={{ width: "32px", height: "32px", color: color }}
        />
        {/* <div dangerouslySetInnerHTML={{ __html: logo }} /> */}

        <div>
          <p className="">{name}</p>
          <p className="text-[rgba(146,147,150,1)] font-normal">
            {currencySymbol}
          </p>
        </div>
      </div>
      <div className="p-5">
        <p>Rp {thousandSeparator(latestPrice)}</p>
      </div>

      {timePeriods.map((key) => (
        <CurrencyGrowth
          key={key}
          amount={Number(props[key])}
          className="px-2 py-5"
        />
      ))}

      <div className="flex relative">
        <button
          onClick={() => props.handleShowBuyCard(currencySymbol)}
          className={`buy-btn py-2 px-6 mx-auto bg-[rgb(10,104,244)] rounded-full text-white text-sm font-normal ease-in duration-100 hover:bg-[rgb(10,69,244)]`}
        >
          Beli
        </button>

        <CryptoListBuyCard
          className={`top-[-100px] left-[-273px] z-50 ${
            currencySymbol === activeBuyButton ? "" : "hidden"
          }`}
          currencySymbol={currencySymbol}
        />
      </div>
    </div>
  );
};

export default CryptoList;
