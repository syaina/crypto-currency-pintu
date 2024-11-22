import { thousandSeparator } from "@/utils/thousandSeparator";
import Image from "next/image";
import CurrencyGrowth from "@/components/CurrencyGrowth";
import Link from "next/link";

interface TopMoversCardProps {
  logo: string;
  name: string;
  price: string;
  growth: number;
  color: string;
  symbol: string;
}

const TopMoversCard: React.FC<TopMoversCardProps> = (props) => {
  const { logo, name, symbol, color, price, growth } = props;

  return (
    <Link
      className="p-4 hover:bg-[rgb(242,242,242)] rounded ease-out duration-300"
      href={`https://pintu.co.id/market/${symbol.toLowerCase()}`}
    >
      <div className="text-base flex gap-3 items-center mb-2">
        <Image
          className="crypto-logo"
          src={logo}
          width={32}
          height={32}
          alt={name}
          style={{ width: "32px", height: "32px", color: color }}
        />

        <p className="text-xl font-semibold truncate">{name}</p>
      </div>
      <p className="font-normal text-sm text-[rgb(146,147,150)]">
        Rp {thousandSeparator(price)}
      </p>
      <CurrencyGrowth
        amount={growth}
        className="mt-2 text-xl font-semibold md:font-bold"
      />
    </Link>
  );
};

export default TopMoversCard;
