import { buildFormData } from "@/helpers/api/build-form-data";

export const buildFormDataRequest = (data: any): FormData => {
  const formData = new FormData();
  buildFormData(formData, data);
  return formData;
};
