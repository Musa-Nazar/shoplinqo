"use client";

import { useState } from "react";
import OnboardingNavbar from "./OnboardingNavbar";
import OnboardingPageOne from "./OnboardingPageOne";
import OnboardingPageTwo from "./OnboardingPageTwo";

const OnboardingContainer: React.FC = () => {
  // PAGE NUMBER
  const [pageNo, setPageNo] = useState<number>(1);

  // XML
  const xml: React.ReactNode = (
    <main className="overflow-hidden max-h-dvh max-w-200 mx-auto">
      <OnboardingNavbar pageNo={pageNo} setPageNo={setPageNo} />
      {pageNo === 1 && <OnboardingPageOne setPageNo={setPageNo} />}
      {pageNo === 2 && <OnboardingPageTwo />}
    </main>
  );
  return xml;
};

export default OnboardingContainer;
