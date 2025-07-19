import LineNumbers from "@/components/line-numbers";
import {
  InlineComment,
  InlineHeading,
  StyledLink,
} from "@/components/typography";
import { cn } from "@/lib/cn";

export default function Home() {
  const swatches = [
    "bg-yellow-300",
    "bg-emerald-400",
    "bg-cyan-400",
    "bg-purple-300",
  ];

  return (
    <main className="bg-background flex min-h-full w-full justify-center pt-8 pb-60 md:pt-40">
      <div className="space-y-8 md:w-lg">
        <div className="flex flex-row gap-2">
          {swatches.map((swatch) => (
            <div key={swatch} className={cn("h-4 w-4 rounded-sm", swatch)} />
          ))}
        </div>
        <LineNumbers className="font-mono" lineHeight={1.5}>
          <h2>
            <InlineHeading>00011001-00000111-00010011</InlineHeading>
          </h2>
          <h1>sjam.studio</h1>
          <br />
          <p>
            I would like to be able to present myself as an alpinist, a surfer,
            or a golfer; alas, (so far) I haven't been able to make a living
            doing any of these things, so I must console myself with them being
            my hobbies. By day I am the Staff Software Engineer at{" "}
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
            oKeh! Time to finish this for now and make a picnic. There's a
            longest glide to be glid!
          </p>
          <p>
            <InlineComment>// Stickeen</InlineComment>
            <br />
            But poor Stickeen, the wee, hairy, sleekit beastie , think of him!
            When I had decided to dare the bridge, and while I was on my knees
            chipping a hollow on the rounded brow above it, he came behind me,
            pushed his head past my shoulder, looked down and across, scanned
            the sliver and its approaches with his mysterious eyes, then looked
            me in the face with a startled air of surprise and concern, and
            began to mutter and whine; saying as plainly as if speaking with
            words, "Surely, you are not going into that awful place." This was
            the first time I had seen him gaze deliberately into a crevasse, or
            into my face with an eager, speaking, troubled look. That he should
            have recognized and appreciated the danger at the first glance
            showed wonderful sagacity. Never before had the daring midget seemed
            to know that ice was slippery or that there was any such thing as
            danger anywhere. His looks and tones of voice when he began to
            complain and speak his fears were so human that I unconsciously
            talked to him in sympathy as I would to a frightened boy, and in
            trying to calm his fears perhaps in some measure moderated my own.
            "Hush your fears, my boy," I said, "we will get across safe, though
            it is not going to be easy. No right way is easy in this rough
            world. We must risk our lives to save them. At the worst we can only
            slip, and then how grand a grave we will have, and by and by our
            nice bones will do good in the terminal moraine."
          </p>
        </LineNumbers>
      </div>
    </main>
  );
}
