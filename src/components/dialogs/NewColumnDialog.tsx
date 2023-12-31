import { SyntheticEvent, useState } from "react";
import { observer } from "mobx-react-lite";
import { columns } from "../../store/columnsStore";
import Portal from "./Portal";
import Button from "../UI/Button";
import classes from "./NewColumnDialog.module.scss";

type NewColumnDialogType = {
  onClose: () => void;
};

const NewColumnDialog = observer(function NewColumnDialog({
  onClose,
}: NewColumnDialogType) {
  const [title, setTitle] = useState<string>("");

  function changeHandler(e: SyntheticEvent) {
    setTitle((e.target as HTMLInputElement).value);
  }

  function submitHandler(e: SyntheticEvent) {
    e.preventDefault();
    columns.addColumn(title);

    if (!columns.error) onClose();
  }

  return (
    <Portal className={classes.dialog_container}>
      <h3>Add a new Column</h3>
      <form onSubmit={submitHandler}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          onChange={changeHandler}
          value={title}
          autoFocus
          required
        />
        {columns.error && (
          <p className={classes.error_message}>{columns.error}</p>
        )}
        <div className={classes.actions}>
          <Button type="button" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" className={classes.add}>
            Add
          </Button>
        </div>
      </form>
    </Portal>
  );
});

export default NewColumnDialog;
