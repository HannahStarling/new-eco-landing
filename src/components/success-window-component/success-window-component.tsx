import { createPortal } from "react-dom";
import { UiButton } from "@/ui-elements/ui-button/ui-button";
import "./success-window.scss";
import Image from "next/image";
import { FC, PropsWithChildren } from "react";
import SuccessIcon from "/public/assets/icons/Success.svg";
import CloseIcon from "/public/assets/icons/Close.svg";
interface IProps {
  onSuccess: (status: boolean) => void;
}

export const SuccessWindow: FC<PropsWithChildren<IProps>> = ({ onSuccess }) => {
  return createPortal(
    <div className="success-window">
      <div className="success-window__container">
        <div className="success-window__body">
          <div className="success-window__head">Запрос на доступ отправлен</div>
          <div className="success-window__icon">
            <Image src={SuccessIcon} alt="Запрос успешно отправлен" />
          </div>
          <div className="success-window__text">
            В ближайшее время мы свяжемся с вами для уточнения информации и
            предоставления тестового доступа к платформе
          </div>
          <div
            className="success-window__button"
            onClick={() => onSuccess(false)}
          >
            <UiButton>На главную</UiButton>
          </div>
          <div
            className="success-window__close"
            onClick={() => onSuccess(false)}
          >
            <Image src={CloseIcon} alt="закрыть" />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
