import { cn } from "@/utils/styles";
import Image, { ImageProps } from "next/image";

import styles from "./avatar.module.css";

export interface AvatarProps extends ImageProps {
  active?: boolean;
}

const Avatar = ({ active, alt, ...props }: AvatarProps) => {
  return (
    <Image
      className={cn([styles.avatar, active && styles.active])}
      alt={alt}
      {...props}
    />
  );
};

export default Avatar;
