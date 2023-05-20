import { EMPTY_STRING } from "@/constants/texts";
import { ContactUsRequest } from "@/types/api";
import { FormValues } from "@/types/models";

export enum FormType {
  tel = "tel",
  text = "text",
  number = "number",
  email = "email",
  search = "search",
  checkbox = "checkbox",
}

export type FormFieldContactUs = keyof ContactUsRequest | "Agreement";

type InputProps = {
  className: string | null;
  text: string;
  placeholder: string;
  type: FormType;
  required: boolean;
};
export type FormValuesContactUs = FormValues<FormFieldContactUs>;

export const FormFields: Record<FormFieldContactUs, InputProps> = {
  Name: {
    text: "Имя",
    placeholder: "Введите имя",
    type: FormType.text,
    className: null,
    required: true,
  },
  Phone: {
    text: "Телефон",
    placeholder: "+7",
    type: FormType.tel,
    className: null,
    required: true,
  },
  EMail: {
    text: "Электронная почта",
    placeholder: "Введите вашу почту",
    type: FormType.email,
    className: null,
    required: true,
  },
  Organization: {
    text: "Название компании",
    placeholder: "Введите название",
    type: FormType.text,
    className: null,
    required: false,
  },
  Appointment: {
    text: "Должность",
    placeholder: "Укажите вашу должность",
    type: FormType.text,
    className: null,
    required: false,
  },
  Agreement: {
    text: "Нажимая кнопку “Отправить”, я даю свое согласие на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ “О персональных данных”, на условиях и для целей, оперделенных в Согласии на обработку персональных данных",
    type: FormType.checkbox,
    className: "custom-checkbox",
    required: false,
    placeholder: EMPTY_STRING,
  },
};
