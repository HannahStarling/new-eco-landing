import { FC } from "react";
import Image from "next/image";
import classNames from "classnames";
import { ImageName } from "@/ui-elements/ui-image/image-names";

const ROOT_PATH = "/assets/images/";

export interface IProps {
  className?: string;
  name: ImageName;
  alt: string;
  size?: {
    width: number;
    height: number;
  };
}

export const UiImage: FC<IProps> = ({
  alt,
  className,
  name,
  size: { width, height },
}) => {
  return (
    <Image
      width={width}
      height={height}
      className={classNames(className)}
      src={`${ROOT_PATH}${name}.png`}
      alt={alt}
    />
  );
};
