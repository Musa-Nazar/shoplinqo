import Image from "next/image";
import ProfileEditFormInput from "./ProfileEditFormInput";
import ScreenScale from "../utils/ScreenScale";

const ProfileEditForm: React.FC = () => {
  const xml: React.ReactNode = (
    <form className="pt-[4.8rem]">
      {/* IMAGE */}
      <div className="relative w-[12.8rem] mx-auto mb-[3.2rem]">
        <Image
          src="/profile_default.png"
          alt="profile-pic"
          width="128"
          height="128"
        />
        {/* CHANGE ICON */}
        <button
          type="button"
          className="absolute bottom-0 right-0 translate-x-[10%]"
        >
          <Image
            src="/change-profile-picture.png"
            alt="change-pic"
            width="48"
            height="48"
          />
        </button>
      </div>

      {/* NAME INPUT */}
      <ProfileEditFormInput
        label="name"
        img="/onboarding_user.png"
        value="Usman D |"
        className="mb-6"
      />

      {/* BUSINESS NAME */}
      <ProfileEditFormInput
        label="business_name"
        img="/onboarding_store.png"
        value="Audu Nexus 5.1"
        className="mb-6"
      />

      {/* NUMBER */}
      <ProfileEditFormInput
        label="number"
        img="/phone-frame.png"
        value="+234 811 333 7717"
        className="mb-6"
      />

      {/* CITY */}
      <ProfileEditFormInput
        label="city"
        img="/onboarding_solar_city.png"
        value="+234 811 333 7717"
        select
        className="mb-6"
      />

      {/* ADRESS */}
      <ProfileEditFormInput
        label="adress"
        img="/onboarding_map.png"
        value="Kantin Kwari"
        className="mb-6"
      />

      {/* LOCATION */}
      <ProfileEditFormInput
        label="location"
        img="/location-pin-frame.png"
        value="No 72, Lorem Ipusm"
        className="mb-[4.8rem]"
      />

      {/* SUBMIT */}
      <ScreenScale type="div">
        <button className="w-full py-[1.6rem] rounded-[3.6rem] bg-(--app-btn-blue) sf-pro-medium font-medium text-[1.6rem] leading-[1.9rem] tracking-[-.08px] text-white text-center">
          Save Changes
        </button>
      </ScreenScale>
    </form>
  );
  return xml;
};

export default ProfileEditForm;
