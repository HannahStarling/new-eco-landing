import { FormValues } from '@/types/models';

export interface IFormFunction<V> {
  validator({ values, rules }: { values: FormValues<V>; rules?: Record<string, RegExp> }): boolean;

  resetFrom(resetValues: FormValues<V>, resetErrors: {}, resetIsValid: boolean): void;

  onSubmit({
    payload,
    token,
    resetFrom,
    handleApiError,
  }: {
    payload: FormValues<V>;
    token: string;
    resetFrom: IFormFunction<V>['resetFrom'];
    handleApiError: (error: string) => void;
  }): void;
}
