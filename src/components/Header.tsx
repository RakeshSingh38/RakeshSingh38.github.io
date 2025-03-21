import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { Link } from 'react-scroll/modules'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full dark:bg-background-dark/80 bg-background-light/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">RAKESH</h1>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center">
            <ul className="flex space-x-6 mr-4">
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-text-light dark:text-text hover:text-primary cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-text-light dark:text-text hover:text-primary cursor-pointer"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-text-light dark:text-text hover:text-primary cursor-pointer"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="qualifications"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-text-light dark:text-text hover:text-primary cursor-pointer"
                >
                  Qualifications
                </Link>
              </li>
              <li>
                <Link
                  to="expertise"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-text-light dark:text-text hover:text-primary cursor-pointer"
                >
                  Expertise
                </Link>
              </li>
              <li>
                <Link
                  to="enhanced-contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-text-light dark:text-text hover:text-primary cursor-pointer"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://djanwbpg5dphz5ng.public.blob.vercel-storage.com/Rakesh%20Resume-qX7nVhSpqMKVZ2vjW4RFmnGfw6QPBp.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded bg-primary text-white hover:bg-primary/80 transition-colors"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Social Icons and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Social Icons - Desktop */}
            <div className="hidden md:flex space-x-4">
              <ThemeToggle />
            </div>

            {/* Theme Toggle - Mobile */}
            <div className="md:hidden">
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-text-light dark:text-text focus:outline-none"
              >
                {isMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="block px-3 py-2 text-text-light dark:text-text hover:text-primary cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                className="block px-3 py-2 text-text-light dark:text-text hover:text-primary cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
                className="block px-3 py-2 text-text-light dark:text-text hover:text-primary cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                to="qualifications"
                spy={true}
                smooth={true}
                duration={500}
                className="block px-3 py-2 text-text-light dark:text-text hover:text-primary cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Qualifications
              </Link>
              <Link
                to="expertise"
                spy={true}
                smooth={true}
                duration={500}
                className="block px-3 py-2 text-text-light dark:text-text hover:text-primary cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Expertise
              </Link>
              <Link
                to="enhanced-contact"
                spy={true}
                smooth={true}
                duration={500}
                className="block px-3 py-2 text-text-light dark:text-text hover:text-primary cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="https://djanwbpg5dphz5ng.public.blob.vercel-storage.com/Rakesh%20Resume-qX7nVhSpqMKVZ2vjW4RFmnGfw6QPBp.pdf"
                rel="noreferrer"
                className="block px-3 py-2 text-text-light dark:text-text hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
