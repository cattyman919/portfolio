import { useState, useEffect, useRef } from "react";

export const useTypewriter = (
  text: string[],
  speed: number = 100,
  delay: number = 1000
): string => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const i = useRef(0);
  const j = useRef(0);
  useEffect(() => {
    let currentWord = text[i.current];

    const typingInterval = setInterval(() => {
      if (isDeleting) {
        setDisplayText(currentWord.substring(0, j.current - 1));
        j.current--;
        if (j.current == 0) {
          setIsDeleting(false);
          i.current++;
          if (i.current === text.length) {
            i.current = 0;
          }
        }
      } else {
        setDisplayText(currentWord.substring(0, j.current + 1));
        j.current++;
        if (j.current === currentWord.length) {
          setTimeout(() => {
            setIsDeleting(true);
          }, delay);
        }
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return displayText;
};
