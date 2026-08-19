"use client";
import Image from "next/image";
import ScreenScale from "../utils/ScreenScale";
import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";

interface OnboardingNavbar {
  pageNo?: number;
  setPageNo?: Dispatch<SetStateAction<number>>;
  showProgressBars?: boolean;
  showNumbers?: boolean;
  qNo?: number;
  qMax?: number;
  opacity?: number;
  header?: string;
  className?: string;
}

const OnboardingNavbar: React.FC<OnboardingNavbar> = ({
  pageNo,
  setPageNo,
  showProgressBars = true,
  showNumbers = false,
  qNo = 1,
  qMax = 5,
  opacity = 1,
  header,
  className,
}) => {
  // ROUTER
  const router = useRouter();

  // HANDLE NAVIGATION
  const goBack = (e: React.MouseEvent) => {
    if (!setPageNo) {
      router.back();
      return;
    }
    if (pageNo !== 1) {
      setPageNo((prev) => prev - 1);
    }
  };

  const xml: React.ReactNode = (
    <header
      className={`w-full ${opacity === 0 ? "bg-transparent" : "bg-(--onboarding-bg)"} py-2 relative z-1 ${className}`}
    >
      <ScreenScale
        type="nav"
        className="flex items-center justify-between relative"
      >
        <Image
          src="/onboarding-back.png"
          alt="back"
          width={48}
          height={48}
          onClick={goBack}
        />
        {/* HEADER */}
        {header && (
          <h1 className="sf-pro-medium font-[590] text-[2.4rem] leading-[2.9rem] text-center text-black absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]">
            {header}
          </h1>
        )}
        {/* PROGRESS */}
        {showProgressBars && (
          <div className="flex gap-2">
            <div
              className={`w-[6.4rem] h-[0.6rem] rounded-[1.2rem] ${pageNo === 1 ? "bg-[#0A58E6]" : "bg-[#DEDEDE]"}`}
            ></div>
            <div
              className={`w-[6.4rem] h-[0.6rem] rounded-[1.2rem] ${pageNo === 2 ? "bg-[#0A58E6]" : "bg-[#DEDEDE]"}`}
            ></div>
          </div>
        )}
        {/* NUMBERS */}
        {showNumbers && (
          <h5 className="sf-pro-medium font-medium text-[1.2rem] leading-[1.4rem]">
            {qNo} and {qMax}
          </h5>
        )}
      </ScreenScale>
    </header>
  );
  return xml;
};

export default OnboardingNavbar;
