import CreditEntries from "@/components/credit/CreditEntries";
import CreditHeaderSection from "@/components/credit/CreditHeaderSection";
import CreditOverviewSection from "@/components/credit/CreditOverviewSection";
import React from "react";

const Credit = () => {
  const xml: React.ReactNode = (
    <main className="h-dvh bg-(--special-gray) overflow-auto pb-38 max-w-200 mx-auto">
      <CreditHeaderSection />
      <CreditOverviewSection />
      <CreditEntries />
    </main>
  );
  return xml;
};

export default Credit;
