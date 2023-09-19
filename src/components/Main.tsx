import classes from "./Main.module.scss";
import kanbanColumns from "../utils/kanbanColumns";
import Column from "./Column";

function Main() {
  const columns = Object.entries(kanbanColumns).map(([_, value]) => value);

  console.log(columns);

  return (
    <main className={classes.main}>
      <div className={classes.kanban_board}>
        {columns.map((column) => {
          return <Column key={column.id} name={column.name} />;
        })}
      </div>
    </main>
  );
}

export default Main;
