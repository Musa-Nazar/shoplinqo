import ScreenScale from "../utils/ScreenScale";

const CreditOverviewSection = () => {
  const xml: React.ReactNode = (
    <ScreenScale type="section" className="flex justify-between mb-[1.6rem]">
      {/* OUTSTANDINGS */}
      <div className="flex-1 shrink-0 overflow-hidden">
        <h2 className="sf-pro-bold font-bold text-[2.4rem] leading-[2.9rem] text-[#D32F2F] overflow-scroll hide-scrollbar relative z-1">
          N123.67M
        </h2>
        <h5 className="sf-pro text-[1.2rem] leading-[1.4rem] text-[#D32F2F]">
          Total Outstanding
        </h5>
      </div>

      {/* NO OF CUSTOMERS */}
      <div className="flex-1 text-center shrink-0 overflow-hidden">
        <h2 className="sf-pro-bold font-bold text-[2.4rem] leading-[2.9rem] overflow-scroll hide-scrollbar relative z-1">
          32
        </h2>
        <h5 className="sf-pro text-[1.2rem] leading-[1.4rem] ">Customers</h5>
      </div>

      {/* OVERDUE ENTRIES */}
      <div className="flex-1 text-right shrink-0 overflow-hidden">
        <h2 className="sf-pro-bold font-bold text-[2.4rem] leading-[2.9rem] text-[#E36328] overflow-scroll hide-scrollbar relative z-1">
          N1.7M
        </h2>
        <h5 className="sf-pro text-[1.2rem] leading-[1.4rem] text-[#E36328]">
          Overdue Entries
        </h5>
      </div>
    </ScreenScale>
  );
  return xml;
};

export default CreditOverviewSection;
