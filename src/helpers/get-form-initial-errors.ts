import { FormErrors, FormValues } from "@/types/models";
import { EMPTY_STRING } from "@/constants/texts";

export const getFormInitialErrors = <K>(initialValues: FormValues<K>) => {
  return Object.keys(initialValues).reduce((errors: FormErrors<K>, key: K) => {
    errors[key] = "EMPTY_STRING";
    return errors;
  }, {} as FormErrors<K>);
};
