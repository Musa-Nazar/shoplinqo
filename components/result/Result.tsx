import Image from "next/image";
import ScreenScale from "../utils/ScreenScale";
import { useRouter } from "next/navigation";

interface Result {
  handlePopUp: (e: React.MouseEvent) => void;
}

const Result: React.FC<Result> = ({ handlePopUp }) => {
  // ROUTER
  const router = useRouter();

  // XML
  const xml: React.ReactNode = (
    <>
      <ScreenScale
        type="section"
        className="mt-[2.2rem] rounded-[3.2rem] z-1 relative overflow-hidden px-10 py-12 mb-8"
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
        <h5 className="sf-pro font-medium text-[1.2rem] leading-[1.4rem] text-center text-white mb-[2.3rem] relative z-1">
          Recommended for you
        </h5>
        <Image
          src="/cart.png"
          alt="cart"
          width="64"
          height="64"
          className="mx-auto relative z-1 mb-[0.6rem]"
        />
        <h1 className="sf-pro-bold font-bold text-[3.2rem] leading-[3.8rem] text-center text-white relative z-1 mb-[0.8rem]">
          Retail Shop
        </h1>
        <p className="sf-pro text-[1.6rem] leading-[1.9rem] text-center text-white max-w-[32.4rem] relative z-1">
          Perfect for businesses that sell physical products and need inventory
          tracking.
        </p>
      </ScreenScale>

      {/* BREAKDOWN */}
      <ScreenScale
        type="section"
        className="pt-12 pb-[2.1rem] rounded-[3.2rem] bg-white px-[2.3rem] relative z-0 overflow-hidden mb-[5.3rem]"
      >
        {/* BG IMAGE */}
        <Image
          src="/retail-bg-2.png"
          alt="cart"
          width="0"
          height="0"
          sizes="100vw"
          className="absolute top-0 left-0 w-full h-full object-cover object-left -z-1"
        />

        {/* HEADING */}
        <h3 className="sf-pro font-bold text-[2rem] leading-[2.4rem] mb-[0.8rem] ">
          Score Breakdown
        </h3>
        <p className="sf-pro text-[1.4rem] leading-[1.7rem] mb-[1.6rem]">
          How Each Business type matches your answer
        </p>

        {/* LIST */}
        <ul>
          {/* 1 */}
          <li className="rounded-[9.9rem] relative w-full bg-[#DEDEDE] py-[0.85rem] pl-[2.4rem] pr-[3.7rem] z-0 overflow-hidden mb-[1.2rem]">
            <div className="flex justify-between">
              <p className="sf-pro-medium font-medium text-[1.6rem] leading-[1.9rem] text-white">
                Retail Shop
              </p>
              <p className="sf-pro-medium font-medium text-[1.6rem] leading-[1.9rem] text-white">
                7
              </p>
            </div>
            <div className="absolute w-full h-full left-0 top-0 z-[-1] bg-(--app-btn-blue)"></div>
          </li>

          {/* 2 */}
          <li className="rounded-[9.9rem] relative w-full bg-[#DEDEDE] py-[0.85rem] pl-[2.4rem] pr-[3.7rem] z-0 mb-[1.2rem]">
            <div className="flex justify-between">
              <p className="sf-pro-medium font-medium text-[1.6rem] leading-[1.9rem] text-[#002D7D]">
                Bulk / Wholesae
              </p>
              <p className="sf-pro-medium font-medium text-[1.6rem] leading-[1.9rem]">
                7
              </p>
            </div>
            <div className="absolute w-[80%] h-full left-0 top-0 z-[-1] bg-[#99BBF2] rounded-[3.2rem]"></div>
          </li>

          {/* 3 */}
          <li className="rounded-[9.9rem] relative w-full bg-[#DEDEDE] py-[0.85rem] pl-[2.4rem] pr-[3.7rem] z-0 mb-[1.2rem]">
            <div className="flex justify-between">
              <p className="sf-pro-medium font-medium text-[1.6rem] leading-[1.9rem] text-black">
                Food / Perishables
              </p>
              <p className="sf-pro-medium font-medium text-[1.6rem] leading-[1.9rem] text-black">
                5
              </p>
            </div>
            <div className="absolute w-[70%] h-full left-0 top-0 z-[-1] bg-[#81D7BE] rounded-[3.2rem]"></div>
          </li>

          {/* 4 */}
          <li className="rounded-[9.9rem] relative w-full bg-[#DEDEDE] py-[0.85rem] pl-[2.4rem] pr-[3.7rem] z-0">
            <div className="flex justify-between">
              <p className="sf-pro-medium font-medium text-[1.6rem] leading-[1.9rem] text-black">
                Services
              </p>
              <p className="sf-pro-medium font-medium text-[1.6rem] leading-[1.9rem] text-black">
                3
              </p>
            </div>
            <div className="absolute w-[50%] h-full left-0 top-0 z-[-1] bg-[#81D7BE] rounded-[3.2rem]"></div>
          </li>
        </ul>
      </ScreenScale>

      {/* CONTINUE */}
      <ScreenScale type="section">
        <button
          className="flex gap-[1.2rem] sf-pro-medium font-medium text-[1.6rem] leading-[1.9rem] tracking-[-.08px] text-white py-5 w-full rounded-[3.6rem] bg-(--app-btn-blue) justify-center mb-[1.4rem]"
          onClick={() => router.push("/confirmation")}
        >
          <Image src="/arrow-left.png" alt="arrow" width="20" height="20" />
          <span>Continue with Retail shop</span>
        </button>

        {/* NOT CONVINCED */}
        <p className="sf-pro text-[1.4rem] leading-[1.7rem] tracking-[-.08px] text-center text-[#888888] mb-[0.4rem]">
          Not Convinced?
        </p>

        {/* SEE OTHER BUSINESSES */}
        <button
          className="mx-auto flex sf-pro text-[1.4rem] leading-[1.7rem] tracking-[-.08px] text-center text-[#888888] underline gap-[0.4rem]"
          onClick={handlePopUp}
        >
          <span>See other business types</span>
          <Image src="/long-arrow.png" alt="arrow" width="16" height="16" />
        </button>
      </ScreenScale>
    </>
  );
  return xml;
};

export default Result;
