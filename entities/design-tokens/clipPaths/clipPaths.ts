import { CSSProperties } from "react";

export const clipPaths: Record<string, CSSProperties["clipPath"]> = {
  blinds:
    "polygon(0% 5%,100% 5%,100% 25%,0% 25%,0% 40%,100% 40%,100% 60%,0% 60%,0% 75%,100% 75%,100% 95%,0% 95%)",
  check: "polygon(28% 38%, 41% 53%, 75% 24%, 86% 38%, 40% 78%, 15% 50%)",
  chevronDown: "polygon(25% 25%, 50% 50%, 75% 25%, 75% 35%, 50% 60%, 25% 35%)",
  cross:
    "polygon(0 40%, 40% 40%, 40% 0, 60% 0, 60% 40%, 100% 40%, 100% 60%, 60% 60%, 60% 100%, 40% 100%, 40% 60%, 0 60%)",
  newTab:
    "polygon(48.9% 30%, 58.9% 20%, 0% 20%, 0% 100%, 80% 100%, 80% 41.1%, 70% 51.1%, 40% 67.1%, 88.5% 18.5%, 100% 30%, 100% 0%, 70% 0%, 81.5% 11.5%, 32.9% 60%, 40% 67.1%, 70% 51.1%, 70% 90%, 10% 90%, 10% 30%)",
  snowflake:
    "polygon(52% 20%, 52% 27%, 56% 24%, 59% 27%, 52% 33%, 52% 42%, 60% 38%, 62% 29%, 66% 30%, 65% 35%, 71% 31%, 73% 35%, 67% 39%, 72% 40%, 71% 44%, 62% 42%, 54% 46%, 62% 50%, 71% 48%, 72% 52%, 68% 53%, 73% 56%, 71% 60%, 65% 57%, 66% 62%, 62% 63%, 59% 54%, 52% 50%, 52% 58%, 59% 65%, 56% 68%, 52% 65%, 52% 71%, 48% 71%, 48% 65%, 44% 68%, 41% 65%, 48% 58%, 48% 50%, 40% 54%, 38% 63%, 34% 62%, 35% 57%, 29% 61%, 27% 57%, 33% 53%, 28% 52%, 29% 48%, 39% 50%, 45% 46%, 38% 42%, 29% 44%, 28% 40%, 33% 38%, 27% 35%, 29% 31%, 35% 35%, 34% 30%, 38% 29%, 40% 38%, 48% 42%, 48% 33%, 41% 27%, 44% 24%, 48% 27%, 48% 20%)",
  star4:
    "polygon(50% 0, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0 50%, 40% 40%)",
  star5:
    "polygon(50% 0, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
};
