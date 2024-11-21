export default function ProjectSkeletonCard() {
  return (
    <div className="h-[465px] w-full bg-white border-2 shadow-lg shadow-primary-accent border-primary-accent transition-all duration-1000  flex flex-col gap-3    text-black overflow-hidden  rounded-xl hover:duration-150 hover:-translate-y-8">
      <div className="flex items-center justify-center w-full h-[200px] animate-pulse bg-gray-700 rounded  ">
        <svg
          className="w-10 h-10 text-gray-200 dark:text-gray-600 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <div className="w-full animate-pulse  px-4 pb-4 flex flex-col gap-4">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] "></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 "></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] "></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] "></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
      </div>
    </div>
  );
}
