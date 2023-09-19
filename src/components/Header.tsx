import { useState } from "react";
import classes from "./Header.module.scss";
import NewTaskDialog from "./NewTaskDialog";

function Header() {
  const [dialogIsOpen, setDialogIsOpen] = useState(true);
  return (
    <header className={classes.header}>
      <h1>Kanban Board</h1>
      <button onClick={() => setDialogIsOpen(true)}>New Task</button>
      {dialogIsOpen && <NewTaskDialog onClose={() => setDialogIsOpen(false)} />}
    </header>
  );
}

export default Header;
