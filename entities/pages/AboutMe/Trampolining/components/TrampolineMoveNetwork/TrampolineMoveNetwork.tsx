import TrampolineMoveNetworkView from "./TrampolineMoveNetworkView";
import { getMoveData } from "./getData";

export default async function TrampolineMoveNetwork(props: any) {
  const { nodes, edges, error } = await getMoveData();
  return (
    <TrampolineMoveNetworkView
      nodes={nodes}
      edges={edges}
      error={error}
      {...props}
    />
  );
}
