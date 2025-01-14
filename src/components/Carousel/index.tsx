"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const Carousel = () => {
  const searchParams = useSearchParams();
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [slides, setSlides] = useState([]);

  // Update the language and load new translations when the query parameter changes
  useEffect(() => {
    const language = searchParams.get('lang') || 'en';
    setSelectedLanguage(language);
    loadTranslations(language);
  }, [searchParams]);  // Re-run when query parameters change

  // Fetch translations for the selected language
  const loadTranslations = async (language) => {
    try {
      const response = await fetch(`/locales/${language}/common.json`);
      const data = await response.json();
      setSlides(data.carousel.slides || []); // Assuming 'carousel' section exists in the JSON file
    } catch (error) {
      console.error("Error loading translations:", error);
    }
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide change every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-blood">
      <div className="absolute inset-0">
        <Image
          src={slides[currentSlide]?.image || "/images/carousel/carousel.jpg"} // Fallback image
          alt="hero"
          className="h-full w-full object-cover"
          layout="fill"
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center text-white">
        <h1 className="mb-6 text-4xl font-bold leading-snug sm:text-5xl lg:text-6xl">
          {slides[currentSlide]?.title || "Title not available"}
        </h1>
        <p className="mb-8 max-w-xl text-lg font-medium sm:text-xl">
          {slides[currentSlide]?.description || "Description not available"}
        </p>
        <div className="flex gap-4">
          <button onClick={prevSlide} className="rounded-md bg-white bg-opacity-80 px-6 py-3 text-dark hover:bg-opacity-100">
            Donate Blood
          </button>
          <button onClick={nextSlide} className="rounded-md bg-white bg-opacity-80 px-6 py-3 text-dark hover:bg-opacity-100">
            Search Blood
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
