"use client";
import Image from "next/image";
import OnboardingNavbar from "../onboarding/OnboardingNavbar";
import Confirmation from "./Confirmation";
import ScreenScale from "../utils/ScreenScale";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ConfirmationContainer: React.FC = () => {
  // INNER HEIGHT STATE
  const [shouldStick, setShouldStick] = useState<boolean>(false);

  // MAIN REF
  const ref = useRef<HTMLElement | null>(null);
  const elementToStick = useRef<HTMLElement | null>(null);
  useEffect(() => {
    elementToStick.current = document.querySelector(".stick-on-scroll");
  }, []);

  // Same
  const { scrollYProgress } = useScroll({ container: ref });

  useMotionValueEvent(scrollYProgress, "change", () => {
    if (!elementToStick) return;
    // GET ELEMENT VALUES
    const elementTopDistance =
      elementToStick.current?.getBoundingClientRect().top || 0;
    const elementHeight = elementToStick.current?.clientHeight || 0;
    const elementScrollHeight = ref.current?.scrollHeight || 0;
    const halfOfInnerHeight = window.innerHeight * 0.5;

    // SET STICK
    if (
      elementTopDistance < -1 * 0.5 * elementHeight &&
      elementScrollHeight >= window.innerHeight + halfOfInnerHeight
    ) {
      setShouldStick(true);
    }

    // REMOVE STICK
    if (ref.current?.scrollTop === 0) {
      setShouldStick(false);
    }
  });

  const xml: React.ReactNode = (
    <>
      <OnboardingNavbar
        showProgressBars={false}
        header="Confirmation"
        className="bg-(--special-gray)!"
      />
      <main
        className="bg-(--special-gray) py-[0.1rem] h-[calc(100dvh-5.8rem)]  overflow-scroll hide-scrollbar relative pb-[15.3rem]"
        ref={ref}
      >
        <Confirmation shouldStick={shouldStick} />
      </main>
    </>
  );
  return xml;
};

export default ConfirmationContainer;
