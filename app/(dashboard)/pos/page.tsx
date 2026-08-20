import PosHeaaderSection from "@/components/pos/PosHeaaderSection";
import PosItems from "@/components/pos/PosItems";
import PosNavSection from "@/components/pos/PosNavSection";
import PosSearchSection from "@/components/pos/PosSearchSection";
import { Suspense } from "react";

const POS: React.FC = () => {
  const xml: React.ReactNode = (
    <main className="h-dvh bg-(--special-gray) overflow-auto pb-38">
      <PosHeaaderSection />
      <Suspense>
        <PosNavSection />
      </Suspense>
      <PosSearchSection />
      <PosItems />
    </main>
  );
  return xml;
};

export default POS;
