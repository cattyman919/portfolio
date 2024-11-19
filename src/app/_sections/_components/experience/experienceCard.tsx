import Image from "next/image";
import { experienceCardProps } from "../../_types/experienceType";
import Link from "next/link";
import { forwardRef, LegacyRef } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";

const ExperienceCard = forwardRef(function ExperienceCard(
  { ...props }: experienceCardProps,
  ref: LegacyRef<HTMLDetailsElement>
) {
  return (
    <details
      name="experienceCard"
      ref={ref}
      className="border-2 border-primary-accent [&_svg]:open:rotate-180  open:shadow-lg open:shadow-primary-accent transition-all  w-[90%] lg:w-[85%] h-full   bg-secondary-bg p-4 rounded-3xl"
    >
      <summary className="flex flex-row justify-between items-center  cursor-pointer  gap-3   rounded-3xl lg:min-h-[150px]">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-5">
          <Link
            href={props.company_url}
            className="w-[100px] md:w-[150px] h-fit  shrink-0  relative group"
            target="_blank"
          >
            <Image
              src={props.image}
              className="rounded-lg object-contain w-full h-full lg:object-contain transition-all duration-200 ease-in-out  group-hover:blur-sm  "
              alt="company logo"
            />
            <FaLinkedin
              size={64}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-accent opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out"
            />
          </Link>
          <div className="flex flex-col gap-3">
            <h3 className=" text-sm md:text-xl lg:text-2xl font-bold">
              {props.position} @ {props.company}
            </h3>
            <p className="text-sm font-bold md:text-lg">
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
          className="md:ml-auto w-[32px] h-[32px] md:w-[64px] md:h-[64px] md:mr-5 transition-transform"
          size={64}
          color="#000000"
        />
      </summary>
      <ul className=" list-disc list-inside  text-base/10 text-justify xl:text-lg/10 mt-5 ">
        {props.descriptions.map((item, index) => (
          <li key={index} className="mt-4">
            {item}
          </li>
        ))}
      </ul>
    </details>
  );
});

export default ExperienceCard;
