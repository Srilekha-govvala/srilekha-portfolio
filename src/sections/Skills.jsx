import {
  faBootstrap,
  faCss3Alt,
  faGitAlt,
  faGithub,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

import {
  faCode,
  faFlask,
  faLaptopCode,
  faPalette,
  faUniversalAccess,
  faWandMagicSparkles,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: faCode,
    skills: [
      { name: "React.js", icon: faReact },
      { name: "JavaScript", icon: faJs },
      { name: "HTML5", icon: faHtml5 },
      { name: "CSS3", icon: faCss3Alt },
      { name: "Bootstrap", icon: faBootstrap },
      { name: "Tailwind CSS", icon: faWind },
      { name: "Material UI", icon: faPalette },
      { name: "Redux Toolkit", icon: faCode },
      { name: "Redwood UI", icon: faCode },
    ],
  },

  {
    title: "Testing",
    icon: faFlask,
    skills: [
      { name: "Jest", icon: faFlask },
      { name: "React Testing Library", icon: faReact },
      { name: "Unit Testing", icon: faFlask },
      { name: "Component Testing", icon: faFlask },
    ],
  },

  {
    title: "Tools & Workflow",
    icon: faLaptopCode,
    skills: [
      { name: "Git", icon: faGitAlt },
      { name: "GitHub", icon: faGithub },
      { name: "GitHub Copilot", icon: faWandMagicSparkles },
      { name: "Visual Studio Code", icon: faCode },
      { name: "Oracle Visual Builder Studio", icon: faCode },
      { name: "Microsoft Copilot Studio", icon: faWandMagicSparkles },
      { name: "Browser DevTools", icon: faLaptopCode },
    ],
  },
{
    title: "Frontend Practices",
    icon: faUniversalAccess,
    skills: [
      { name: "Agile / Scrum", icon: faCode },
      { name: "Responsive Design", icon: faLaptopCode },
      { name: "Accessibility (WCAG)", icon: faUniversalAccess },
      { name: "API Integration", icon: faCode },
      { name: "Reusable Components", icon: faCode },
      { name: "Component-Driven Design", icon: faCode },
    ],
  },
  {
    title: "AI & Emerging Technologies",
    icon: faWandMagicSparkles,
    skills: [
      { name: "Prompt Engineering", icon: faWandMagicSparkles },
      { name: "AI-assisted Development", icon: faWandMagicSparkles },
      { name: "Agentic AI", icon: faWandMagicSparkles },
    ],
  },

  
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-white px-6 py-24 transition-colors duration-300 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-14 max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-500">
            Skills & Technologies
          </p>

          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-white">
            Tools and technologies I use to build thoughtful frontend
            experiences.
          </h2>
        </div>

        {/* Skill Categories */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900/60"
            >

              {/* Category Header */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400">
                  <FontAwesomeIcon icon={category.icon} />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-indigo-700 dark:hover:text-indigo-400"
                  >
                    <FontAwesomeIcon
                      icon={skill.icon}
                      className="text-indigo-500"
                    />

                    {skill.name}
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;