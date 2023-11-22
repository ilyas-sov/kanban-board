import { Fragment } from "react";
import { observer } from "mobx-react-lite";
import { Columns, Task } from "../utils/types";
import { v4 as uuidv4 } from "uuid";
import DragIcon from "./icons/DragIcon";
import TaskCard from "./TaskCard";
import DropArea from "./DropArea";
import classes from "./Column.module.scss";

type ColumnType = {
  name: string;
  id: Columns;
  tasks: Task[];
  onDrop: (column: Columns, index: number) => void;
};

const Column = observer(function Column({
  name,
  id,
  tasks,
  onDrop,
}: ColumnType) {
  return (
    <div className={classes.column}>
      <div className={classes.drag_container}>
        <h2>{name}</h2>
        <DragIcon />
      </div>
      <div className={classes.tasks_container}>
        <DropArea onDrop={() => onDrop(id, 0)} />
        {tasks.map((task, index) => (
          <Fragment key={uuidv4()}>
            <TaskCard task={task} />
            <DropArea onDrop={() => onDrop(id, index + 1)} />
          </Fragment>
        ))}
      </div>
    </div>
  );
});

export default Column;
