"use client";
import { Button, HorizontalRule, LabelledInput } from "@/entities";
import { ReactNode, SubmitEvent, useState } from "react";
import styles from "./Calculation.module.css";

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
  const result = Number(descending) - Number(ascending);
  return {
    value: result,
    calculation: (
      <>
        <div className={styles.step}>
          <span className={styles.desc}>{descending}</span>
          <span className={styles.asc}>- {ascending}</span>
          <span className={styles.res}>{result}</span>
        </div>
      </>
    ),
  };
};

export function Calculation() {
  const [outputHTML, setOutputHTML] = useState<ReactNode>(<></>);

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOutputHTML(<></>);
    const formData = new FormData(e.currentTarget);
    let currentValue = parseInt(formData.get("start") as string);
    let currentCalc = (
      <span className={styles.startsWith}>Start with: {currentValue}</span>
    );
    setOutputHTML(currentCalc);

    let counter = 0;
    const doTheWork = setInterval(() => {
      if (currentValue === kaprekarConstant) {
        console.log("done");
        setOutputHTML(
          <>
            {currentCalc}
            <HorizontalRule />
            <span className={styles.completed}>
              Completed in {counter} steps
            </span>
          </>
        );
        clearInterval(doTheWork);
      } else {
        const { value, calculation } = performKaprekarStep(`${currentValue}`);
        currentCalc = (
          <>
            {currentCalc}
            <HorizontalRule />
            {calculation}
          </>
        );
        currentValue = value;
        console.log(currentValue);
        counter++;
        setOutputHTML(currentCalc);
      }
    }, 300);
  };
  return (
    <>
      <form className={styles.root} onSubmit={handleSubmit}>
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
          autoComplete="off"
        />
        <Button type="submit">Submit</Button>
      </form>
      <output className={styles.output}>{outputHTML}</output>
    </>
  );
}
