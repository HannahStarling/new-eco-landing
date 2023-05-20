import { IFormFunction } from "@/types/functions";
import { sendRequest } from "@/api/send-request";
import { FormValuesContactUs } from "@/constants/form";

export const handleContactUsSubmit: IFormFunction<FormValuesContactUs>["onSubmit"] =
  async ({ payload, token, resetForm }) => {
    try {
      await sendRequest({ body: payload, token });
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };
