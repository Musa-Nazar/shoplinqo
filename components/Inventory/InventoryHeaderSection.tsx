import { header } from "framer-motion/client";
import ScreenScale from "../utils/ScreenScale";
import Image from "next/image";

const InventoryHeaderSection: React.FC = () => {
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
        className="relative pt-[0.9rem] flex items-center justify-between"
      >
        {/* DUMMY */}
        <div className="w-[4.8rem] invisible"></div>

        <h1 className="sf-pro-medium font-[590] text-[2.4rem] leading-[2.9rem] text-center">
          Inventory
        </h1>

        {/* SEARCH */}
        <div>
          <Image
            src="/inventory-search.png"
            alt="search"
            width="48"
            height="48"
          />
        </div>
      </ScreenScale>
    </header>
  );
  return xml;
};

export default InventoryHeaderSection;
