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
    <main className="bg-background flex h-full w-full justify-center pt-8 md:pt-40">
      <div className="space-y-4 md:w-lg">
        <div className="flex flex-row gap-2">
          {swatches.map((swatch) => (
            <div key={swatch} className={cn("h-4 w-4 rounded-sm", swatch)} />
          ))}
        </div>
        <LineNumbers className="font-mono" lineHeight={1.5}>
          <h1>
            <span className="text-muted-foreground">
              // some little subheading
            </span>
            <br />
            sjam.studio
          </h1>
          <p>
            Something about this all just seems right. Imagine, styling your
            links like some <StyledLink href="/">cool thing</StyledLink>, while
            down here, a little thing does <em>that</em>. It's a stinger!
          </p>
          <p>
            <span className="text-muted-foreground">
              // some little subheading
            </span>
            <br />
            And to think you can do it all with just a little bit of maths! Not
            bad... not bad at all, actually.
          </p>
          <p>
            <span className="text-muted-foreground">
              // some little subheading
            </span>
            <br />
            oKeh! Time to finish this for now and make a picnic. There's a
            longest glide to be glid!
          </p>
        </LineNumbers>
      </div>
    </main>
  );
}
