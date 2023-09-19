import classes from "./Column.module.scss";
import DragIcon from "./icons/DragIcon";

type ColumnType = {
  name: string;
};

function Column({ name }: ColumnType) {
  return (
    <div className={classes.column}>
      <div className={classes.drag_container}>
        <h2>{name}</h2>
        <DragIcon />
      </div>
      <div className={classes.tasks_container}></div>
    </div>
  );
}

export default Column;
