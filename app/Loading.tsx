import { Header, Heading, Spinner } from "@/entities";

export default function Loading() {
  return (
    <article
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        height: `calc(100vh - ${Header.height});`,
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Heading>Putting the springs in...</Heading>
      <Spinner />
    </article>
  );
}
