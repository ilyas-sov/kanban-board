import { SyntheticEvent, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { tasksStore } from "../../store/tasksStore";
import { Columns } from "../../utils/types";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import TaskTitle from "./TaskTitle";
import TaskUsers from "./TaskUsers";
import TaskStatus from "./TaskStatus";
import TaskDescription from "./TaskDescription";
import classes from "./TaskDetails.module.scss";

const TaskDetails = observer(function TaskDetails() {
  const params = useParams();

  const task = tasksStore.getTask(params.id);

  const [title, setTitle] = useState(task?.title ?? "");
  const [description, setDescription] = useState(task?.description ?? "");
  const [status, setStatus] = useState<Columns>(task?.status ?? Columns.TODO);
  const [priority, setPriority] = useState(task?.priority ?? "none");
  const [users, setUsers] = useState(task?.users ?? []);

  const taskWasChanged =
    title !== task?.title ||
    description !== task.description ||
    status !== task.status ||
    priority !== task.priority ||
    users.slice().sort().toString() !== task?.users.slice().sort().toString();

  function submitHandler(e: SyntheticEvent) {
    e.preventDefault();

    const newProperties = {
      title,
      description,
      status: status as Columns,
      priority,
      users,
    };

    if (task) {
      tasksStore.updateTask(task.status as Columns, task?.id, newProperties);
    }
  }

  if (!params.id) return <p>No information</p>;
  if (!task) return <p>Task "{params.id}" not found</p>;

  return (
    <div className={classes.details_container}>
      <form onSubmit={submitHandler}>
        <div className={classes.header}>
          <Link to="/" className={`${classes.btn} ${classes.btn_back}`}>
            <ArrowLeftIcon /> Back
          </Link>
          <p>Task: {task.id}</p>
        </div>
        <TaskTitle taskTitle={title} onSetTitle={setTitle} />
        <div className={classes.related_info}>
          <TaskStatus
            priority={priority}
            status={status as Columns}
            onSetStatus={setStatus}
            onSetPriority={setPriority}
          />
          <TaskUsers users={[...users]} onSetUsers={setUsers} />
        </div>
        <p className={classes.label}>Description:</p>
        <TaskDescription
          taskDescription={description}
          onSetDescription={setDescription}
        />
        <div className={classes.actions}>
          <button type="button" className={classes.btn}>
            Undo changes
          </button>
          <button
            type="submit"
            className={`${classes.btn} ${classes.save}`}
            disabled={!taskWasChanged}
          >
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
});

export default TaskDetails;
