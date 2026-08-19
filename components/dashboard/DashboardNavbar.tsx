"use client";
import Link from "next/link";
import ScreenScale from "../utils/ScreenScale";
import Image from "next/image";
import { usePathname } from "next/navigation";

const selected: string = "rounded-[99.9rem] bg-[#F5FCFF]";
const selectedLink: string = "font-[590] text-(--app-btn-blue) sf-pro-medium";

const DashboardNavbar: React.FC = () => {
  // GET PATHNAME
  const pathname = usePathname();

  // EACH LINK SELECTED PATH
  const isHome = pathname === "/dashboard";
  const isInventory = pathname === "/inventory";
  const isPos = pathname === "/pos";
  const isCredit = pathname === "/credit";
  const isMore = pathname === "/more";

  // XML
  const xml: React.ReactNode = (
    <footer className="fixed z-10 bottom-0 left-0 w-full bg-white/60 shadow-[0px_-2px_250px_rgba(0,0,0,0.05)] rounded-tl-[2.4rem] rounded-tr-[2.4rem] pt-[1.2rem] pb-[2.4rem]">
      <ScreenScale type="nav">
        <ul className="flex items-center">
          {/* HOME */}
          <li
            className={`flex-1  flex justify-center ${isHome ? selected : ""}`}
          >
            <Link
              href="/dashboard"
              className={`inline-block py-[0.8rem] text-center text-[1.2rem] leading-[1.4rem]  ${isHome ? "font-[590] text-(--app-btn-blue) sf-pro-medium" : "sf-pro text-[#3F3F3F]"}`}
            >
              <Image
                src={isHome ? "/home-selected.png" : "/home-regular.png"}
                alt="home"
                width="24"
                height="24"
                className="mx-auto mb-[0.2rem]"
              />
              <span>Home</span>
            </Link>
          </li>

          {/* INVENTORY */}
          <li
            className={`flex-1 flex justify-center ${isInventory ? selected : ""}`}
          >
            <Link
              href="/inventory"
              className={`inline-block py-[0.8rem] text-center text-[1.2rem] leading-[1.4rem] ${isInventory ? selectedLink : "sf-pro text-[#3F3F3F]"}`}
            >
              <Image
                src={isInventory ? "/inventory-selected.png" : "/inventory.png"}
                alt="home"
                width="24"
                height="24"
                className="mx-auto mb-[0.2rem]"
              />
              <span>Inventory</span>
            </Link>
          </li>

          {/* POS */}
          <li className={`flex-1 flex justify-center ${isPos ? selected : ""}`}>
            <Link
              href="/pos"
              className={`inline-block py-[0.8rem] text-center text-[1.2rem] leading-[1.4rem] ${isPos ? selectedLink : "sf-pro text-[#3F3F3F]"}`}
            >
              <Image
                src={isPos ? "/POS-selected.png" : "/POS.png"}
                alt="home"
                width="24"
                height="24"
                className="mx-auto mb-[0.2rem]"
              />
              <span>POS</span>
            </Link>
          </li>

          {/* CREDIT */}
          <li
            className={`flex-1  flex justify-center ${isCredit ? selected : ""}`}
          >
            <Link
              href="/credit"
              className={`inline-block py-[0.8rem] text-center text-[1.2rem] leading-[1.4rem] ${isCredit ? selectedLink : "sf-pro text-[#3F3F3F]"}`}
            >
              <Image
                src={isCredit ? "/credit-selected.png" : "/credit.png"}
                alt="home"
                width="24"
                height="24"
                className="mx-auto mb-[0.2rem]"
              />
              <span>Credit</span>
            </Link>
          </li>

          {/* MORE */}
          <li
            className={`flex-1  flex justify-center ${isMore ? selected : ""}`}
          >
            <Link
              href="/more"
              className={`inline-block py-[0.8rem] text-center text-[1.2rem] leading-[1.4rem] ${isMore ? selectedLink : "sf-pro text-[#3F3F3F]"}`}
            >
              <Image
                src={isMore ? "/more-selected.png" : "/more.png"}
                alt="home"
                width="24"
                height="24"
                className="mx-auto mb-[0.2rem]"
              />
              <span>More</span>
            </Link>
          </li>
        </ul>
      </ScreenScale>
    </footer>
  );
  return xml;
};

export default DashboardNavbar;
