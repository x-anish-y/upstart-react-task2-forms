import type { FormValues, FormErrors } from '../types';

export function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: '',
  };

  if (values.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(values.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  } else if (!/[A-Z]/.test(values.password)) {
    errors.password = 'Password must contain at least one uppercase letter';
  } else if (!/[0-9]/.test(values.password)) {
    errors.password = 'Password must contain at least one number';
  }

  if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Passwords do not match';
  }

  if (!values.terms) {
    errors.terms = 'You must accept the terms and conditions';
  }

  return errors;
}
