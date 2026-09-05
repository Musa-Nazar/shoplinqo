import Image from "next/image";
import ScreenScale from "../utils/ScreenScale";
import ProfileInfoCard from "./ProfileInfoCard";
import Link from "next/link";

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
      <Link
        href="/profile/edit"
        className="sf-pro-medium font-medium text-[1.2rem] leading-[1.4rem] tracking-[-.08px] text-white py-[0.4rem] px-[1.2rem] bg-(--app-btn-blue) rounded-[3.6rem] mx-auto block w-fit mb-8"
      >
        Edit Profile
      </Link>

      {/* USER DETAILS */}
      <ScreenScale
        type="ul"
        className="bg-white p-[1.2rem] [&>li]:mb-[0.8rem] [&>li:last-child]:mb-0"
      >
        <ProfileInfoCard
          img="/profile-phone.png"
          title="Phone"
          det="+234 911 611 3355"
        />
        <ProfileInfoCard
          img="/onboarding_store_solid.png"
          title="Business Name"
          det="Audu Nexus 5.1"
        />
        <ProfileInfoCard
          img="/onboarding_city_solid.png"
          title="City"
          det="Kano"
        />
        <ProfileInfoCard
          img="/onbaording_map_solid.png"
          title="Market Location"
          det="Kantin Kwari"
        />
        <ProfileInfoCard
          img="/location_pin.png"
          title="Address"
          det="No 72, Layin Bosse DanKurmi"
        />
      </ScreenScale>
    </section>
  );
  return xml;
};

export default ProfileMainSection;
