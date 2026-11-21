interface PasswordStrengthProps {
  password: string;
}

function getStrength(password: string): number {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  return score;
}

const strengthConfig: Record<number, { label: string; color: string; width: string }> = {
  0: { label: '', color: 'bg-slate-600', width: 'w-0' },
  1: { label: 'Weak', color: 'bg-red-500', width: 'w-1/4' },
  2: { label: 'Medium', color: 'bg-yellow-500', width: 'w-2/4' },
  3: { label: 'Strong', color: 'bg-green-500', width: 'w-3/4' },
  4: { label: 'Very Strong', color: 'bg-emerald-500', width: 'w-full' },
};

export default function PasswordStrength({ password }: PasswordStrengthProps) {
  if (password.length === 0) return null;

  const score = getStrength(password);
  const config = strengthConfig[score] ?? strengthConfig[0]!;

  return (
    <div className="-mt-2 mb-4">
      <div className="h-1.5 w-full rounded-full bg-surface-hover overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-300 ${config.color} ${config.width}`}
        />
      </div>
      {config.label && (
        <p className="mt-1 text-xs text-slate-400">
          Strength: <span className="font-medium">{config.label}</span>
        </p>
      )}
    </div>
  );
}
