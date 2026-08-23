interface creditEntry {
  name: string;
  price: number;
  type: "paid" | "paid part" | "overdue" | "unpaid" | "due today";
  message?: string;
}

const CreditEntry: React.FC<creditEntry> = ({ name, price, type, message }) => {
  const xml: React.ReactNode = (
    <li className="py-[1.2rem] flex justify-between items-center max-h-[6.8rem]">
      {/* NAME AND PRICE */}
      <div>
        <h3 className="sf-pro-medium font-medium text-[1.6rem] leading-[1.9rem] mb-[0.4rem]">
          {name}
        </h3>
        <data
          value={price}
          className="sf-pro-medium font-[590] text-[1.8rem] leading-[2.1rem] overflow-scroll hide-scrollbar"
        >
          Total Debt: N{price.toLocaleString()}
        </data>
      </div>

      {type === "overdue" && (
        <p className="sf-pro text-[1.2rem] leading-[1.4rem] text-[#D32F2F]">
          Overdue {message}
        </p>
      )}
      {type === "paid" && (
        <p className="sf-pro text-[1.2rem] leading-[1.4rem] text-[#607D8B]">
          Paid
        </p>
      )}
      {type === "paid part" && (
        <p className="sf-pro text-[1.2rem] leading-[1.4rem] text-[#607D8B]">
          Partial
        </p>
      )}
      {type === "unpaid" && (
        <p className="sf-pro text-[1.2rem] leading-[1.4rem] text-[#607D8B]">
          Not Paid
        </p>
      )}
      {type === "due today" && (
        <p className="sf-pro text-[1.2rem] leading-[1.4rem] text-[#E36328]">
          Due today
        </p>
      )}
    </li>
  );
  return xml;
};

export default CreditEntry;
