import dynamic from "next/dynamic";

import AboutCryptocurrency from "@/components/AboutCyptoCurrency";
import CryptoList from "@/components/CryptoList";
import PageTitle from "@/components/PageTitle";
import TopMovers from "@/components/TopMovers";

const Header = dynamic(() => import("@/components/Header"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <>
      <Header />
      <section className="max-w-[1320px] mx-auto px-10 py-4 md:p-4">
        <div className="max-w-[1140px] mx-auto">
          <PageTitle />
          <TopMovers />
        </div>
        <CryptoList />
        <AboutCryptocurrency />
      </section>

      <div className="placeholder h-[84px]" />
      <Footer />
    </>
  );
}
