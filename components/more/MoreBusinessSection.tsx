import ScreenScale from "../utils/ScreenScale";
import MoreItemLink from "./MoreItemLink";

const MoreBusinessSection: React.FC = () => {
  const xml: React.ReactNode = (
    <ScreenScale type="section" className="mb-[1.9rem]">
      <h5 className="sf-pro-medium font-medium text-[1.2rem] leading-[1.4rem] text-[#3f3f3f] mb-4">
        My Business
      </h5>

      {/* OPTIONS */}
      <ul className="rounded-[1.6rem] py-[2.4rem] px-[2.2rem] bg-white [&>li]:mb-[1.2rem] [&>li:last-child]:mb-0">
        <MoreItemLink
          img="/manage-shop.svg"
          name="Manage Shop"
          url="/more"
          infoText="3 Shops"
          infoState="active"
        />
        <MoreItemLink
          img="/business-profile.svg"
          name="Business Profile"
          url="/more"
        />
        <MoreItemLink
          img="/staff-members.svg"
          name="Staff Members"
          url="/more"
        />
      </ul>
    </ScreenScale>
  );
  return xml;
};

export default MoreBusinessSection;
