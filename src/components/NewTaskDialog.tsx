import { ReactNode } from "react";
import { createPortal } from "react-dom";
import classes from "./NewTaskDialog.module.scss";
import Options from "./Options";
import { columnOptions, priorityOptions } from "../utils/options"; // replace with import from store

function Portal({ children }: { children: ReactNode }) {
  return createPortal(
    children,
    document.getElementById("dialog") as HTMLDivElement
  );
}

type NewTaskDialogType = {
  onClose: () => void;
};

function NewTaskDialog({ onClose }: NewTaskDialogType) {
  return (
    <Portal>
      <div className={classes.backdrop}></div>
      <div className={classes.dialog_container}>
        <h3>Add a new Task</h3>
        <form>
          <div className={classes.options_container}>
            <Options id="priority" options={priorityOptions} />
            <Options id="column" options={columnOptions} />
          </div>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" required />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols={30}
            rows={10}
          ></textarea>
          <div className={classes.actions}>
            <button type="button" className={classes.cancel} onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className={classes.add}>
              Add
            </button>
          </div>
        </form>
      </div>
    </Portal>
  );
}

export default NewTaskDialog;
