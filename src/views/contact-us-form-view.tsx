'use client';

import { FC, useState } from 'react';
import { FormComponent } from '@/components/form-component/form-component';
import { handleContactUsSubmit } from '@/helpers/contact-us-form/contact-us';
import { useForm } from '@/hooks/useForm';
import { validateData } from '@/helpers/contact-us-form/validate-data';
import {
  CONTACT_US_FORM_INITIAL_ERRORS,
  CONTACT_US_FORM_INITIAL_VALUES,
  FormValuesContactUs,
} from '@/constants/form';
import { CONTACT_US_VALIDATION_MESSAGES } from '@/constants/validation';
import { ErrorNotification } from '@/components/notification-error-component/notification-error';

interface IProps {
  onClose?(): void;
}

export const ContactUsFormView: FC<IProps> = ({ onClose }) => {
  const [isError, setError] = useState('');
  const handleApiError = (error: string) => {
    setError(error);
  };

  const { values, isValid, handleChange, handleSubmit, errors } = useForm<FormValuesContactUs>({
    initialValues: CONTACT_US_FORM_INITIAL_VALUES,
    onSubmit: handleContactUsSubmit,
    validator: validateData,
    initialErrors: CONTACT_US_FORM_INITIAL_ERRORS,
    validationMessages: CONTACT_US_VALIDATION_MESSAGES,
    handleApiError,
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
        onApiError={handleApiError}
      />
      {isError && (
        <ErrorNotification
          error={isError}
          clearError={() => {
            setError('');
          }}
        />
      )}
    </>
  );
};
