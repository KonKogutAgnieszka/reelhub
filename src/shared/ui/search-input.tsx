interface SearchInputProps {
  defaultValue?: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchInput({
  defaultValue,
  onChange,
  placeholder = 'Search...',
}: SearchInputProps) {
  return (
    <input
      type="search"
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Search movies"
      className="w-full border border-gray-600 rounded px-3 py-1.5 text-sm bg-gray-800 text-white placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
    />
  );
}
