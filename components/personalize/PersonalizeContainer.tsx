"use client";

import { useState } from "react";
import OnboardingNavbar from "../onboarding/OnboardingNavbar";
import Personolize from "./Personolize";
import PersonlizeQuestions from "./PersonlizeQuestions";

const PersonalizeContainer: React.FC = () => {
  // PAGE NO
  const [pageNo, setPageNo] = useState<number>(1);

  // HANDLE PAGE NO
  const incrementPageNo = (e: React.MouseEvent) =>
    setPageNo((prev) => prev + 1);
  const decrementPageNo = (e: React.MouseEvent) =>
    setPageNo((prev) => {
      if (prev === 1) return 1;
      return prev - 1;
    });

  const xml: React.ReactNode = (
    <main className="bg-(--onboarding-bg) flex flex-col h-dvh max-w-200">
      {/* PAGE 1 */}
      {pageNo === 1 && (
        <>
          <OnboardingNavbar
            showProgressBars={false}
            pageNo={pageNo}
            setPageNo={setPageNo}
          />
          <Personolize incrementPageNo={incrementPageNo} />
        </>
      )}
      {/* PAGE 2 */}
      {pageNo === 2 && (
        <>
          <PersonlizeQuestions setPageNo={setPageNo} />
        </>
      )}
    </main>
  );
  return xml;
};

export default PersonalizeContainer;
