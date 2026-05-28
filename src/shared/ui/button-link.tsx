import Link from 'next/link';

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  className = '',
}: ButtonLinkProps) {
  const styles = {
    primary: 'bg-red-600 text-white hover:bg-red-700',
    secondary: 'bg-gray-800 text-white border border-gray-600 hover:bg-gray-700',
  };

  return (
    <Link
      href={href}
      className={`px-4 py-2 text-sm rounded-xl font-sans cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
