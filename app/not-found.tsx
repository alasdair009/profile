import { colors, Container, Fire, Heading, Link, Paragraph, sizes, Spacer, TextMask } from "@/entities";
import { rgba } from "polished";
import { FirePadding, FireWrapper } from "@/app/lib/entities";
import { Metadata } from "next";
import { generateMetaData } from "@/lib/metadata";

export const metadata: Metadata = generateMetaData("Not Found", "You bounced out of my orbit and I could not find where you were heading!", "404");
export default function NotFound() {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 48px)",
      }}
    >
      <Spacer multiplier={4} />
      <Heading align="center">Whoops!</Heading>
      <div
        style={{
          flex: 1,
          margin: "0 auto",
          maxWidth: sizes.s512.rem,
          position: "relative",
          width: "100%",
        }}
      >
        <Fire
          baseColor={colors.greenGrass}
          duration={3}
          numberOfParticles={200}
          style={{
            top: "35%",
            height: "60%",
            left: 0,
            position: "absolute",
            transform: "translatey(-50%)",
            width: "100%",
          }}
        />
        <FireWrapper>
          <FirePadding $backgroundColor={rgba(colors.blackEvil, 0.5)} />
          <TextMask style={{ height: "75%", left: 0 }} text="404" maskFill={rgba(colors.blackEvil, 0.7)} />
          <FirePadding $backgroundColor={rgba(colors.blackEvil, 0.5)} />
        </FireWrapper>
      </div>
      <Paragraph align="center">Could not find the page you were looking</Paragraph>
      <Spacer />
      <Link href="/" style={{ margin: "0 auto" }}>
        Return Home
      </Link>
      <Spacer multiplier={8} />
    </Container>
  );
}
