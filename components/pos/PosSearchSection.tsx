import Image from "next/image";
import ScreenScale from "../utils/ScreenScale";

const PosSearchSection: React.FC = () => {
  const xml: React.ReactNode = (
    <ScreenScale type="section" className="flex gap-[0.6rem] mb-[1.6rem]">
      {/* SEARCH */}
      <div className="flex rounded-[10rem] bg-white px-[1.6rem] py-[1.1rem] flex-1">
        {/* LABEL/ ICON */}
        <label htmlFor="search">
          <Image
            src="/search-bar-icon.png"
            alt="searchbar"
            width="22"
            height="22"
          />
        </label>

        {/* INPUT */}
        <input
          type="search"
          name="search"
          id="search"
          className="flex-1 sf-pro text-[1.6rem] leading-[2.2rem] tracking-[-.08px] indent-[0.8rem] placeholder:text-[#727272] outline-0 align-middle"
          placeholder="Search Product"
        />
      </div>

      {/* BARCODE SCANNER */}
      <div className="p-4 rounded-[50%] bg-white">
        <Image
          src="/barcode-scanner.svg"
          alt="barcode"
          width="24"
          height="24"
        />
      </div>
    </ScreenScale>
  );
  return xml;
};

export default PosSearchSection;
