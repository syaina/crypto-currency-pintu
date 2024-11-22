import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 bg-black w-full z-50">
      <div className="w-full max-w-[1280px] py-6 px-[4rem] mx-auto text-white flex justify-between items-center">
        <p className="font-semibold text-base">
          Nikmati mudahnya trading pro dengan likuiditas tinggi dan biaya
          rendah, langsung dari desktop kamu.
        </p>
        <Link
          href={"https://pintu.co.id/pro/id/markets"}
          className="py-2 px-10 min-w-[202px] text-sm bg-[rgb(15,123,255)] font-semibold rounded-lg"
        >
          Tranding di Pintu Pro Web
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
