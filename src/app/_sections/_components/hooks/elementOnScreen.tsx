import { useEffect, useRef, useState } from "react";

type OptionProps = {
  root?: null;
  rootMargin?: string;
  threshold?: number;
};

export const useElementOnScreen = ({
  root = null,
  rootMargin = "0px",
  threshold = 0,
}: OptionProps) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const callbackFunction = (entries: any) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, {
      root,
      rootMargin,
      threshold,
    });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [containerRef, { root, rootMargin, threshold }]);
  return [containerRef, isVisible];
};
