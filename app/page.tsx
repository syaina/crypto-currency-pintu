import AboutCryptocurrency from '@/components/AboutCyptoCurrency';
import CryptoList from '@/components/CryptoCurrency';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import TopMovers from '@/components/TopMovers';

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
