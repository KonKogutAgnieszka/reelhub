import { Button } from '@/src/shared/ui/button';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  placeholder?: string;
}

export function SearchInput({
  value,
  onChange,
  onClear,
  placeholder = 'Search...',
}: SearchInputProps) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search movies"
        className="h-9 w-full border border-gray-600 rounded px-3 py-1.5 text-sm bg-gray-800 text-white placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
      />
      <Button variant="secondary" onClick={onClear} disabled={!value}>
        Clear
      </Button>
    </div>
  );
}
