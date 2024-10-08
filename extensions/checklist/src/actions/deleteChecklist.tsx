import { Action, Icon, Keyboard } from "@raycast/api";

function DeleteChecklistAction(props: { onDelete: () => void }) {
  return (
    <Action
      icon={Icon.Trash}
      title="Delete Checklist"
      shortcut={Keyboard.Shortcut.Common.RemoveAll}
      onAction={props.onDelete}
      style={Action.Style.Destructive}
    />
  );
}

export default DeleteChecklistAction;
