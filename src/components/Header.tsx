import { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { tasksStore } from "../store/tasksStore";
import Button from "./UI/Button";
import NewTaskDialog from "./dialogs/NewTaskDialog";
import NewColumnDialog from "./dialogs/NewColumnDialog";
import ThemeToggler from "./ThemeToggler/ThemeToggler";
import classes from "./Header.module.scss";

const Header = observer(function Header() {
  const [taskDialogIsOpen, setTaskDialogIsOpen] = useState(false);
  const [columnDialogIsOpen, setColumnDialogIsOpen] = useState(false);

  function goHomeHandler(e: SyntheticEvent) {
    if (e && tasksStore.taskWasChanged) {
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
            <Link to="/tasks" onClick={goHomeHandler}>
              Tasks
            </Link>
          </li>
          <li>
            <Link to="/users" onClick={goHomeHandler}>
              Users
            </Link>
          </li>
        </ul>
      </nav>
      <div className={classes.actions}>
        <Button onClick={() => setTaskDialogIsOpen(true)}>Add Task</Button>
        <Button onClick={() => setColumnDialogIsOpen(true)}>Add Column</Button>
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
