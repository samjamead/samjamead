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
    <div className={cn("-ml-16 flex", className)}>
      <div className="w-16 shrink-0 pr-6 text-right select-none">
        {Array.from({ length: lineCount }, (_, i) => (
          <p
            key={i}
            className={cn(
              "text-muted-foreground font-mono [&:nth-child(10n)]:text-yellow-300",
              leading,
            )}
          >
            {i + 1}
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
