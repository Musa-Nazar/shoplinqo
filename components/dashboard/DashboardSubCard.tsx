import Image from "next/image";

interface dashboardSubCard {
  img: string;
  title: string;
  datValue: string;
  value: number;
  danger?: boolean;
}

const DashboardSubCard: React.FC<dashboardSubCard> = ({
  title,
  img,
  datValue,
  value,
  danger,
}) => {
  const xml: React.ReactNode = (
    <article
      className={`flex-1 py-[1.9rem] px-[2.4rem] rounded-[2.4rem] bg-[rgba(255,255,255,.67)] ${danger ? "text-[#D32F2F]" : ""}`}
    >
      {/* TITLE */}
      <h4 className="sf-pro text-[clamp(1.2rem,3.9801vw,1.6rem)] leading-[1.9rem] tracking-[-.23px] flex items-center gap-[0.4rem] mb-[0.3rem]">
        <Image src={img} alt={img} width="24" height="24" />
        <span>{title}</span>
      </h4>

      {/* VALUE */}
      <h3 className="sf-pro-bold font-bold text-[clamp(2rem,5.9701vw,2.4rem)] leading-[2.9rem] tracking-[-.23px]">
        <data value={value} className="break-all">
          {datValue}
        </data>
      </h3>
    </article>
  );
  return xml;
};

export default DashboardSubCard;
