export default function ExperienceSkeletonCard() {
  return (
    <div className="border-2 p-4 h-[150px] flex flex-row  gap-3 border-primary-accent group open:shadow-lg open:shadow-primary-accent transition-all  w-[90%] lg:w-[85%]   bg-secondary-bg rounded-3xl">
      <div className="flex items-center justify-center  w-[150px] animate-pulse bg-black rounded  ">
        <svg
          className="w-10 h-10 text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <div className="flex flex-col gap-3 justify-between w-full animate-pulse">
        <div className="flex flex-col gap-3">
          <div className="h-2  rounded-full bg-gray-700 w-[90%] "></div>
          <div className="h-2  rounded-full bg-gray-700 w-[20%] "></div>
          <div className="h-2  rounded-full bg-gray-700 w-[20%] "></div>
        </div>
        <div className="flex gap-2 relative">
          <div className="w-[24px] h-[24px] rounded-md bg-gray-700  "></div>
          <div className="w-[24px] h-[24px] rounded-md bg-gray-700  "></div>
          <div className="w-[24px] h-[24px] rounded-md bg-gray-700 "></div>
        </div>
      </div>
    </div>
  );
}
