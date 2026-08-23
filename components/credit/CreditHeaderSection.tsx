import Image from "next/image";
import ScreenScale from "../utils/ScreenScale";

const CreditHeaderSection: React.FC = () => {
  const xml: React.ReactNode = (
    <header className="pt-[0.3rem] mb-14 relative z-0">
      {/* BG */}
      <Image
        src="/inventory-bg.png"
        alt="inventory-bg"
        width="100"
        height="270"
        sizes="100vw"
        className="absolute top-[-2.2rem] z-[-1] left-0 w-full object-top"
      />

      {/* CONTENT */}
      <ScreenScale
        type="div"
        className="relative pt-[0.9rem] flex justify-between items-center mb-[2.6rem]"
      >
        {/* CREDIT ICON */}
        <Image src="/credit-icon.png" alt="search" width="48" height="48" />

        {/* HEADING TEXT */}
        <h1 className="sf-pro-medium font-[590] text-[2.4rem] leading-[2.9rem] text-center">
          Credit Book
        </h1>

        {/* SEARCH */}
        <Image
          src="/inventory-search.png"
          alt="search"
          width="48"
          height="48"
        />
      </ScreenScale>
    </header>
  );
  return xml;
};

export default CreditHeaderSection;
