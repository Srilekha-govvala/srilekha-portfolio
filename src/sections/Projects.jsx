import { useEffect, useState } from "react";

import {
    faArrowUpRightFromSquare,
    faChevronLeft,
    faChevronRight,
    faCode,
    faDumbbell,
    faPlay,
    faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FitMapImages = [
    "/projects/fitmap/FitMap1.png",
    "/projects/fitmap/FitMap2.png",
    "/projects/fitmap/FitMap3.png",
    "/projects/fitmap/FitMap4.png",
    "/projects/fitmap/FitMap5.png",
];

const Projects = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [showVideo, setShowVideo] = useState(false);

    const nextImage = () => {
        setCurrentImage(
            (prev) => (prev + 1) % FitMapImages.length
        );
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(
                (prev) => (prev + 1) % FitMapImages.length
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    const previousImage = () => {
        setCurrentImage(
            (prev) =>
                (prev - 1 + FitMapImages.length) %
                FitMapImages.length
        );
    };

    return (
        <section
            id="projects"
            className="bg-white px-6 py-24 transition-colors duration-300 dark:bg-gray-950"
        >
            <div className="mx-auto max-w-7xl">

                {/* Section Heading */}
                <div className="mb-14 max-w-3xl">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-500">
                        Projects
                    </p>

                    <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-white">
                        Things I've built, explored, and learned from.
                    </h2>

                    <p className="mt-5 text-base leading-7 text-gray-600 dark:text-gray-400">
                        A collection of projects that reflect my approach to solving
                        real-world problems, exploring frontend architecture, and
                        continuously learning through hands-on development.
                    </p>
                </div>

                {/* ===================================================== */}
                {/* Featured Project - FitMap */}
                {/* ===================================================== */}

                <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 shadow-sm dark:border-gray-800 dark:bg-gray-900">

                    <div className="grid lg:grid-cols-2">

                        {/* Image Gallery */}
                        <div className="relative flex min-h-[350px] items-center justify-center bg-gray-100 p-6 dark:bg-gray-800">

                            <img
                                key={currentImage}
                                src={FitMapImages[currentImage]}
                                alt={`FitMap project preview ${currentImage + 1}`}
                                className="fitmap-slide max-h-[500px] w-full rounded-2xl object-contain shadow-lg"
                            />

                            {/* Previous Button */}
                            <button
                                onClick={previousImage}
                                aria-label="Previous FitMap screenshot"
                                className="absolute left-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-md transition hover:scale-105 dark:bg-gray-900/90 dark:text-white"
                            >
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>

                            {/* Next Button */}
                            <button
                                onClick={nextImage}
                                aria-label="Next FitMap screenshot"
                                className="absolute right-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-md transition hover:scale-105 dark:bg-gray-900/90 dark:text-white"
                            >
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>

                            {/* Image Indicators */}
                            <div className="absolute bottom-9 left-1/2 flex -translate-x-1/2 gap-2">
                                {FitMapImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImage(index)}
                                        aria-label={`Show FitMap screenshot ${index + 1}`}
                                        className={`h-2 rounded-full transition-all ${currentImage === index
                                            ? "w-6 bg-indigo-600"
                                            : "w-2 bg-gray-400"
                                            }`}
                                    />
                                ))}
                            </div>

                        </div>

                        {/* FitMap Content */}
                        <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">

                            {/* Project Label */}
                            <div className="mb-5 flex items-center gap-3">

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400">
                                    <FontAwesomeIcon icon={faDumbbell} />
                                </div>

                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-indigo-500">
                                        Featured Project
                                    </p>

                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                        FitMap
                                    </h3>
                                </div>

                            </div>

                            {/* Description */}
                            <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                                A personalized 7-day workout plan generator built to solve
                                a real-world problem, making consistent fitness easier for
                                people balancing work and busy lifestyles.
                            </p>

                            <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                                Users can generate tailored workout plans based on their
                                personal details, fitness goals, and available equipment.
                            </p>

                            {/* Highlights */}
                            <div className="mt-7 grid gap-3 sm:grid-cols-2">

                                {[
                                    "Personalized 7-day workout plans",
                                    "Client-side PDF export",
                                    "Dynamic protein target calculator",
                                    "Interactive cursor-based animations",
                                    "Typewriter motivational quotes",
                                    "Responsive frontend experience",
                                ].map((feature) => (
                                    <div
                                        key={feature}
                                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                                    >
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />

                                        <span>{feature}</span>
                                    </div>
                                ))}

                            </div>

                            {/* Tech Stack */}
                            <div className="mt-7 flex flex-wrap gap-2">

                                {[
                                    "React 19",
                                    "JavaScript",
                                    "Tailwind CSS",
                                    "Client-side PDF",
                                ].map((technology) => (
                                    <span
                                        key={technology}
                                        className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-gray-600 shadow-sm dark:bg-gray-800 dark:text-gray-300"
                                    >
                                        {technology}
                                    </span>
                                ))}

                            </div>

                            {/* Buttons */}
                            <div className="mt-8 flex flex-wrap gap-3">

                                {/* Video Button */}
                                <button
                                    onClick={() => setShowVideo(true)}
                                    className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-lg"
                                >
                                    <FontAwesomeIcon icon={faPlay} />
                                    Watch Demo
                                </button>

                                {/* Live Demo */}
                                <a
                                    href="https://srilekha-govvala.github.io/fitMap-route-your-routine/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-500 hover:text-indigo-600 dark:border-gray-700 dark:text-gray-300 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
                                >
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                    Live Demo
                                </a>

                                {/* GitHub */}
                                <a
                                    href="https://github.com/Srilekha-govvala/fitMap-route-your-routine"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-500 hover:text-indigo-600 dark:border-gray-700 dark:text-gray-300 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
                                >
                                    <FontAwesomeIcon icon={faCode} />
                                    GitHub
                                </a>

                            </div>

                        </div>
                    </div>
                </div>


                {/* ===================================================== */}
                {/* Other Projects - Full Width Vertical Layout */}
                {/* ===================================================== */}

                <div className="mt-8 space-y-8">

                    {/* ================================================= */}
                    {/* Developer Dashboard */}
                    {/* ================================================= */}

                    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">

                        <div className="grid lg:grid-cols-2">

                            {/* Screenshot */}
                            <div className="flex items-center justify-center overflow-hidden bg-gray-100 p-6 dark:bg-gray-800">

                                <img
                                    src="/projects/developer-dashboard/dashboard.png"
                                    alt="Developer Dashboard project preview"
                                    className="w-full rounded-2xl shadow-md transition-transform duration-500 hover:scale-[1.02]"
                                />

                            </div>

                            {/* Content */}
                            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">

                                {/* Project Header */}
                                <div className="flex items-center gap-3">

                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400">
                                        <FontAwesomeIcon icon={faCode} />
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-500">
                                            Learning & POC
                                        </p>

                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                            Developer Dashboard
                                        </h3>
                                    </div>

                                </div>

                                {/* Description */}
                                <p className="mt-5 text-base leading-7 text-gray-600 dark:text-gray-300">
                                    A React-based dashboard built as a hands-on POC to explore
                                    frontend architecture, performance optimization, reusable
                                    components, and interactive data visualization.
                                </p>

                                {/* Highlights */}
                                <div className="mt-6 space-y-3">

                                    {[
                                        "Reusable and scalable React components",
                                        "Redux Toolkit for state management",
                                        "Interactive visualizations using Recharts",
                                        "Performance-focused rendering optimization",
                                        "Mock data designed for easy API integration",
                                    ].map((feature) => (
                                        <div
                                            key={feature}
                                            className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                                        >
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />

                                            <span>{feature}</span>
                                        </div>
                                    ))}

                                </div>

                                {/* Tech Stack */}
                                <div className="mt-6 flex flex-wrap gap-2">

                                    {[
                                        "React.js",
                                        "Redux Toolkit",
                                        "Recharts",
                                        "Tailwind CSS",
                                    ].map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-gray-600 shadow-sm dark:bg-gray-800 dark:text-gray-300"
                                        >
                                            {technology}
                                        </span>
                                    ))}

                                </div>

                                {/* Buttons */}
                                <div className="mt-7 flex flex-wrap gap-3">

                                    <a
                                        href="https://srilekha-govvala.github.io/developer-dashboard/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-lg"
                                    >
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                        Live Demo
                                    </a>

                                    <a
                                        href="https://github.com/Srilekha-govvala/developer-dashboard"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-500 hover:text-indigo-600 dark:border-gray-700 dark:text-gray-300 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
                                    >
                                        <FontAwesomeIcon icon={faCode} />
                                        GitHub
                                    </a>

                                </div>

                            </div>
                        </div>
                    </div>


                    {/* ================================================= */}
                    {/* Enterprise Application - Compact */}
                    {/* ================================================= */}

                    <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-800 dark:bg-gray-900 sm:p-10">

                        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

                            {/* Project Information */}
                            <div className="flex items-start gap-4">

                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400">
                                    <FontAwesomeIcon icon={faBriefcase} />
                                </div>

                                <div>

                                    <p className="text-xs font-semibold uppercase tracking-wider text-indigo-500">
                                        Professional Experience
                                    </p>

                                    <h3 className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
                                        Enterprise Application
                                    </h3>

                                    <p className="mt-3 max-w-6xl text-base leading-7 text-gray-600 dark:text-gray-300">
                                        Contributed to enterprise frontend applications at
                                        Infosys, focusing on React.js development, reusable UI
                                        components, API integration, performance optimization,
                                        and responsive user experiences.
                                    </p>
                                    {/* Professional Experience Note */}
                                    <div className="mt-8 rounded-2xl border border-indigo-100 bg-indigo-50 p-5 dark:border-indigo-900/40 dark:bg-indigo-950/20">
                                        <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                                            Professional project details are kept concise due to
                                            confidentiality. More information about my professional
                                            experience is available in my resume.
                                        </p>
                                    </div>


                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            {/* ===================================================== */}
            {/* FitMap Video Modal */}
            {/* ===================================================== */}

            {showVideo && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
                    onClick={() => setShowVideo(false)}
                >

                    <div
                        className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                    >

                        {/* Close Button */}
                        <button
                            onClick={() => setShowVideo(false)}
                            aria-label="Close video"
                            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-xl text-white transition hover:bg-black"
                        >
                            ×
                        </button>

                        {/* Video */}
                        <video
                            src="/projects/fitmap/fitMap.mp4"
                            controls
                            autoPlay
                            className="w-full"
                        >
                            Your browser does not support the video tag.
                        </video>

                    </div>

                </div>
            )}

        </section>
    );
};

export default Projects;