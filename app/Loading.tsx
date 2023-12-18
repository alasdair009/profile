import { Heading, Spinner } from "@/entities";
import { headerHeight } from "@/entities/organisms/Header/styles";

export default function Loading() {
  return (
    <article
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        height: `calc(100vh - ${headerHeight});`,
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Heading>Putting the springs in...</Heading>
      <Spinner />
    </article>
  );
}
