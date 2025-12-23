import { Button, Heading, Paragraph, UnorderedList } from "@/entities";
import styles from "./NetworkChart.module.css";

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

export function ContextMenu({
  onClose,
  label,
  description,
  altnames,
  fig,
  difficulty,
  difficultyPS,
  coachLevelTitle,
}: ContextMenuProps) {
  return (
    <div className={styles.contextMenuRoot}>
      <Button
        className={styles.contextMenuButton}
        onClick={onClose}
        type="button"
      >
        X
      </Button>
      <Heading level="h6">{label}</Heading>
      <Paragraph>{description}</Paragraph>
      <UnorderedList>
        <li>Alt names: {altnames}</li>
        <li>
          FIG: <pre className={styles.contextMenuFig}>{fig}</pre>
        </li>
        <li>Difficulty: {difficulty}</li>
        {difficultyPS && difficultyPS > 0 && difficultyPS !== difficulty ? (
          <li>Difficulty (P/S): {difficultyPS}</li>
        ) : (
          <></>
        )}
        <li>Coach level: {coachLevelTitle}</li>
      </UnorderedList>
    </div>
  );
}
