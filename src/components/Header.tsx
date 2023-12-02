import { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { tasksStore } from "../store/tasksStore";
import NewTaskDialog from "./dialogs/NewTaskDialog";
import NewColumnDialog from "./dialogs/NewColumnDialog";
import ThemeToggler from "./ThemeToggler/ThemeToggler";
import classes from "./Header.module.scss";

const Header = observer(function Header() {
  const [taskDialogIsOpen, setTaskDialogIsOpen] = useState(false);
  const [columnDialogIsOpen, setColumnDialogIsOpen] = useState(false);

  const taskWasChanged = tasksStore.taskWasChanged;

  function goHomeHandler(e: SyntheticEvent, path: string = "/") {
    if (taskWasChanged) {
      e.preventDefault();
      alert("Please save the changes or cancel them before leaving the page.");
    }
  }

  return (
    <header className={classes.header}>
      <h1>
        <Link to="/" onClick={goHomeHandler}>
          Kanban Board
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link
              to="/tasks"
              onClick={(e: SyntheticEvent) => goHomeHandler(e, "/tasks")}
            >
              Tasks
            </Link>
          </li>
          <li>
            <Link
              to="/users"
              onClick={(e: SyntheticEvent) => goHomeHandler(e, "/users")}
            >
              Users
            </Link>
          </li>
        </ul>
      </nav>
      <div className={classes.actions}>
        <button onClick={() => setTaskDialogIsOpen(true)}>Add Task</button>
        <button onClick={() => setColumnDialogIsOpen(true)}>Add Column</button>
        <ThemeToggler />
      </div>
      {taskDialogIsOpen && (
        <NewTaskDialog onClose={() => setTaskDialogIsOpen(false)} />
      )}
      {columnDialogIsOpen && (
        <NewColumnDialog onClose={() => setColumnDialogIsOpen(false)} />
      )}
    </header>
  );
});

export default Header;
