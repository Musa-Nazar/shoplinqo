import ScreenScale from "../utils/ScreenScale";
import DashboardActionCard from "./DashboardActionCard";

const DashboardActionSection: React.FC = () => {
  const xml: React.ReactNode = (
    <ScreenScale type="section" className="px-[0.7rem] mb-8">
      {/* HEADING */}
      <h3 className="sf-pro-bold font-bold text-[2rem] leading-[2.4rem] tracking-[-.23px] mb-[1.6rem]">
        Quick Actions
      </h3>

      {/* ACTIONS */}
      <div className="flex gap-[clamp(1.2rem,3.9801vw,1.6rem)]">
        <DashboardActionCard img="/add-expense.svg" title="Add Expense" />
        <DashboardActionCard img="/restock.svg" title="Restock" />
        <DashboardActionCard img="/remind-action.svg" title="Remind" />
      </div>
    </ScreenScale>
  );
  return xml;
};

export default DashboardActionSection;
