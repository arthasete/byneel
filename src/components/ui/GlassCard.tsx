import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        'bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6',
        hover && 'transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.12]',
        className
      )}
    >
      {children}
    </div>
  );
}
