import Image from "next/image";
interface profileInfoCard {
  img: string;
  title: string;
  det: string;
}

const ProfileInfoCard: React.FC<profileInfoCard> = ({ img, title, det }) => {
  const xml: React.ReactNode = (
    <li className="flex gap-[1.4rem] py-[0.8rem] items-center">
      {/* ICON */}
      <Image src={img} alt={img} width="32" height="32" />
      {/* DESC */}
      <div>
        <h4 className="sf-pro-medium font-medium text-[1.2rem] leading-[1.4rem] tracking-[-.08px] text-[#B4B4B4] mb-[0.4rem]">
          {title}
        </h4>
        <p className="sf-pro-medium font-medium text-[1.6rem] leading-[1.9rem]">
          {det}
        </p>
      </div>
    </li>
  );
  return xml;
};

export default ProfileInfoCard;
