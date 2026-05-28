import { BackButton } from '@/src/shared/ui/back-button';

export default function MovieLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="container max-w-7xl mx-auto px-4 py-2">
      <BackButton label="← Back" />
      <div className="mt-6">{children}</div>
    </main>
  );
}
