import { taskInterface } from "../utils/interfaces";
import classes from "./Task.module.scss";

type TaskType = {
  task: taskInterface;
};

function Task({ task }: TaskType) {
  return (
    <div className={`${classes.container} ${classes[task.priority]}`}>
      <div className={classes.header}>
        <h3>{task.title}</h3>
        <span>{task.id}</span>
      </div>
      <p>Priority: {task.priority}</p>
      <div className={classes.actions}>
        <button>View details</button>
      </div>
    </div>
  );
}

export default Task;
