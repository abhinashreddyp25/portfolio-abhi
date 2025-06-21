import React from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const HeroSection: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });
  const nameLetters = "ABHINASH".split(""); // Using first name for brevity in animation

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center pt-20 relative overflow-hidden bg-brand-dark"
    >
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className={`absolute animate-subtle-bob rounded-full filter blur-3xl opacity-20
            ${i === 0 ? "w-64 h-64 bg-brand-pink top-1/4 left-1/4" : ""}
            ${i === 1 ? "w-80 h-80 bg-brand-purple bottom-1/4 right-1/4" : ""}
            ${
              i === 2
                ? "w-72 h-72 bg-pink-500 top-1/3 right-1/3 animation-delay-2000"
                : ""
            }
          `}
          style={{ animationDuration: `${6 + i * 2}s` }}
        ></div>
      ))}

      <div className="relative z-10 text-center p-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tighter mb-4">
          <span
            className={`block ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: `100ms` }}
          >
            Pandirlapalli
          </span>
          <span className="block">
            {nameLetters.map((letter, index) => (
              <span
                key={index}
                className={`gradient-text animate-text-gradient inline-block ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                {letter}
              </span>
            ))}
          </span>
          <span
            className={`block ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{
              animationDelay: `${200 + nameLetters.length * 100 + 100}ms`,
            }}
          >
            Reddy
          </span>
        </h1>
        <p
          className={`text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto mb-10 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{
            animationDelay: `${200 + nameLetters.length * 100 + 300}ms`,
          }}
        >
          Software Engineer | JAVA Developer | Full-Stack Developer | Tech
          Enthusiast
        </p>
        <button
          onClick={scrollToProjects}
          className={`bg-gradient-to-r from-brand-pink to-brand-purple hover:from-brand-purple hover:to-brand-pink text-white font-bold py-4 px-10 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{
            animationDelay: `${200 + nameLetters.length * 100 + 600}ms`,
          }}
        >
          View My Work
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <svg
          className="w-8 h-8 text-gray-500 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
