import React, { useEffect, useState } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const AnimatedCounter: React.FC<{
  target: number;
  label: string;
  duration?: number;
  suffix?: string;
  decimals?: number;
}> = ({ target, label, duration = 2000, suffix = "", decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = target;
      if (start === end) {
        setCount(end);
        return;
      }

      const range = end - start;
      let current = start;
      const increment = end > start ? 1 : -1;
      const stepTime = Math.abs(Math.floor(duration / range)) || 1;

      const timer = setInterval(() => {
        current += increment * (range / (duration / stepTime)); // Dynamic increment for float
        if (
          (increment > 0 && current >= end) ||
          (increment < 0 && current <= end)
        ) {
          current = end;
          clearInterval(timer);
        }
        setCount(parseFloat(current.toFixed(decimals)));
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isVisible, target, duration, decimals]);

  return (
    <div
      ref={ref}
      className="text-center p-4 bg-brand-light-gray rounded-lg shadow-lg"
    >
      <p className="text-5xl md:text-6xl font-bold gradient-text animate-text-gradient">
        {count.toFixed(decimals)}
        {suffix}
      </p>
      <p className="text-md md:text-lg text-gray-400 mt-2">{label}</p>
    </div>
  );
};

const AboutSection: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="about" ref={ref} className="py-20 md:py-28 bg-brand-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-3xl mx-auto text-center mb-12 md:mb-20 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About{" "}
            <span className="gradient-text animate-text-gradient">Me</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed px-4 max-w-3xl mx-auto text-center">
            I’m a final-year Computer Science undergraduate at{" "}
            <strong>VIT Chennai</strong>, passionate about building impactful
            software through clean code and scalable systems. I interned at{" "}
            <strong>DBS Bank</strong>, where I developed backend services using
            Java Spring Boot, built and tested RESTful APIs, and worked with
            Microservices architecture, Swagger, Postman, and Selenium
            WebDriver. This experience helped me understand enterprise
            application flow, gateways, and channel communication systems. I’ve
            also built several full-stack web applications using the{" "}
            <strong>MERN stack</strong> (MongoDB, Express.js, React.js,
            Node.js). I'm constantly sharpening my problem-solving skills
            through coding challenges and self-driven learning. I’m a motivated
            and detail-oriented developer, eager to contribute to
            high-performing teams and bring real-world solutions to life. Always
            curious, always learning.
          </p>
        </div>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 max-w-2xl mx-auto ${
            isVisible ? "animate-fade-in-up animation-delay-300" : "opacity-0"
          }`}
        >
          <AnimatedCounter
            target={8.48}
            label="CGPA (B.Tech CSE)"
            decimals={2}
          />
          <AnimatedCounter
            target={90.1}
            label="Class 12 Percentage"
            suffix="%"
            decimals={1}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
