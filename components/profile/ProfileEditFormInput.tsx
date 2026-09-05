import Image from "next/image";
import ScreenScale from "../utils/ScreenScale";

interface profileEditFormInput {
  img: string;
  label: string;
  value: string;
  className?: string;
  select?: boolean;
}

const nigeriaStates = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Federal Capital Territory (FCT)",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];

const ProfileEditFormInput: React.FC<profileEditFormInput> = ({
  img,
  label,
  value,
  className,
  select,
}) => {
  const xml: React.ReactNode = (
    <ScreenScale
      type="div"
      className={
        `flex items-center ${select ? "gap-2" : "gap-[0.8rem]"} rounded-[10rem] border-2 border-solid border-transparent focus-within:border-(--app-btn-blue) px-[1.6rem] py-[1.1rem] bg-white ` +
        (className ?? "")
      }
    >
      {/* ICON */}
      <label htmlFor={label} className="flex-none">
        <Image src={img} alt={img} width="24" height="24" />
      </label>
      {/* INPUT */}
      {!select && (
        <input
          type="text"
          name={label}
          id={label}
          defaultValue={value}
          className="sf-pro text-[1.6rem] leading-[2.2rem] text-black tracking-[-.08px] w-full outline-0 field-sizing-content"
        />
      )}

      {select && (
        <select
          id={label}
          name={label}
          className="w-full outline-0 text-[1.6rem] leading-[2.2rem] text-black sf-pro tracking-[-0.08px] sf-pro field-sizing-content indent-0"
        >
          {nigeriaStates.map((state, index) => (
            <option value={state} key={index} selected={state === "Kano"}>
              {state.replace(state[0], state[0].toLocaleUpperCase())}
            </option>
          ))}
        </select>
      )}
    </ScreenScale>
  );
  return xml;
};

export default ProfileEditFormInput;
