"use client";

import Image from "next/image";
import ScreenScale from "../utils/ScreenScale";
import PersonalizeQuestionPB from "./PersonalizeQuestionPB";
import OnboardingNavbar from "../onboarding/OnboardingNavbar";
import { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";

interface PersonalizeQuestions {
  setPageNo: Dispatch<SetStateAction<number>>;
}

const PersonalizeQuestions: React.FC<PersonalizeQuestions> = ({
  setPageNo,
}) => {
  // ANSWER STATE AND HANDLER
  const [answer, setAnswer] = useState<string | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setAnswer(value);
  };

  // ROUTER
  const router = useRouter();

  // XML
  const xml: React.ReactNode = (
    <>
      {/* NAVBAR */}
      <OnboardingNavbar
        showProgressBars={false}
        showNumbers={true}
        opacity={0}
        setPageNo={setPageNo}
      />

      {/* SHOWCASE */}
      <ScreenScale
        type="section"
        className="relative mt-[-5.8rem] w-full  pt-[9.6rem] flex gap-[0.45rem] aspect-375/250 max-w-[93.28%]!"
      >
        <Image
          src="/personolizequestionbg.png"
          alt="background"
          width={375}
          height={250}
          className="w-full absolute h-full left-0 top-0"
        />
        {/* QUESTION PROGRESS */}
        <PersonalizeQuestionPB currentNo={1} qNo={1} />
        <PersonalizeQuestionPB currentNo={1} qNo={2} />
        <PersonalizeQuestionPB currentNo={1} qNo={3} />
        <PersonalizeQuestionPB currentNo={1} qNo={4} />
        <PersonalizeQuestionPB currentNo={1} qNo={5} />
      </ScreenScale>

      {/* QUESTIONS */}
      <section className="flex-1 bg-(--app-btn-blue) rounded-tl-[3.2rem] rounded-tr-[3.2rem] -mt-20 relative z-2">
        <ScreenScale type="div" className="pt-20 max-w-[87.06%]!">
          <form
            action=""
            onSubmit={(e: React.SubmitEvent<HTMLFormElement>) =>
              e.preventDefault()
            }
          >
            <h1 className="sf-pro-bold font-bold text-[2.8rem] leading-[3.3rem] text-center text-white max-w-114 mx-auto mb-[2.4rem]">
              How do you usually record sales?
            </h1>

            {/* OPTIONS */}
            <ul className=" mb-[4.8rem]">
              <li className="flex gap-[1.4rem] items-center py-[1.05rem]">
                <input
                  type="radio"
                  name="record-sales"
                  value="yes"
                  className="border-solid border-[0.2rem] border-white rounded-[1.6rem] w-[3.2rem] aspect-square appearance-none flex justify-center items-center relative before:content-[''] before:absolute before:w-8 before:h-8 before:bg-white before:opacity-0 before:rounded-[50%] checked:before:opacity-100"
                  onChange={handleChange}
                />
                <p className="sf-pro-medium font-medium text-[1.6rem] leading-[1.9rem] text-center text-white">
                  I sell individual products
                </p>
              </li>

              {/* 2 */}
              <li className="flex gap-[1.4rem] items-center py-[1.05rem]">
                <input
                  type="radio"
                  name="record-sales"
                  value="no"
                  className="border-solid border-[0.2rem] border-white rounded-[1.6rem] w-[3.2rem] aspect-square appearance-none flex justify-center items-center relative before:content-[''] before:absolute before:w-8 before:h-8 before:bg-white before:opacity-0 before:rounded-[50%] checked:before:opacity-100"
                  onChange={handleChange}
                />
                <p className="sf-pro-medium font-medium text-[1.6rem] leading-[1.9rem] text-center text-white">
                  I sell individual products
                </p>
              </li>

              {/* 3 */}
              <li className="flex gap-[1.4rem] items-center py-[1.05rem]">
                <input
                  type="radio"
                  name="record-sales"
                  value="maybe"
                  className="border-solid border-[0.2rem] border-white rounded-[1.6rem] w-[3.2rem] aspect-square appearance-none flex justify-center items-center relative before:content-[''] before:absolute before:w-8 before:h-8 before:bg-white before:opacity-0 before:rounded-[50%] checked:before:opacity-100"
                  onChange={handleChange}
                />
                <p className="sf-pro-medium font-medium text-[1.6rem] leading-[1.9rem] text-center text-white">
                  I sell individual products
                </p>
              </li>

              {/* 4 */}
              <li className="flex gap-[1.4rem] items-center py-[1.05rem]">
                <input
                  type="radio"
                  name="record-sales"
                  value="okay"
                  className="border-solid border-[0.2rem] border-white rounded-[1.6rem] w-[3.2rem] aspect-square appearance-none flex justify-center items-center relative before:content-[''] before:absolute before:w-8 before:h-8 before:bg-white before:opacity-0 before:rounded-[50%] checked:before:opacity-100"
                  onChange={handleChange}
                />
                <p className="sf-pro-medium font-medium text-[1.6rem] leading-[1.9rem] text-center text-white">
                  I sell individual products
                </p>
              </li>
            </ul>

            {/* SUBMIT */}
            <button
              className="sf-pro-medium font-medium text-[1.6rem] leading-[1.9rem] tracking-[-0.08px] text-black py-[1.2rem] rounded-[3.6rem] w-full bg-white"
              onClick={() => router.push("/result")}
            >
              Continue
            </button>
          </form>
        </ScreenScale>
      </section>
    </>
  );
  return xml;
};

export default PersonalizeQuestions;
