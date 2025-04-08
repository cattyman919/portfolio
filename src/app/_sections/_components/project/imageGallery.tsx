import Image from "next/image";
import { useState } from "react";
import { ImageGalleryProps } from "@/types/projectType";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ImageGallery({ gallery, projectName }: ImageGalleryProps) {
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

  return (
    <div className=" flex flex-col gap-4">
      {/* Main Image Viewer */}
      <div className="relative w-full aspect-video mx-auto lg:h-[400px] overflow-hidden rounded-lg border-gray-300">
        <Image
          src={currentItem.imageUrl}
          alt={`${projectName} - Gallery Image ${currentIndex + 1}${currentItem.caption ? `: ${currentItem.caption}` : ''}`}
          fill
          className="object-contain transition-opacity duration-300 ease-in-out" // object-contain might be better for screenshots
          key={currentIndex} // Force re-render on index change for transition
        />
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

      {/* Thumbnails or Dots */}
      {gallery.length > 1 && (
        <div className="flex justify-center gap-2 mt-2 flex-wrap">
          {gallery.map((item, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-16 h-10 relative overflow-hidden rounded border-2 ${index === currentIndex ? 'border-primary-accent' : 'border-transparent'
                } hover:border-primary-accent/50 transition-colors`}
              aria-label={`Go to image ${index + 1}`}
            >
              <Image
                src={item.imageUrl}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
