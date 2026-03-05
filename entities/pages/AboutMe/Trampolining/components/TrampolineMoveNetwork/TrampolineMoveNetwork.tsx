import TrampolineMoveNetworkView from "./TrampolineMoveNetworkView";
import { getMoveData } from "./getData";
import { HTMLAttributes } from "react";

type TrampolineMoveNetworkProps = HTMLAttributes<HTMLDivElement>;

export default async function TrampolineMoveNetwork({
  ...rest
}: TrampolineMoveNetworkProps) {
  const { nodes, edges, error } = await getMoveData();
  return (
    <TrampolineMoveNetworkView
      nodes={nodes}
      edges={edges}
      error={error}
      {...rest}
    />
  );
}
