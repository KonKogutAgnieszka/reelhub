import Link from 'next/link';

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export function ButtonLink({ href, children, variant = 'primary' }: ButtonLinkProps) {
  const styles = {
    primary: 'bg-red-600 text-white hover:bg-red-700',
    secondary: 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-100',
  };

  return (
    <Link
      href={href}
      className={`px-4 py-2 text-sm rounded-xl font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}
