import React from "react";
import type { SkillCategory, Skill } from "../types";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

// Placeholder Icons (Consider using a library like react-icons for actual icons)
const CodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-10 h-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
    />
  </svg>
);
const ToolIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-10 h-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
    />
  </svg>
);
const DatabaseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-10 h-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
    />
  </svg>
);
const ConceptIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-10 h-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
    />
  </svg>
);

const skillsData: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    icon: <CodeIcon />,
    skills: [
      { id: "py", name: "Python" },
      { id: "cpp", name: "C/C++" },
      { id: "java", name: "Java" },
      { id: "sql", name: "SQL" },
      { id: "html", name: "HTML" },
      { id: "css", name: "CSS" },
      { id: "js", name: "JavaScript" },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks & Tools",
    icon: <ToolIcon />,
    skills: [
      { id: "react", name: "React.js" },
      { id: "node", name: "Node.js" },
      { id: "express", name: "Express.js" },
      { id: "springboot", name: "Spring Boot" },
      { id: "api", name: "API Development" },
      { id: "microservices", name: "Microservices" },
      { id: "uiux", name: "UI/UX Design" },
      { id: "git", name: "GitHub" },
      { id: "swagger", name: "Swagger" },
      { id: "postman", name: "Postman" },
      { id: "hibernate", name: "Hibernate" },
      { id: "selenium", name: "Selenium" },
      { id: "arduino", name: "Arduino" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icon: <DatabaseIcon />,
    skills: [
      { id: "mysql", name: "MySQL" },
      { id: "mariadb", name: "MariaDB" },
      { id: "mongodb", name: "MongoDB" },
    ],
  },
  {
    id: "concepts",
    title: "Core Concepts",
    icon: <ConceptIcon />,
    skills: [
      { id: "OOPS", name: "OOPS" },
      { id: "DSA", name: "DSA" },
      { id: "multithreading", name: "Multithreading" },
      { id: "dbms", name: "DBMS" },
      { id: "os", name: "Operating Systems" },
      { id: "cn", name: "Computer Networks" },
    ],
  },
];

const SkillCard: React.FC<{
  category: SkillCategory;
  animationDelay: string;
}> = ({ category, animationDelay }) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`bg-brand-light-gray p-6 md:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group card-hover-effect ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay }}
    >
      <div className="flex items-center mb-6">
        {category.icon && (
          <div className="mr-4 text-brand-pink text-4xl group-hover:text-brand-purple transition-colors duration-300">
            {category.icon}
          </div>
        )}
        <h3 className="text-2xl font-bold group-hover:gradient-text group-hover:animate-text-gradient transition-all duration-300">
          {category.title}
        </h3>
      </div>
      <ul className="space-y-2">
        {category.skills.map((skill) => (
          <li
            key={skill.id}
            className="text-gray-300 text-sm md:text-base flex items-center"
          >
            <span className="text-brand-pink mr-2">◆</span> {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.05,
    triggerOnce: true,
  });

  return (
    <section id="skills" ref={ref} className="py-20 md:py-28 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-3xl mx-auto text-center mb-12 md:mb-20 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical{" "}
            <span className="gradient-text animate-text-gradient">
              Proficiencies
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            A versatile skillset honed through academic learning and practical
            application, covering various aspects of software development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {skillsData.map((category, index) => (
            <SkillCard
              key={category.id}
              category={category}
              animationDelay={`${index * 150}ms`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
