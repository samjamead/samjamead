"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export default function LineNumbers({
  children,
  className = "",
  lineHeight = 1.5,
}: {
  children: React.ReactNode;
  className?: string;
  lineHeight?: number;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [lineCount, setLineCount] = useState(1);
  const leading = `leading-[${lineHeight}em]`;
  const spaceY = `${lineHeight}em`;

  useEffect(() => {
    if (contentRef.current) {
      const element = contentRef.current;
      const lineHeight = parseInt(getComputedStyle(element).lineHeight);
      const height = element.scrollHeight;
      const lines = Math.ceil(height / lineHeight);
      setLineCount(lines);
    }
  }, [children]);

  return (
    <div className={cn("flex gap-4 md:gap-6", className)}>
      <div className="shrink text-right select-none">
        {Array.from({ length: lineCount }, (_, i) => (
          <p
            key={i}
            className={cn(
              "text-muted-foreground/75 md:text-muted-foreground pl-1 font-mono md:pl-0 [&:nth-child(10n)]:text-yellow-300",
              leading,
            )}
          >
            {String(i + 1).padStart(lineCount > 100 ? 3 : 2, "0")}
          </p>
        ))}
      </div>
      <div
        ref={contentRef}
        className="flex flex-col"
        style={{ gap: spaceY, lineHeight: `${lineHeight}em` }}
      >
        {children}
      </div>
    </div>
  );
}
