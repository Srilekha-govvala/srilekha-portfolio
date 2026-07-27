import { useEffect, useState } from "react";

import {
    faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-xl ${
                isVisible
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-4 opacity-0"
            }`}
        >
            <FontAwesomeIcon icon={faArrowUp} />
        </button>
    );
};

export default BackToTop;