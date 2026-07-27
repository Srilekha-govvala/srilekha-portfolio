const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-50 px-6 py-24 transition-colors duration-300 dark:bg-gray-900/40"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-14 max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-500">
            About Me
          </p>

          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-white">
            I turn ideas into intuitive, scalable, and user-friendly
            web experiences.
          </h2>
        </div>

        {/* Content */}
        <div className="grid gap-12 lg:grid-cols-3">

          {/* About Text */}
          <div className="space-y-5 text-base leading-8 text-gray-600 lg:col-span-2 dark:text-gray-300">
            <p>
              I'm a Frontend Developer with 4 years of experience
              building responsive and modular web applications using React.js,
              JavaScript, and modern UI technologies. I enjoy creating reusable
              components, improving application performance, and building
              interfaces that are both functional and intuitive.
            </p>

            <p>
              Throughout my professional journey, I've worked on enterprise
              applications, API-integrated user interfaces, dashboards,
              authentication flows, and UI modernization initiatives. I'm also
              passionate about continuously learning new technologies and
              applying them to solve real-world problems.
            </p>

            <p>
              Beyond my professional work, I enjoy building personal projects
              that help me explore new concepts, experiment with frontend
              architecture, and strengthen my skills through hands-on
              development.
            </p>
          </div>

          {/* Quick Highlights */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">

            <div className="rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
              <p className="text-3xl font-bold text-indigo-500">
                4+
              </p>

              <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                Years of Frontend Development
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
              <p className="text-3xl font-bold text-indigo-500">
                React
              </p>

              <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                Building Modern User Interfaces
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
              <p className="text-3xl font-bold text-indigo-500">
                UI
              </p>

              <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                Focused on Usability & Performance
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;