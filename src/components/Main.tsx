import { useCallback } from "react";
import { flushSync } from "react-dom";
import { observer } from "mobx-react-lite";
import { Columns } from "../utils/types";
import { columns } from "../store/columnsStore";
import { kanbanStore } from "../store/kanban-store";
import { tasksStore } from "../store/tasksStore";
import Column from "./Column";
import classes from "./Main.module.scss";

const columnsArray = Object.entries(columns.columns).map(([_, value]) => value);

const Main = observer(function Main() {
  const cards = tasksStore.tasks;

  const onDrop = useCallback(function onDrop(column: Columns, index: number) {
    if (!kanbanStore.draggingCard) return;

    const task = tasksStore.getTask(kanbanStore.draggingCard);

    if (task) {
      if (!document.startViewTransition) {
        tasksStore.changeStatus(task.status as Columns, task.id, column, index);
        return;
      }

      document.startViewTransition(() => {
        flushSync(() =>
          tasksStore.changeStatus(
            task.status as Columns,
            task.id,
            column,
            index
          )
        );
      });
    }
  }, []);

  return (
    <div className={classes.kanban_board}>
      {columnsArray.map((column) => (
        <Column
          key={column.id}
          id={column.id}
          name={column.name}
          tasks={cards[column.id]}
          onDrop={onDrop}
        />
      ))}
    </div>
  );
});

export default Main;
