import { observer } from "mobx-react-lite";
import DragIcon from "./icons/DragIcon";
import Task from "./Task";
import classes from "./Column.module.scss";
import { taskInterface } from "../utils/interfaces";

type ColumnType = {
  name: string;
  tasks: taskInterface[];
  order: number | null;
};

const Column = observer(function Column({ name, tasks, order }: ColumnType) {
  return (
    <div className={classes.column}>
      <div className={classes.drag_container}>
        <h2>{name}</h2>
        <DragIcon />
      </div>
      <div className={classes.tasks_container}>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <Task task={task} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default Column;
