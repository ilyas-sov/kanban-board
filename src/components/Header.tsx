import { useState } from "react";
import classes from "./Header.module.scss";
import NewTaskDialog from "./dialogs/NewTaskDialog";
import NewColumnDialog from "./dialogs/NewColumnDialog";

function Header() {
  const [taskDialogIsOpen, setTaskDialogIsOpen] = useState(false);
  const [columnDialogIsOpen, setColumnDialogIsOpen] = useState(false);

  return (
    <header className={classes.header}>
      <h1>Kanban Board</h1>
      <div className={classes.actions}>
        <button onClick={() => setTaskDialogIsOpen(true)}>Add Task</button>
        <button onClick={() => setColumnDialogIsOpen(true)}>Add Column</button>
      </div>
      {taskDialogIsOpen && (
        <NewTaskDialog onClose={() => setTaskDialogIsOpen(false)} />
      )}
      {columnDialogIsOpen && (
        <NewColumnDialog onClose={() => setColumnDialogIsOpen(false)} />
      )}
    </header>
  );
}

export default Header;
