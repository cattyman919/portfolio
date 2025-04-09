import Image from "next/image";
import { experienceCardProps } from "../../_types/experienceType";
import Link from "next/link";
import { forwardRef, LegacyRef } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { HiChevronDown } from "react-icons/hi"; // Using a different chevron

const ExperienceCard = forwardRef(function ExperienceCard(
  { ...props }: experienceCardProps,
  ref: LegacyRef<HTMLDetailsElement>
) {
  return (
    <details
      name="experienceCard"
      ref={ref}
      className="w-[90%] lg:w-[85%] bg-secondary-bg text-black rounded-2xl border-2 border-primary-accent shadow-primary-accent shadow-md hover:shadow-lg transition-all duration-300 group open:shadow-xl open:border-primary-accent overflow-hidden "
    >
      {/* Summary: Treat as the card header */}
      <summary className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 lg:p-6 cursor-pointer list-none hover:bg-primary-accent/5 transition-colors"> {/* Left/Top Part: Logo + Main Info */}
        <div className="flex flex-row-reverse justify-between w-full md:w-fit md:flex-row items-center gap-4 lg:gap-5">
          {/* Logo Container */}
          <Link
            href={props.company_url}
            className="relative flex-shrink-0 w-[80px] h-[80px] md:w-[150px] md:h-[150px] bg-white rounded-md p-1 border border-gray-200 group/logo" // Added container style
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={props.image}
              alt={`${props.company} logo`}
              fill // Use fill with defined parent size
              className="object-contain transition-all duration-300 ease-in-out group-hover/logo:opacity-50" // Changed hover effect
            />
            {/* LinkedIn Icon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-primary-accent/80 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300 rounded-md">
              <FaLinkedin
                size={48} // Adjusted size
                className="text-white"
              />
            </div>
          </Link>
          {/* Text Info */}
          <div className="flex flex-col gap-1.5">
            <h3 className="text-xl lg:text-2xl font-bold text-primary-bg">
              {props.position}
            </h3>
            <p className="text-md md:text-lg font-semibold ">
              {props.company}
            </p>
            <p className="text-sm font-medium md:text-lg text-gray-600">
              {props.start_date} - {props.end_date}
            </p>
            {/* Tech Icons - kept subtle */}
            <div className="flex gap-1.5 mt-1">
              {props.languages.map((item, index) => (
                <Image
                  key={index}
                  width={32}
                  height={32}
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item}/${item}-original.svg`}
                  alt={`${item} logo`}
                  title={item} // Tooltip for icon
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right/Bottom Part: Chevron Icon */}
        {/* Placed outside the main flex container on small screens if needed, or use margin auto */}
        <div className="flex-shrink-0 self-center md:self-auto mt-2 md:mt-0">
          <HiChevronDown
            size={64}
            className="group-open:rotate-180 w-[42px] h-[42px] md:w-fit md:h-fit transition-transform duration-300 ease-in-out"
          />
        </div>
      </summary>

      {/* Content Revealed on Open */}
      <div className="px-6 pb-6 pt-2 md:px-8 md:pb-8 md:pt-3"> {/* Added padding for content */}
        <ul className="list-disc list-inside space-y-5 text-base/10 text-justify xl:text-lg/10  pl-2"> {/* Improved list styling */}
          {props.descriptions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </details>
  );
});

export default ExperienceCard;
