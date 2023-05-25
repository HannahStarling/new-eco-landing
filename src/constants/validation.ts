export const CONTACT_US_RULES = {
  /** Варианты, которые пройдут валидацию (для максимальной возможности отправить номер)
   * +79261234567
   89261234567
   79261234567
   +7 926 123 45 67
   8(926)123-45-67
   9261234567
   123-45-67
   79261234567
   (495)1234567
   (495) 123 45 67
   89261234567
   8-926-123-45-67
   8 927 1234 234
   8 927 12 12 888
   8 927 12 555 12
   8 927 123 8 123 */
  Phone: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
  /**  Только кириллица, минимум 1 символ, максимум 40, с большой буквы */
  Name: /^(?![ ])[А-ЯЁа-яё ]{1,40}$/,
  EMail: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
};

export const CONTACT_US_VALIDATION_MESSAGES = {
  Phone:
    "Номер телефона должен состоять из цифр, минимум 7 символов, максимум 10",
  Name: "Допустимы только кириллические символы, минимум 1 символ, максимум 40, с большой буквы",
};
