"use client";

import { useModal } from "@/hooks/useModal";
import "./connect-modal.scss";
import { FC, PropsWithChildren, ReactNode } from "react";
import { UiButton } from "@/ui-elements/ui-button/ui-button";
import { UiModal } from "@/ui-elements/ui-modal-window/ui-modal-window";
import classNames from "classnames";
import { ContactUsFormView } from "@/views/contact-us-form-view";
import { FillType, Mode } from "@/ui-elements/ui-button/types";
import { lockScrollBody } from "@/helpers/lock-scroll-body";

interface IProps {
  className?: string;
  buttonText: ReactNode | string; // отвечает за синий или голубой цвет кнопки
  mode?: Mode;
  // отвечает за заполнение кнопки: заполненная или прозрачная
  fillType?: FillType;
}

export const ConnectModal: FC<PropsWithChildren<IProps>> = ({
  className,
  buttonText,
  mode = "dark",
  fillType = "outlined",
}) => {
  const { modalOpened, setModalOpened } = useModal();
  const onOpen = () => {
    setModalOpened(true);
    lockScrollBody(true);
  };

  const onClose = () => {
    setModalOpened(false);
    lockScrollBody(false);
  };

  return (
    <div className="connect-modal">
      <UiButton
        className={classNames(className, "connect-modal__button")}
        fillType={fillType}
        mode={mode}
        onClick={onOpen}
      >
        {buttonText}
      </UiButton>
      {modalOpened && (
        <UiModal visible={modalOpened}>
          <ContactUsFormView onClose={onClose} />
        </UiModal>
      )}
    </div>
  );
};
