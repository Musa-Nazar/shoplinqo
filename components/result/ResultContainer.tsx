"use client";
import { useState } from "react";
import OnboardingNavbar from "../onboarding/OnboardingNavbar";
import Result from "./Result";
import ResultPopOptions from "./ResultPopOptions";

const ResultContainer: React.FC = () => {
  // POP OPTION STATE
  const [popUp, setPopUp] = useState<boolean>(false);

  // POPUP HANDLERS
  const handlePopUp = (e: React.MouseEvent): void => {
    console.log("clicked");
    setPopUp((prev) => !prev);
  };

  // XML
  const xml: React.ReactNode = (
    <>
      <OnboardingNavbar
        showProgressBars={false}
        header="Your Result"
        className="bg-(--special-gray)!"
      />
      <main className="bg-(--special-gray) pt-[0.1rem] max-h-[calc(100dvh-5.8rem)] h-[calc(100dvh-5.8rem)] pb-4 overflow-auto">
        <Result handlePopUp={handlePopUp} />
      </main>
      {popUp && <ResultPopOptions handlePopUp={handlePopUp} />}
    </>
  );
  return xml;
};

export default ResultContainer;
