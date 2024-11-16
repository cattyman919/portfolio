import Image from "next/image";
import { experienceCardProps } from "../../_types/experienceType";
import Link from "next/link";
import { forwardRef, LegacyRef } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const ExperienceCard = forwardRef(function ExperienceCard(
  { ...props }: experienceCardProps,
  ref: LegacyRef<HTMLDetailsElement>
) {
  return (
    <details
      ref={ref}
      className="border-2 border-primary-accent [&_svg]:open:rotate-180  open:shadow-lg open:shadow-primary-accent transition-all  w-[90%] lg:w-[85%] h-full   bg-secondary-bg p-4 rounded-3xl"
    >
      <summary className="flex items-center flex-col cursor-pointer  md:flex-row gap-5 rounded-3xl lg:min-h-[150px]">
        <Link
          href={props.company_url}
          className="w-full h-[100px] md:w-[150px] md:h-fit  shrink-0 "
          target="_blank"
        >
          <Image
            src={props.image}
            className="rounded-lg object-contain w-full h-full lg:object-contain    "
            alt="company logo"
          />
        </Link>
        <div className="flex flex-col   justify-start gap-5">
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-bold">
              {props.position} @ {props.company}
            </h3>
            <p className="font-bold md:text-lg">
              {props.start_date} - {props.end_date}
            </p>
            <div className="flex gap-2 relative">
              {props.languages.map((item, index) => (
                <Image
                  key={index}
                  width={32}
                  height={32}
                  className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item}/${item}-original.svg`}
                  alt="logo"
                />
              ))}
            </div>
          </div>
        </div>
        <MdKeyboardArrowDown
          className="ml-auto mr-5 transition-transform"
          size={64}
          color="#000000"
        />
      </summary>
      <p className="text-base text-justify xl:text-lg/10 mt-5 ">
        {props.description}
      </p>
    </details>
  );
});

export default ExperienceCard;
