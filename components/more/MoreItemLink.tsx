import Image from "next/image";
import Link from "next/link";

interface moreItemLink {
  img: string;
  name: string;
  url: string;
  infoState?: "active" | "static";
  infoText?: string;
}

const MoreItemLink: React.FC<moreItemLink> = ({
  img,
  name,
  url,
  infoText,
  infoState = "static",
}) => {
  const xml: React.ReactNode = (
    <li className="flex items-center">
      {/* IMAGE */}
      <Image
        src={img}
        alt={img}
        width="24"
        height="24"
        className="mr-[0.7rem]"
      />

      {/* NAME */}
      <span className="sf-pro text-[1.6rem] leading-[1.9rem]">{name}</span>

      {/* LINK AND INFO */}
      <div className="ml-auto flex items-center gap-[1.6rem]">
        {infoText && (
          <span
            className={`sf-pro font-[274] text-[1.6rem] leading-[1.9rem] ${infoState === "active" ? "text-(--app-btn-blue)" : "text-black"}`}
          >
            {infoText}
          </span>
        )}

        {/* LINK */}
        <Link href={url}>
          <Image
            src="/black-arrow-right.png"
            alt="arrow"
            width="24"
            height="24"
          />
        </Link>
      </div>
    </li>
  );
  return xml;
};

export default MoreItemLink;
