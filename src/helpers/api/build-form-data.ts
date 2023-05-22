import { EMPTY_STRING } from "@/constants/texts";

export const buildFormData = (
  formData: FormData,
  data: any,
  parentKey?: string
) => {
  if (
    data &&
    typeof data === "object" &&
    !(data instanceof Date) &&
    !(data instanceof File)
  ) {
    const dataKeys = Object.keys(data);

    if (dataKeys.length) {
      dataKeys.forEach((key) => {
        buildFormData(
          formData,
          data[key],
          parentKey ? `${parentKey}[${key}]` : key
        );
      });
    } else {
      formData.append(parentKey!, JSON.stringify([]));
    }
  } else {
    formData.append(parentKey!, data === null ? EMPTY_STRING : data);
  }
};
