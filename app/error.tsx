"use client";
import { Button, Error as ErrorEntity } from "@/entities";
import { useEffect } from "react";
import { Metadata } from "next";
import { generateMetaData } from "@/lib/metadata";

export const metadata: Metadata = generateMetaData(
  "Error",
  "Something went a bit wrong here!",
  "error"
);

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <ErrorEntity
      errorCode={500}
      errorText={"Something went a bit wrong here!"}
      errorHeading={"Error!"}
    >
      <Button type="button" onClick={() => reset} style={{ margin: "0 auto" }}>
        Try again
      </Button>
    </ErrorEntity>
  );
}
