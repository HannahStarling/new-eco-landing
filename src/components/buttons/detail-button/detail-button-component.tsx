"use client";

import "./detail-button-component.scss";
import { FC } from "react";
import { UiButton, UiButtonProps } from "@/ui-elements/ui-button/ui-button";
import { BUTTONS_CONTENT } from "@/constants/texts";
import classNames from "classnames";
import { downloadFileByUrl } from "@/helpers/download-file-by-url";

interface IProps extends UiButtonProps {
  full?: boolean;
  uppercase?: boolean;
  url?: string;
}

export const DetailButtonComponent: FC<IProps> = ({
  full = false,
  uppercase = true,
  className,
  url,
}) => {
  const onClick = () => url && downloadFileByUrl(url);

  return (
    <UiButton
      className={classNames(
        'button-get-detail',
        {
          full,
          uppercase,
        },
        className,
      )}
      onClick={onClick}
      mode={'dark'}
      fillType={'outlined'}>
      {BUTTONS_CONTENT.DETAIL}
    </UiButton>
  );
};
