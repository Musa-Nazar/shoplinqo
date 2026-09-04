import ScreenScale from "../utils/ScreenScale";
import MoreItemLink from "./MoreItemLink";

const MoreMarketingSection: React.FC = () => {
  const xml: React.ReactNode = (
    <ScreenScale type="section" className="mb-[1.9rem]">
      <h5 className="sf-pro-medium font-medium text-[1.2rem] leading-[1.4rem] text-[#3f3f3f] mb-4">
        Marketing & Growth
      </h5>

      {/* OPTIONS */}
      <ul className="rounded-[1.6rem] py-[2.4rem] px-[2.2rem] bg-white [&>li]:mb-[1.2rem] [&>li:last-child]:mb-0">
        <MoreItemLink
          img="/whatsapp.svg"
          name="WhatsApp Integration"
          url="/more"
          infoText="Inactive"
          infoState="static"
        />
        <MoreItemLink img="/campaign.svg" name="Campaigns & SMS" url="/more" />
      </ul>
    </ScreenScale>
  );
  return xml;
};

export default MoreMarketingSection;
