import LineNumbers from "@/components/line-numbers";
import StyledLink from "@/components/styled-link";
import { cn } from "@/lib/cn";

export default function Home() {
  const swatches = [
    "bg-yellow-300",
    "bg-emerald-400",
    "bg-cyan-400",
    "bg-purple-300",
  ];

  return (
    <main className="flex h-full w-full flex-col items-center justify-center">
      <div className="bg-background space-y-4 md:w-md">
        <div className="flex flex-row gap-2">
          {swatches.map((swatch) => (
            <div key={swatch} className={cn("h-4 w-4 rounded-sm", swatch)} />
          ))}
        </div>
        <h1 className="font-mono text-4xl">sjam.studio</h1>
        <p className="text-muted-foreground">Some little subheading</p>
        <hr />
        <LineNumbers lineHeight={1.5}>
          <p>
            Something about this all just seems right. Imagine, styling your
            links like some <StyledLink href="/">cool thing</StyledLink>, while
            down here, a little thing does <em>that</em>. It's a stinger!
          </p>
          <p>
            And to think you can do it all with just a little bit of maths! Not
            bad... not bad at all, actually.
          </p>
          <p>
            oKeh! Time to finish this for now and make a picnic. There's a
            longest glide to be glid!
          </p>
        </LineNumbers>
      </div>
    </main>
  );
}
