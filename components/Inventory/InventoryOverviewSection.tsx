import ScreenScale from "../utils/ScreenScale";

const InventoryOverviewSection: React.FC = () => {
  const xml: React.ReactNode = (
    <ScreenScale type="section" className="flex mb-[1.8rem]">
      {/* TOTAL VALUE */}
      <div className="flex-1">
        <data
          value="123670000"
          className="sf-pro-medium font-medium text-[2.4rem] leading-[2.9rem] break-all"
        >
          N123.67M
        </data>
        <h5 className="sf-pro text-[1.2rem] leading-[1.4rem]">Total Value</h5>
      </div>

      {/* LOW STOCKS */}
      <div className="text-center flex-1">
        <data
          value="12"
          className="sf-pro-medium font-medium text-[2.4rem] leading-[2.9rem] text-[#FF8D28]"
        >
          12
        </data>
        <h5 className="sf-pro text-[1.2rem] leading-[1.4rem] text-[#FF8D28]">
          Low Stock
        </h5>
      </div>

      {/* PRODUCT */}
      <div className=" flex-1 text-right">
        <data
          value="123"
          className="sf-pro-medium font-medium text-[2.4rem] leading-[2.9rem]"
        >
          123
        </data>
        <h5 className="sf-pro text-[1.2rem] leading-[1.4rem]">Products</h5>
      </div>
    </ScreenScale>
  );
  return xml;
};

export default InventoryOverviewSection;
