import React from "react";
import type { Project } from "../types";
import ProjectCard from "./CreatorCard"; // Updated path
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const projectsData: Project[] = [
  {
    id: "1",
    title: "Event Management Web App",
    description: [
      "Developed a cutting-edge event management web application using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "The app features an intuitive interface, powerful backend capabilities, and a scalable MongoDB database.",
      "Played a key role in streamlining event planning and execution, demonstrating proficiency in React.js for frontend development and Node.js for backend functionality.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
    ],
    // imageUrl: "https://picsum.photos/seed/eventapp/600/400", // Optional placeholder
    link: "https://eventz-planner.netlify.app", // Placeholder, update if actual link exists
  },
  {
    id: "2",
    title: "DB to Text Converter",
    description: [
      "Designed and developed a program to extract user-specific data from a relational database with high accuracy.",
      "Implemented robust data retrieval and transformation logic to ensure seamless processing of large datasets.",
      "Converted raw data into clean, structured text file formats for downstream use and reporting.",
      "Optimized data handling workflows to improve performance, reliability, and maintainability.",
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "Hibernate"],
    // imageUrl: 'https://picsum.photos/seed/dbtext/600/400', // Optional placeholder
  },
];

const ProjectsSection: React.FC = () => {
  const [sectionRef, isSectionVisible] =
    useIntersectionObserver<HTMLDivElement>({
      threshold: 0.05,
      triggerOnce: true,
    });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-28 bg-brand-gray overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-3xl mx-auto text-center mb-12 md:mb-20 ${
            isSectionVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My{" "}
            <span className="gradient-text animate-text-gradient">
              Projects
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            A selection of projects where I've applied my skills to create
            practical and efficient solutions.
          </p>
        </div>

        {projectsData.length > 0 && (
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 ${
              isSectionVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            {projectsData.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                animationDelay={`${index * 150}ms`}
                // isVisible prop is not strictly needed here if parent div handles initial animation
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
