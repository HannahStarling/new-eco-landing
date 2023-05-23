import { FC } from "react";
import Image from "next/image";
import classNames from "classnames";
import { ImageName, ImageSize } from "@/ui-elements/ui-image/image-names";

const ROOT_PATH = "/assets/images/";

export interface IProps {
  className?: string;
  name: ImageName;
  alt: string;
}

export const UiImage: FC<IProps> = ({ alt, className, name }) => {
  return (
    <Image
      width={ImageSize[name].width}
      height={ImageSize[name].height}
      className={classNames(className)}
      src={`${ROOT_PATH}${ImageName[name]}.png`}
      alt={alt}
    />
  );
};
