import { createPortal } from "react-dom";
import { UiButton } from "@/ui-elements/ui-button/ui-button";
import "./success-window.scss";
import Image from "next/image";
import { FC, PropsWithChildren, ReactNode } from "react";
interface IProps {
  handleSetSuccess: (status: boolean) => void;
}

export const SuccessWindow: FC<PropsWithChildren<IProps>> = ({
  handleSetSuccess,
}) => {
  return createPortal(
    <div className="success-window">
      <div className="success-window__container">
        <div className="success-window__body">
          <div className="success-window__head">Запрос на доступ отправлен</div>
          <div className="success-window__icon">
            <Image
              src="/assets/icons/Success.svg"
              alt="Запрос успешно отправлен"
              width={96}
              height={68}
            />
          </div>
          <div className="success-window__text">
            В ближайшее время мы свяжемся с вами для уточнения информации и
            предоставления тестового доступа к платформе
          </div>
          <div
            className="success-window__button"
            onClick={() => handleSetSuccess(false)}
          >
            <UiButton>На главную</UiButton>
          </div>
          <div
            className="success-window__close"
            onClick={() => handleSetSuccess(false)}
          >
            <Image
              src="/assets/icons/Close.svg"
              alt="закрыть"
              width={14}
              height={14}
            />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
