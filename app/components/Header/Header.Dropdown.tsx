"use client";

import Stacking from "@/icons/Stacking.svg";
import Earn from "@/icons/Earn.svg";

interface HeaderDropdownProps {
  title: string;
  className?: string;
}
const HeaderDropdown: React.FC<HeaderDropdownProps> = (props) => {
  const { title, className = "" } = props;

  return (
    <div
      className={`hidden dropdown w-[435px] absolute top-[calc(100%_+_20px)] left-0 py-2 px-4 bg-white shadow-md rounded-lg z-50 ease-in-out duration-200 ${className}`}
    >
      <p className="text-dark-grey pt-2 pb-2 md:pb-1 md:pl-2">{title}</p>
      <a className="flex gap-4 px-2 py-4" href="https://pintu.co.id/en/ptu">
        <Stacking className="my-[0.125rem]" />
        <div>
          <p className="text-sm md:text-xl font-semibold ">PTU Staking</p>
          <p className="font-normal mt-1">
            Stake PTU Token dan nikmati berbagai benefitnya.
          </p>
        </div>
      </a>
      <a className="flex gap-4 px-2 py-4" href="https://pintu.co.id/earn">
        <Earn className="my-[0.125rem]" />
        <div>
          <p className="text-sm md:text-xl font-semibold ">Earn</p>
          <p className="font-normal mt-1">
            Jangan hanya HODL, dapatkan bonus tiap jam dengan Earn!
          </p>
        </div>
      </a>
    </div>
  );
};

export default HeaderDropdown;
