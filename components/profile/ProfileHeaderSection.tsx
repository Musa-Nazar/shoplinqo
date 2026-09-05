import Link from "next/link";
import ScreenScale from "../utils/ScreenScale";
import Image from "next/image";

interface profileHeaderSection {
  path?: string;
}

const ProfileHeaderSection: React.FC<profileHeaderSection> = ({ path }) => {
  const xml: React.ReactNode = (
    <header className="bg-white py-[1.45rem]">
      <ScreenScale type="nav" className="relative">
        {/* LINK */}
        <Link
          href={path ? path : "/more"}
          className="absolute left-[1.2rem] top-[50%] translate-y-[-50%]"
        >
          <Image src="/profile-back.png" alt="back" width="24" height="24" />
        </Link>

        {/* HEADING */}
        <h3 className="sf-pro-medium font-medium text-[2rem] leading-[2.9rem] text-center">
          Profile
        </h3>
      </ScreenScale>
    </header>
  );
  return xml;
};

export default ProfileHeaderSection;
