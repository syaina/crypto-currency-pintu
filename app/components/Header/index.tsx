'use client';

import PintuLogo from '@/icons/PintuLogo.svg';
import ArrowUp from '@/icons/ArrowUp.svg';
import Stacking from '@/icons/Stacking.svg';
import Earn from '@/icons/Earn.svg';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <>
      <header className="px-2 py-4 max-w-[1140px] mx-auto flex justify-between items-center">
        {/* PINTU LOGO */}
        <PintuLogo />

        <nav className="flex justify-between items-center gap-6">
          <ul className="flex gap-2 items-center">
            <li className="menu flex items-center font-semibold text-sm cursor-pointer relative">
              <p className="px-4 py-2">Fitur</p>
              <div className="hidden dropdown w-[435px] absolute top-[calc(100%_+_20px)] left-0 py-2 px-4 bg-white shadow-md rounded-lg">
                <p className="text-dark-grey pt-2 pb-2 md:pb-1 md:pl-2">
                  FITUR
                </p>
                <a
                  className="flex gap-4 px-2 py-4"
                  href="https://pintu.co.id/en/ptu"
                >
                  <Stacking className="my-[0.125rem]" />
                  <div>
                    <p className="text-sm md:text-xl font-semibold ">
                      PTU Staking
                    </p>
                    <p className="font-normal mt-1">
                      Stake PTU Token dan nikmati berbagai benefitnya.
                    </p>
                  </div>
                </a>
                <a
                  className="flex gap-4 px-2 py-4"
                  href="https://pintu.co.id/earn"
                >
                  <Earn className="my-[0.125rem]" />
                  <div>
                    <p className="text-sm md:text-xl font-semibold ">Earn</p>
                    <p className="font-normal mt-1">
                      Jangan hanya HODL, dapatkan bonus tiap jam dengan Earn!
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="menu flex items-center font-semibold text-sm cursor-pointer relative">
              <p className="px-4 py-2">Trading</p>
              <div className="hidden dropdown w-[435px] absolute top-[calc(100%_+_20px)] left-0 py-2 px-4 bg-white shadow-md rounded-lg">
                <p className="text-dark-grey pt-2 pb-2 md:pb-1 md:pl-2">
                  TRADING
                </p>
                <a
                  className="flex gap-4 px-2 py-4"
                  href="https://pintu.co.id/en/ptu"
                >
                  <Stacking className="my-[0.125rem]" />
                  <div>
                    <p className="text-sm md:text-xl font-semibold ">
                      PTU Staking
                    </p>
                    <p className="font-normal mt-1">
                      Stake PTU Token dan nikmati berbagai benefitnya.
                    </p>
                  </div>
                </a>
                <a
                  className="flex gap-4 px-2 py-4"
                  href="https://pintu.co.id/earn"
                >
                  <Earn className="my-[0.125rem]" />
                  <div>
                    <p className="text-sm md:text-xl font-semibold ">Earn</p>
                    <p className="font-normal mt-1">
                      Jangan hanya HODL, dapatkan bonus tiap jam dengan Earn!
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="menu flex items-center font-semibold text-sm cursor-pointer relative">
              <p className="px-4 py-2">Edukasi</p>
              <div className="hidden dropdown w-[435px] absolute top-[calc(100%_+_20px)] left-0 py-2 px-4 bg-white shadow-md rounded-lg">
                <p className="text-dark-grey pt-2 pb-2 md:pb-1 md:pl-2">
                  EDUKASI
                </p>
                <a
                  className="flex gap-4 px-2 py-4"
                  href="https://pintu.co.id/en/ptu"
                >
                  <Stacking className="my-[0.125rem]" />
                  <div>
                    <p className="text-sm md:text-xl font-semibold ">
                      PTU Staking
                    </p>
                    <p className="font-normal mt-1">
                      Stake PTU Token dan nikmati berbagai benefitnya.
                    </p>
                  </div>
                </a>
                <a
                  className="flex gap-4 px-2 py-4"
                  href="https://pintu.co.id/earn"
                >
                  <Earn className="my-[0.125rem]" />
                  <div>
                    <p className="text-sm md:text-xl font-semibold ">Earn</p>
                    <p className="font-normal mt-1">
                      Jangan hanya HODL, dapatkan bonus tiap jam dengan Earn!
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="menu flex items-center font-semibold text-sm cursor-pointer relative">
              <p className="px-4 py-2">Lainnya</p>
              <div className="hidden dropdown w-[435px] absolute top-[calc(100%_+_20px)] left-0 py-2 px-4 bg-white shadow-md rounded-lg">
                <p className="text-dark-grey pt-2 pb-2 md:pb-1 md:pl-2">
                  LAINNYA
                </p>
                <a
                  className="flex gap-4 px-2 py-4"
                  href="https://pintu.co.id/en/ptu"
                >
                  <Stacking className="my-[0.125rem]" />
                  <div>
                    <p className="text-sm md:text-xl font-semibold ">
                      PTU Staking
                    </p>
                    <p className="font-normal mt-1">
                      Stake PTU Token dan nikmati berbagai benefitnya.
                    </p>
                  </div>
                </a>
                <a
                  className="flex gap-4 px-2 py-4"
                  href="https://pintu.co.id/earn"
                >
                  <Earn className="my-[0.125rem]" />
                  <div>
                    <p className="text-sm md:text-xl font-semibold ">Earn</p>
                    <p className="font-normal mt-1">
                      Jangan hanya HODL, dapatkan bonus tiap jam dengan Earn!
                    </p>
                  </div>
                </a>
              </div>
            </li>
          </ul>

          <div className="flex gap-6 items-center">
            <a
              href="https://pintu.co.id/download"
              className="flex font-semibold text-sm px-4 py-2 border border-black rounded-full"
            >
              Download App
            </a>

            <button className="language-switcher flex gap-1 items-center cursor-pointer">
              <Image
                src="https://pintu.co.id/static/images/i18n/id.svg"
                alt="Language Bahasa"
                width={75}
                height={16}
              />
              <ArrowUp className="rotate-180" />
            </button>
          </div>
        </nav>
      </header>

      <style jsx>
        {`
          .menu:hover > .dropdown {
            display: unset;
          }
        `}
      </style>
    </>
  );
};

export default Header;
