import Image from "next/image";
import ScreenScale from "../utils/ScreenScale";

interface Personolize {
  incrementPageNo: (e: React.MouseEvent) => void;
}

const Personolize: React.FC<Personolize> = ({ incrementPageNo }) => {
  const xml: React.ReactNode = (
    <>
      <ScreenScale type="div" className="mt-[-.7rem] w-full">
        <Image
          src="/personalizebg.png"
          alt="background"
          width={369}
          height={256}
          sizes="50vw"
          className="w-full"
        />
      </ScreenScale>
      <section className="flex-1 overflow-auto hide-scrollbar mt-[-6.6rem] bg-white rounded-tl-[3.2rem] rounded-tr-[3.2rem]">
        <ScreenScale className="pt-20" type="div">
          {/* HEAD */}
          <h1 className="sf-pro-bold font-bold text-[2.8rem] leading-[3.3rem] text-center text-black mb-[2.4rem]">
            Help us personalize
            <br />
            <span className="text-(--app-btn-blue)">Shoplinqo</span>
          </h1>
          {/* DESC */}
          <p className="sf-pro text-[1.6rem] leading-[1.9rem] text-center mb-32">
            Answer a few quick questions so we can tailor Shoplinqo to your
            business.
          </p>
          {/* CONFIRM BTN */}
          <button
            className="sf-pro-medium font-medium text-[1.6rem] leading-[1.9rem] text-white bg-(--app-btn-blue) rounded-[3.6rem] py-[1.2rem] w-full"
            onClick={incrementPageNo}
          >
            Get Started
          </button>
        </ScreenScale>
      </section>
    </>
  );
  return xml;
};

export default Personolize;
