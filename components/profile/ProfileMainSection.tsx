import Image from "next/image";
import ScreenScale from "../utils/ScreenScale";
import ProfileInfoCard from "./ProfileInfoCard";

const ProfileMainSection: React.FC = () => {
  const xml: React.ReactNode = (
    <section className="bg-(--onboarding-bg) pt-[4.8rem]">
      {/* IMAGE */}
      <Image
        src="/profile_default.png"
        alt="profile-image"
        width="128"
        height="128"
        className="block mx-auto mb-[2.4rem]"
      />
      {/* NAME */}
      <h3 className="sf-pro-medium font-[590] text-[2rem] leading-[2.4rem] text-center mb-[0.8rem]">
        Usman Dayyab
      </h3>
      {/* EDIT BUTTON */}
      <button className="sf-pro-medium font-medium text-[1.2rem] leading-[1.4rem] tracking-[-.08px] text-white py-[0.4rem] px-[1.2rem] bg-(--app-btn-blue) rounded-[3.6rem] mx-auto block">
        Edit Profile
      </button>

      {/* USER DETAILS */}
      <ScreenScale type="ul" className="bg-white">
        <ProfileInfoCard img="" title="" det="" />
      </ScreenScale>
    </section>
  );
  return xml;
};

export default ProfileMainSection;
