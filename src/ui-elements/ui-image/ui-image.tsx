import { FC, PropsWithChildren } from "react";
import Image from "next/image";
import classNames from "classnames";
import { ImageName, ImageSrc } from "@/ui-elements/ui-image/image-names";

export interface IProps {
  className?: string;
  name: ImageName;
  alt: string;
}

export const UiImage: FC<PropsWithChildren<IProps>> = ({
  alt,
  className,
  name,
}) => {
  return (
    <Image className={classNames(className)} src={ImageSrc[name]} alt={alt} />
  );
};
