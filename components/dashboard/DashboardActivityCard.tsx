import Image from "next/image";

interface dashboardActivityCard {
  img: string;
  action: string;
  time: string;
  gain?: boolean;
  ammount: number;
}

const DashboardActivityCard: React.FC<dashboardActivityCard> = ({
  img,
  action,
  time,
  gain = true,
  ammount,
}) => {
  const xml: React.ReactNode = (
    <li className="flex items-center bg-white max-w-full p-[0.8rem] rounded-[99.9rem] w-full">
      {/* ICON */}
      <div className="w-[4.8rem] aspect-square rounded-[50%] overflow-hidden mr-8">
        <Image src={img} alt={img} width="48" height="48" />
      </div>

      {/* ACTION TEXT */}
      <div>
        <h3 className="sf-pro-medium font-medium text-[1.6rem] leading-[1.9rem] tracking-[-.23px] mb-[0.4rem]">
          {action}
        </h3>
        <h4 className="sf-pro text-[1.2rem] leading-[1.4rem] tracking-[-.23px]">
          {time}
        </h4>
      </div>

      {/* AMMOUNT */}
      <h3
        className={`sf-pro-medium font-[590] text-[1.6rem] leading-[1.9rem] tracking-[-.23px] ml-auto  ${gain ? "text-(--app-btn-blue)" : "text-black"}`}
      >
        {gain ? "+" : "-"}
        <data value={ammount}>N{ammount.toLocaleString()}</data>
      </h3>
    </li>
  );
  return xml;
};

export default DashboardActivityCard;
