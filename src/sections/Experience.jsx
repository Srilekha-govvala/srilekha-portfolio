import {
  faCode,
  faLayerGroup,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const experiences = [
  {
    role: "Associate Consultant",
    company: "Infosys Ltd.",
    duration: "Jan 2026 — Present",
    description:
      "Driving frontend and AI-driven initiatives while taking greater ownership of team enablement and technical collaboration. Leading knowledge-sharing efforts, mentoring junior developers, and supporting the team in adopting AI-assisted development practices and emerging technologies.",
  },

  {
    role: "Senior Systems Engineer",
    company: "Infosys Ltd.",
    duration: "Oct 2024 — Dec 2025",
    description:
      "Took ownership of complex frontend development and UI modernization initiatives, building scalable React.js applications with a strong focus on performance, reusable components, testing, and maintainable architecture.",
  },

  {
    role: "Systems Engineer",
    company: "Infosys Ltd.",
    duration: "Jul 2022 — Sep 2024",
    description:
      "Built enterprise web interfaces using React.js and JavaScript, gaining hands-on experience in API integration, authentication flows, dashboards, testing, and performance-focused frontend development.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-gray-50 px-6 py-24 transition-colors duration-300 dark:bg-gray-900/40"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-14 max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-500">
            Experience
          </p>

          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-white">
            Growing through frontend development, enterprise applications,
            and continuous learning.
          </h2>
        </div>

        {/* Experience Content */}
        <div className="grid gap-10 lg:grid-cols-3">

          {/* Experience Timeline */}
          <div className="relative lg:col-span-2">

            {/* Timeline Line */}
            <div className="absolute left-[7px] top-2 hidden h-[calc(100%-20px)] w-px bg-gray-300 dark:bg-gray-700 sm:block" />

            <div className="space-y-8">

              {experiences.map((experience) => (
                <div
                  key={`${experience.role}-${experience.duration}`}
                  className="relative sm:pl-10"
                >

                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-2 hidden h-4 w-4 rounded-full border-4 border-indigo-100 bg-indigo-500 dark:border-indigo-950 sm:block" />

                  {/* Experience Card */}
                  <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900">

                    {/* Role & Company */}
                    <div className="flex flex-col justify-between gap-4 sm:flex-row">

                      <div>
                        <p className="text-sm font-medium text-indigo-500">
                          {experience.duration}
                        </p>

                        <h3 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
                          {experience.role}
                        </h3>

                        <p className="mt-1 text-base font-medium text-gray-600 dark:text-gray-400">
                          {experience.company}
                        </p>
                      </div>

                      {/* Role Icon */}
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400">
                        <FontAwesomeIcon icon={faCode} />
                      </div>

                    </div>

                    {/* Short Description */}
                    <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">
                      {experience.description}
                    </p>

                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Career Highlights & Resume */}
          <div className="flex flex-col gap-5">

            {/* Experience Highlight */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
              <FontAwesomeIcon
                icon={faLayerGroup}
                className="text-xl text-indigo-500"
              />

              <p className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
                4+ Years
              </p>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Frontend Development Experience
              </p>
            </div>

            {/* Primary Technology */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
              <FontAwesomeIcon
                icon={faRocket}
                className="text-xl text-indigo-500"
              />

              <p className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
                React.js
              </p>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Primary Frontend Technology
              </p>
            </div>

            {/* Domain */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
              <FontAwesomeIcon
                icon={faCode}
                className="text-xl text-indigo-500"
              />

              <p className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
                Enterprise
              </p>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Application Development Experience
              </p>
            </div>

            {/* Resume CTA */}
            <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-900/50 dark:bg-indigo-950/20">
              <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
                Want to explore my experience in more detail?
              </p>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                View Full Resume
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;