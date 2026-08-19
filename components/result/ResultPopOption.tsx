import Image from "next/image";

interface ResultPopOption {
  img: string;
  title: string;
  desc: string;
  recom?: boolean;
  selected?: boolean;
}

const ResultPopOption: React.FC<ResultPopOption> = ({
  img,
  title,
  desc,
  recom = false,
  selected = false,
}) => {
  const xml: React.ReactNode = (
    <li
      tabIndex={1}
      className="rounded-[99.9rem] bg-[#F4FBFF] pt-[1.8rem] pb-[1.3rem] pl-8 pr-[2.6rem] flex gap-[0.8rem] items-center w-full focus:border-2 border-[#0A58E6]"
    >
      {/* IMAGE */}
      <Image src={img} alt={img} width="48" height="48" />

      {/* TEXT */}
      <div>
        <h4 className="sf-pro-medium font-medium text-[1.6rem] leading-[1.9rem] text-black mb-[0.85rem]">
          {title}
          {recom && (
            <span className="bg-[#FFF8D5] rounded-full py-[0.4rem] px-[1.2rem] sf-pro text-[1.2rem] leading-[1.4rem] text-[#776A27] ml-[0.7rem]">
              Recommended
            </span>
          )}
        </h4>
        <p className="sf-pro text-[1.2rem] leading-[1.4rem] max-w-[18.8rem]">
          {desc}
        </p>
      </div>

      {/* MARKED */}
      {selected && (
        <Image
          src="/green-tick.png"
          alt="tick"
          width="32"
          height="32"
          className="ml-auto"
        />
      )}
      {!selected && (
        <div className="w-[3.2rem] aspect-square flex justify-center items-center ml-auto">
          <div className="w-[2.4rem] aspect-square border rounded-[50%]"></div>
        </div>
      )}
    </li>
  );
  return xml;
};

export default ResultPopOption;
