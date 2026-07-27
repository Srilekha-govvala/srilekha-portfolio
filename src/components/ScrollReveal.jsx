import { useEffect, useRef, useState } from "react";

const ScrollReveal = ({ children, className = "" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.15,
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={elementRef}
            className={`transition-all duration-1000 ease-out ${
    isVisible
        ? "translate-y-0 opacity-100"
        : "translate-y-12 opacity-0"
} ${className}`}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;