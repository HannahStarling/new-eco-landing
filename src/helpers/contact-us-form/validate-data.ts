import { CONTACT_US_RULES } from "@/constants/validation";
import { IFormFunction } from "@/types/functions";
import { FormFieldContactUs, FormFields } from "@/constants/form";

export const validateData: IFormFunction<FormFieldContactUs>["validator"] = ({
  values,
  rules = CONTACT_US_RULES,
}) => {
  const keys = Object.keys(values) as FormFields[];
  let check = keys.reduce(
    (valid, key) => {
      if (valid.hasOwnProperty(key)) {
        valid[key] =
          rules[key as keyof typeof CONTACT_US_RULES]?.test(
            values[key] as string
          ) ?? true;
      }
      return valid;
    },
    {
      Phone: false,
      Name: false,
      EMail: false,
      Agreement: true,
    } as FormFieldContactUs & { Agreement: boolean }
  );
  const isValid = Object.values(check);
  return isValid.every((valid) => valid);
};
