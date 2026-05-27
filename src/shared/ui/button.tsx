interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export function Button({ onClick, children, variant = 'primary', disabled = false }: ButtonProps) {
  const styles = {
    primary: 'bg-red-600 text-white hover:bg-red-700',
    secondary: 'bg-gray-800 text-white border border-gray-600 hover:bg-gray-700',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 text-sm rounded-xl font-sans cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 disabled:opacity-40 disabled:cursor-not-allowed ${styles[variant]}`}
    >
      {children}
    </button>
  );
}
