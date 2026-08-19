"use client";
import Image from "next/image";
import ScreenScale from "../utils/ScreenScale";
import ConfirmationLiItem from "./ConfirmationLiItem";
import { useScroll } from "framer-motion";

interface Confirmation {
  shouldStick: boolean;
}

const Confirmation: React.FC<Confirmation> = ({ shouldStick }) => {
  const xml: React.ReactNode = (
    <>
      <ScreenScale
        type="section"
        className={`mt-[2.2rem] rounded-[3.2rem] z-1 relative overflow-hidden stick-on-scroll  mb-16 transition-all ${shouldStick ? "flex py-8 px-12 items-center sticky top-0 gap-8" : "py-12 px-10"}`}
      >
        {/* BG IMAGE */}
        <Image
          src="/retail-bg.png"
          alt="cart"
          width="0"
          height="0"
          sizes="100vw"
          className="absolute top-0 left-0 w-full h-full object-cover object-left -z-1"
        />

        {/* OVERLAY */}
        <div className="absolute top-0 left-0 bg-black/10 z-0 w-full h-full"></div>

        {/* TEXT */}
        <h5
          className={`sf-pro font-medium text-[1.2rem] leading-[1.4rem] text-center text-white mb-[2.3rem] relative z-1 ${shouldStick ? "hidden" : "show"}`}
        >
          Your business type
        </h5>
        <Image
          src="/cart.png"
          alt="cart"
          width={shouldStick ? "48" : "64"}
          height={shouldStick ? "48" : "64"}
          className={`${shouldStick ? "mx-0" : "mx-auto"} relative z-1 mb-[0.6rem]`}
        />
        <h1
          className={`sf-pro-bold font-bold  text-center text-white relative z-1  ${shouldStick ? "text-[2rem] leading-[2.4rem]" : "text-[3.2rem] leading-[3.8rem] mb-[0.8rem]"}`}
        >
          Retail Shop
        </h1>
        <p
          className={`sf-pro text-[1.6rem] leading-[1.9rem] text-center text-white max-w-[32.4rem] relative z-1 ${shouldStick ? "hidden" : "show"}`}
        >
          Perfect for businesses that sell physical products and need inventory
          tracking.
        </p>
      </ScreenScale>

      {/*  */}
      <ScreenScale
        type="section"
        className="pt-12 pb-[6.9rem] rounded-[3.2rem] bg-white px-[2.3rem] relative z-0 overflow-hidden"
      >
        {/* BG IMAGE */}
        <Image
          src="/retail-bg-2.png"
          alt="cart"
          width="0"
          height="0"
          sizes="100vw"
          className="absolute top-0 left-0 w-full h-full object-cover -z-1"
        />

        {/* HEADING */}
        <h3 className="sf-pro-bold font-bold text-[2rem] leading-[2.4rem] mb-[0.8rem] ">
          What's Included
        </h3>
        <p className="sf-pro text-[1.4rem] leading-[1.7rem] mb-[1.6rem]">
          Active features in your business type
        </p>
        {/* LIST TO CONFIRM */}
        <ul className="flex flex-col gap-[1.6rem]">
          <ConfirmationLiItem text="Inventory Tracking" />
          <ConfirmationLiItem text="Unit Level Stock Tracking" />
          <ConfirmationLiItem text="POS By Item Mode" />
          <ConfirmationLiItem text="Inventory Tracking" />
        </ul>
      </ScreenScale>

      {/* SUBMIT SECTION */}
      <section className="fixed bottom-0 left-0 z-5 w-full bg-white pb-[2.6rem] pt-12 rounded-tr-[3.2rem] rounded-tl-[3.2rem]">
        <ScreenScale type="div" className="w-[88.3086%]">
          {/* SUBMIT */}
          <button className="flex gap-[1.2rem] sf-pro-medium font-medium text-[1.6rem] leading-[1.9rem] tracking-[-.08px] text-white py-5 w-full rounded-[3.6rem] bg-(--app-btn-blue) justify-center mb-[1.4rem]">
            <Image src="/arrow-left.png" alt="arrow" width="20" height="20" />
            <span>Use this setup</span>
          </button>

          {/* NOT CONVINCED */}
          <p className="sf-pro text-[1.4rem] leading-[1.7rem] tracking-[-.08px] text-center text-[#888888] mb-[0.4rem]">
            Not Convinced?
          </p>

          {/* CUSTOMIZE */}
          <button className="mx-auto flex sf-pro text-[1.4rem] leading-[1.7rem] tracking-[-.08px] text-center text-[#888888] underline gap-[0.4rem] underline-offset-3">
            <span>Customize Features</span>
            <Image src="/long-arrow.png" alt="arrow" width="16" height="16" />
          </button>
        </ScreenScale>
      </section>
    </>
  );
  return xml;
};

export default Confirmation;
