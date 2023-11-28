import { SyntheticEvent, useState } from "react";
import Button from "../UI/Button";
import EditIcon from "../icons/EditIcon";
import DoneIcon from "../icons/DoneIcon";
import classes from "./TaskDetails.module.scss";

type TaskDescriptionType = {
  taskDescription: string;
  onSetDescription: (d: string) => void;
};

function TaskDescription({
  taskDescription,
  onSetDescription,
}: TaskDescriptionType) {
  const [editDescription, setEditDescription] = useState(false);

  function descriptionChangeHandler(e: SyntheticEvent<HTMLTextAreaElement>) {
    const target = e.target as HTMLTextAreaElement;
    onSetDescription(target.value);
  }

  function editTitleClickHandler() {
    setEditDescription(true);
  }

  function saveTitleClickHandler() {
    setEditDescription(false);
  }

  return (
    <div className={classes.description_container}>
      {!editDescription && <p>{taskDescription}</p>}
      {editDescription && (
        <textarea
          className={classes.task_description_textarea}
          value={taskDescription}
          placeholder="Description of the task"
          onChange={descriptionChangeHandler}
        />
      )}
      {!editDescription && (
        <Button onClick={editTitleClickHandler}>
          <EditIcon />
        </Button>
      )}
      {editDescription && (
        <Button className={classes.save_btn} onClick={saveTitleClickHandler}>
          <DoneIcon />
        </Button>
      )}
    </div>
  );
}

export default TaskDescription;
