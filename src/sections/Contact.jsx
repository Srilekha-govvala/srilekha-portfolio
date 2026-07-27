/* eslint-disable no-unused-vars */
import {
  faEnvelope,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gray-50 px-6 py-24 transition-colors duration-300 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-5xl">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-500">
            Contact
          </p>

          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-white">
            Let's Connect
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 dark:text-gray-400">
            I'm currently looking for better growth opportunities, challenging
            frontend projects, and exposure to large-scale product development
            where I can continue learning, contribute effectively, and grow as
            a frontend engineer.
          </p>

        </div>

        {/* Contact Options */}
        <div className="mt-12 grid gap-5 sm:grid-cols-3">

          {/* Email */}
          <a
            href="mailto:srilekhag441@gmail.com"
            className="group rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950 dark:hover:border-indigo-700"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 transition-transform duration-300 group-hover:scale-110 dark:bg-indigo-950/50 dark:text-indigo-400">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>

            <h3 className="mt-4 font-semibold text-gray-900 dark:text-white">
              Email
            </h3>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Get in touch
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/srilekhag/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950 dark:hover:border-indigo-700"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 transition-transform duration-300 group-hover:scale-110 dark:bg-indigo-950/50 dark:text-indigo-400">
              <FontAwesomeIcon icon={faLinkedin} />
            </div>

            <h3 className="mt-4 font-semibold text-gray-900 dark:text-white">
              LinkedIn
            </h3>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Let's connect
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Srilekha-govvala"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950 dark:hover:border-indigo-700"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 transition-transform duration-300 group-hover:scale-110 dark:bg-indigo-950/50 dark:text-indigo-400">
              <FontAwesomeIcon icon={faGithub} />
            </div>

            <h3 className="mt-4 font-semibold text-gray-900 dark:text-white">
              GitHub
            </h3>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Explore my work
            </p>
          </a>

        </div>

        {/* Closing Line */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Open to connecting with recruiters, teams, and fellow developers.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;