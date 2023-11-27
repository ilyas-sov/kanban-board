import { useState } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { tasksStore } from "../../store/tasksStore";
import { Columns } from "../../utils/types";
import TaskTitle from "./TaskTitle";
import TaskUsers from "./TaskUsers";
import TaskStatus from "./TaskStatus";
import classes from "./TaskDetails.module.scss";

const TaskDetails = observer(function TaskDetails() {
  const params = useParams();

  const task = tasksStore.getTask(params.id);

  const [title, setTitle] = useState<string>(task?.title ?? "");
  const users = task?.users ?? [];

  if (!params.id) return <p>No information</p>;
  if (!task) return <p>Task "{params.id}" not found</p>;

  return (
    <div className={classes.details_container}>
      <form>
        <p>Task: {task.id}</p>
        <TaskTitle taskTitle={title} onSetTitle={setTitle} />
        <div className={classes.related_info}>
          <TaskStatus
            priority={task.priority}
            status={task.status as Columns}
            id={task.id}
          />
          <TaskUsers
            users={[...users]}
            column={task.status as Columns}
            taskId={task.id}
          />
        </div>
      </form>
    </div>
  );
});

export default TaskDetails;
