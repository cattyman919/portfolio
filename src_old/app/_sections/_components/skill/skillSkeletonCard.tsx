export default function SkillSkeletonCard() {
  return (
    <div className="h-[170px]  transition-all duration-500 hover:shadow-xl-seno hover:shadow-primary-accent	flex flex-col gap-3 bg-[#FEF9F2] text-black p-4 items-center justify-center rounded-xl hover:duration-150 hover:-translate-y-5 ">
      <div className="flex items-center justify-center   animate-pulse bg-black rounded  ">
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
      <div className="flex gap-1 hover:duration-150 animate-pulse ">
        <div className="w-[24px] h-[24px] rounded-md bg-gray-700  "></div>
        <div className="w-[24px] h-[24px] rounded-md bg-gray-700  "></div>
        <div className="w-[24px] h-[24px] rounded-md bg-gray-700  "></div>
        <div className="w-[24px] h-[24px] rounded-md bg-gray-700  "></div>
        <div className="w-[24px] h-[24px] rounded-md bg-gray-700  "></div>
      </div>
      <div className="h-2 animate-pulse  rounded-full bg-gray-700 w-[50%] "></div>
    </div>
  );
}
