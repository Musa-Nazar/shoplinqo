import Image from "next/image";
import ScreenScale from "../utils/ScreenScale";
import Link from "next/link";

const MoreProfileSection: React.FC = () => {
  const xml: React.ReactNode = (
    <ScreenScale
      type="section"
      className="bg-white rounded-[1.6rem] p-[1.6rem] flex gap-[1.6rem] mb-12"
    >
      {/* PROFILE IMAGE */}
      <Link href="/profile">
        <Image
          src="/profile_default.png"
          alt="profile-default"
          width="84"
          height="84"
        />
      </Link>

      {/* DESC TEXT */}
      <div>
        <h3 className="sf-pro-medium font-[590] text-[2rem] leading-[2.4rem] mb-[0.8rem]">
          Osmern D
        </h3>
        <h5 className="sf-pro text-[1.2rem] leading-[1.4rem] mb-[0.8rem]">
          usmand23@shoplinqo.com
        </h5>

        <span className="py-[0.4rem] px-[1.2rem] rounded-[9.9rem] bg-(--special-gray) sf-pro inline-block text-[1rem] leading-[1.2rem]">
          owner
        </span>
      </div>
    </ScreenScale>
  );
  return xml;
};

export default MoreProfileSection;
