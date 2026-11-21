export interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

export interface FormErrors {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: string;
}

export interface FormTouched {
  name: boolean;
  email: boolean;
  password: boolean;
  confirmPassword: boolean;
  terms: boolean;
}
