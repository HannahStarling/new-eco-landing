"use client";

import { FC, PropsWithChildren } from "react";
import { FormComponent } from "@/components/form-component/form-component";
import { handleContactUsSubmit } from "@/helpers/contact-us-form/contact-us";
import { useForm } from "@/hooks/useForm";
import { validateData } from "@/helpers/contact-us-form/validate-data";
import {
  CONTACT_US_FORM_INITIAL_ERRORS,
  CONTACT_US_FORM_INITIAL_VALUES,
} from "@/constants/form";
import { CONTACT_US_VALIDATION_MESSAGES } from "@/constants/validation";
import { SuccessWindow } from "@/components/success-window-component/success-window-component";

interface IProps {
  onClose?(): void;
}

export const ContactUsFormView: FC<PropsWithChildren<IProps>> = ({
  onClose,
}) => {
  const {
    values,
    isValid,
    handleChange,
    handleSubmit,
    errors,
    isSuccess,
    handleSetSuccess,
  } = useForm({
    initialValues: CONTACT_US_FORM_INITIAL_VALUES,
    onSubmit: handleContactUsSubmit,
    validator: validateData,
    initialErrors: CONTACT_US_FORM_INITIAL_ERRORS,
    validationMessages: CONTACT_US_VALIDATION_MESSAGES,
    onClose,
  });

  return (
    <>
      <FormComponent
        errors={errors}
        isValid={isValid}
        values={values}
        onChange={handleChange}
        onClose={onClose}
        onSubmit={handleSubmit}
      />
      {isSuccess && <SuccessWindow handleSetSuccess={handleSetSuccess} />}
    </>
  );
};
