import Image from "next/image";
import { experienceCardProps } from "../../_types/experienceType";
import Link from "next/link";

export default function ExperienceCard({ ...props }: experienceCardProps) {
  return (
    <div className=" w-[90%] lg:w-[85%] h-full lg:min-h-[300px] bg-secondary-bg p-4 flex items-center flex-col  md:flex-row gap-5 rounded-3xl">
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
        <p className="text-base text-justify xl:text-lg/10 ">
          {props.description}
        </p>
      </div>
    </div>
  );
}
