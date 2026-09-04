import ProfileHeaderSection from "@/components/profile/ProfileHeaderSection";
import ProfileMainSection from "@/components/profile/ProfileMainSection";
import Image from "next/image";

const Profile: React.FC = () => {
  const xml: React.ReactNode = (
    <main className="h-dvh relative z-0 bg-[#F6F9F9]">
      <ProfileHeaderSection />
      <ProfileMainSection />
      {/* BG */}
      <Image
        src="/profile-bg.png"
        alt="Sq"
        width="110"
        height="109"
        className="absolute bottom-[4.4rem] -z-1 left-[50%] translate-x-[-50%]"
      />
    </main>
  );
  return xml;
};

export default Profile;
