import { useEffect, useState } from "react";

import {
    faArrowDown,
    faDownload,
} from "@fortawesome/free-solid-svg-icons";

import {
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const rotatingTexts = [
    "Building responsive frontend experiences.",
    "Creating reusable React interfaces.",
    "Solving real-world problems with frontend development.",
    "Exploring modern web technologies.",
];

const Hero = () => {
    const [currentText, setCurrentText] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText(
                (prev) => (prev + 1) % rotatingTexts.length
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden bg-white px-6 pt-24 transition-colors duration-300 dark:bg-gray-950"
        >
            <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">

                {/* Hero Content */}
                <div className="max-w-3xl">

                    {/* Availability Badge */}
                    <div className=" mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 dark:border-indigo-900/50 dark:bg-indigo-950/40 dark:text-indigo-400">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                        Frontend Developer · 4 Years Experience
                    </div>

                    {/* Greeting */}
                    <p className="mb-3 text-lg font-medium text-gray-600 dark:text-gray-400">
                        Hi, I'm Srilekha Govvala 👋
                    </p>

                    {/* Main Heading */}
                    <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
                        Frontend Engineer
                        <span className="block text-indigo-500">
                            React JS Developer
                        </span>
                    </h1>

                    {/* Rotating Tagline */}
                    <div className="mt-6 max-w-2xl">
                        <p
                            key={currentText}
                            className="animate-fade-in text-lg leading-8 text-gray-600 dark:text-gray-300"
                            aria-live="polite"
                        >
                            {rotatingTexts[currentText]}
                        </p>
                    </div>

                    {/* Supporting Text */}
                    <p className="mt-4 max-w-2xl text-base leading-7 text-gray-500 dark:text-gray-400">
                        I enjoy creating intuitive user experiences, solving real-world
                        problems through frontend development, and continuously exploring
                        new technologies to grow as a developer.
                    </p>

                    {/* CTA Buttons */}
                    <div className="animate-slide-up animation-delay-500 mt-8 flex flex-wrap items-center gap-4">

                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/25"
                        >
                            View My Work
                            <FontAwesomeIcon icon={faArrowDown} />
                        </a>

                        <a
                            // href="/resume.pdf"
                             href={`${import.meta.env.BASE_URL}resume.pdf`}
                            download
                            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:text-indigo-500 dark:border-gray-700 dark:text-gray-200 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
                        >
                            Download Resume
                            <FontAwesomeIcon icon={faDownload} />
                        </a>

                    </div>

                    {/* Social Links */}
                    <div className="animate-slide-up animation-delay-600 mt-8 flex items-center gap-5">

                        <a
                            href="https://github.com/Srilekha-govvala"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        >
                            <FontAwesomeIcon icon={faGithub} size="xl" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/srilekhag/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="text-gray-500 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                        >
                            <FontAwesomeIcon icon={faLinkedin} size="xl" />
                        </a>

                    </div>
                </div>

                {/* Visual / Developer Card */}
                <div className="animate-slide-in-right hidden justify-center lg:flex">
                    <div className="relative">

                        <div className="absolute -inset-6 rounded-full bg-indigo-500/10 blur-3xl" />

                        <div className="relative w-[380px] rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-xl dark:border-gray-800 dark:bg-gray-900">

                            <div className="mb-6 flex items-center gap-2">
                                <span className="h-3 w-3 rounded-full bg-red-400" />
                                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                                <span className="h-3 w-3 rounded-full bg-green-400" />
                            </div>

                            <div className="space-y-4 font-mono text-sm">

                                <p className="text-gray-500 dark:text-gray-400">
                                    <span className="text-indigo-500">const</span>{" "}
                                    developer = {"{"}
                                </p>

                                <p className="pl-5 text-gray-700 dark:text-gray-300">
                                    name:{" "}
                                    <span className="text-green-600 dark:text-green-400">
                                        "Srilekha Govvala"
                                    </span>
                                    ,
                                </p>

                                <p className="pl-5 text-gray-700 dark:text-gray-300">
                                    role:{" "}
                                    <span className="text-green-600 dark:text-green-400">
                                        "Frontend Developer"
                                    </span>
                                    ,
                                </p>

                                <p className="pl-5 text-gray-700 dark:text-gray-300">
                                    experience:{" "}
                                    <span className="text-orange-500">
                                        4
                                    </span>{" "}
                                    years,
                                </p>

                                <p className="pl-5 text-gray-700 dark:text-gray-300">
                                    focus:{" "}
                                    <span className="text-green-600 dark:text-green-400">
                                        "React & UI"
                                    </span>
                                </p>

                                <p className="text-gray-500 dark:text-gray-400">
                                    {"}"};
                                </p>

                            </div>

                            <div className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-800">

                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Currently building
                                </p>

                                <p className="mt-2 font-medium text-gray-900 dark:text-white">
                                    ✨ Thoughtful interfaces
                                </p>
                                <div className="mt-5">
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Let's connect
                                    </p>

                                    <a
                                        href="mailto:srilekhag441@gmail.com"
                                        className="mt-1 inline-block text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                                    >
                                        srilekhag441@gmail.com
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;