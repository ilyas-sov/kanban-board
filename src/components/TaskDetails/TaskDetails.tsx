import { SyntheticEvent, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { tasksStore } from "../../store/tasksStore";
import { Columns } from "../../utils/types";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import TaskOptions from "./TaskOptions";
import TaskTitle from "./TaskTitle";
import TaskUsers from "./TaskUsers";
import TaskStatus from "./TaskStatus";
import TaskDescription from "./TaskDescription";
import SquareButton from "../UI/SquareButton";
import DeleteTaskConfirmation from "./DeleteTaskConfirmation";
import GoBackConfirmation from "./GoBackConfirmation";
import classes from "./TaskDetails.module.scss";
import Button from "../UI/Button";

const TaskDetails = observer(function TaskDetails() {
  const params = useParams();
  const navigate = useNavigate();

  const task = tasksStore.getTask(params.id);

  const [title, setTitle] = useState(task?.title ?? "");
  const [description, setDescription] = useState(task?.description ?? "");
  const [status, setStatus] = useState<Columns>(task?.status ?? Columns.TODO);
  const [priority, setPriority] = useState(task?.priority ?? "none");
  const [users, setUsers] = useState(task?.users ?? []);

  const [confirmDialogIsOpen, setConfirmDialogIsOpen] = useState(false);
  const [optionsAreOpened, setOptionsAreOpened] = useState(false);
  const [confirmDeletionDialogIsOpen, setConfirmDeletionDialogIsOpen] =
    useState(false);

  const taskWasChanged =
    title !== task?.title ||
    description !== task.description ||
    status !== task.status ||
    priority !== task.priority ||
    users.slice().sort().toString() !== task?.users.slice().sort().toString();

  useEffect(() => {
    if (task) {
      tasksStore.setTaskWasChanged(taskWasChanged);
    }
  }, [task, taskWasChanged]);

  if (!params.id) return <p>No information</p>;
  if (!task) return <p>Task "{params.id}" not found</p>;

  function undoChangesHandler() {
    if (confirmDialogIsOpen) {
      resetState();
      navigate("/");
    } else {
      resetState();
    }
  }

  function resetState() {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setPriority(task.priority);
      setStatus(task.status);
      setUsers(task.users);
    }
  }

  function goBackHandler(e: SyntheticEvent<HTMLAnchorElement>) {
    if (taskWasChanged) {
      e.preventDefault();
      setConfirmDialogIsOpen(true);
    }
  }

  function optionsHandler() {
    if (!optionsAreOpened) {
      setOptionsAreOpened(true);
    } else {
      setOptionsAreOpened(false);
    }
  }

  function deleteTaskHandler() {
    setConfirmDeletionDialogIsOpen(true);
  }

  function deleteHandler() {
    if (task) {
      tasksStore.deleteTask(task.status, task.id);
      navigate("/");
    }
  }

  function submitHandler(e: SyntheticEvent) {
    e.preventDefault();

    const newProperties = {
      title,
      description,
      status: status as Columns,
      priority,
      users,
      index: task?.index || 0,
    };

    if (confirmDialogIsOpen) {
      if (task) {
        tasksStore.updateTask(task.status as Columns, task.id, newProperties);
      }
      navigate("/");
    } else {
      if (task) {
        tasksStore.updateTask(task.status as Columns, task.id, newProperties);
      }
    }
  }

  return (
    <div className={classes.details_container}>
      <form onSubmit={submitHandler}>
        <div className={classes.header}>
          <div>
            <Link
              to="/"
              className={`default_button ${classes.btn_back}`}
              onClick={goBackHandler}
            >
              <ArrowLeftIcon /> Back
            </Link>
            <p>Task: {task.id}</p>
          </div>
          <div>
            {optionsAreOpened && (
              <TaskOptions
                options={["delete task"]}
                onDeleteTask={deleteTaskHandler}
              />
            )}
            <SquareButton
              className={`${classes.btn_mt_10} ${classes.options_btn}`}
              onClick={optionsHandler}
            >
              <span>•••</span>
            </SquareButton>
          </div>
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
          <Button
            type="button"
            disabled={!taskWasChanged}
            onClick={undoChangesHandler}
          >
            Undo changes
          </Button>
          <Button
            type="submit"
            className={classes.save}
            disabled={!taskWasChanged}
          >
            Save changes
          </Button>
        </div>
      </form>
      {confirmDialogIsOpen && (
        <GoBackConfirmation
          onCancel={() => setConfirmDialogIsOpen(false)}
          onUndoChanges={undoChangesHandler}
          onSaveChanges={submitHandler}
        />
      )}
      {confirmDeletionDialogIsOpen && (
        <DeleteTaskConfirmation
          onCancel={() => setConfirmDeletionDialogIsOpen(false)}
          onDelete={deleteHandler}
        />
      )}
    </div>
  );
});

export default TaskDetails;
