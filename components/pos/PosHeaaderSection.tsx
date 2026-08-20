import Link from "next/link";
import ScreenScale from "../utils/ScreenScale";
import Image from "next/image";

const PosHeaaderSection: React.FC = () => {
  const xml: React.ReactNode = (
    <header className="py-[1.2rem] bg-white mb-[1.6rem]">
      <ScreenScale type="div" className="flex justify-between items-center">
        {/* NAME */}
        <div>
          <h5 className="sf-pro text-[1.2rem] leading-[1.4rem] mb-[0.3rem]">
            Osmernd
          </h5>
          <h3 className="sf-pro-medium font-[590] text-[2.4rem] leading-[2.9rem]">
            Point of sale
          </h3>
        </div>

        {/* HISTORY LINK */}
        <Link
          href="/pos?page=history"
          className="bg-(--special-gray) rounded-[99.9rem] py-4 px-[1.2rem] flex items-center gap-[0.7rem] sf-pro text-[1.6rem] leading-[2.2rem] tracking-[-.08px] "
        >
          {/* HISTORY IMAGE */}
          <Image src="/history.png" alt="history" width="24" height="24" />

          {/* LINK TEXT */}
          <span>History</span>
        </Link>
      </ScreenScale>
    </header>
  );
  return xml;
};

export default PosHeaaderSection;
