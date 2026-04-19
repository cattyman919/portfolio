import { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";

export type CarouselMedia = {
  type: "image" | "video";
  src: string;
  thumbSrc?: string;
};

export default function ProjectCarousel({ media }: { media: CarouselMedia[] }) {
  if (!media || media.length === 0) {
    return (
      <div className="flex p-4 items-center justify-center">
        <h1>Empty Carousel</h1>
      </div>
    );
  }

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const thumbnailRef = useRef<HTMLDivElement>(null);

  // Auto-scroll thumbnails to keep the active one in view
  useEffect(() => {
    if (!thumbnailRef.current) return;
    const activeThumb = thumbnailRef.current.children[
      currentIndex
    ] as HTMLElement;
    if (activeThumb) {
      activeThumb.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [currentIndex]);

  const goToSlide = (slideIndex: number) => setCurrentIndex(slideIndex);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? media.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === media.length - 1 ? 0 : currentIndex + 1);
  };

  // The slider now changes the active slide
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const progress = Number(e.target.value);
    const newIndex = Math.round((progress / 100) * (media.length - 1));
    setCurrentIndex(newIndex);
  };

  const currentItem = media[currentIndex];
  // Calculate the slider's percentage based on the active index
  const currentProgress =
    media.length > 1 ? (currentIndex / (media.length - 1)) * 100 : 0;

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image Viewer */}
      <div className="relative w-full aspect-video mx-auto lg:max-h-[400px] rounded-lg border-gray-300">
        {currentItem.type === "video" ? (
          <video
            key={`${currentIndex}-${currentItem.src}`}
            src={currentItem.src}
            className="w-full h-full object-contain bg-black/5 rounded-lg"
            preload="metadata"
            controls
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            key={`${currentIndex}-${currentItem.src}`}
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 40vw"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
            src={currentItem.src}
            alt={`Main viewer displaying slide ${currentIndex + 1}`}
            className="w-full h-full object-contain transition-opacity duration-300 ease-in-out"
          />
        )}
      </div>

      {/* Thumbnails */}
      {media.length > 1 && (
        <div
          className="flex gap-2 mt-2 px-2 overflow-x-auto flex-nowrap scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          ref={thumbnailRef}
        >
          {media.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                // Added shrink-0 so they don't squish when overflowing
                className={`shrink-0 w-22 h-16 relative overflow-hidden rounded border-2 transition-all duration-200 group ${
                  index === currentIndex
                    ? "border-primary-accent"
                    : "border-transparent hover:border-primary-accent/50"
                } focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2`}
                aria-label={`Go to ${item.type} ${index + 1}`}
              >
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  {item.type === "video" ? (
                    <>
                      <video
                        src={`${item.src}#t=0.1`}
                        className="object-cover w-full h-full"
                        preload="metadata"
                        muted
                        playsInline
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                        <Icon
                          icon="lucide:play"
                          className="text-white w-6 h-6 drop-shadow-md"
                        />
                      </div>
                    </>
                  ) : (
                    <img
                      src={item.thumbSrc || item.src}
                      alt={`Thumbnail ${index + 1}`}
                      className="object-cover w-full h-full"
                      loading="lazy"
                      decoding="async"
                      sizes="64px"
                    />
                  )}
                </div>
                {index !== currentIndex && item.type !== "video" && (
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-200"></div>
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Navigation Arrows & Slider */}
      {media.length > 1 && (
        <div className="flex items-center justify-between mt-2">
          <button
            onClick={goToPrevious}
            className="py-0 px-2 flex justify-center items-center rounded-md h-fit"
          >
            <Icon icon="lucide:chevron-left" width={28} height={28} />
          </button>

          <input
            type="range"
            min="0"
            max="100"
            value={currentProgress}
            onChange={handleSliderChange}
            className="w-full h-full bg-gray-500/10 rounded-none appearance-none cursor-pointer transition-all border-none focus:outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[100px] [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:rounded-sm [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-[100px] [&::-moz-range-thumb]:h-2 [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:rounded-sm"
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
