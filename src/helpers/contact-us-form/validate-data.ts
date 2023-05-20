import { CONTACT_US_RULES } from "@/constants/validation";
import { IFormFunction } from "@/types/functions";
import { FormValuesContactUs } from "@/constants/form";

export const validateData: IFormFunction<FormValuesContactUs>["validator"] = ({
  values,
  rules = CONTACT_US_RULES,
}) => {
  let check = Object.keys(values).reduce(
    (valid, key) => {
      valid[key] = rules[key]?.test(values[key]) ?? true;
      return valid;
    },
    {
      Phone: false,
      Name: false,
      EMail: false,
      Agreement: true,
    }
  );

  const isValid = Object.values(check);
  return isValid.every((valid) => valid);
};
