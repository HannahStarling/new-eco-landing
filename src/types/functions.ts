import { FormErrors, FormValues } from "@/types/models";

export interface IFormFunction<V extends string | number | symbol> {
  validator({
    values,
    rules,
  }: {
    values: FormValues<V>;
    rules?: Record<string, RegExp>;
  }): boolean;

  resetForm(
    resetValues: FormValues<V>,
    resetErrors: FormErrors<V>,
    resetIsValid: boolean
  ): void;

  onSubmit({
    payload,
    token,
    resetForm,
  }: {
    payload: FormValues<V>;
    token: string;
    resetForm: IFormFunction<V>["resetForm"];
  }): void;
}
