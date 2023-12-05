import { Columns } from "../../../utils/types";
import classes from "./UserInfo.module.scss";

type ActiveTasksItemType = {
  id: string;
  title: string;
  status: Columns;
  priority: string;
};

function ActiveTasksItem({ id, title, status, priority }: ActiveTasksItemType) {
  const inProgress = status === Columns.IN_PROGRESS;

  return (
    <>
      <span className={classes.id}>{id}</span>
      <p>{title}</p>
      <span className={`${classes.status} ${inProgress && classes.inProgress}`}>
        {status.replaceAll("_", " ")}
      </span>
      <span className={classes.priority}>{priority}</span>
    </>
  );
}

export default ActiveTasksItem;
