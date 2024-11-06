import { Heading, Paragraph, UnorderedList } from "@/entities";
import { ContextMenuButton, ContextMenuFig, ContextMenuRoot as Root } from "./styles";

type ContextMenuProps = {
  onClose: any;
  label: string;
  description: string;
  altnames: string;
  fig: string;
  difficulty: number;
  difficultyPS: number;
  coachLevelTitle: string;
};

export function ContextMenu({ onClose, label, description, altnames, fig, difficulty, difficultyPS, coachLevelTitle }: ContextMenuProps) {
  return (
    <Root>
      <ContextMenuButton onClick={onClose} type="button">
        X
      </ContextMenuButton>
      <Heading level="h6">{label}</Heading>
      <Paragraph>{description}</Paragraph>
      <UnorderedList>
        <li>Alt names: {altnames}</li>
        <li>
          FIG: <ContextMenuFig>{fig}</ContextMenuFig>
        </li>
        <li>Difficulty: {difficulty}</li>
        {difficultyPS && difficultyPS > 0 && difficultyPS !== difficulty ? <li>Difficulty (P/S): {difficultyPS}</li> : <></>}
        <li>Coach level: {coachLevelTitle}</li>
      </UnorderedList>
    </Root>
  );
}
