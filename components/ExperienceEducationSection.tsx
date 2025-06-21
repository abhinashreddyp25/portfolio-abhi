import React from "react";
import type {
  ExperienceEntry,
  EducationEntry,
  Certificate,
  Achievement,
} from "../types";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const experienceData: ExperienceEntry[] = [
  {
    id: "dbs",
    role: "Intern",
    company: "DBS (Development Bank Of Singapore)",
    period: "06/2024 - 06/2025",
    description: [
      "Currently engaged in a dynamic internship, actively contributing to backend system development at DBS Bank.",
      "Developing scalable backend services using Java Spring Boot, applying core software engineering principles in real-world scenarios.",
      "Gained hands-on experience in RESTful API design, using tools like Swagger and Postman, and working within a Microservices architecture.",
      "Involved in test automation using Selenium WebDriver, with a solid understanding of both unit testing and integration testing processes.",
      "Developed a working knowledge of application gateways—handling authentication, routing, and traffic management—and channel services used for internal/external system communication.",
      "Improved my ability to analyze and understand complex business logic, data flows, and system interactions across enterprise-level applications.",
    ],
  },
];

const educationData: EducationEntry[] = [
  {
    id: "vit",
    degree: "Computer Science and Engineering (B.Tech)",
    institution: "Vellore Institute Of Technology",
    period: "05/2021 – 06/2025",
    location: "Chennai, India",
    grade: "CGPA: 8.48",
    coursework: [
      "Object Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
    ],
    clubs: [
      "NexSeed Club (Operations Member)",
      "HackClub (Event Management Member)",
    ],
  },
  {
    id: "fiitjee",
    degree: "Class 12",
    institution: "Fiitjee Junior College",
    period: "05/2019 – 03/2021",
    location: "Vijayawada, India",
    grade: "Percentage: 90.1%",
  },
];

const achievementsData: Achievement[] = [
  {
    id: "scalar",
    title: "25-day-Coding-Challenge(Scalar)",
    organization: "by Interview Bit",
    description:
      "Successfully completed the 25-day coding challenge by Scaler and won the tokens for the completion of the task.",
  },
  {
    id: "web3",
    title: "Hands-on workshop on Web3.0",
    organization: "by ACM-W club",
    description:
      "Learnt how web3 is transforming industries such as finance, Healthcare, gaming and more. Learnt Difference between Web1, Web2, Web3 and Hands-on Session DAPP and NFT Deployment.",
  },
];

const certificatesData: Certificate[] = [
  {
    id: "aws",
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Service",
    link: "#",
  },
  {
    id: "Mern",
    name: "MERN Full stack developer",
    issuer: "ETHNUS",
    link: "#",
  },
  {
    id: "dvp",
    name: "Developer Virtual Experience Program",
    issuer: "Accenture",
    link: "#",
  },
  {
    id: "python",
    name: "Spoken Tutorial Of Python training",
    issuer: "(IIT Bombay)",
    link: "#",
  },
  {
    id: "c",
    name: "Spoken Tutorial Of C training",
    issuer: "(IIT Bombay)",
    link: "#",
  },
];

const SectionCard: React.FC<{
  title: string;
  children: React.ReactNode;
  animationDelay: string;
  isVisible: boolean;
}> = ({ title, children, animationDelay, isVisible }) => (
  <div
    className={`bg-brand-light-gray p-6 md:p-8 rounded-xl shadow-xl card-hover-effect ${
      isVisible ? "animate-fade-in-up" : "opacity-0"
    }`}
    style={{ animationDelay }}
  >
    <h3 className="text-2xl font-bold mb-6 gradient-text animate-text-gradient">
      {title}
    </h3>
    {children}
  </div>
);

const ExperienceEducationSection: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.05,
    triggerOnce: true,
  });

  return (
    <section id="experience" ref={ref} className="py-20 md:py-28 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-3xl mx-auto text-center mb-12 md:mb-20 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Journey &{" "}
            <span className="gradient-text animate-text-gradient">
              Qualifications
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            My professional experience, educational background, key
            achievements, and certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {/* Professional Experience */}
          <SectionCard
            title="Professional Experience"
            animationDelay="0ms"
            isVisible={isVisible}
          >
            {experienceData.map((exp) => (
              <div key={exp.id} className="mb-6 last:mb-0">
                <h4 className="text-xl font-semibold text-white">{exp.role}</h4>
                <p className="text-brand-pink font-medium">{exp.company}</p>
                <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
                <ul className="list-disc list-outside ml-5 space-y-1">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-gray-300 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </SectionCard>

          {/* Education */}
          <SectionCard
            title="Education"
            animationDelay="150ms"
            isVisible={isVisible}
          >
            {educationData.map((edu) => (
              <div key={edu.id} className="mb-6 last:mb-0">
                <h4 className="text-xl font-semibold text-white">
                  {edu.degree}
                </h4>
                <p className="text-brand-pink font-medium">{edu.institution}</p>
                <p className="text-sm text-gray-400">
                  {edu.period} {edu.location && `| ${edu.location}`}
                </p>
                {edu.grade && (
                  <p className="text-sm text-gray-300">{edu.grade}</p>
                )}
                {edu.coursework && (
                  <p className="text-xs text-gray-400 mt-1">
                    Key Courses: {edu.coursework.join(", ")}
                  </p>
                )}
                {edu.clubs && (
                  <p className="text-xs text-gray-400 mt-1">
                    Clubs: {edu.clubs.join(", ")}
                  </p>
                )}
              </div>
            ))}
          </SectionCard>

          {/* Achievements */}
          <SectionCard
            title="Achievements"
            animationDelay="300ms"
            isVisible={isVisible}
          >
            {achievementsData.map((ach) => (
              <div key={ach.id} className="mb-4 last:mb-0">
                <h4 className="text-lg font-semibold text-white">
                  {ach.title}
                </h4>
                <p className="text-sm text-brand-pink">{ach.organization}</p>
                <p className="text-xs text-gray-300">{ach.description}</p>
              </div>
            ))}
          </SectionCard>

          {/* Certificates */}
          <SectionCard
            title="Certificates"
            animationDelay="450ms"
            isVisible={isVisible}
          >
            <ul className="space-y-2">
              {certificatesData.map((cert) => (
                <li key={cert.id} className="text-gray-300 text-sm">
                  <span className="font-medium text-white">{cert.name}</span> -{" "}
                  <span className="text-brand-pink text-xs">{cert.issuer}</span>
                  {cert.link && cert.link !== "#" && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-xs portfolio-link"
                    >
                      View
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducationSection;
