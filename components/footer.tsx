import { cn } from "@/lib/cn";

export const Footer = () => {
  const swatches = [
    "bg-yellow-300",
    "bg-emerald-400",
    "bg-cyan-400",
    "bg-purple-300",
  ];
  return (
    <footer className="flex items-center justify-center p-8">
      <div className="flex flex-row gap-2">
        {swatches.map((swatch) => (
          <div key={swatch} className={cn("h-4 w-4 rounded-sm", swatch)} />
        ))}
      </div>
    </footer>
  );
};
