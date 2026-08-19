import React from "react";
import ScreenScale from "../utils/ScreenScale";
import Image from "next/image";
import DashboardSubCard from "./DashboardSubCard";

const DashboardSubSection: React.FC = () => {
  const xml: React.ReactNode = (
    <ScreenScale type="section" className="flex gap-8 mb-8">
      {/* CREDIT */}
      <DashboardSubCard
        title="Credit Owed"
        img="/credit-earned.svg"
        value={11330000}
        datValue="N1.133M"
      />

      {/* EXPENDITURE */}
      <DashboardSubCard
        title="Expenditure"
        img="/fall.svg"
        value={3112000}
        datValue="N3.112M"
        danger
      />
    </ScreenScale>
  );
  return xml;
};

export default DashboardSubSection;
