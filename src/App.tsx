import { useForm } from './hooks/useForm';
import { validate } from './utils/validate';
import FormField from './components/FormField';
import PasswordStrength from './components/PasswordStrength';
import SuccessPanel from './components/SuccessPanel';
import type { FormValues } from './types';

const initialValues: FormValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  terms: false,
};

const fields: { label: string; name: keyof FormValues; type: string; placeholder: string }[] = [
  { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Doe' },
  { label: 'Email Address', name: 'email', type: 'email', placeholder: 'john@example.com' },
  { label: 'Password', name: 'password', type: 'password', placeholder: 'Min 8 characters' },
  { label: 'Confirm Password', name: 'confirmPassword', type: 'password', placeholder: 'Re-enter your password' },
];

function App() {
  const {
    values,
    errors,
    touched,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
    submitted,
    reset,
  } = useForm(initialValues, validate);

  if (submitted) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-surface px-4 py-8">
        <div className="w-full max-w-md">
          <SuccessPanel values={values} />
          <button
            type="button"
            onClick={reset}
            className="mt-6 w-full rounded-lg bg-accent-dark py-2.5 font-semibold text-white transition-colors hover:bg-accent"
          >
            Create Another Account
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-surface px-4 py-8">
      <div className="w-full max-w-md rounded-2xl bg-surface-card p-8 shadow-xl">
        <h1 className="mb-1 text-2xl font-bold text-slate-200">Create Account</h1>
        <p className="mb-6 text-sm text-slate-400">Fill in your details to get started</p>

        <form onSubmit={handleSubmit} noValidate>
          {fields.map((field) => (
            <div key={field.name}>
              <FormField
                label={field.label}
                name={field.name}
                type={field.type}
                value={values[field.name] as string}
                error={errors[field.name]}
                touched={touched[field.name]}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={field.placeholder}
              />
              {field.name === 'password' && (
                <PasswordStrength password={values.password} />
              )}
            </div>
          ))}

          <div className="mb-6 flex items-start gap-3">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              checked={values.terms}
              onChange={handleChange}
              onBlur={handleBlur}
              className="mt-0.5 h-4 w-4 rounded border-slate-600 bg-surface-hover accent-accent"
            />
            <label htmlFor="terms" className="text-sm text-slate-400">
              I agree to the{' '}
              <span className="text-accent-light underline cursor-pointer">
                Terms &amp; Conditions
              </span>
            </label>
          </div>
          {touched.terms && errors.terms && (
            <p className="-mt-4 mb-4 text-sm text-red-400" role="alert" aria-live="polite">
              {errors.terms}
            </p>
          )}

          <button
            type="submit"
            disabled={!isValid}
            className="w-full rounded-lg bg-accent-dark py-2.5 font-semibold text-white transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-40"
          >
            Create Account
          </button>
        </form>
      </div>
    </main>
  );
}

export default App;
