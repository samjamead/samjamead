import StyledLink from "@/components/styled-link";
import LineNumbers from "@/components/line-numbers";

export default function NumbersPage() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="max-w-md rounded-md border border-cyan-400">
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
    </div>
  );
}
