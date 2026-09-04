import MoreAccountSection from "@/components/more/MoreAccountSection";
import MoreBusinessSection from "@/components/more/MoreBusinessSection";
import MoreHeaderSection from "@/components/more/MoreHeaderSection";
import MoreMarketingSection from "@/components/more/MoreMarketingSection";
import MoreProfileSection from "@/components/more/MoreProfileSection";
import MoreReportSection from "@/components/more/MoreReportSection";

const More: React.FC = () => {
  const xml: React.ReactNode = (
    <main className="h-dvh bg-(--special-gray) overflow-auto pb-38 max-w-200 mx-auto">
      <MoreHeaderSection />
      <MoreProfileSection />
      <MoreBusinessSection />
      <MoreReportSection />
      <MoreMarketingSection />
      <MoreAccountSection />
    </main>
  );
  return xml;
};

export default More;
