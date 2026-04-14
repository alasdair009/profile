"use client";
import { sizes } from "@/styles/tokens";
import { Button, LabelledInput } from "@/entities";
import { FormEvent, useRef } from "react";

export const kaprekarConstant = 6174 as const;

const performKaprekarStep = (input: string) => {
  if (!/^\d{4}$/.test(input)) {
    throw new Error("Input must be exactly 4 digits.");
  }

  if (/^(\d)\1{3}$/.test(input)) {
    throw new Error("Input cannot have all four digits the same.");
  }
  const digits = input.split("");
  const ascending = [...digits].sort().join("");
  const descending = [...digits].sort().reverse().join("");
  return Number(descending) - Number(ascending);
};

export function Calculation() {
  const outputRef = useRef<HTMLOutputElement>(null);
  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const start = formData.get("start") as string;
    const result = performKaprekarStep(start);
    outputRef.current?.innerText = `The result is ${result}`;
  };
  return (
    <>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "0 auto",
          width: "100%",
          maxWidth: sizes.s512,
        }}
        onSubmit={handleSubmit}
      >
        <LabelledInput
          label="start number"
          type="text"
          inputMode="numeric"
          name="start"
          pattern="^(?!([0-9])\1{3})[0-9]{4}$"
          maxLength={4}
          title="Enter exactly 4 digits, and they cannot all be the same."
          placeholder="e.g. 1234"
          style={{ letterSpacing: "0.5em", textAlign: "center", width: "auto" }}
        />
        <Button type="submit">Submit</Button>
      </form>
      <output ref={outputRef}></output>
    </>
  );
}
