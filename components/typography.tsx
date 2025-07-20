import { cn } from "@/lib/cn";

export const Heading1 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "font-medium text-purple-300 before:pr-1.5 before:content-['#']",
        className,
      )}
    >
      {children}
      <br />
      <br />
      <br />
    </h1>
  );
};

export const Heading2 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div>
      <br />
      <h2
        className={cn(
          "font-medium text-emerald-300 before:pr-1.5 before:content-['##']",
          className,
        )}
      >
        {children}
      </h2>
    </div>
  );
};

export const Comment = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-medium text-emerald-300/90 before:pr-1.5 before:content-['//']",
        className,
      )}
    >
      {children}
    </span>
  );
};

export const StyledLink = ({
  children,
  href,
  target,
  className,
}: {
  children: React.ReactNode;
  href: string;
  target?: string;
  className?: string;
}) => {
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
};
