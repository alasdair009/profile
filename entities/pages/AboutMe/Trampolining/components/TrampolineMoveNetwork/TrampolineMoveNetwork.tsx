import { ConnectionOptions } from "mysql2/promise";
import { ErrorText, Heading, Paragraph } from "@/entities";
import styles from "./TrampolineMoveNetwork.module.scss";
import TrampolineMoveNetworkWrapper from "./TrampolineMoveNetworkWrapper";
import { HTMLAttributes } from "react";
import { getMoveData } from "./getData";

type TrampolineMoveNetworkProps = {
  connectionOptions: ConnectionOptions;
} & HTMLAttributes<HTMLDivElement>;

export default async function TrampolineMoveNetwork({
  connectionOptions,
  ...rest
}: TrampolineMoveNetworkProps) {
  const { nodes, edges, error } = await getMoveData(connectionOptions);
  return (
    <section
      className={styles.root}
      data-testid={TrampolineMoveNetwork.displayNames}
      {...rest}
    >
      <Heading level="h2">Move Network</Heading>
      <Paragraph>
        Over time I have created a move network graph that is a visual
        representation of trampoline moves and how they progress to more complex
        ones.
      </Paragraph>
      <Paragraph>
        Use the mouse or your touch controls to zoom in to see more detail and
        right click on a node to view information about the skill.
      </Paragraph>
      {nodes.length && edges.length ? (
        <TrampolineMoveNetworkWrapper nodes={nodes} edges={edges} />
      ) : (
        <ErrorText>Could not connect to move database: {error}</ErrorText>
      )}
    </section>
  );
}
TrampolineMoveNetwork.displayNames = "TrampolineMoveNetwork";
