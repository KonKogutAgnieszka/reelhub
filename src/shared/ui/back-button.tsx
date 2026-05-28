'use client';

import { useRouter } from 'next/navigation';
import { buttonBase, buttonVariants } from './button-styles';

interface BackButtonProps {
  label?: string;
  variant?: 'primary' | 'secondary';
}

export function BackButton({ label = '← Back', variant = 'primary' }: BackButtonProps) {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className={`${buttonBase} ${buttonVariants[variant]}`}>
      {label}
    </button>
  );
}
