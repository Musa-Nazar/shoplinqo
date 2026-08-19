import Image from "next/image";
import ScreenScale from "../utils/ScreenScale";
import Link from "next/link";
import InventoryEntry from "./InventoryEntry";

const InventoryEntries: React.FC = () => {
  const xml: React.ReactNode = (
    <section className="bg-white rounded-tr-[3.6rem] rounded-tl-[3.6rem] py-[0.95rem] z-1 relative pb-[0.1rem]">
      {/* OPTIONS */}
      <ScreenScale
        className="flex items-center pl-2 pr-[0.1rem] mb-[2.1rem]"
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

        {/* LIST ICON */}
        <div className="w-[4.8rem] aspect-square rounded-[50%] bg-(--special-gray) grid place-items-center shadow-[-1.2rem_-.7rem_1rem_#FFFFFF] backdrop-blur-[1.95rem]">
          <Image src="/list.svg" alt="list" width="24" height="24" />
        </div>
      </ScreenScale>

      {/* ENTRIES */}
      <ScreenScale
        type="ul"
        className="[&>li]:border-b-2 [&>li]:border-b-solid [&>li]:border-b-(--special-gray) [&>li:last-child]:border-none"
      >
        <InventoryEntry
          img="/laptop-inventory.png"
          name="Asus VivoBook OLED 14”"
          price={1900340}
          ammount={39}
        />
        <InventoryEntry
          img="/laptop-inventory.png"
          name="Asus VivoBook OLED 14”"
          price={1900340}
          ammount={39}
        />
        <InventoryEntry
          img="/laptop-inventory.png"
          name="Asus VivoBook OLED 14”"
          price={1900340}
          ammount={39}
        />
        <InventoryEntry
          img="/laptop-inventory.png"
          name="Asus VivoBook OLED 14”"
          price={1900340}
          ammount={39}
        />
        <InventoryEntry
          img="/laptop-inventory.png"
          name="Asus VivoBook OLED 14”"
          price={1900340}
          ammount={39}
        />
        <InventoryEntry
          img="/laptop-inventory.png"
          name="Asus VivoBook OLED 14”"
          price={1900340}
          ammount={39}
        />
      </ScreenScale>
    </section>
  );
  return xml;
};

export default InventoryEntries;
