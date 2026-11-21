import { useState, useCallback } from 'react';
import type { ChangeEvent, FocusEvent, FormEvent } from 'react';
import type { FormValues, FormErrors, FormTouched } from '../types';

type ValidateFn = (values: FormValues) => FormErrors;

export function useForm(initialValues: FormValues, validateFn: ValidateFn) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [touched, setTouched] = useState<FormTouched>({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
    terms: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const errors = validateFn(values);

  const isValid =
    errors.name === '' &&
    errors.email === '' &&
    errors.password === '' &&
    errors.confirmPassword === '' &&
    errors.terms === '' &&
    values.terms;

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value, type, checked } = e.target;
      const fieldValue = type === 'checkbox' ? checked : value;

      setValues((prev) => ({ ...prev, [name]: fieldValue }));
      setTouched((prev) => ({ ...prev, [name]: true }));
    },
    [],
  );

  const handleBlur = useCallback((e: FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (isValid) {
        setSubmitted(true);
      }
    },
    [isValid],
  );

  const reset = useCallback(() => {
    setValues(initialValues);
    setTouched({
      name: false,
      email: false,
      password: false,
      confirmPassword: false,
      terms: false,
    });
    setSubmitted(false);
  }, [initialValues]);

  return {
    values,
    errors,
    touched,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
    submitted,
    reset,
  };
}
