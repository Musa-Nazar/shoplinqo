"use client";
import Link from "next/link";
import ScreenScale from "../utils/ScreenScale";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

const PosNavSection: React.FC = () => {
  // GET PAGE TYPE
  const searchParams = useSearchParams();
  const pageType = searchParams.get("type");
  const isByItem = !pageType || pageType === "item";
  const isByAmount = pageType === "amount";

  // XML
  const xml = (
    <ScreenScale
      type="nav"
      className="flex bg-[rgba(118,118,128,.12)] rounded-[10rem] mb-[1.6rem]"
    >
      {/* BY ITEM */}
      <Link
        href="/pos?type=item"
        className={`rounded-4xl py-[0.6rem] px-[0.6rem] text-[1.3333rem] sf-pro-medium leading-[1.9rem] flex items-center justify-center gap-[0.8rem] flex-1 ${isByItem ? "bg-(--app-btn-blue) text-white font-[590]" : "font-[510]"}`}
      >
        <Image
          src={isByItem ? "/by-item-selected.svg" : "/by-item.png"}
          alt="byItem"
          width="24"
          height="24"
        />
        <span>By Item</span>
      </Link>

      {/* BY AMOUNT */}
      <Link
        href="/pos?type=item"
        className={`rounded-4xl py-[0.6rem] px-[0.6rem] text-[1.3333rem] sf-pro-medium leading-[1.9rem] flex items-center justify-center gap-[0.8rem] flex-1 ${isByAmount ? "bg-(--app-btn-blue) text-white font-[590]" : "font-[510]"}`}
      >
        <Image
          src={isByAmount ? "/by-amount-selected.png" : "/by-amount.svg"}
          alt="byItem"
          width="24"
          height="24"
        />
        <span>By Amount</span>
      </Link>
    </ScreenScale>
  );
  return xml;
};

export default PosNavSection;
