import { useState } from "react";
import classes from "./Header.module.scss";
import NewTaskDialog from "./NewTaskDialog";

function Header() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <header className={classes.header}>
      <h1>Kanban Board</h1>
      <div className={classes.actions}>
        <button onClick={() => setDialogIsOpen(true)}>New Task</button>
        <button onClick={() => {}}>New Column</button>
      </div>
      {dialogIsOpen && <NewTaskDialog onClose={() => setDialogIsOpen(false)} />}
    </header>
  );
}

export default Header;
