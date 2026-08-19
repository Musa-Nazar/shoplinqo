import Image from "next/image";

interface dashboardActionCard {
  img: string;
  title: string;
}

const DashboardActionCard: React.FC<dashboardActionCard> = ({ img, title }) => {
  const xml: React.ReactNode = (
    <article className="p-[1.2rem] rounded-[2.4rem] border-2 border-solid border-[#EAEAEA] bg-white flex-1">
      {/* ICON */}
      <Image
        src={img}
        alt={img}
        width="36"
        height="36"
        className="block mx-auto mb-[0.8rem]"
      />

      {/* TEXT */}
      <h5 className="sf-pro text-[1.2rem] leading-8 tracking-[-.23px] text-[#002363] text-center">
        {title}
      </h5>
    </article>
  );
  return xml;
};

export default DashboardActionCard;
