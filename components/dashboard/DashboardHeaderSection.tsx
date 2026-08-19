import Image from "next/image";
import ScreenScale from "../utils/ScreenScale";

const DashboardHeaderSection: React.FC = () => {
  const xml: React.ReactNode = (
    <header className="py-[0.2rem]">
      <ScreenScale type="div" className="px-[1.2rem] flex items-center">
        {/* PROFILE PICTURE */}
        <div className="w-[6.4rem] aspect-square flex justify-center items-center overflow-hidden rounded-[50%] mr-[1.2rem]">
          <Image
            src="/profile-default.png"
            alt="profile"
            width="64"
            height="64"
          />
        </div>

        {/* NAME */}
        <h2 className="sf-pro-medium font-medium text-[clamp(2rem,5.9701vw,2.4rem)] leading-[2.9rem]">
          Hello, Osmern D
        </h2>

        {/* NOTIFICATION */}
        <div className="w-[4.8rem] aspect-square rounded-[50%] overflow-hidden ml-auto">
          <Image
            src="/notification.png"
            alt="notification"
            width="48"
            height="48"
          />
        </div>
      </ScreenScale>
    </header>
  );
  return xml;
};

export default DashboardHeaderSection;
