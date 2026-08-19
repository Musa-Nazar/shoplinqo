import DashboardActionSection from "@/components/dashboard/DashboardActionSection";
import DashboardActivitySection from "@/components/dashboard/DashboardActivitySection";
import DashboardMainSection from "@/components/dashboard/DashboardMainSection";
import DashboardSubSection from "@/components/dashboard/DashboardSubSection";
import DashboardHeaderSection from "@/components/dashboard/DashboardHeaderSection";

const Dashboard: React.FC = () => {
  const xml: React.ReactNode = (
    <main className="bg-(--special-gray) h-dvh overflow-auto hide-scrollbar max-w-200 mx-auto pb-38">
      <DashboardHeaderSection />
      <DashboardMainSection />
      <DashboardSubSection />
      <DashboardActionSection />
      <DashboardActivitySection />
    </main>
  );
  return xml;
};

export default Dashboard;
