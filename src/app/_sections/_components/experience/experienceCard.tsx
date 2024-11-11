import Image from "next/image";
import skibidiImage from "@/public/images/skibidi-toilet.jpeg";
import { experienceCardProps } from "../../types/experienceType";

export default function ExperienceCard({ ...props }: experienceCardProps) {
  return (
    <div className=" w-[90%] lg:w-[80%] h-full lg:h-[300px] bg-secondary-bg p-4 flex items-center flex-col  md:flex-row gap-5 rounded-lg">
      <Image
        src={skibidiImage}
        className="object-contain w-[85%] md:w-[200px]"
        alt="company logo"
      />
      <div className="flex flex-col justify-start gap-5">
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
        <p className="text-base text-justify xl:text-lg">{props.description}</p>
      </div>
    </div>
  );
}
