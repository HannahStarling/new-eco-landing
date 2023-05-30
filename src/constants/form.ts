import { EMPTY_STRING } from "@/constants/texts";
import { ContactUsRequest } from "@/types/api";
import { FormErrors, FormValues } from "@/types/models";

export enum FormType {
  tel = "tel",
  text = "text",
  number = "number",
  email = "email",
  search = "search",
  checkbox = "checkbox",
}

export type FormFields = keyof ContactUsRequest | "Agreement";

export type FormFieldContactUs = {
  [P in FormFields]: string | boolean;
};

export type InputProps = {
  className: string | null;
  text: string;
  placeholder: string;
  type: FormType;
  required: boolean;
  pattern?: string;
  maxlength: number | undefined;
};
export type FormValuesContactUs = FormValues<FormFieldContactUs>;

export const FormFields: Record<FormFields, InputProps> = {
  Name: {
    text: "Имя",
    placeholder: "Введите имя",
    type: FormType.text,
    className: null,
    required: true,
    pattern: "^(?![ ])[А-ЯЁа-яё ]{1,40}$",
    maxlength: 40,
  },
  Phone: {
    text: "Телефон",
    placeholder: "+7",
    type: FormType.tel,
    className: null,
    required: true,
    pattern: "^(\\+7[0-9]{10})|([0-9]{7,11})$",
    maxlength: 12,
  },
  EMail: {
    text: "Электронная почта",
    placeholder: "Введите вашу почту",
    type: FormType.email,
    className: null,
    required: true,
    pattern:
      "^(?=[A-Za-z0-9]+)[A-Za-z0-9._-]+@([a-zA-Z0-9]+)([.-]{0,1})([a-zA-Z0-9])+[.][A-Za-z]{2,}$",
    maxlength: 254,
  },
  Organization: {
    text: "Название компании",
    placeholder: "Введите название",
    type: FormType.text,
    className: null,
    required: false,
    maxlength: 100,
  },
  Appointment: {
    text: "Должность",
    placeholder: "Укажите вашу должность",
    type: FormType.text,
    className: null,
    required: false,
    maxlength: 100,
  },
  Agreement: {
    text: "Нажимая кнопку “Отправить”, я даю свое согласие на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ “О персональных данных”, на условиях и для целей, оперделенных в Согласии на обработку персональных данных",
    type: FormType.checkbox,
    className: "custom-checkbox",
    required: false,
    placeholder: EMPTY_STRING,
    maxlength: undefined,
  },
};

export const CONTACT_US_FORM_INITIAL_VALUES: FormValuesContactUs = {
  Organization: EMPTY_STRING,
  Appointment: EMPTY_STRING,
  Name: EMPTY_STRING,
  Phone: EMPTY_STRING,
  EMail: EMPTY_STRING,
  Agreement: true,
};
export const CONTACT_US_FORM_INITIAL_ERRORS: FormErrors<FormFieldContactUs> = {
  Organization: EMPTY_STRING,
  Appointment: EMPTY_STRING,
  Name: EMPTY_STRING,
  Phone: EMPTY_STRING,
  EMail: EMPTY_STRING,
  Agreement: EMPTY_STRING,
};

export enum FormID {
  Modal = "Modal",
  Footer = "Footer",
}
