"use client";

import Image from "next/image";
import Link from "next/link";

interface CryptoListBuyCardProps {
  className?: string;
  currencySymbol: string;
}

const CryptoListBuyCard: React.FC<CryptoListBuyCardProps> = (props) => {
  const { className = "", currencySymbol } = props;

  return (
    <div
      className={`buy-btn-card w-[273px] absolute bg-gray-50 border border-[rgb(229,231,235)] rounded ${className}`}
    >
      <div className="p-5 border-[rgb(229,231,235)] border-b-[1px]">
        <p className="text-xl">Beli {currencySymbol} di App Pintu</p>
        <div className="text-sm font-normal mt-2">
          Scan QR code untuk download app atau klik{" "}
          <span className="text-[#0a68f4]">
            <Link href="https://pintu.co.id/download?src=/market">di sini</Link>
          </span>
          {"."}
          <Image
            src={`/images/qr-pintu-app.png`}
            width={160}
            height={160}
            alt="QR PINTU App"
            className="m-4 mb-0 mx-auto"
          />
        </div>
      </div>
      <div className="p-6 border-[rgb(229,231,235)] border-b-[1px]">
        <p className="text-xl">Trading {currencySymbol} di Pro Web</p>
        <div className="text-sm font-normal mt-2 mb-6">
          Nikmati fitur pro, likuiditas tinggi, dan biaya rendah. Semua dari
          desktop.
        </div>
        <Link
          className="px-6 py-2 bg-black font-semibold text-sm text-white rounded-lg"
          href={`https://pintu.co.id/pro/id/trade/${currencySymbol}_IDR`}
        >
          Trading di Pintu Pro Web
        </Link>
      </div>
    </div>
  );
};

export default CryptoListBuyCard;
