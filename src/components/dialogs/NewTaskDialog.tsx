import { SyntheticEvent, ChangeEvent, useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import { tasksStore } from "../../store/tasksStore";
import { usersStore } from "../../store/usersStore";
import { priorityOptions } from "../../utils/options"; // replace with import from store
import { Columns } from "../../utils/types";
import Button from "../UI/Button";
import Portal from "./Portal";
import Options from "../Options";
import Tag from "../Tag";
import classes from "./NewTaskDialog.module.scss";

type NewTaskDialogType = {
  onClose: () => void;
};

function NewTaskDialog({ onClose }: NewTaskDialogType) {
  const [priority, setPriority] = useState(priorityOptions[0].value);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignees, setAssignees] = useState<{ id: string; value: string }[]>(
    []
  );

  const users = usersStore.users.map((user) => ({
    id: user.id,
    value: `${user.name} ${user.surname}`,
  }));

  function assignUser(e: ChangeEvent<HTMLSelectElement>) {
    const selectedId = e.target.selectedOptions[0].id;
    if (!selectedId) return;

    const userIsAssigned = assignees.find(
      (assignee) => assignee.id === selectedId
    );

    if (userIsAssigned) return;

    setAssignees((prev) => [
      ...prev,
      { id: selectedId, value: e.target.value },
    ]);
  }

  const deleteAssignee = useCallback(function deleteAssignee(id: string) {
    setAssignees((prev) => prev.filter((user) => user.id !== id));
  }, []);

  function submitHandler(e: SyntheticEvent) {
    e.preventDefault();

    const users = assignees.map((assignee) => assignee.id);

    tasksStore.addTask({
      id: uuidv4().slice(0, 3).toUpperCase(),
      created_at: Date.now(),
      title,
      description,
      priority,
      status: Columns.TODO,
      users,
    });

    onClose();
  }

  return (
    <Portal className={classes.dialog_container}>
      <h3>Add a new Task</h3>
      <form onSubmit={submitHandler}>
        <div className={classes.flex}>
          <Options
            id="priority"
            options={priorityOptions}
            value={priority}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setPriority(e.target.value)
            }
          />
          <Options id="assign to" options={users} onChange={assignUser} />
        </div>
        <ul className={classes.assignees_tags}>
          {assignees.map((assignee) => (
            <li key={assignee.id}>
              <Tag
                id={assignee.id}
                value={assignee.value}
                onDelete={deleteAssignee}
              />
            </li>
          ))}
        </ul>
        <label htmlFor="title">Title</label>
        <textarea
          name="title"
          id="title"
          className={classes.title}
          value={title}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setTitle(e.target.value)
          }
          autoFocus
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
        />
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
}

export default NewTaskDialog;
