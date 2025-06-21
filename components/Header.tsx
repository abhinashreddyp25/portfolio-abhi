
import React, { useState } from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-gray-300 hover:text-white transition-colors duration-300 relative group text-lg"
  >
    {children}
    <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-brand-pink transition-all duration-300 group-hover:w-full"></span>
  </a>
);

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string, e?: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e?.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" onClick={(e) => scrollToSection('hero',e)} className="text-3xl font-bold gradient-text animate-text-gradient">
            AR
          </a>

          <nav className="hidden md:flex space-x-8 items-center">
            <NavLink href="#about" onClick={(e) => scrollToSection('about', e)}>About</NavLink>
            <NavLink href="#skills" onClick={(e) => scrollToSection('skills', e)}>Skills</NavLink>
            <NavLink href="#experience" onClick={(e) => scrollToSection('experience', e)}>Experience</NavLink>
            <NavLink href="#projects" onClick={(e) => scrollToSection('projects', e)}>Projects</NavLink>
            <button
              onClick={(e) => scrollToSection('contact', e)}
              className="bg-gradient-to-r from-brand-pink to-brand-purple hover:from-brand-purple hover:to-brand-pink text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </button>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Open menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-gray absolute w-full left-0 top-20 shadow-xl rounded-b-lg">
          <nav className="flex flex-col space-y-4 p-6">
            <NavLink href="#about" onClick={(e) => scrollToSection('about', e)}>About</NavLink>
            <NavLink href="#skills" onClick={(e) => scrollToSection('skills', e)}>Skills</NavLink>
            <NavLink href="#experience" onClick={(e) => scrollToSection('experience', e)}>Experience</NavLink>
            <NavLink href="#projects" onClick={(e) => scrollToSection('projects', e)}>Projects</NavLink>
             <button
              onClick={(e) => scrollToSection('contact', e)}
              className="w-full text-center bg-gradient-to-r from-brand-pink to-brand-purple hover:from-brand-purple hover:to-brand-pink text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
