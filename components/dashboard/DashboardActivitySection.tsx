import Link from "next/link";
import ScreenScale from "../utils/ScreenScale";
import DashboardActivityCard from "./DashboardActivityCard";

const DashboardActivitySection: React.FC = () => {
  const xml: React.ReactNode = (
    <ScreenScale type="section">
      {/* HEADING */}
      <div className="flex justify-between items-center mb-8">
        <h3 className="sf-pro-bold font-bold text-[2rem] leading-[2.4rem] tracking-[-.23px]">
          Latest Activity
        </h3>

        {/* SEE MORE */}
        <Link
          href="/activity"
          className="sf-pro text-[1.6rem] leading-[1.9rem] tracling-[-.23px]"
        >
          See all
        </Link>
      </div>

      {/* ACTIVITIES */}
      <ul className="flex flex-col gap-[1.2rem]">
        <DashboardActivityCard
          img="/sale.png"
          action="Added Sale"
          time="1h ago"
          ammount={385000}
        />
        <DashboardActivityCard
          img="/sale.png"
          action="Added Sale"
          time="1h ago"
          ammount={385000}
          gain={false}
        />
      </ul>
    </ScreenScale>
  );
  return xml;
};

export default DashboardActivitySection;
