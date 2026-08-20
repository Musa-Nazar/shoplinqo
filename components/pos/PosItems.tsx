import Link from "next/link";
import ScreenScale from "../utils/ScreenScale";
import PosItem from "./PosItem";

const PosItems: React.FC = () => {
  const xml: React.ReactNode = (
    <section className="py-[1.2rem] rounded-tr-[3.6rem] rounded-tl-[3.6rem] bg-white">
      {/* OPTIONS */}
      <ScreenScale
        className="flex items-center pl-2 pr-[0.1rem] mb-[0.7rem]"
        type="div"
      >
        <ul className="flex flex-1 gap-[0.8rem] overflow-auto hide-scrollbar">
          {/* ALL */}
          <li className="">
            <Link
              href="/inventory?type=all"
              className="sf-pro text-[1.6rem] leading-[1.9rem] px-[0.4rem] py-[1.2rem] inline-block text-(--app-btn-blue) border-b-2 border-solid border-(--app-btn-blue) max-h-[4.3rem]"
            >
              All
            </Link>
          </li>

          {/* LAPTOP */}
          <li className="">
            <Link
              href="/inventory?type=laptop"
              className="sf-pro text-[1.6rem] leading-[1.9rem] px-[0.4rem] py-[1.2rem] inline-block"
            >
              Laptop
            </Link>
          </li>

          {/* MOUSE */}
          <li className="">
            <Link
              href="/inventory?type=mouse"
              className="sf-pro text-[1.6rem] leading-[1.9rem] px-[0.4rem] py-[1.2rem] inline-block"
            >
              Mouse
            </Link>
          </li>

          {/* KEYBOARD */}
          <li className="">
            <Link
              href="/inventory?type=keyboard"
              className="sf-pro text-[1.6rem] leading-[1.9rem] px-[0.4rem] py-[1.2rem] inline-block"
            >
              Keyboard
            </Link>
          </li>

          {/* GAMEPAD */}
          <li className="">
            <Link
              href="/inventory?type=gamePad"
              className="sf-pro text-[1.6rem] leading-[1.9rem] px-[0.4rem] py-[1.2rem] inline-block"
            >
              GamePad
            </Link>
          </li>
        </ul>
      </ScreenScale>

      {/* POS ITEMS */}
      <ScreenScale
        type="ul"
        className="[&>li]:border-b-2 [&>li]:border-b-solid [&>li]:border-b-(--special-gray) [&>li:last-child]:border-none"
      >
        <PosItem
          name="Asus Zephrus G14"
          price={1320500}
          amount={39}
          img="/laptop-pos.png"
        />
        <PosItem
          name="Asus Zephrus G14"
          price={1320500}
          amount={39}
          img="/laptop-pos.png"
        />
        <PosItem
          name="Asus Zephrus G14"
          price={1320500}
          amount={39}
          img="/laptop-pos.png"
        />
        <PosItem
          name="Asus Zephrus G14"
          price={1320500}
          amount={39}
          img="/laptop-pos.png"
        />
        <PosItem
          name="Asus Zephrus G14"
          price={1320500}
          amount={39}
          img="/laptop-pos.png"
        />
        <PosItem
          name="Asus Zephrus G14"
          price={1320500}
          amount={39}
          img="/laptop-pos.png"
        />
      </ScreenScale>
    </section>
  );
  return xml;
};

export default PosItems;
