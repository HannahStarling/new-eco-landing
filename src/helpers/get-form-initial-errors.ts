import { FormErrors, FormValues } from '@/types/models';
import { EMPTY_STRING } from '@/constants/texts';

<<<<<<< HEAD
/*export const getFormInitialErrors = <K>(initialValues: FormValues<K>) => {
  return Object.keys(initialValues).reduce((errors: FormErrors<K>, key) => {
    errors[key] = "EMPTY_STRING";
=======
export const getFormInitialErrors = <K extends string | number | symbol>(
  initialValues: FormValues<K>,
) => {
  return Object.keys(initialValues).reduce((errors: FormErrors<K>, key: K) => {
    errors[key] = EMPTY_STRING;
>>>>>>> 0c9b9da66bd7626183050583773d920a12eb9d0a
    return errors;
  }, {} as FormErrors<K>);
};*/
