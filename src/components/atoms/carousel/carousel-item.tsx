import styles from "./carousel.module.css";

export interface CarouselItemProps extends React.PropsWithChildren {}

const CarouselItem = ({ children }: CarouselItemProps) => {
  return <li className={styles.carouselItem}>{children}</li>;
};

export default CarouselItem;
