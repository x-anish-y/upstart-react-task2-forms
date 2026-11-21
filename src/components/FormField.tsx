import type { ChangeEvent, FocusEvent } from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  value: string;
  error: string;
  touched: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export default function FormField({
  label,
  name,
  type,
  value,
  error,
  touched,
  onChange,
  onBlur,
  placeholder,
}: FormFieldProps) {
  const errorId = `${name}-error`;
  const showError = touched && error !== '';

  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-200 mb-1"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        aria-invalid={showError}
        aria-describedby={errorId}
        className={`w-full rounded-lg bg-surface-hover px-4 py-2.5 text-slate-200 placeholder-slate-500 outline-none transition-colors ${
          showError
            ? 'border border-red-500'
            : 'border border-transparent focus:border-accent-light'
        }`}
      />
      <p
        id={errorId}
        role="alert"
        aria-live="polite"
        className={`mt-1 text-sm min-h-[1.25rem] ${
          showError ? 'text-red-400' : 'text-transparent'
        }`}
      >
        {showError ? error : '\u00A0'}
      </p>
    </div>
  );
}
