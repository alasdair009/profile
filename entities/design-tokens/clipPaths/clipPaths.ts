import { CSSProperties } from "react";

export const clipPaths: Record<string, CSSProperties["clipPath"]> = {
  blinds: "polygon(0% 5%,100% 5%,100% 25%,0% 25%,0% 40%,100% 40%,100% 60%,0% 60%,0% 75%,100% 75%,100% 95%,0% 95%)",
  cross: "polygon(0 40%, 40% 40%, 40% 0, 60% 0, 60% 40%, 100% 40%, 100% 60%, 60% 60%, 60% 100%, 40% 100%, 40% 60%, 0 60%)",
  star4: "polygon(50% 0, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0 50%, 40% 40%)",
  star5: "polygon(50% 0, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
};
