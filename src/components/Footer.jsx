import {
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {

  return (
    <footer className="border-t border-gray-200 bg-white px-6 py-6 transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">

          {/* Copyright */}
          <div className="text-center sm:text-left">

            <p className="text-sm font-medium text-gray-900 dark:text-white">
              © 2026 Srilekha Govvala
            </p>

            <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
              React.js Frontend Developer
            </p>

          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">

            {/* Email */}
            <a
              href="mailto:srilekhag441@gmail.com"
              aria-label="Email"
              className="text-gray-500 transition-colors duration-300 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/srilekhag/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-500 transition-colors duration-300 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Srilekha-govvala"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-500 transition-colors duration-300 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>

          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-5 border-t border-gray-100 pt-4 text-center dark:border-gray-800">
          <p className="text-xs text-gray-400 dark:text-gray-600">
            Built with React.js & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;