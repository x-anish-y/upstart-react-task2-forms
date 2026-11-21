import type { FormValues } from '../types';

interface SuccessPanelProps {
  values: FormValues;
}

export default function SuccessPanel({ values }: SuccessPanelProps) {
  return (
    <div className="rounded-2xl border border-emerald-500/30 bg-surface-card p-8 text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
        <svg
          className="h-8 w-8 text-emerald-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h2 className="mb-2 text-2xl font-bold text-emerald-400">Account Created!</h2>
      <p className="mb-6 text-slate-400">Your account has been successfully created.</p>

      <div className="mx-auto max-w-sm space-y-3 text-left">
        <div className="flex justify-between rounded-lg bg-surface-hover px-4 py-2.5">
          <span className="text-slate-400">Name</span>
          <span className="font-medium text-slate-200">{values.name}</span>
        </div>
        <div className="flex justify-between rounded-lg bg-surface-hover px-4 py-2.5">
          <span className="text-slate-400">Email</span>
          <span className="font-medium text-slate-200">{values.email}</span>
        </div>
        <div className="flex justify-between rounded-lg bg-surface-hover px-4 py-2.5">
          <span className="text-slate-400">Password</span>
          <span className="font-medium text-slate-200">{'••••••••'}</span>
        </div>
      </div>
    </div>
  );
}
