import { HTMLAttributes } from "react";
import {
  BlockQuote,
  Heading,
  HorizontalRule,
  Paragraph,
  Spacer,
  UnorderedList,
} from "@/entities";
import TrampolineMoveNetwork from "./components/TrampolineMoveNetwork/TrampolineMoveNetwork";
import type { ConnectionOptions } from "mysql2/promise";

type TrampoliningProps = {
  connectionOptions?: ConnectionOptions;
} & HTMLAttributes<HTMLDivElement>;

/**
 * All my rollercoaster credits from around the world.
 */
export function Trampolining({
  connectionOptions,
  ...rest
}: TrampoliningProps) {
  return (
    <div data-testid={Trampolining.displayName} {...rest}>
      <Heading>Trampolining</Heading>
      <Paragraph>
        I have been involved with trampolining since the age of 4 in performing,
        coaching and judging.
      </Paragraph>
      <Paragraph>
        As a competitive gymnast I have competed nationally across the country
        at British and English Championships for many years in trampoline.
      </Paragraph>
      <Paragraph>
        I hold a British Gymnastics Level 4 Performance Coach qualification in
        trampolining and a club coach qualification in coaching Double Mini
        Trampoline (DMT). Additionally I am also a county judge for trampoline
        having attended many competitions as both a competitor and official.
      </Paragraph>
      <Paragraph>
        I coach part-time at Cambridge Cangaroos trampoline club running
        predominantly adult sessions teaching a wide range of abilities.
      </Paragraph>
      <Paragraph>
        I also have an interest in developing software to aid in education of
        trampoline gymnasts and coaches. I have a firm belief that the best
        information and coaching techniques should be available to all and not
        put behind arbitrary qualification or financial barriers.
      </Paragraph>
      <BlockQuote
        citeUrl="https://books.google.co.uk/books/about/Over_Above.html?id=T30IBAAAQBAJ&redir_esc=y"
        citeTitle="Jack Kelly - Over & Above"
      >
        The twist is the easy bit.
      </BlockQuote>
      <Paragraph>
        Over the years, I have had the pleasure of working with and being taught
        by some incredible talents in the trampoline world. There are probably
        more than I can remember to list here but those that are you have made
        an impact on my enjoyment of the greatest sport in the world.
      </Paragraph>
      <UnorderedList>
        <li>
          <strong>Jane Macrae</strong> - my mother and (one of) my main coaches
          as a child. I now appreciate how difficult it is to teach your own
          offspring but hats off to you Mum!
        </li>
        <li>
          <strong>Steve Locke</strong> - taken before his time, but was the
          kindest and most honourable person you could meet on a trampoline hall
          floor. It is a rare talent in trampolining to not fallout with anyone
          but this unsung hero was loved so much by so many (unless you needed
          to park your car in the sports centre disabled parking bays only to
          find them taken by Steve and his Ferrari).
        </li>
        <li>
          <strong>Tamzin Reid</strong> - gave me the kick I needed to start
          taking coaching seriously. An instrumental presence on any coaching
          course and an incredible talent around a trampoline. I took many a
          grilling from her but I was a better coach for it.
        </li>
        <li>
          <strong>Tony Hull</strong> - in the BG coaching world there are many
          Tonys (even on this list there are two). Tony Hull is another true
          gentlemen of a trampoline hall. He can explain complicated coaching
          methods in a way that could make anyone feel understand and included.
          I have had attended more coaching courses with Tony than probably any
          other tutor and they were all excellent.
        </li>
        <li>
          <strong>Jack Kelly</strong> - no list of trampoline heroes could not
          include the godfather of British Trampolining himself, Jack. I
          attended courses and workshops ran by him, and they were always
          superb. His famous (if not legendary) quotes will remain with me
          always. The twist truly is the easy bit!
        </li>
        <li>
          <strong>Jay Scouler</strong> - in the present era of British
          Trampolining there are few bigger names than Jay. He was the tutor on
          my latest coaching course and there is no denying that Jay is one of
          the most talented coaches BG has ever produced. Like Tamzin, he is a
          presence in a gym hall, but the tough questions often help us to grow
          and improve our understanding. He always had the perfect answer to
          nearly any question for trampoline you could conjure - a truly
          outstanding coach.
        </li>
        <li>
          <strong>Tony Fagelman</strong> - probably the man who has coached and
          mentored me more than anyone else. Tony took the scrappy 20-something
          year old I was to new heights and despite my slow ability to learn
          taught me skills I had been blocked on for years, and many more I
          never even dreamed of trying! I have been coached and coached along
          side him for over a decade and although we rarely occupy the hall at
          the same time these days, it is always a pleasure when we do.
        </li>
      </UnorderedList>
      <Spacer multiplier={4} />
      <Paragraph>
        There are many many more coaches and clubs that have helped me over the
        years and I took a little something from all of you and always look back
        fondly!
      </Paragraph>
      <HorizontalRule />
      {connectionOptions && (
        <TrampolineMoveNetwork connectionOptions={connectionOptions} />
      )}
    </div>
  );
}
Trampolining.displayName = "Trampolining";
