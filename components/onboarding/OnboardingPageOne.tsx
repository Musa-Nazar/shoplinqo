import Image from "next/image";
import ScreenScale from "../utils/ScreenScale";
import { Dispatch, SetStateAction } from "react";

interface OnboardingPageOne {
  setPageNo: Dispatch<SetStateAction<number>>;
}

const OnboardingPageOne: React.FC<OnboardingPageOne> = ({ setPageNo }) => {
  // SUBMIT FORM
  const handleSubmit = async (e: React.SubmitEvent): Promise<void> => {
    // PREVENT DEFAULT
    e.preventDefault();

    // GO TO NEXT PAGE
    setPageNo((prev: number) => prev + 1);
  };

  // STATES
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

  // XML
  const xml: React.ReactNode = (
    <section className="bg-(--onboarding-bg)">
      <ScreenScale type="div">
        {/* SHOWCASE */}
        <Image
          src="/onboardingpageone.png"
          alt="background"
          width={200}
          height={246}
          loading="eager"
          sizes="100vw"
          className="w-full block mt-[-0.7rem]"
        />
      </ScreenScale>

      {/* FORM SECTION */}
      <section className="-mt-36 bg-white z-1 relative h-[calc(100dvh-25.5515625rem)] overflow-scroll hide-scrollbar rounded-tl-[3.2rem] rounded-tr-[3.2rem]">
        <ScreenScale type="div">
          <form className="pt-20" onSubmit={handleSubmit}>
            {/* HEADING */}
            <Image
              src="/sq.png"
              alt="logo"
              width={54}
              height={49}
              className="block mx-auto mb-[0.1rem]"
            />
            <h1 className="sf-pro-bold font-bold text-[2.8rem] leading-[3.3rem] text-center mb-[0.4rem]">
              Welcome to Shoplinqo
            </h1>
            <h4 className="sf-pro text-[1.6rem] leading-[1.9rem] text-center mb-[3.2rem]">
              Let's get your business set up.
            </h4>

            {/* NAME */}
            <div className="flex gap-[0.8rem] bg-(--onboarding-bg) focus-within:border-[0.2rem] border-solid border-[#0A58E6] rounded-[10rem] h-[4.6rem] items-center px-[1.6rem] mb-[1.9rem]">
              <label htmlFor="name">
                <Image
                  src="/onboarding_user.png"
                  alt="user"
                  width={24}
                  height={24}
                />
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full h-full outline-0 text-[1.6rem] leading-[2.2rem] mix-blend-plus-darker text-black sf-pro tracking-[-0.08px] sf-pro"
                placeholder="Full Name"
              />
            </div>

            {/* BUSINESS NAME */}
            <div className="flex gap-[0.8rem] bg-(--onboarding-bg) focus-within:border-[0.2rem] border-solid border-[#0A58E6] rounded-[10rem] h-[4.6rem] items-center px-[1.6rem] mb-[1.9rem]">
              <label htmlFor="business_name">
                <Image
                  src="/onboarding_store.png"
                  alt="user"
                  width={24}
                  height={24}
                />
              </label>
              <input
                type="text"
                id="business_name"
                name="business_name"
                className="w-full h-full outline-0 text-[1.6rem] leading-[2.2rem] mix-blend-plus-darker text-black sf-pro tracking-[-0.08px] sf-pro"
                placeholder="Business Name"
              />
            </div>

            {/* CITY */}
            <div className="flex gap-[0.8rem] bg-(--onboarding-bg) focus-within:border-[0.2rem] border-solid border-[#0A58E6] rounded-[10rem] h-[4.6rem] items-center px-[1.6rem] mb-[1.9rem]">
              <label htmlFor="city">
                <Image
                  src="/onboarding_solar_city.png"
                  alt="city"
                  width={24}
                  height={24}
                />
              </label>
              <select
                id="city"
                name="city"
                className="w-full h-full outline-0 text-[1.6rem] leading-[2.2rem] text-black sf-pro tracking-[-0.08px] invalid:text-[#888888] sf-pro"
                required
              >
                <option
                  hidden
                  disabled
                  selected
                  value=""
                  className="disabled:text-[#B4b4b4]"
                >
                  Select City
                </option>
                {nigeriaStates.map((state, index) => (
                  <option value={state} key={index}>
                    {state.replace(state[0], state[0].toLocaleUpperCase())}
                  </option>
                ))}
              </select>
            </div>

            {/* LOCATION */}
            <div className="flex gap-[0.8rem] bg-(--onboarding-bg) focus-within:border-[0.2rem] border-solid border-[#0A58E6] rounded-[10rem] h-[4.6rem] items-center px-[1.6rem] mb-[4.8rem]">
              <label htmlFor="location">
                <Image
                  src="/onboarding_map.png"
                  alt="user"
                  width={24}
                  height={24}
                />
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="w-full h-full outline-0 text-[1.6rem] leading-[2.2rem] mix-blend-plus-darker text-black sf-pro tracking-[-0.08px] sf-pro"
                placeholder="Market Location"
              />
            </div>

            {/* SUBMIT */}
            <button className="sf-pro-medium text-[1.6rem] leading-[1.9rem] text-white text-center block w-full py-[1.2rem] rounded-[3.6rem] bg-[#0A58E6] tracking-[-0.08px]">
              Continue
            </button>
          </form>
        </ScreenScale>
      </section>
    </section>
  );
  return xml;
};

export default OnboardingPageOne;
