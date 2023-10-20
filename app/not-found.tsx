import Link from "next/link";
import {ClipText, Container, Fire, Heading, Paragraph, Spacer} from "./lib/entities";
import {sizes} from "../entities/design-tokens/dimensions";
import styled from "styled-components";
import {rem} from "polished";

export default function NotFound() {
  return (
    <Container>
        <Spacer multiplier={4} />
        <Heading align="center">Whoops!</Heading>
        <div style={{margin: "0 auto", minHeight: sizes.s256.rem, maxWidth: sizes.s512.rem, position: "relative", width: "100%"}}>
            <Fire style={{bottom: 0, left: 0, position: "absolute", width: "100%"}} />
            <ClipText>404</ClipText>
        </div>
        <Paragraph align="center">Could not find the page you were looking</Paragraph>
      <Link href="/">Return Home</Link>
    </Container>
  );
}
