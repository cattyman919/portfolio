import { useState, useRef } from "react";
import { getImage } from "astro:assets";
import { Icon } from "@iconify/react";

const videoExtensions: string[] = ["mp4", "mov", "webm", "ogg"];

// Helper to check if URL likely points to a video
const isVideoSource = (url: string): boolean => {
  const lowerUrl = url.toLowerCase();

  for (let index = 0; index < videoExtensions.length; index++) {
    const videoExtension = videoExtensions[index];
    if (lowerUrl.endsWith(`.${videoExtension}`)) {
      return true;
    }
  }

  return false;
};

export default function ProjectCarousel({
  sourcesUrl,
}: {
  sourcesUrl: string[];
}) {
  if (sourcesUrl.length === 0) {
    return (
      <div className="flex p-4 items-center justify-center">
        <h1>Empty Carousel</h1>
      </div>
    );
  }

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const thumbnailRef = useRef<HTMLDivElement>(null);

  // --- Image Navigation ---
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const handleScroll = () => {
    if (!thumbnailRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = thumbnailRef.current;
    const maxScroll = scrollWidth - clientWidth;

    if (maxScroll > 0) {
      const progress = (scrollLeft / maxScroll) * 100;
      setScrollProgress(progress);
    }
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const progress = Number(e.target.value);
    setScrollProgress(progress);

    if (!thumbnailRef.current) return;
    const { scrollWidth, clientWidth } = thumbnailRef.current;
    const maxScroll = scrollWidth - clientWidth;

    // Programmatically scroll the thumbnail container
    thumbnailRef.current.scrollLeft = (progress / 100) * maxScroll;
  };

  const scrollThumbnails = (direction: "left" | "right") => {
    if (!thumbnailRef.current) return;
    // Scroll by roughly 3 thumbnails at a time
    const scrollAmount = 300;
    thumbnailRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sourcesUrl.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === sourcesUrl.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const currentSource = sourcesUrl[currentIndex];
  const isCurrentItemVideo = isVideoSource(currentSource);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image Viewer */}
      <div className="relative w-full aspect-video mx-auto lg:max-h-[400px] rounded-lg border-gray-300">
        {isCurrentItemVideo ? (
          <video
            key={`${currentIndex}-${currentSource}`}
            src={currentSource}
            className="w-full h-full object-contain"
            preload="metadata"
            controls
          >
            Your browser does not support the video tag. {/* Fallback text */}
          </video>
        ) : (
          <img
            key={`${currentIndex}-${currentSource}`}
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 40vw"
            src={currentSource}
            className="w-full h-full object-contain transition-opacity duration-300 ease-in-out"
          />
        )}
      </div>
      {/* Thumbnails */}
      {sourcesUrl.length > 1 && (
        <div className="flex justify-center gap-2 mt-2 flex-wrap px-2">
          {sourcesUrl.map((item, index) => {
            const isThumbVideo = isVideoSource(item);
            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-22 h-16 relative overflow-hidden rounded border-2 transition-colors duration-200 ${
                  index === currentIndex
                    ? "border-primary-accent" // Highlight active thumbnail
                    : "border-transparent hover:border-primary-accent/50"
                } focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2`}
                aria-label={`Go to ${isThumbVideo ? "video" : "image"} ${index + 1}`}
              >
                {/* Thumbnail Content */}
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  {isThumbVideo ? (
                    // Video Placeholder Icon
                    <Icon
                      icon="lucide:play"
                      className="text-gray-600 w-4 h-4"
                    />
                  ) : (
                    // Image Thumbnail
                    <img
                      src={item}
                      alt={`Thumbnail ${index + 1}`}
                      className="object-cover w-full h-full" // Cover for thumbnails usually looks better
                      sizes="64px" // Give sizes hint for thumbnails
                    />
                  )}
                </div>
                {/* Optional: Dark overlay on non-active thumbnails */}
                {index !== currentIndex && (
                  <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-colors duration-200"></div>
                )}
              </button>
            );
          })}
        </div>
      )}
      {/* Navigation Arrows */}
      {sourcesUrl.length > 1 && (
        <div className="flex items-center justify-between mt-2">
          <button
            onClick={goToPrevious}
            className="py-0 px-2 flex justify-center items-center rounded-md h-fit"
          >
            <Icon icon="lucide:chevron-left" width={28} height={28} />
          </button>
          {/* Horizontal Slider */}
          <input
            type="range"
            min="0"
            max="100"
            value={scrollProgress}
            onChange={handleSliderChange}
            className="w-full h-full bg-gray-500/10 rounded-none appearance-none cursor-pointer transition-all border-none focus:outline-none focus:backdrop-none focus:blur-none 
/* --- WebKit (Chrome, Safari, Edge) --- */
  [&::-webkit-slider-thumb]:appearance-none 
  [&::-webkit-slider-thumb]:w-[100px] 
  [&::-webkit-slider-thumb]:h-2
  [&::-webkit-slider-thumb]:bg-primary 
  [&::-webkit-slider-thumb]:rounded-sm
  
  /* --- Mozilla (Firefox) --- */
  [&::-moz-range-thumb]:appearance-none 
  [&::-moz-range-thumb]:w-[100px] 
  [&::-moz-range-thumb]:h-2
  [&::-moz-range-thumb]:bg-primary 
  [&::-moz-range-thumb]:border-none 
  [&::-moz-range-thumb]:rounded-sm"
          />
          <button
            onClick={goToNext}
            className="py-0 px-2 flex justify-center items-center rounded-md h-fit"
          >
            <Icon icon="lucide:chevron-right" width={28} height={28} />
          </button>
        </div>
      )}
    </div>
  );
}
