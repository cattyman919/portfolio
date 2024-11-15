import { forwardRef, LegacyRef, useEffect, useRef, useState } from "react";
import skibidiImage from "@/public/images/skibidi-toilet.jpeg";
const Playground = forwardRef(function Playground(
  props,
  ref: LegacyRef<HTMLElement>
) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [isRotating, setIsRotating] = useState(false);
  const [images, setImages] = useState<Array<{ x: number; y: number }>>([]);
  const [rotation, setRotation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (canvas && ctx) {
      canvas.style.borderRadius = "10px";
      canvas.style.background = "white";

      const image = new Image(50, 50);
      image.src = skibidiImage.src;
      imageRef.current = image;

      canvas.addEventListener("click", (event) => {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left - image.width / 2;
        const y = event.clientY - rect.top - image.height / 2;

        ctx.drawImage(image, x, y, image.width, image.height);
        setImages((prevImages) => [...prevImages, { x, y }]);
      });
    }
  }, []);

  return (
    <section ref={ref} id="playground" className="w-full overflow-hidden">
      <h1 className=" w-full pt-3 mb-12 text-5xl text-center lg:text-7xl  text-primary-accent font-bold animate-bounce animate-infinite animate-alternate">
        Playground
      </h1>
      <canvas ref={canvasRef} width={400} height={300} />
      <button
        className="absolute bottom-4 right-4 px-4 py-2 bg-white text-black rounded-lg"
        onMouseDown={() => setIsRotating(true)}
        onMouseUp={() => setIsRotating(false)}
      >
        Rotate
      </button>
    </section>
  );
});

export default Playground;
