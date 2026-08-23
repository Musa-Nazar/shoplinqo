import Link from "next/link";
import ScreenScale from "../utils/ScreenScale";
import Image from "next/image";
import CreditEntry from "./CreditEntry";

const CreditEntries: React.FC = () => {
  const xml: React.ReactNode = (
    <section className="bg-white rounded-tr-[3.6rem] rounded-tl-[3.6rem] py-[0.95rem] z-1 relative pb-[0.1rem]">
      {/* OPTIONS */}
      <ScreenScale
        className="flex items-center pl-2 pr-[0.1rem] mb-[0.8rem]"
        type="div"
      >
        <ul className="flex flex-1 gap-[0.8rem] overflow-auto hide-scrollbar">
          {/* ALL */}
          <li>
            <Link
              href="/credit?type=all"
              className="sf-pro text-[1.6rem] leading-[1.9rem] px-[0.4rem] py-[1.2rem] inline-block text-(--app-btn-blue) border-b-2 border-solid border-(--app-btn-blue) max-h-[4.3rem]"
            >
              All
            </Link>
          </li>

          {/* OVERDUE */}
          <li>
            <Link
              href="/credit?type=overdue"
              className="sf-pro text-[1.6rem] leading-[1.9rem] px-[0.4rem] py-[1.2rem] inline-block"
            >
              Overdue
            </Link>
          </li>

          {/* PAID */}
          <li>
            <Link
              href="/credit?type=paid"
              className="sf-pro text-[1.6rem] leading-[1.9rem] px-[0.4rem] py-[1.2rem] inline-block"
            >
              Paid
            </Link>
          </li>

          {/* UNPAID */}
          <li>
            <Link
              href="/credit?type=unpaid"
              className="sf-pro text-[1.6rem] leading-[1.9rem] px-[0.4rem] py-[1.2rem] inline-block"
            >
              Unpaid
            </Link>
          </li>
        </ul>
      </ScreenScale>

      {/* ENTRIES */}
      <ScreenScale
        type="ul"
        className="[&>li]:border-b-2 [&>li]:border-b-solid [&>li]:border-b-(--special-gray) [&>li]:mb-[1.2rem] [&>li:last-child]:border-none [&>li:last-child]:mb-0"
      >
        <CreditEntry name="Ahmed Musa" price={1900340} type="due today" />
        <CreditEntry name="Ahmed Musa" price={1900340} type="paid part" />
        <CreditEntry
          name="Danladi Musa"
          price={27607300}
          type="overdue"
          message="3 days ago"
        />
        <CreditEntry
          name="Danladi Musa"
          price={27607300}
          type="overdue"
          message="3 days ago"
        />
        <CreditEntry name="Ahmed Musa" price={1900340} type="paid part" />
        <CreditEntry name="Ahmed Musa" price={1900340} type="paid part" />
        <CreditEntry name="Ahmed Musa" price={1900340} type="paid part" />
      </ScreenScale>
    </section>
  );
  return xml;
};

export default CreditEntries;
