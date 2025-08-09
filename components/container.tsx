import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto", className)}>
      {children}
    </div>
  );
}
