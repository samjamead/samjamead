import LineNumbers from "@/components/line-numbers";
import { InlineComment, StyledLink } from "@/components/typography";

export default function Home() {
  return (
    <main className="py-4 font-mono">
      <LineNumbers className="font-mono" lineHeight={1.5}>
        <h1>
          sjam.studio
          <br />
          <br />
          <br />
        </h1>

        <p>
          I would like to be able to present myself as an alpinist, a surfer, or
          a golfer; alas, (so far) I haven't been able to make a living doing
          any of these things, so I must console myself with them being my
          hobbies. By day I am the Staff Software Engineer at{" "}
          <StyledLink href="https://battenhall.com">Battenhall</StyledLink>. I
          also experiment with data science and visualisation via projects on{" "}
          <StyledLink href="https://observablehq.com/@sjam" target="_blank">
            Observable
          </StyledLink>
          .
        </p>
        <p>
          <InlineComment>// some little subheading</InlineComment>
          <br />
          And to think you can do it all with just a little bit of maths! Not
          bad... not bad at all, actually.
        </p>
        <p>
          oKeh! Time to finish this for now and make a picnic. There's a longest
          glide to be glid!
        </p>
        <p>
          <InlineComment>// Stickeen</InlineComment>
          <br />
          But poor Stickeen, the wee, hairy, sleekit beastie , think of him!
          When I had decided to dare the bridge, and while I was on my knees
          chipping a hollow on the rounded brow above it, he came behind me,
          pushed his head past my shoulder, looked down and across, scanned the
          sliver and its approaches with his mysterious eyes, then looked me in
          the face with a startled air of surprise and concern, and began to
          mutter and whine; saying as plainly as if speaking with words,
          "Surely, you are not going into that awful place." This was the first
          time I had seen him gaze deliberately into a crevasse, or into my face
          with an eager, speaking, troubled look. That he should have recognized
          and appreciated the danger at the first glance showed wonderful
          sagacity. Never before had the daring midget seemed to know that ice
          was slippery or that there was any such thing as danger anywhere. His
          looks and tones of voice when he began to complain and speak his fears
          were so human that I unconsciously talked to him in sympathy as I
          would to a frightened boy, and in trying to calm his fears perhaps in
          some measure moderated my own. "Hush your fears, my boy," I said, "we
          will get across safe, though it is not going to be easy. No right way
          is easy in this rough world. We must risk our lives to save them. At
          the worst we can only slip, and then how grand a grave we will have,
          and by and by our nice bones will do good in the terminal moraine."
        </p>
      </LineNumbers>
    </main>
  );
}
