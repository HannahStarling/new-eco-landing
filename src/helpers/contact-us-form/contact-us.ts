import { IFormFunction } from "@/types/functions";
import { sendRequest } from "@/api/send-request";
import { FormValuesContactUs } from "@/constants/form";

export const handleContactUsSubmit: IFormFunction<FormValuesContactUs>["onSubmit"] =
  async ({ payload, token, resetForm, handleApiError, handleSetSuccess }) => {
    try {
      const response = await sendRequest({ body: payload as Request, token });
      handleSetSuccess?.(response.success);
      resetForm();
    } catch (error: any) {
      handleApiError?.(error.name);
      console.error(error);
    }
  };
