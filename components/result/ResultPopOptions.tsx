import Image from "next/image";
import ScreenScale from "../utils/ScreenScale";
import ResultPopOption from "./ResultPopOption";

interface ResultPopOptions {
  handlePopUp: (e: React.MouseEvent) => void;
}

const ResultPopOptions: React.FC<ResultPopOptions> = ({ handlePopUp }) => {
  const xml: React.ReactNode = (
    <section className="absolute w-full h-dvh top-0 left-0 bg-black/40 flex flex-col justify-end z-3">
      {/* WHITE POP UP */}
      <div className="rounded-tr-[4.4rem] rounded-tl-[4.4rem] bg-white flex flex-col items-center pt-12 pb-[3.9rem]">
        {/* X CANCEL */}
        <button
          onClick={handlePopUp}
          className="inline-flex mx-auto justify-center items-center rounded-[50%] p-[1.2rem] bg-(--special-gray) mb-[0.8rem]"
        >
          <Image src="/x-cancel.png" alt="cancel" width="24" height="24" />
        </button>

        {/* HEADINGS */}
        <h3 className="sf-pro-bold font-bold text-[2rem] leading-[2.4rem] text-black text-center mb-[0.8rem]">
          Compare Business Types
        </h3>
        <p className="sf-pro text-[1.4rem] leading-[1.7rem] text-black text-center mb-[2.4rem]">
          Find the setup that fits you best
        </p>

        {/* OPTIONS */}
        <ScreenScale type="div" className="w-[92.0398%]">
          <ul className="flex flex-col gap-[1.2rem]">
            <ResultPopOption
              img="/retail-cart.png"
              title="Retail Shop"
              desc="Best for selling physical products with inventory tracking."
              recom
              selected
            />
            <ResultPopOption
              img="/bulk-option.png"
              title="Bulk / Wholesale"
              desc="Best for selling physical products with inventory tracking."
            />
            <ResultPopOption
              img="/food-option.png"
              title="Food / Perishables"
              desc="Best for selling physical products with inventory tracking."
            />
            <ResultPopOption
              img="/bag-option.png"
              title="Services"
              desc="Best for selling physical products with inventory tracking."
            />
          </ul>

          {/* CHOOSE AND CONTINUE */}
          <button className="flex gap-[1.2rem] sf-pro-medium font-medium text-[1.6rem] leading-[1.9rem] tracking-[-.08px] text-white py-5 w-full rounded-[3.6rem] bg-(--app-btn-blue) justify-center mt-12">
            <Image src="/arrow-left.png" alt="arrow" width="20" height="20" />
            <span>Continue with Retail shop</span>
          </button>
        </ScreenScale>
      </div>
    </section>
  );
  return xml;
};

export default ResultPopOptions;
