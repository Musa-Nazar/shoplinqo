import Image from "next/image";
import ScreenScale from "../utils/ScreenScale";
import { useRouter } from "next/navigation";

const OnboardingPageTwo = () => {
  // USE ROUTER
  const router = useRouter();

  const xml: React.ReactNode = (
    <section className="bg-(--onboarding-bg)">
      {/* SHOWCASE */}
      <ScreenScale type="div">
        <Image
          src="/onboardingpagetwo.png"
          alt="background"
          width={200}
          height={246}
          sizes="100vw"
          className="w-full block mt-[-0.7rem]"
        />
      </ScreenScale>

      {/* DETAILS */}
      <section className="-mt-36 bg-white z-1 relative h-[calc(100dvh-25.5515625rem)] overflow-scroll hide-scrollbar rounded-tl-[3.2rem] rounded-tr-[3.2rem]">
        <ScreenScale type="div" className="pt-24">
          <h1 className="sf-pro-bold font-bold text-[2.8rem] leading-[3.3rem] text-center mb-[0.4rem]">
            Review your details
          </h1>
          <h4 className="sf-pro text-[1.6rem] leading-[1.9rem] text-center mb-12">
            Please confirm that everything looks correct before continuing.
          </h4>

          {/* NAME */}
          <div className="flex items-center px-[1.2rem] py-[0.8rem] mb-[0.8rem] gap-[1.4rem]">
            <Image
              src="/onboarding_user_sold.png"
              alt="user"
              width={32}
              height={32}
            />
            <div>
              <h5 className="sf-pro-medium font-medium text-[1.2rem] leading-[1.4rem] tracking-[-0.08px] text-[#B4B4B4] mb-[0.4rem]">
                Name
              </h5>
              <p className="sf-pro-medium font-medium text-[1.6rem] leading-[1.9rem] ">
                Usman D
              </p>
            </div>
          </div>

          {/* BUSINESS NAME*/}
          <div className="flex items-center px-[1.2rem] py-[0.8rem] mb-[0.8rem] gap-[1.4rem]">
            <Image
              src="/onboarding_store_solid.png"
              alt="user"
              width={32}
              height={32}
            />
            <div>
              <h5 className="sf-pro-medium font-medium text-[1.2rem] leading-[1.4rem] tracking-[-0.08px] text-[#B4B4B4] mb-[0.4rem]">
                Business Name
              </h5>
              <p className="sf-pro-medium font-medium text-[1.6rem] leading-[1.9rem] ">
                Audu Nexus 5.1
              </p>
            </div>
          </div>

          {/* CITY*/}
          <div className="flex items-center px-[1.2rem] py-[0.8rem] mb-[0.8rem] gap-[1.4rem]">
            <Image
              src="/onboarding_city_solid.png"
              alt="user"
              width={32}
              height={32}
            />
            <div>
              <h5 className="sf-pro-medium font-medium text-[1.2rem] leading-[1.4rem] tracking-[-0.08px] text-[#B4B4B4] mb-[0.4rem]">
                City
              </h5>
              <p className="sf-pro-medium font-medium text-[1.6rem] leading-[1.9rem] ">
                Kano
              </p>
            </div>
          </div>

          {/* LOCATION */}
          <div className="flex items-center px-[1.2rem] py-[0.8rem] mb-[4.8rem] gap-[1.4rem]">
            <Image
              src="/onbaording_map_solid.png"
              alt="user"
              width={32}
              height={32}
            />
            <div>
              <h5 className="sf-pro-medium font-medium text-[1.2rem] leading-[1.4rem] tracking-[-0.08px] text-[#B4B4B4] mb-[0.4rem]">
                Market Location
              </h5>
              <p className="sf-pro-medium font-medium text-[1.6rem] leading-[1.9rem] ">
                Kantin Kwari
              </p>
            </div>
          </div>

          {/* SUBMIT */}
          <button
            onClick={() => {
              router.push("/onboarding/personalize");
            }}
            className="text-[1.6rem] leading-[1.9rem] sf-pro-medium font-medium text-white bg-[#0A58E6] rounded-[3.6rem] py-[1.85rem] w-full text-center tracking-[-0.08px]"
          >
            Confirm
          </button>
        </ScreenScale>
      </section>
    </section>
  );
  return xml;
};

export default OnboardingPageTwo;
