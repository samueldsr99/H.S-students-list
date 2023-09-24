import Image, { ImageProps } from "next/image";

import { cn } from "@/utils/styles";

import styles from "./avatar.module.css";

export interface AvatarProps extends ImageProps {
  active?: boolean;
}

const Avatar = ({ active, alt, className, ...props }: AvatarProps) => {
  return <Image className={cn([styles.avatar, active && styles.active, className])} alt={alt} {...props} />;
};

export default Avatar;
