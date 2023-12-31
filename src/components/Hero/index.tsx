import React, { useState, useEffect, ReactNode } from "react";
import classNames from "classnames";
import styles from "./Hero.module.scss";

interface HeroProps {
    autoSlideDuration?: number;
    children: ReactNode | ReactNode[];
}

// index, currentSlide not required because it is passed in by Hero fn, but not by outside components
interface HeroTabProps {
    backgroundStyle?: React.CSSProperties;
    index?: number;
    currentSlide?: number;
    children?: ReactNode;
}

const HeroTab: React.FC<HeroTabProps> = ({
    backgroundStyle,
    index,
    currentSlide,
    children,
}) => {
    const isActive = index === currentSlide;
    return (
        <div
            className={classNames(styles.tab, {
                [styles.active]: isActive,
            })}
            style={{
                ...backgroundStyle,
            }}
        >
            {children ? <div className={styles.content}>{children}</div> : null}
        </div>
    );
};

const Hero: React.FC<HeroProps> = ({ autoSlideDuration, children }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const slideCount = React.Children.count(children);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) {
            // Swipe left
            const nextSlide =
                currentSlide === slideCount - 1 ? 0 : currentSlide + 1;
            setCurrentSlide(nextSlide);
        } else if (touchStart - touchEnd < -50) {
            // Swipe right
            const prevSlide =
                currentSlide === 0 ? slideCount - 1 : currentSlide - 1;
            setCurrentSlide(prevSlide);
        }
    };

    useEffect(() => {
        let timer: number | undefined;
        if (autoSlideDuration && slideCount > 1) {
            timer = window.setTimeout(() => {
                setCurrentSlide((prev) => (prev + 1) % slideCount);
            }, autoSlideDuration);
        }
        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [currentSlide, autoSlideDuration, slideCount]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div
            className={styles.container}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {React.Children.map(children, (child, index) => {
                if (React.isValidElement<HeroTabProps>(child)) {
                    return React.cloneElement(child, {
                        index,
                        currentSlide,
                    });
                }
                return null;
            })}
            {slideCount > 1 && (
                <div className={styles.buttons}>
                    {Array.from({ length: slideCount }, (_, index) => (
                        <div
                            className={classNames(styles.button, {
                                [styles.active]: currentSlide === index,
                            })}
                            onClick={() => goToSlide(index)}
                            key={`dot-${index}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export { Hero, HeroTab };
