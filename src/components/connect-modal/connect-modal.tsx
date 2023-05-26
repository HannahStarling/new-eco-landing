"use client";

import { useModal } from "@/hooks/useModal";
import "./connect-modal.scss";
import { FC, PropsWithChildren, ReactNode, useState } from "react";
import { UiButton } from "@/ui-elements/ui-button/ui-button";
import { UiModal } from "@/ui-elements/ui-modal-window/ui-modal-window";
import classNames from "classnames";
import { ContactUsFormView } from "@/views/contact-us-form-view";
import { FillType, Mode } from "@/ui-elements/ui-button/types";
import { lockScrollBody } from "@/helpers/lock-scroll-body";
import { SuccessWindow } from "../success-window-component/success-window-component";
import { FormID } from "@/constants/form";

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
  const [isSuccess, setSuccess] = useState(false);
  const onOpen = () => {
    setModalOpened(true);
    lockScrollBody(true);
  };

  const onClose = () => {
    setModalOpened(false);
    lockScrollBody(false);
  };

  const onSuccess = (isSuccess: boolean) => {
    setSuccess(isSuccess);
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
          <ContactUsFormView
            id={FormID.Modal}
            onClose={onClose}
            onSuccess={onSuccess}
          />
        </UiModal>
      )}
      {isSuccess && <SuccessWindow onSuccess={onSuccess} />}
    </div>
  );
};
