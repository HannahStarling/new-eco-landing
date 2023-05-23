import {ChangeEvent, useCallback, useEffect, useState} from "react";
import {getToken} from "@/api/get-token";
import {FormErrors, FormValues, IUseFormArgument} from "@/types/models";
import {FORM_TAG} from "@/constants/general";
import {IFormFunction} from "@/types/functions";

/**
 * Хук, управляющей формой и её полями ввода.
 * @return {
 *     values,
 *     errors,
 *     isValid,
 *     handleChange,
 *     resetForm,
 *     handleSubmit,
 *   }
 * @param initialValues  Object with keys: input['name'], value: string/boolean
 * @param onSubmit callback for submit
 * @param validator callback for validation setter
 * @param validationMessages  Object with keys: input['name'], value: string
 * @param initialErrors Object with keys: input['name'], value: string/boolean/number
 */
export const useForm = <K extends string | number | symbol>({
  initialValues,
  onSubmit,
  validator = () => true,
  validationMessages,
  initialErrors,
}: IUseFormArgument<K>) => {
  const [values, setValues] = useState<FormValues<K>>(initialValues);
  const [errors, setErrors] = useState<FormErrors<K>>(initialErrors);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    async function tokenCheck() {
      try {
        const { data } = await getToken();
        setToken(data);
      } catch (error) {
        console.error(error);
      } finally {
      }
    }

    tokenCheck();
  }, []);

  const resetForm: IFormFunction<K>["resetForm"] = useCallback(
    (
      resetValues = initialValues,
      resetErrors = initialErrors,
      resetIsValid = false
    ) => {
      setValues(resetValues);
      setErrors(resetErrors);
      setIsValid(resetIsValid);
    },
    [initialValues, initialErrors]
  );

  const handleSubmit = (values: FormValues<K> & { Agreement: boolean }) => {
    if (!Boolean(values.Agreement && isValid)) return;
    token && onSubmit({ payload: values, resetForm, token });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked, validationMessage } = e.target;

    const isValid =
      e.target.closest(FORM_TAG)?.checkValidity() && validator({ values });

    setValues((prevValues) => {
      return {
        ...prevValues,
        [name]: type === "checkbox" ? checked : value,
      };
    });
    /** Если необходимо выводить ошибки (feedback) */
    setErrors((prevErrors) => {
      return isValid
        ? initialErrors
        : {
            ...prevErrors,
            [name]:
              Boolean(validationMessage) &&
              (validationMessages[name as K] ?? validationMessage),
          };
    });

    setIsValid(Boolean(isValid));
  };

  return {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
    handleSubmit,
  };
};
