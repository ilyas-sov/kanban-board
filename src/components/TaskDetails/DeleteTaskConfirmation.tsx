import ConfirmDialog from "../dialogs/ConfirmDialog";
import classes from "./TaskDetails.module.scss";

type DeleteTaskConfirmationType = {
  onCancel: () => void;
  onDelete: () => void;
};

function DeleteTaskConfirmation({
  onCancel,
  onDelete,
}: DeleteTaskConfirmationType) {
  return (
    <ConfirmDialog className={classes.confirm_dialog}>
      <h3>
        Are you sure you want to delete the task? All data about this task will
        be deleted.
      </h3>
      <div className={classes.dialog_btns}>
        <button className={classes.btn} onClick={onCancel}>
          Cancel
        </button>
        <button
          className={`${classes.btn} ${classes.delete}`}
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </ConfirmDialog>
  );
}

export default DeleteTaskConfirmation;
