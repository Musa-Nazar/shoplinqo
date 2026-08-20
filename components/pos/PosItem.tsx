import Image from "next/image";

interface posItem {
  name: string;
  img: string;
  price: number;
  amount?: number;
}

const PosItem: React.FC<posItem> = ({ name, img, price, amount }) => {
  const xml: React.ReactNode = (
    <li className="flex py-[0.8rem]">
      {/* ITEM IAMGE */}
      <div className="w-[6.4rem] aspect-square rounded-[50%] overflow-hidden mr-4">
        <Image src={img} alt={img} width="64" height="64" />
      </div>

      {/* NAME AND PRICE */}
      <div className="pt-[0.35rem]">
        <h4 className="sf-pro-medium font-[590] text-[1.7rem] leading-[2.2rem] mb-2">
          {name}
        </h4>
        <data
          value={price}
          className="sf-pro-medium font-medium text-[1.6rem] leading-[1.9rem] flex gap-2 items-center"
        >
          <span>N{price.toLocaleString()}</span>

          {/* AMOUNT */}
          {amount && (
            <span className="px-[0.8rem] flex items-center gap-[0.4rem] py-[0.4rem] sf-pro text-[1rem] leading-[2.2rem] rounded-[9.9rem] bg-[#DCE1E440]">
              {/* DOT */}
              <div className="w-[0.4rem] aspect-square rounded-[50%] bg-black" />

              {/* TEXT */}
              {amount}
            </span>
          )}
        </data>
      </div>

      {/* AMOUNT*/}
      <button className="block ml-auto">
        <Image src="/pos-add-icon.png" alt="add" width="48" height="48" />
      </button>
    </li>
  );
  return xml;
};

export default PosItem;
