import { FormFields } from "@/constants/form";
import { FormValues } from "@/types/models";

<<<<<<< HEAD
export interface IFormFunction<V> {
  validator({
    values,
    rules,
  }: {
    values: FormValues<V>;
    rules?: { [P in FormFields]: RegExp };
  }): boolean;

  resetForm(): void;
=======
export interface IFormFunction<V extends string | number | symbol> {
  validator({ values, rules }: { values: FormValues<V>; rules?: Record<string, RegExp> }): boolean;

  resetForm(resetValues?: FormValues<V>, resetErrors?: {}, resetIsValid?: boolean): void;
>>>>>>> 0c9b9da66bd7626183050583773d920a12eb9d0a

  onSubmit({
    payload,
    token,
    resetForm,
<<<<<<< HEAD
  }: {
    payload: FormValues<V> | Request;
    token: string;
    resetForm: IFormFunction<V>["resetForm"];
    handleApiError?: (error: string) => void;
=======
    handleApiError,
  }: {
    payload: FormValues<V>;
    token: string | null;
    resetForm: IFormFunction<V>['resetForm'];
    handleApiError: (error: string) => void;
>>>>>>> 0c9b9da66bd7626183050583773d920a12eb9d0a
  }): void;
}
