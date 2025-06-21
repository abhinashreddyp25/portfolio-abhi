
import React from 'react';
import type { TechItem } from '../types';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

// For a real portfolio, you might use actual logos (SVG or PNG)
const techData: TechItem[] = [
  { id: 'react', name: 'React.js' }, { id: 'node', name: 'Node.js' }, { id: 'js', name: 'JavaScript' },
  { id: 'python', name: 'Python' }, { id: 'java', name: 'Java' }, { id: 'springboot', name: 'Spring Boot' },
  { id: 'sql', name: 'SQL' }, { id: 'mongodb', name: 'MongoDB' }, { id: 'mysql', name: 'MySQL' },
  { id: 'git', name: 'Git' }, { id: 'docker', name: 'Docker' }, { id: 'aws', name: 'AWS' }, // Assuming some common additions
  { id: 'html', name: 'HTML5' }, { id: 'css', name: 'CSS3' }, { id: 'api', name: 'REST APIs' },
  { id: 'selenium', name: 'Selenium'}
];


const TechnologiesMarquee: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });
  const duplicatedTech = [...techData, ...techData, ...techData]; // Duplicate for seamless loop, more items for smoother feel

  return (
    <section ref={ref} className="py-16 md:py-24 bg-brand-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-center text-3xl md:text-4xl font-semibold text-gray-200 mb-12 md:mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          Technologies <span className="gradient-text animate-text-gradient">& Tools</span> I Work With
        </h2>
      </div>
      <div className={`relative flex overflow-x-hidden group ${isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
          {duplicatedTech.map((tech, index) => (
            <div key={`${tech.id}-1-${index}`} className="mx-6 md:mx-10 flex-shrink-0">
              {/* If using logos: <img src={tech.logoUrl} alt={tech.name} className="h-10 md:h-12 object-contain" /> */}
              <span className="text-xl md:text-2xl text-gray-400 hover:text-white transition-colors">{tech.name}</span>
            </div>
          ))}
        </div>
         <div className="absolute top-0 flex animate-marquee2 group-hover:[animation-play-state:paused] whitespace-nowrap">
          {duplicatedTech.map((tech, index) => (
            <div key={`${tech.id}-2-${index}`} className="mx-6 md:mx-10 flex-shrink-0">
              <span className="text-xl md:text-2xl text-gray-400 hover:text-white transition-colors">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesMarquee;
