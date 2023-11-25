import { useState } from "react";
import { flushSync } from "react-dom";
import { observer } from "mobx-react-lite";
import { Columns, Tasks } from "../utils/types";
import { moveCardToColumn } from "../utils/moveCardToColumn";
import { columns } from "../store/columnsStore";
import { kanbanStore } from "../store/kanban-store";
import { tasksStore } from "../store/tasksStore";
import Column from "./Column";
import classes from "./Main.module.scss";

const columnsArray = Object.entries(columns.columns).map(([_, value]) => value);

const Main = observer(function Main() {
  const [cards, setCards] = useState<Tasks>(tasksStore.tasks);

  function onDrop(column: Columns, index: number) {
    if (!kanbanStore.draggingCard) return;

    const newCards = moveCardToColumn({
      cards,
      cardId: kanbanStore.draggingCard,
      column,
      index,
    });

    if (!document.startViewTransition) {
      setCards(newCards);
      return;
    }

    document.startViewTransition(() => {
      flushSync(() => setCards(newCards));
    });
  }

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
