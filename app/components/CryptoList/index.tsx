'use client';

import Image from 'next/image';
import './index.css';
import { thousandSeparator } from '@/utils/thousandSeparator';

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
}

const CryptoList = (props: CryptoListProps) => {
  const {
    logo,
    name,
    currencySymbol,
    latestPrice,
    day,
    week,
    month,
    year,
    color,
  } = props;

  return (
    <div className="crypto-list-body grid grid-cols-[26%_14%_1fr_1fr_1fr_1fr_9%] items-center font-semibold border border-[rgb(229,231,235)] border-t-0">
      <div className="text-base flex gap-6 p-5">
        <Image
          className="crypto-logo"
          src={logo}
          width={32}
          height={32}
          alt="Bitcoin"
          style={{ width: '32', height: '32', color: color }}
        />
        {/* <div dangerouslySetInnerHTML={{ __html: logo }} /> */}

        <div>
          <p className="">{name}</p>
          <p className="text-[rgba(146,147,150,1)]">{currencySymbol}</p>
        </div>
      </div>
      <div className="p-5">
        <p>Rp {thousandSeparator(latestPrice)}</p>
      </div>
      <div className="px-2 py-5 text-center flex items-center mx-auto">
        <div className={day > 0 ? 'up' : 'down'}></div>
        <p>{day}%</p>
      </div>
      <div className="px-2 py-5 text-center flex items-center mx-auto">
        <div className={week > 0 ? 'up' : 'down'}></div>
        <p>{week}%</p>
      </div>
      <div className="px-2 py-5 text-center flex items-center mx-auto">
        <div className={month > 0 ? 'up' : 'down'}></div>
        <p>{month}%</p>
      </div>
      <div className="px-2 py-5 text-center flex items-center mx-auto">
        <div className={year > 0 ? 'up' : 'down'}></div>
        <p>{year}%</p>
      </div>
      {/* <div className="p-5"><p>-</p></div> */}
      <div>
        <button className="py-2 px-6 bg-[rgb(10,104,244)] rounded-full text-white text-sm">
          Beli
        </button>
      </div>
    </div>
  );
};

export default CryptoList;
