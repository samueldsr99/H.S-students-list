import { RefObject, useRef } from "react";

import { cn } from "@/utils/styles";

import styles from "./carousel.module.css";

export type CarouselProps = JSX.IntrinsicElements["div"];

const SCROLL_PER_CLICK = 100;

const scrollTo = (ref: RefObject<HTMLUListElement>, amount: number): void => {
  const scrollX = ref.current?.scrollLeft;
  if (scrollX !== undefined) {
    ref.current?.scrollTo({
      left: scrollX + amount,
      behavior: "smooth",
    });
  }
};

const RightArrowIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" className={styles.arrowIcon}>
    <path d="M9.209 5.207 16 12l-6.791 6.793a1 1 0 1 0 1.415 1.414l7.5-7.5a1 1 0 0 0 0-1.414l-7.5-7.5a1 1 0 1 0-1.415 1.414z"></path>
  </svg>
);

const LeftArrowIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" className={styles.arrowIcon}>
    <path d="M14.791 5.207 8 12l6.793 6.793a1 1 0 1 1-1.415 1.414l-7.5-7.5a1 1 0 0 1 0-1.414l7.5-7.5a1 1 0 1 1 1.415 1.414z"></path>
  </svg>
);

const Carousel = ({ children, className, ...props }: CarouselProps) => {
  const containerRef = useRef<HTMLUListElement>(null);

  const handleGoLeft = () => scrollTo(containerRef, -SCROLL_PER_CLICK);
  const handleGoRight = () => scrollTo(containerRef, SCROLL_PER_CLICK);

  return (
    <div className={cn([styles.carousel, className])} {...props}>
      <button className={styles.swipeButton} onClick={handleGoLeft}>
        <LeftArrowIcon />
      </button>
      <ul ref={containerRef} className={styles.carouselContainer}>
        {children}
      </ul>
      <button className={styles.swipeButton} onClick={handleGoRight}>
        <RightArrowIcon />
      </button>
    </div>
  );
};

export default Carousel;
