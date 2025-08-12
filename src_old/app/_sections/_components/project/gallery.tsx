import Image from "next/image";
import { useState } from "react";
import { GalleryProps } from "@/types/projectType";
import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";

// Helper to check if URL likely points to a video
const isVideoSource = (url: string): boolean => {
  const lowerUrl = url.toLowerCase();
  // Add more video extensions if needed (e.g., webm, ogg)
  return lowerUrl.endsWith('.mp4') || lowerUrl.endsWith('.mov');
};

export default function ImageGallery({ gallery, projectName }: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!gallery || !projectName) {
    return <div className="flex items-center justify-center min-h-[400px] animate-pulse bg-black rounded  ">
      <svg
        className="w-10 h-10 text-gray-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 18"
      >
        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
      </svg>
    </div>; // Or a placeholder if needed
  }

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? gallery.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === gallery.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const currentItem = gallery[currentIndex];
  const isCurrentItemVideo = isVideoSource(currentItem.sourceUrl);

  return (
    <div className=" flex flex-col gap-4">
      {/* Main Image Viewer */}
      <div className="relative w-full aspect-video mx-auto lg:h-[400px] overflow-hidden rounded-lg border-gray-300">
        {isCurrentItemVideo ? (<video
          key={`${currentIndex}-${currentItem.sourceUrl}`} // More specific key including URL
          src={currentItem.sourceUrl}
          controls // Enable native video controls
          preload="metadata" // Load dimensions/duration quickly
          className="w-full h-full object-contain" // Use contain to see the whole video
          aria-label={`${projectName} - Video ${currentIndex + 1}${currentItem.caption ? `: ${currentItem.caption}` : ''}`}
        >
          Your browser does not support the video tag. {/* Fallback text */}
        </video>) : (<Image
          src={currentItem.sourceUrl}
          alt={`${projectName} - Gallery Image ${currentIndex + 1}${currentItem.caption ? `: ${currentItem.caption}` : ''}`}
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 40vw" // Adjust sizes as needed
          className="object-contain transition-opacity duration-300 ease-in-out" // object-contain might be better for screenshots
          key={`${currentIndex}-${currentItem.sourceUrl}`} // More specific key
        />)}

        {/* Navigation Arrows */}
        {gallery.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
              aria-label="Previous image"
            >
              <FaChevronLeft size={32} />
            </button>
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
              aria-label="Next image"
            >
              <FaChevronRight size={32} />
            </button>
          </>
        )}
      </div>

      {/* Caption */}
      {currentItem.caption && (
        <p className="text-center text-sm text-gray-600 mt-1">{currentItem.caption}</p>
      )}


      {/* Thumbnails (only if more than one item) */}
      {gallery.length > 1 && (
        <div className="flex justify-center gap-2 mt-2 flex-wrap px-2">
          {gallery.map((item, index) => {
            const isThumbVideo = isVideoSource(item.sourceUrl);
            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-16 h-10 relative overflow-hidden rounded border-2 transition-colors duration-200 ${index === currentIndex
                  ? 'border-primary-accent' // Highlight active thumbnail
                  : 'border-transparent hover:border-primary-accent/50'
                  } focus:outline-none focus:ring-2 focus:ring-primary-accent focus:ring-offset-2`}
                aria-label={`Go to ${isThumbVideo ? 'video' : 'image'} ${index + 1}`}
              >
                {/* Thumbnail Content */}
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  {isThumbVideo ? (
                    // Video Placeholder Icon
                    <FaPlay className="text-gray-600 w-4 h-4" />
                  ) : (
                    // Image Thumbnail
                    <Image
                      src={item.sourceUrl}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover" // Cover for thumbnails usually looks better
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
    </div>
  );
}
