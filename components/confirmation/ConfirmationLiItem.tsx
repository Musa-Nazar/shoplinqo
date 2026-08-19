import Image from "next/image";
import React from "react";

interface ConfirmationLiItem {
  text: string;
  selected?: boolean;
}

const ConfirmationLiItem: React.FC<ConfirmationLiItem> = ({
  text,
  selected = true,
}) => {
  const xml: React.ReactNode = (
    <li
      className={`pr-6 pl-[1.9rem] ${selected ? "bg-[#E4F7FB] text-[#002363]" : "bg-[#EEEEEE] text-[#607D8B]"} flex items-center gap-[1.2rem] py-[0.8rem] rounded-[9.9rem] sf-pro-medium font-medium text-[1.6rem] leading-[1.9rem] `}
    >
      <Image
        src={selected ? "/blue-tick.png" : "/not-allowed.png"}
        alt="tick"
        width="20"
        height="20"
      />
      {text}
    </li>
  );
  return xml;
};

export default ConfirmationLiItem;
