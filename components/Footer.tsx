import React from "react";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const FooterLink: React.FC<FooterLinkProps> = ({
  href,
  children,
  isExternal,
  onClick,
}) => (
  <a
    href={href}
    className="text-gray-400 hover:text-brand-pink transition-colors duration-300"
    target={isExternal ? "_blank" : "_self"}
    rel={isExternal ? "noopener noreferrer" : ""}
    onClick={onClick}
  >
    {children}
  </a>
);

const SocialIcon: React.FC<{
  href: string;
  icon: React.ReactNode;
  label: string;
}> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-gray-400 hover:text-brand-pink transition-colors duration-300"
  >
    {icon}
  </a>
);

const LinkedInFooterIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);
const GitHubFooterIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);
const EmailFooterIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
  </svg>
);

const Footer: React.FC = () => {
  const email = "pabhinashreddy5@gmail.com";
  const linkedInUrl = "https://www.linkedin.com/in/p-abhinash-reddy/";
  const githubUrl = "https://github.com/abhinashreddy25";

  const scrollToSection = (
    id: string,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-gray text-gray-400 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 items-start">
          <div>
            <a
              href="#hero"
              onClick={(e) => scrollToSection("hero", e)}
              className="text-3xl font-bold gradient-text animate-text-gradient mb-4 inline-block"
            >
              Abhinash Reddy
            </a>
            <p className="text-sm leading-relaxed">
              Software Engineer passionate about building impactful digital
              solutions.
            </p>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h5>
            <ul className="space-y-3">
              <li>
                <FooterLink
                  href="#about"
                  onClick={(e) => scrollToSection("about", e)}
                >
                  About
                </FooterLink>
              </li>
              <li>
                <FooterLink
                  href="#skills"
                  onClick={(e) => scrollToSection("skills", e)}
                >
                  Skills
                </FooterLink>
              </li>
              <li>
                <FooterLink
                  href="#experience"
                  onClick={(e) => scrollToSection("experience", e)}
                >
                  Experience
                </FooterLink>
              </li>
              <li>
                <FooterLink
                  href="#projects"
                  onClick={(e) => scrollToSection("projects", e)}
                >
                  Projects
                </FooterLink>
              </li>
              <li>
                <FooterLink
                  href="#contact"
                  onClick={(e) => scrollToSection("contact", e)}
                >
                  Contact
                </FooterLink>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Connect</h5>
            <div className="flex space-x-5 mb-4">
              <SocialIcon
                href={linkedInUrl}
                icon={<LinkedInFooterIcon />}
                label="LinkedIn Profile"
              />
              <SocialIcon
                href={githubUrl}
                icon={<GitHubFooterIcon />}
                label="GitHub Profile"
              />
              <SocialIcon
                href={`mailto:${email}`}
                icon={<EmailFooterIcon />}
                label="Email Abhinash"
              />
            </div>
            <p className="text-sm">
              <FooterLink href={`mailto:${email}`}>{email}</FooterLink>
            </p>
            <p className="text-sm">India</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Pandirlapalli Abhinash Reddy. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
