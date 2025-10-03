import LineNumbers from "@/components/line-numbers";
import { Heading1, Heading2, StyledLink } from "@/components/typography";
import { Colophon } from "@/components/colophon";

export default function Home() {
  return (
    <main className="py-4 font-mono">
      <LineNumbers className="font-mono" lineHeight={1.5}>
        <Heading1>sjam.studio</Heading1>

        <p>
          I would like to be able to present myself as an alpinist, a surfer, or
          a golfer; alas, (so far) I haven&apos;t been able to make a living
          doing any of these things, so I must console myself with them being my
          hobbies.
        </p>
        <p>
          Professionally I am the Staff Software Engineer at{" "}
          <StyledLink href="https://battenhall.com">Battenhall</StyledLink>. I
          also experiment with data science and visualisation via JavaScript
          notebooks on{" "}
          <StyledLink href="https://observablehq.com/@sjam" target="_blank">
            Observable
          </StyledLink>
          .
        </p>

        <p>
          Here are a few short excerpts that will give you an idea of my
          personal philosophy:
        </p>

        <Heading2>Muddy Road</Heading2>
        <p>
          Tanzan and Ekido were once traveling together down a muddy road. A
          heavy rain was still falling. Coming around a bend, they met a lovely
          girl in a silk kimono and sash, unable to cross the intersection.
          "Come on, girl," said Tanzan at once. Lifting her in his arms, he
          carried her over the mud. Ekido did not speak again until that night
          when they reached a lodging temple. Then he could no longer restrain
          himself. "We monks don't go near females," he told Tanzan, "especially
          not young and lovely ones. It is dangerous. Why did you do that?" "I
          left the girl there," said Tanzan. "Are you still carrying her?”
        </p>

        <Heading2>
          Samuel Vimes' 'Boots' theory of socioeconomic unfairness
        </Heading2>
        <p>
          The reason that the rich were so rich, Vimes reasoned, was because
          they managed to spend less money. Take boots, for example. He earned
          thirty-eight dollars a month plus allowances. A really good pair of
          leather boots cost fifty dollars. But an affordable pair of boots,
          which were sort of OK for a season or two and then leaked like hell
          when the cardboard gave out, cost about ten dollars. Those were the
          kind of boots Vimes always bought, and wore until the soles were so
          thin that he could tell where he was in Ankh-Morpork on a foggy night
          by the feel of the cobbles. But the thing was that good boots lasted
          for years and years. A man who could afford fifty dollars had a pair
          of boots that'd still be keeping his feet dry in ten years' time,
          while a poor man who could only afford cheap boots would have spent a
          hundred dollars on boots in the same time and would still have wet
          feet.
        </p>

        <Heading2>A short excerpt from Stickeen</Heading2>
        <p>
          But poor Stickeen, the wee, hairy, sleekit beastie, think of him! When
          I had decided to dare the bridge, and while I was on my knees chipping
          a hollow on the rounded brow above it, he came behind me, pushed his
          head past my shoulder, looked down and across, scanned the sliver and
          its approaches with his mysterious eyes, then looked me in the face
          with a startled air of surprise and concern, and began to mutter and
          whine; saying as plainly as if speaking with words, &quot;Surely, you
          are not going into that awful place.&quot; This was the first time I
          had seen him gaze deliberately into a crevasse, or into my face with
          an eager, speaking, troubled look. That he should have recognized and
          appreciated the danger at the first glance showed wonderful sagacity.
          Never before had the daring midget seemed to know that ice was
          slippery or that there was any such thing as danger anywhere. His
          looks and tones of voice when he began to complain and speak his fears
          were so human that I unconsciously talked to him in sympathy as I
          would to a frightened boy, and in trying to calm his fears perhaps in
          some measure moderated my own. &quot;Hush your fears, my boy,&quot; I
          said, &quot;we will get across safe, though it is not going to be
          easy. No right way is easy in this rough world. We must risk our lives
          to save them. At the worst we can only slip, and then how grand a
          grave we will have, and by and by our nice bones will do good in the
          terminal moraine.&quot;
        </p>
        <Colophon />
      </LineNumbers>
    </main>
  );
}
