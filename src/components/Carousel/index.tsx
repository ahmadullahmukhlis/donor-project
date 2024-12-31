"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Donat Blood and Save Lif",
      description:
        "Next.js SaaS Boilerplate and Starter Kit designed and built for SaaS startups. It comes with all necessary integrations, pages, and components you need to launch a feature-rich SaaS website.",
      image: "/images/carousel/carousel.jpg",
    },
    {
      title: "Donor is King of the World",
      description:
        "Leverage the power of Next.js to build blazing-fast, scalable web applications with integrated tools and best practices.",
      image: "/images/carousel/carousel1.jpg",
    },
    {
      title: "you blood can Make Save one Family",
      description:
        "Start with ready-made solutions tailored for SaaS startups and focus on building your unique features.",
      image: "/images/carousel/carousel2.jpg",
    },
    {
      title: "you blood can Make Save one Family",
      description:
        "Start with ready-made solutions tailored for SaaS startups and focus on building your unique features.",
      image: "/images/carousel/carousel3.jpg",
    },
    {
      title: "you blood can Make Save one Family",
      description:
        "Start with ready-made solutions tailored for SaaS startups and focus on building your unique features.",
      image: "/images/carousel/carousel4.jpg",
    },
    {
      title: "you blood can Make Save one Family",
      description:
        "Start with ready-made solutions tailored for SaaS startups and focus on building your unique features.",
      image: "/images/carousel/carousel5.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-primary"
    >
      <div className="absolute inset-0">
        <Image
          src={slides[currentSlide].image}
          alt="hero"
          className="h-full w-full object-cover"
          layout="fill"
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center text-white">
        <h1 className="mb-6 text-4xl font-bold leading-snug sm:text-5xl lg:text-6xl">
          {slides[currentSlide].title}
        </h1>
        <p className="mb-8 max-w-xl text-lg font-medium sm:text-xl">
          {slides[currentSlide].description}
        </p>
        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            className="rounded-md bg-white bg-opacity-80 px-6 py-3 text-dark hover:bg-opacity-100"
          >
            Previous
          </button>
          <button
            onClick={nextSlide}
            className="rounded-md bg-white bg-opacity-80 px-6 py-3 text-dark hover:bg-opacity-100"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
