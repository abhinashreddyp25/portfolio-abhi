
import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  animationDelay: string;
  isVisible?: boolean; // Optional, if animations are triggered by parent
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, animationDelay, isVisible }) => {
  return (
    <div
      className={`bg-brand-light-gray p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 card-hover-effect flex flex-col h-full ${isVisible !== undefined ? (isVisible ? 'animate-fade-in-up' : 'opacity-0') : 'animate-fade-in-up'}`}
      style={{ animationDelay }}
    >
      {project.imageUrl && (
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-48 object-cover rounded-md mb-4" 
        />
      )}
      <h3 className="text-2xl font-bold mb-3 gradient-text animate-text-gradient">{project.title}</h3>
      
      <div className="mb-4 flex-grow">
        {project.description.map((point, index) => (
            <p key={index} className="text-gray-300 text-sm leading-relaxed mb-1 ml-4 relative before:content-['•'] before:absolute before:left-[-1em] before:text-brand-pink">
             {point}
           </p>
        ))}
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies Used:</h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-brand-gray text-xs text-gray-300 px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-auto text-brand-pink hover:text-brand-purple font-semibold transition-colors duration-300 portfolio-link"
        >
          View Project (if applicable)
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
