import Link from 'next/link';
import { buttonBase, buttonVariants } from './button-styles';

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
  return (
    <Link href={href} className={`${buttonBase} ${buttonVariants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
