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
    <div className={cn("-ml-20 flex", className)}>
      <div className="w-20 shrink-0 bg-yellow-500/10 pr-8 text-right select-none">
        {Array.from({ length: lineCount }, (_, i) => (
          <p
            key={i}
            className={cn(
              "text-muted-foreground align-middle font-mono",
              leading,
            )}
          >
            {i + 1}
          </p>
        ))}
      </div>
      <div ref={contentRef} className="flex flex-col" style={{ gap: spaceY }}>
        {children}
      </div>
    </div>
  );
}
