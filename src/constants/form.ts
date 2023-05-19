import { EMPTY_STRING } from "./texts";

export const FormType = {
  tel: "tel",
  text: "text",
  number: "number",
  email: "email",
  search: "search",
  checkbox: "checkbox",
} as const;

export const FormFields = {
  name: {
    text: "Имя",
    placeholder: "Введите имя",
    type: FormType.text,
    className: null,
    required: true,
  },
  phone: {
    text: "Телефон",
    placeholder: "+7",
    type: FormType.tel,
    className: null,
    required: true,
  },
  email: {
    text: "Электронная почта",
    placeholder: "Введите вашу почту",
    type: FormType.email,
    className: null,
    required: false,
  },
  company: {
    text: "Название компании",
    placeholder: "Введите название",
    type: FormType.text,
    className: null,
    required: false,
  },
  position: {
    text: "Должность",
    placeholder: "Укажите вашу должность",
    type: FormType.text,
    className: null,
    required: false,
  },
  checkbox: {
    text: "Нажимая кнопку “Отправить”, я даю свое согласие на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ “О персональных данных”, на условиях и для целей, оперделенных в Согласии на обработку персональных данных",
    type: FormType.checkbox,
    className: "custom-checkbox",
    required: false,
    placeholder: EMPTY_STRING,
  },
};
