import Image from "next/image";
import ScreenScale from "../utils/ScreenScale";

const DashboardMainSection: React.FC = () => {
  const xml: React.ReactNode = (
    <ScreenScale
      type="section"
      className="relative z-0 rounded-[3.2rem] overflow-hidden h-[19.2rem] mt-8 pt-[2.7rem] px-[2.3rem] mb-8"
    >
      {/* BG */}
      <Image
        src="/dashboard-main.png"
        alt="dashboard"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute w-full h-full top-0 left-0 -z-1 "
      />
      {/* SELECT */}
      <div className="inline-flex items-center py-[0.8rem] px-[1.2rem] rounded-[99.9rem] bg-[#E6EEFC] mb-[1.6rem]">
        <Image
          src="/dahsboard-a-icon.png"
          alt="a-icon"
          width="24"
          height="24"
          className="mr-[0.8rem]"
        />

        {/* NAME */}
        <select
          name="dash"
          id="dash"
          className="appearance-none sf-pro text-[1.2rem] leading-[1.8rem] text-[#002363] mr-[3.2rem] focus:outline-0"
          defaultValue={"OsmernD Studios"}
        >
          <option value="OsmernD Studios">OsmernD Studios</option>
        </select>

        {/* ARROW */}
        <label htmlFor="dash" className="block">
          <Image
            src="/arrow-down.svg"
            alt="a-icon"
            width="24"
            height="24"
            className=""
          />
        </label>
      </div>

      {/* REVENUE SECTION */}
      <div className="flex items-center gap-[3.3rem] mb-[0.8rem]">
        <h4 className="sf-pro font-[590] text-[1.6rem] leading-[1.8rem] text-white">
          Today’s Revenue
        </h4>

        {/* INDICATOR */}
        <div className="bg-[#34c759] text-[] rounded-[100rem] py-[0.4rem] px-4 sf-pro text-[1.5rem] leading-8 tracking-[-.23px] text-white flex items-center gap-[0.3rem]">
          <Image src="/rise.svg" alt="rise" width="24" height="24" />
          <span>+12%</span>
        </div>
      </div>

      {/* MONEY DISPLAY */}
      <h1 className="sf-pro-bold font-bold text-[3.6rem] leading-[4.3rem] text-white">
        N140,465,000
      </h1>
    </ScreenScale>
  );
  return xml;
};

export default DashboardMainSection;
