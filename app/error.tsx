"use client";
import { Button, Container, Heading, Paragraph, Spacer } from "@/entities";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 48px)",
      }}
    >
      <Spacer multiplier={4} />
      <Heading align="center">Error!</Heading>
      <Spacer multiplier={4} />
      <Paragraph align="center">Something went a bit wrong here!</Paragraph>
      <Button type="button" onClick={() => reset} style={{ margin: "0 auto" }}>
        Try again
      </Button>
    </Container>
  );
}
