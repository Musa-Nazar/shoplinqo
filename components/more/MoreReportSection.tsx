import ScreenScale from "../utils/ScreenScale";
import MoreItemLink from "./MoreItemLink";

const MoreReportSection: React.FC = () => {
  const xml: React.ReactNode = (
    <ScreenScale type="section" className="mb-[1.9rem]">
      <h5 className="sf-pro-medium font-medium text-[1.2rem] leading-[1.4rem] text-[#3f3f3f] mb-4">
        Finance & Report
      </h5>

      {/* OPTIONS */}
      <ul className="rounded-[1.6rem] py-[2.4rem] px-[2.2rem] bg-white [&>li]:mb-[1.2rem] [&>li:last-child]:mb-0">
        <MoreItemLink
          img="/report-and-analytics.svg"
          name="Report and Analytics"
          url="/more"
        />
        <MoreItemLink
          img="/expense-tracker.svg"
          name="Expense Tracker"
          url="/more"
        />
        <MoreItemLink img="/credit.png" name="Credit Book" url="/more" />
        <MoreItemLink img="/customer.svg" name="Customers" url="/more" />
        <MoreItemLink img="/suppliers.svg" name="Suppliers" url="/more" />
        <MoreItemLink
          img="/supplier-hour-glass.svg"
          name="Supplier Credits"
          url="/more"
        />
      </ul>
    </ScreenScale>
  );
  return xml;
};

export default MoreReportSection;
