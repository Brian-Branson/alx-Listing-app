'use client'
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const images = [
  "/assets/carousel/img-1.png",
  "/assets/carousel/img-2.png",
  "/assets/carousel/img-3.png",
  "/assets/carousel/img-4.png",
  "/assets/carousel/img-5.png",
  "/assets/carousel/img-6.png"
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const total = images.length;

  const containerRef = useRef<HTMLDivElement>(null);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, total]);

  return (
    <div
      className="relative w-full overflow-hidden rounded-lg shadow-lg"
      onMouseEnter={() => setIsHovered(false)}
      onMouseLeave={() => setIsHovered(false)}
    >
    
      <div
        ref={containerRef}
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="min-w-full h-[800px] relative">

            <Image
              src={src}
              alt={`Slide ${index}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-opacity-70 hover:bg-opacity-90 p-2 rounded-full"
      >
        &#60;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-opacity-0 hover:bg-opacity-90 p-2 rounded-full"
      >
        &#62;
      </button>
    </div>
  );
}
