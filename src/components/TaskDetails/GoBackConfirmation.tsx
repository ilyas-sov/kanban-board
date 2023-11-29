import { SyntheticEvent } from "react";
import ConfirmDialog from "../dialogs/ConfirmDialog";
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
    <ConfirmDialog className={classes.confirm_dialog}>
      <h3>The changes were not applied. Are you sure you want to go back?</h3>
      <div className={classes.dialog_btns}>
        <button className={classes.btn} onClick={onCancel}>
          Cancel
        </button>
        <div className={classes.actions}>
          <button className={classes.btn} onClick={onUndoChanges}>
            Undo changes
          </button>
          <button
            className={`${classes.btn} ${classes.save}`}
            onClick={onSaveChanges}
          >
            Save changes
          </button>
        </div>
      </div>
    </ConfirmDialog>
  );
}

export default GoBackConfirmation;
