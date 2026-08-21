import { button } from "framer-motion/client";
interface posNumberBtn {
  children: React.ReactNode;
  value?: number | string;
  pushToPrice?: (value: number | string) => void;
  popFromPrice?: () => void;
  clearPrice?: () => void;
}

const PosNumberBtn: React.FC<posNumberBtn> = ({
  children,
  value,
  pushToPrice,
  popFromPrice,
  clearPrice,
}) => {
  const clickHandler = () => {
    if (clearPrice) {
      clearPrice();
      return;
    }

    if (popFromPrice) {
      popFromPrice();
      return;
    }

    if (!value || !pushToPrice) return;

    pushToPrice(value);
  };

  const xml: React.ReactNode = (
    <button
      className="rounded-[1.2rem] bg-white leading-[5.6rem] text-center sf-pro-medium font-medium text-[2rem] flex justify-center items-center active:scale-[0.9] transition-[scale] duration-75 ease-linear outline-0"
      type="button"
      onClick={clickHandler}
    >
      {children}
    </button>
  );
  return xml;
};

export default PosNumberBtn;
