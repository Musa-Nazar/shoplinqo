// PROGRESS BAR ===PB
"use client";

interface PersonalizeQuestionPB {
  currentNo: number;
  qNo: number;
}

const PersonalizeQuestionPB: React.FC<PersonalizeQuestionPB> = ({
  qNo,
  currentNo,
}) => {
  const xml: React.ReactNode = (
    <div
      className={`flex-1 h-[0.6rem] rounded-[1.2rem] ${qNo === currentNo ? "bg-(--app-btn-blue)" : "bg-[#DEDEDE]"}`}
    ></div>
  );
  return xml;
};

export default PersonalizeQuestionPB;
