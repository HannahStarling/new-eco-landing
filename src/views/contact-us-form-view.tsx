"use client";

import { FC, PropsWithChildren } from "react";
import { FormComponent } from "@/components/form-component/form-component";
import { handleContactUsSubmit } from "@/helpers/contact-us-form/contact-us";
import { useForm } from "@/hooks/useForm";
import { validateData } from "@/helpers/contact-us-form/validate-data";
import {
  CONTACT_US_FORM_INITIAL_ERRORS,
  CONTACT_US_FORM_INITIAL_VALUES,
  FormID,
} from "@/constants/form";
import { CONTACT_US_VALIDATION_MESSAGES } from "@/constants/validation";

interface IProps {
  onClose?(): void;
  onSuccess?: (isSuccess: boolean) => void;
  id: FormID;
}

export const ContactUsFormView: FC<PropsWithChildren<IProps>> = ({
  onClose,
  onSuccess,
  id,
}) => {
  const { values, isValid, handleChange, handleSubmit, errors } = useForm({
    initialValues: CONTACT_US_FORM_INITIAL_VALUES,
    onSubmit: handleContactUsSubmit,
    validator: validateData,
    initialErrors: CONTACT_US_FORM_INITIAL_ERRORS,
    validationMessages: CONTACT_US_VALIDATION_MESSAGES,
    onClose,
    onSuccess,
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
        key={id}
        id={id}
      />
    </>
  );
};
