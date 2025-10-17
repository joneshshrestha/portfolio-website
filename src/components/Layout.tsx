import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-200`}
    >
      <header className="px-4 sm:px-8 py-4">
        <div className="flex items-center justify-between max-w-5xl mx-auto mt-2">
          <Link to="/" className="flex items-center">
            <img
              src="/img/logo.jpg"
              alt="Profile"
              className="w-9 h-9 rounded-full object-cover mr-3"
              onError={e => {
                // Fallback for missing image
                const target = e.target as HTMLImageElement;
                target.src = '/img/placeholder.jpg';
              }}
            />
            <h5 className="text-sm font-medium leading-tight">
              Jonesh Shrestha
              <br />
              <span className="text-xs font-medium">AI/ML Engineer</span>
            </h5>
          </Link>

          <div className="flex items-center space-x-4 sm:space-x-6">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <Link
                to="/"
                className="hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              >
                Home
              </Link>
              <Link
                to="/work"
                className="hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              >
                Work
              </Link>
              <Link
                to="/uses"
                className="hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              >
                Uses
              </Link>
              <Link
                to="/portfolio"
                className="hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              >
                Portfolio
              </Link>
              <Link
                to="/blog"
                className="hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              >
                Blog
              </Link>
              <span className="border-l border-gray-300 dark:border-gray-700 h-5 self-center mx-2"></span>
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              >
                Resume
              </a>
            </nav>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-4 px-4">
              <Link
                to="/"
                className="hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/work"
                className="hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Work
              </Link>
              <Link
                to="/uses"
                className="hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Uses
              </Link>
              <Link
                to="/portfolio"
                className="hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                to="/blog"
                className="hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-light dark:text-primary-dark hover:underline"
                >
                  Resume
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-8 py-8">{children}</main>

      <div className="border-t border-gray-200 dark:border-gray-700 mt-3"></div>

      <footer className="max-w-5xl mx-auto px-4 sm:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400 space-y-4 sm:space-y-0">
          <div>© 2016-{new Date().getFullYear()} Jonesh Shrestha</div>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/joneshshrestha/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-light dark:text-primary-dark hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/shresthajonesh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-light dark:text-primary-dark hover:underline"
            >
              𝕏
            </a>
            <a
              href="https://github.com/joneshshrestha/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-light dark:text-primary-dark hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/joneshshrestha/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-light dark:text-primary-dark hover:underline"
            >
              Instagram
            </a>
            <a
              href="/rss.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-light dark:text-primary-dark hover:underline flex items-center"
              title="Subscribe to RSS Feed"
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z" />
              </svg>
              RSS
            </a>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
          Built with <span className="text-red-500">♥</span> in Chicago.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
