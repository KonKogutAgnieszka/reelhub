'use client';

import { useState, useRef, useEffect } from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface MultiSelectProps {
  values: string[];
  onChange: (values: string[]) => void;
  options: SelectOption[];
  ariaLabel: string;
  placeholder?: string;
  disabled?: boolean;
}

export function MultiSelect({
  values,
  onChange,
  options,
  ariaLabel,
  placeholder = 'All Genres',
  disabled = false,
}: MultiSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggle = (value: string) => {
    if (disabled) return;

    if (values.includes(value)) {
      onChange(values.filter((v) => v !== value));
    } else {
      onChange([...values, value]);
    }
  };

  const label = values.length === 0 ? placeholder : `Genres (${values.length})`;

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label={ariaLabel}
        aria-expanded={open}
        disabled={disabled}
        onClick={() => !disabled && setOpen((o) => !o)}
        className="
          h-9 min-w-30 rounded border border-gray-600 bg-gray-800
          px-3 py-1.5 text-left text-sm text-white
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        {label} ▾
      </button>

      {open && !disabled && (
        <ul className="absolute z-10 mt-1 max-h-60 min-w-40 overflow-y-auto rounded border border-gray-600 bg-gray-800 shadow-lg">
          {options.map((option) => (
            <li key={option.value}>
              <label className="flex cursor-pointer items-center gap-2 px-3 py-2 text-sm text-white hover:bg-gray-700">
                <input
                  type="checkbox"
                  checked={values.includes(option.value)}
                  onChange={() => toggle(option.value)}
                  className="accent-red-600"
                />

                {option.label}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
