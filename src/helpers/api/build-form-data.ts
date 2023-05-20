import { EMPTY_STRING, FRONTEND_ERROR_TEXT } from "@/constants/texts";
import { throwError } from "@/helpers/throwError";

export const buildFormData = (
  formData: FormData,
  data: object | Date | Blob | File | null | undefined,
  parentKey?: string
) => {
  if (data instanceof File || data instanceof Date) {
    throwError(FRONTEND_ERROR_TEXT);
    return;
  }
  if (!data) {
    parentKey && formData.append(parentKey, EMPTY_STRING);
    return;
  }
  const dataKeys = Object.keys(data);
  if (dataKeys.length) {
    dataKeys?.forEach((key) => {
      buildFormData(
        formData,
        data[key],
        parentKey ? `${parentKey}[${key}]` : key
      );
    });
  } else {
    parentKey && formData.append(parentKey, JSON.stringify([]));
  }
};
