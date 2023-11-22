import { DragEvent } from "react";
import { kanbanStore } from "../store/kanban-store";
import { Task } from "../utils/types";
import classes from "./TaskCard.module.scss";

type TaskCardType = {
  task: Task;
};

function TaskCard({ task }: TaskCardType) {
  function dragStartHandler(e: DragEvent<HTMLDivElement>) {
    kanbanStore.setDraggingCard(task.id);
  }

  function dragEndHandler(e: DragEvent<HTMLDivElement>) {
    kanbanStore.setDraggingCard(null);
  }

  function dragOverHandler(e: DragEvent<HTMLDivElement>) {}

  return (
    <div
      className={`${classes.container} ${classes[task.priority] ?? ""} ${
        kanbanStore.draggingCard ? classes.dragged : ""
      }`}
      draggable={true}
      onDragStart={dragStartHandler}
      onDragEnd={dragEndHandler}
      onDragOver={dragOverHandler}
      style={{ viewTransitionName: `card-${task.id}` }}
      id={task.id}
    >
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

export default TaskCard;
