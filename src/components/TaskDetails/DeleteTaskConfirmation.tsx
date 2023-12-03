import Button from "../UI/Button";
import Portal from "../dialogs/Portal";
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
    <Portal className={classes.confirm_dialog}>
      <h3>
        Are you sure you want to delete the task? All data about this task will
        be deleted.
      </h3>
      <div className={classes.dialog_btns}>
        <Button onClick={onCancel}>Cancel</Button>
        <Button className={classes.delete_btn} onClick={onDelete}>
          Delete
        </Button>
      </div>
    </Portal>
  );
}

export default DeleteTaskConfirmation;
