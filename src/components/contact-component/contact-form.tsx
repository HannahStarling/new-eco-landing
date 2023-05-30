"use client";

import { FC, PropsWithChildren } from "react";
import { CardSize, UiCard } from "@/ui-elements/ui-card/ui-card";
import { ContactUsFormView } from "@/views/contact-us-form-view";
import { FormID } from "@/constants/form";

interface IProps {}

export const ContactForm: FC<PropsWithChildren<IProps>> = () => {
  return (
    <div className={"contact__form"}>
      <UiCard size={CardSize.large}>
        <ContactUsFormView id={FormID.Footer} />
      </UiCard>
    </div>
  );
};
