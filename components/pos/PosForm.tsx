"use client";
import Image from "next/image";
import ScreenScale from "../utils/ScreenScale";
import PosNumberBtn from "./PosNumberBtn";
import { useState } from "react";
import { number } from "framer-motion";

interface styles {
  inputField: string;
  input: string;
}

const styles: styles = {
  inputField:
    "bg-white rounded-[10rem] px-[1.6rem] py-[1.2rem] flex focus-within:border focus-within:border-(--app-btn-blue)",
  input:
    "indent-[0.8rem] sf-pro text-[1.6rem] leading-[2.2rem] placeholder:text-[#727272] mix-blend-plus-darker tracking-[-.8px] flex-1 outline-0",
};

const PosForm: React.FC = () => {
  // PRICE STATE
  const [price, setPrice] = useState<number>(0);

  // PRICE HANDLER
  const pushToPrice = (value: number | string): void => {
    setPrice((prev: number) => {
      const numberToString = String(prev);
      const returnedString = `${numberToString}${value}`;
      return Number(returnedString);
    });
  };

  const popFromPrice = (): void => {
    const numberToString = String(price);
    const poppedNumber = numberToString.slice(0, -1);
    setPrice(+poppedNumber);
  };

  const clearPrice = (): void => {
    setPrice(0);
  };

  // XML
  const xml: React.ReactNode = (
    <form
      className="mt-10"
      onSubmit={(e: React.SubmitEvent) => e.preventDefault()}
    >
      {/* PRICE INPUT */}
      <ScreenScale
        type="section"
        className="flex items-end justify-center gap-[0.2rem] mb-8"
      >
        <label
          htmlFor="price"
          className="sf-pro text-[4.8rem] leading-[5.7rem] text-black block"
        >
          N
        </label>
        <span className="sf-pro-medium font-[590] text-[6.4rem] leading-[7.6rem] text-black inline-block min-w-[4.1rem] field-sizing-content overflow-scroll hide-scrollbar">
          {price.toLocaleString()}
        </span>
      </ScreenScale>

      {/* ITEM DETAILS */}
      <ScreenScale type="section" className="mb-[2.4rem]">
        {/* ITEM NAME INPUT */}
        <div className={`${styles.inputField} mb-[1.2rem]`}>
          <label htmlFor="name">
            <Image
              src="/item-pos-form.svg"
              alt="item-icon"
              width="24"
              height="24"
            />
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Item Name (optional)"
            className={`${styles.input}`}
          />
        </div>

        {/* ITEM DESCRIPTION INPUT */}
        <div className={`${styles.inputField}`}>
          <label htmlFor="name">
            <Image
              src="/desc-pos-form.svg"
              alt="item-icon"
              width="24"
              height="24"
            />
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Description (optional)"
            className={`${styles.input}`}
          />
        </div>
      </ScreenScale>

      {/* NUMBERS */}
      <ScreenScale
        type="div"
        className="grid grid-cols-3 gap-x-[1.1rem] gap-y-[1.2rem] mb-[2.4rem]"
      >
        {/* NUMBERS */}
        <PosNumberBtn value={1} pushToPrice={pushToPrice}>
          1
        </PosNumberBtn>
        <PosNumberBtn value={2} pushToPrice={pushToPrice}>
          2
        </PosNumberBtn>
        <PosNumberBtn value={3} pushToPrice={pushToPrice}>
          3
        </PosNumberBtn>
        <PosNumberBtn value={4} pushToPrice={pushToPrice}>
          4
        </PosNumberBtn>
        <PosNumberBtn value={5} pushToPrice={pushToPrice}>
          5
        </PosNumberBtn>
        <PosNumberBtn value={6} pushToPrice={pushToPrice}>
          6
        </PosNumberBtn>
        <PosNumberBtn value={7} pushToPrice={pushToPrice}>
          7
        </PosNumberBtn>
        <PosNumberBtn value={8} pushToPrice={pushToPrice}>
          8
        </PosNumberBtn>
        <PosNumberBtn value={9} pushToPrice={pushToPrice}>
          9
        </PosNumberBtn>

        {/* CONTROLS AND 0*/}
        {/* CLEAR BTN */}
        <PosNumberBtn clearPrice={clearPrice}>
          <span className="text-[#D32F2F]">C</span>
        </PosNumberBtn>

        {/* NUMBER 0 */}
        <PosNumberBtn value={"0"} pushToPrice={pushToPrice}>
          0
        </PosNumberBtn>

        {/* BACKSPACE */}
        <PosNumberBtn popFromPrice={popFromPrice}>
          <Image src="/backspace.svg" alt="backspace" width="24" height="24" />
        </PosNumberBtn>
      </ScreenScale>

      {/* SUBMIT */}
      <ScreenScale type="div" className="mb-[1.1rem]">
        <button className="bg-(--app-btn-blue) rounded-[3.6rem] sf-pro-medium text-[1.6rem] leading-[1.9rem] text-white tracking-[-.08px] w-full py-[1.2rem] flex justify-center items-center gap-[1.2rem]">
          <Image
            src="/record-sale.png"
            alt="record-sale-icon"
            width="24"
            height="24"
          />
          <span>Record Sale</span>
        </button>
      </ScreenScale>
    </form>
  );
  return xml;
};

export default PosForm;
