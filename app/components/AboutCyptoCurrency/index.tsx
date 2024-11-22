"use client";

const AboutCryptocurrency: React.FC = () => {
  return (
    <div className="pt-12">
      <div className="p-8 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Tentang Cryptocurrency</h2>
        <p className="text-sm md:text-base mb-6 text-[rgb(135,137,140)]">
          Cryptocurrency adalah aset mata uang digital yang diamankan
          menggunakan metode cryptography diatas open database yang disebut
          blockchain. Terdapat 2 jenis crypto, yaitu coin dan token. Coin adalah
          cryptocurrency yang berdiri diatas blockchain-nya sendiri dengan
          contoh bitcoin dan ethereum, sedangkan token adalah cryptocurrency
          yang &#34;menumpang&#34; diatas blockchain dari native aset lain.
        </p>
        <a
          href="https://pintu.co.id/academy/post/apa-itu-cryptocurrency"
          target="_blank"
          className="font-semibold border border-black px-4 py-2 rounded-full"
        >
          Pelajari Lebih Lanjut -&gt;
        </a>
      </div>
    </div>
  );
};

export default AboutCryptocurrency;
