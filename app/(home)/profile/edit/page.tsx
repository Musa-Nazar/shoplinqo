import ProfileEditForm from "@/components/profile/ProfileEditForm";
import ProfileHeaderSection from "@/components/profile/ProfileHeaderSection";
import Image from "next/image";

const EditProfile: React.FC = () => {
  const xml: React.ReactNode = (
    <main className="h-dvh relative z-0 overflow-auto hide-scrollbar bg-(--onboarding-bg)">
      <ProfileHeaderSection path="/profile" />
      <ProfileEditForm />

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

export default EditProfile;
