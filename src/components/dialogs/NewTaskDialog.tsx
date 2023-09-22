import { SyntheticEvent, ChangeEvent, useState } from "react";
import Portal from "./Portal";
import Options from "../Options";
import { priorityOptions } from "../../utils/options"; // replace with import from store
import { columns } from "../../store/columnsStore";
import classes from "./NewTaskDialog.module.scss";

type NewTaskDialogType = {
  onClose: () => void;
};

function NewTaskDialog({ onClose }: NewTaskDialogType) {
  const [priority, setPriority] = useState(priorityOptions[0]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function submitHandler(e: SyntheticEvent) {
    e.preventDefault();

    columns.addTask({ priority, title, description });
    onClose();
  }

  return (
    <Portal className={classes.dialog_container}>
      <h3>Add a new Task</h3>
      <form onSubmit={submitHandler}>
        <Options
          id="priority"
          options={priorityOptions}
          value={priority}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setPriority(e.target.value)
          }
        />
        <label htmlFor="title" id="title">
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          required
        />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols={30}
          rows={10}
          value={description}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setDescription(e.target.value)
          }
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
    </Portal>
  );
}

export default NewTaskDialog;
