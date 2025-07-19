import { cn } from "@/lib/cn";

export default function StyledLink({
  children,
  href,
  target,
  className,
}: {
  children: React.ReactNode;
  href: string;
  target?: string;
  className?: string;
}) {
  return (
    <a
      className={cn(
        "text-cyan-400 transition-colors duration-500 ease-in-out before:mr-0.5 before:text-[1.1em] before:content-['['] after:ml-0.5 after:text-[1.1em] after:content-[']'] hover:bg-blue-500/30",
        className,
      )}
      href={href}
      target={target}
    >
      {children}
    </a>
  );
}
