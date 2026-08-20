import Image from "next/image";

interface inventoryEntry {
  img: string;
  name: string;
  price: number;
  amount: number;
}

const InventoryEntry: React.FC<inventoryEntry> = ({
  img,
  name,
  price,
  amount,
}) => {
  const xml: React.ReactNode = (
    <li className="flex py-[0.8rem]">
      {/* ITEM IAMGE */}
      <div className="w-[6.4rem] aspect-square rounded-[1.2rem] overflow-hidden mr-[1.8rem]">
        <Image src={img} alt={img} width="64" height="64" />
      </div>

      {/* NAME AND PRICE */}
      <div className="pt-[1.1rem]">
        <h4 className="sf-pro-medium font-[590] text-[1.6rem] leading-[1.9rem] mb-[0.4rem]">
          {name}
        </h4>
        <data
          value={price}
          className="sf-pro-medium font-medium text-[1.6rem] leading-[1.9rem]"
        >
          N{price.toLocaleString()}
        </data>
      </div>

      {/* AMOUNT */}
      <div className="ml-auto text-center pt-[1.1rem]">
        <data
          value={amount}
          className="sf-pro-bold text-[2rem] leading-[2.4rem] mb-[0.4rem] block"
        >
          {amount}
        </data>
        <span className="sf-pro text-[1.2rem] leading-[1.4rem] text-[#607D8B]">
          in stock
        </span>
      </div>
    </li>
  );
  return xml;
};

export default InventoryEntry;
