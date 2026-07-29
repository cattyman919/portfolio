import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";

export interface AchievementImage {
  src: string;
  alt: string;
  caption?: string;
}

interface Props {
  images: AchievementImage[];
  title: string;
  autoAdvanceMs?: number;
}

const DEFAULT_AUTO_ADVANCE_MS = 4000;
const MIN_AUTO_ADVANCE_MS = 1500;

export default function AchievementCarousel({
  images,
  title,
  autoAdvanceMs = DEFAULT_AUTO_ADVANCE_MS,
}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [canAutoAdvance, setCanAutoAdvance] = useState(false);
  const [progress, setProgress] = useState(0);
  const thumbnailRef = useRef<HTMLDivElement>(null);

  const hasMultipleImages = images.length > 1;
  const currentImage = images[currentIndex];
  const intervalMs = Math.max(autoAdvanceMs, MIN_AUTO_ADVANCE_MS);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateAutoAdvance = () => setCanAutoAdvance(!mediaQuery.matches);

    updateAutoAdvance();
    mediaQuery.addEventListener("change", updateAutoAdvance);

    return () => mediaQuery.removeEventListener("change", updateAutoAdvance);
  }, []);

  useEffect(() => {
    setProgress(0);

    if (!hasMultipleImages || isPaused || !canAutoAdvance) return;

    let animationFrame = 0;
    const startedAt = performance.now();

    const updateProgress = (timestamp: number) => {
      const elapsed = timestamp - startedAt;
      const nextProgress = Math.min((elapsed / intervalMs) * 100, 100);

      setProgress(nextProgress);

      if (nextProgress < 100) {
        animationFrame = window.requestAnimationFrame(updateProgress);
      }
    };

    const timeout = window.setTimeout(() => {
      setCurrentIndex((index) => (index + 1) % images.length);
    }, intervalMs);

    animationFrame = window.requestAnimationFrame(updateProgress);

    return () => {
      window.clearTimeout(timeout);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [
    canAutoAdvance,
    currentIndex,
    hasMultipleImages,
    images.length,
    intervalMs,
    isPaused,
  ]);

  useEffect(() => {
    const activeThumb = thumbnailRef.current?.children[currentIndex] as
      | HTMLElement
      | undefined;

    activeThumb?.scrollIntoView({
      behavior: canAutoAdvance ? "smooth" : "auto",
      block: "nearest",
      inline: "center",
    });
  }, [canAutoAdvance, currentIndex]);

  if (!currentImage) return null;

  const goToPrevious = () => {
    setIsPaused(true);
    setCurrentIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  };

  const goToNext = () => {
    setIsPaused(true);
    setCurrentIndex((index) => (index + 1) % images.length);
  };

  const goToImage = (index: number) => {
    setIsPaused(true);
    setCurrentIndex(index);
  };

  return (
    <div
      className="group/carousel flex flex-col gap-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="relative overflow-hidden rounded-2xl border border-primary/35 bg-black/30 shadow-[0_0_24px_color-mix(in_oklch,var(--color-primary)_14%,transparent)]">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-primary/10 via-transparent to-lagoon/10" />

        <img
          key={`${currentIndex}-${currentImage.src}`}
          src={currentImage.src}
          alt={currentImage.alt}
          className="aspect-[4/3] h-full w-full object-cover opacity-90 transition-opacity duration-300 group-hover/carousel:opacity-100"
          loading={currentIndex === 0 ? "eager" : "lazy"}
          decoding="async"
          sizes="(max-width: 768px) 90vw, 42vw"
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/95 via-bg/55 to-transparent p-4">
          <p
            className="text-sm font-bold text-gray-100"
            aria-live="polite"
          >
            {currentImage.caption ?? `${title} proof image ${currentIndex + 1}`}
          </p>
          <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-primary/80">
            {currentIndex + 1} / {images.length}
          </p>
        </div>

        {hasMultipleImages && (
          <div className="absolute inset-x-0 bottom-0 h-1 bg-white/10">
            <div
              className={`h-full bg-primary shadow-[0_0_10px_var(--color-primary)] ${
                isPaused || !canAutoAdvance ? "opacity-45" : "opacity-100"
              }`}
              style={{ width: `${progress}%` }}
              role="progressbar"
              aria-label={`Time until next image for ${title}`}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(progress)}
            />
          </div>
        )}

        {hasMultipleImages && (
          <div className="absolute inset-x-3 top-1/2 flex -translate-y-1/2 justify-between opacity-100 md:opacity-0 md:transition-opacity md:duration-300 md:group-hover/carousel:opacity-100">
            <button
              type="button"
              onClick={goToPrevious}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-bg/80 p-0 text-white backdrop-blur-md hover:border-primary/60 hover:bg-primary/15"
              aria-label={`Show previous image for ${title}`}
            >
              <Icon icon="lucide:chevron-left" className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-bg/80 p-0 text-white backdrop-blur-md hover:border-primary/60 hover:bg-primary/15"
              aria-label={`Show next image for ${title}`}
            >
              <Icon icon="lucide:chevron-right" className="h-6 w-6" />
            </button>
          </div>
        )}
      </div>

      {hasMultipleImages && (
        <div
          ref={thumbnailRef}
          className="flex gap-2 overflow-x-auto scroll-smooth px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label={`${title} image thumbnails`}
        >
          {images.map((image, index) => {
            const isActive = index === currentIndex;

            return (
              <button
                type="button"
                key={`${image.src}-${index}`}
                onClick={() => goToImage(index)}
                aria-label={`Show image ${index + 1} for ${title}`}
                aria-current={isActive ? "true" : undefined}
                className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border p-0 transition-all duration-200 ${
                  isActive
                    ? "border-primary shadow-[0_0_12px_var(--color-primary)]"
                    : "border-white/15 opacity-60 hover:border-primary/50 hover:opacity-100"
                }`}
              >
                <img
                  src={image.src}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  sizes="80px"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
