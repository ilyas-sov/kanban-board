import { Link } from "react-router-dom";
import { kanbanStore } from "../store/kanban-store";
import { usersStore } from "../store/usersStore";
import { Task } from "../utils/types";
import classes from "./TaskCard.module.scss";

type TaskCardType = {
  task: Task;
};

function TaskCard({ task }: TaskCardType) {
  function dragStartHandler() {
    kanbanStore.setDraggingCard(task.id);
  }

  function dragEndHandler() {
    kanbanStore.setDraggingCard(null);
  }

  function dragOverHandler() {}

  const users = usersStore.users.filter((user) => task.users.includes(user.id));

  return (
    <div
      className={`${classes.container} ${
        classes[task.priority] ?? classes.no_priority
      } ${kanbanStore.draggingCard ? classes.dragged : ""}`}
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
      <div className={classes.assignees}>
        {task.users.length > 0 && (
          <>
            <p>Assignees: </p>
            <ul>
              {users
                .sort((a, b) => {
                  if (a.name > b.name) return 1;
                  if (a.name < b.name) return -1;
                  else {
                    if (a.surname > b.surname) return 1;
                    else return -1;
                  }
                })
                .map((user) => (
                  <li key={user.id}>
                    {user.name} {user.surname}
                  </li>
                ))}
            </ul>
          </>
        )}
      </div>
      <div className={classes.actions}>
        <Link to={`/tasks/${task.id}`}>View details</Link>
      </div>
    </div>
  );
}

export default TaskCard;
