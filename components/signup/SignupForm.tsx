import Image from "next/image";

const styles: { [key: string]: string } = {
  label: "text-[1.6rem] leading-[2.2rem] inline-block mb-[1.2rem]",
  inputField:
    "border-[#b4b4b4] border rounded-[0.8rem] w-full h-[4.8rem] flex items-center px-[1.8rem] gap-[1.7rem] mb-[1.2rem]",
  input:
    "w-full h-full border-none outline-0 text-[1.4rem] leading-[2rem] text-black placeholder:text-[#b4b4b4]",
};

const SignupForm: React.FC = () => {
  const xml: React.ReactNode = (
    <form className="w-full">
      {/* HEADING */}
      <Image
        src="/Group 1.png"
        alt="shoplingo-logo"
        width={58.48}
        height={58.5}
        sizes="100vw"
        className="mb-8 mx-auto"
      />
      <h1 className="font-bold text-[2.8rem] leading-[3.2rem] text-center tracking-[-0.01em] mb-[0.9rem]">
        Create a Shoplinqo Account
      </h1>
      <h4 className="text-[1.6rem] leading-[2.2rem] text-center mb-[3.2rem]">
        Welcome to Shoplinqo. Let’s organize your business.
      </h4>

      {/* NAME */}
      <div className="">
        <label htmlFor="name" className={`${styles.label}`}>
          Full Name
        </label>
        <div className={`${styles.inputField}`}>
          <Image
            src="/signup_user.png"
            alt="failed"
            width={24}
            height={24}
            sizes="100vw"
            className="object-center"
          />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            className={`${styles.input}`}
          />
        </div>
      </div>

      {/* EMAIL */}
      <div className="">
        <label htmlFor="email" className={`${styles.label}`}>
          Email
        </label>
        <div className={`${styles.inputField}`}>
          <Image
            src="/envelope.png"
            alt="failed"
            width={24}
            height={24}
            sizes="100vw"
            className="object-center"
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="johndoe@gmail.com"
            className={`${styles.input}`}
          />
        </div>
      </div>

      {/* PHONE NUMBER */}
      <div className="">
        <label htmlFor="phone_number" className={`${styles.label}`}>
          Phone Number
        </label>
        <div className={`${styles.inputField}`}>
          <Image
            src="/flag.png"
            alt="failed"
            width={24}
            height={24}
            sizes="100vw"
            className="object-center"
          />
          <input
            type="number"
            id="phone_number"
            name="phone_number"
            placeholder="+234 8012345678"
            defaultValue={"+234"}
            className={`${styles.input}`}
          />
        </div>
      </div>

      {/* CONSENT */}
      <div className="flex gap-[1.1rem] items-center mb-[2.8rem]">
        <input
          type="checkbox"
          id="update"
          name="update"
          className="w-8 aspect-square rounded-[.4rem] relative border flex justify-center items-center border-[#b4b4b4] checked:bg-[#0A58E6]"
        />
        <p className="text-[1.2rem] leading-[1.6rem]">
          I will like to recieve updates about marketing news
        </p>
      </div>

      {/* SUBMIT */}
      <button className="font-[450] text-[1.6rem] leading-[1.8rem] text-center py-[1.6rem] w-full rounded-[1.8rem] bg-[#0A58E6] text-white">
        Send Verification Code
      </button>
    </form>
  );
  return xml;
};

export default SignupForm;
