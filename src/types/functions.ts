import { FormValues } from '@/types/models';

export interface IFormFunction<V extends string | number | symbol> {
  validator({ values, rules }: { values: FormValues<V>; rules?: Record<string, RegExp> }): boolean;

  resetForm(resetValues?: FormValues<V>, resetErrors?: {}, resetIsValid?: boolean): void;

  onSubmit({
    payload,
    token,
    resetForm,
    handleApiError,
  }: {
    payload: FormValues<V>;
    token: string | null;
    resetForm: IFormFunction<V>['resetForm'];
    handleApiError: (error: string) => void;
  }): void;
}
