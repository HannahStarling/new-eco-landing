import { EMPTY_STRING } from './texts';

export const FormType = {
  tel: 'tel',
  text: 'text',
  number: 'number',
  email: 'email',
  search: 'search',
  checkbox: 'checkbox',
} as const;

export const FormFields = {
  name: {
    text: 'Имя',
    placeholder: 'Введите имя',
    type: FormType.text,
    className: null,
    required: true,
    pattern: null,
  },
  phone: {
    text: 'Телефон',
    placeholder: '+7',
    type: FormType.tel,
    className: null,
    required: true,
    pattern: '[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}',
  },
  email: {
    text: 'Электронная почта',
    placeholder: 'Введите вашу почту',
    type: FormType.email,
    className: null,
    required: false,
    pattern: null,
  },
  company: {
    text: 'Название компании',
    placeholder: 'Введите название',
    type: FormType.text,
    className: null,
    required: false,
    pattern: null,
  },
  position: {
    text: 'Должность',
    placeholder: 'Укажите вашу должность',
    type: FormType.text,
    className: null,
    required: false,
    pattern: null,
  },
  checkbox: {
    text: 'Нажимая кнопку “Отправить”, я даю свое согласие на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ “О персональных данных”, на условиях и для целей, оперделенных в Согласии на обработку персональных данных',
    type: FormType.checkbox,
    className: 'custom-checkbox',
    required: true,
    placeholder: EMPTY_STRING,
    pattern: null,
  },
};
