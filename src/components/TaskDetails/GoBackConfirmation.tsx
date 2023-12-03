import { SyntheticEvent } from "react";
import Portal from "../dialogs/Portal";
import Button from "../UI/Button";
import classes from "./TaskDetails.module.scss";

type GoBackConfirmationType = {
  onCancel: () => void;
  onUndoChanges: () => void;
  onSaveChanges: (e: SyntheticEvent) => void;
};

function GoBackConfirmation({
  onCancel,
  onUndoChanges,
  onSaveChanges,
}: GoBackConfirmationType) {
  return (
    <Portal className={classes.confirm_dialog}>
      <h3>The changes were not applied. Are you sure you want to go back?</h3>
      <div className={classes.dialog_btns}>
        <Button onClick={onCancel}>Cancel</Button>
        <div className={classes.actions}>
          <Button onClick={onUndoChanges}>Undo changes</Button>
          <Button className={classes.save} onClick={onSaveChanges}>
            Save changes
          </Button>
        </div>
      </div>
    </Portal>
  );
}

export default GoBackConfirmation;
