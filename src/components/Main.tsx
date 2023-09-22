import Column from "./Column";
import { observer } from "mobx-react-lite";
import { columns } from "../store/columnsStore";
import classes from "./Main.module.scss";

const Main = observer(function Main() {
  const columnsArray = Object.entries(columns.columns).map(
    ([_, value]) => value
  );

  return (
    <main className={classes.main}>
      <div className={classes.kanban_board}>
        {columnsArray.map((column) => (
          <Column
            key={column.id}
            name={column.name}
            tasks={column.tasks}
            order={column.order}
          />
        ))}
      </div>
    </main>
  );
});

export default Main;
