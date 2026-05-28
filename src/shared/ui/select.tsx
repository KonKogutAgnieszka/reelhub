interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  ariaLabel: string;
  disabled?: boolean;
}

export function Select({ value, onChange, options, ariaLabel, disabled = false }: SelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label={ariaLabel}
      disabled={disabled}
      className="
        h-9 rounded border border-gray-600 bg-gray-800 px-3 py-1.5 text-sm text-white
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600
        disabled:cursor-not-allowed
        disabled:opacity-50
      "
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
