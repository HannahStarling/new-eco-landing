import { FormFields } from "@/constants/form";
import { FormValues } from "@/types/models";

export interface IFormFunction<V> {
  validator({
    values,
    rules,
  }: {
    values: FormValues<V>;
    rules?: { [P in FormFields]: RegExp };
  }): boolean;

  resetForm(): void;

  onSubmit({
    payload,
    token,
    resetForm,
  }: {
    payload: FormValues<V> | Request;
    token: string;
    resetForm: IFormFunction<V>["resetForm"];
    handleApiError?: (error: string) => void;
  }): void;
}
