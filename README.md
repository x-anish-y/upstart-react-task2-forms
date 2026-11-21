# Task 2 — Create Account Form

A fully validated "Create Account" form built with **React 18 + TypeScript + Tailwind CSS v3**, scaffolded with Vite.

## How to Run

```bash
npm install      # already done
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build (tsc + vite)
npm run preview  # preview production build
```

## Features

- Controlled inputs via a custom `useForm` hook (no refs, no DOM access)
- Real-time inline validation after each field is touched
- Password strength meter (weak → very strong)
- Submit disabled until the entire form is valid
- Success panel with masked password on submission
- Fully accessible: `aria-invalid`, `aria-describedby`, `aria-live`, `htmlFor`/`id`
- Dark design system using custom Tailwind colors
- Responsive down to 375 px

## Checklist

| # | Requirement | Where |
|---|-------------|-------|
| 1 | Controlled inputs (`useState`) | `src/hooks/useForm.ts` |
| 2 | No direct DOM access (no `querySelector`, no refs for values) | Entire codebase |
| 3 | Inline validation messages after touch | `src/components/FormField.tsx` |
| 4 | Submit disabled until valid | `src/App.tsx` (`disabled={!isValid}`) |
| 5 | Pure `validate()` in its own file | `src/utils/validate.ts` |
| 6 | Reusable `FormField` component | `src/components/FormField.tsx` |
| 7 | Password strength meter | `src/components/PasswordStrength.tsx` |
| 8 | Success panel with masked password | `src/components/SuccessPanel.tsx` |
| 9 | Name min 2 chars validation | `src/utils/validate.ts` |
| 10 | Email regex validation | `src/utils/validate.ts` |
| 11 | Password: 8+ chars, number, uppercase | `src/utils/validate.ts` |
| 12 | Confirm password match | `src/utils/validate.ts` |
| 13 | Terms checkbox required | `src/utils/validate.ts` |
| 14 | Labels tied to inputs (`htmlFor`/`id`) | `src/components/FormField.tsx` |
| 15 | `aria-describedby` for errors | `src/components/FormField.tsx` |
| 16 | `aria-live` for validation messages | `src/components/FormField.tsx` |
| 17 | Semantic HTML | All components |

## File Map

```
src/
├── types/
│   └── index.ts              # FormValues, FormErrors, FormTouched interfaces
├── utils/
│   └── validate.ts           # Pure validation function
├── hooks/
│   └── useForm.ts            # Custom form hook (state, validation, submit)
├── components/
│   ├── FormField.tsx          # Reusable input field with label + inline error
│   ├── PasswordStrength.tsx   # Visual password strength meter
│   └── SuccessPanel.tsx       # Post-submit success card
├── App.tsx                    # Main app: form card ↔ success panel
├── main.tsx                   # React root mount
└── index.css                  # Tailwind directives + focus styles
```
