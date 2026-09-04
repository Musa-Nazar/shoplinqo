import ScreenScale from "../utils/ScreenScale";
import MoreItemLink from "./MoreItemLink";

const MoreAccountSection: React.FC = () => {
  const xml: React.ReactNode = (
    <ScreenScale type="section" className="mb-[1.9rem]">
      <h5 className="sf-pro-medium font-medium text-[1.2rem] leading-[1.4rem] text-[#3f3f3f] mb-4">
        Account & Security
      </h5>

      {/* OPTIONS */}
      <ul className="rounded-[1.6rem] py-[2.4rem] px-[2.2rem] bg-white [&>li]:mb-[1.2rem] [&>li:last-child]:mb-0">
        <MoreItemLink
          img="/billing.svg"
          name="Billing & Subscription"
          url="/more"
        />
        <MoreItemLink
          img="/security-lock.svg"
          name="Security Settings"
          url="/more"
        />
        <MoreItemLink img="/sync.svg" name="Sync" url="/more" />
        <MoreItemLink img="/sign-out.svg" name="Sign out" url="/more" />
      </ul>
    </ScreenScale>
  );
  return xml;
};

export default MoreAccountSection;
