import { ChangeEvent } from "react";
import { tasksStore } from "../../store/tasksStore";
import { columnOptions, priorityOptions } from "../../utils/options";
import { Columns } from "../../utils/types";
import Options from "../Options";
import classes from "./TaskDetails.module.scss";

type TaskStatusType = {
  id: string;
  priority: string;
  status: Columns;
};

function TaskStatus({ id, priority, status }: TaskStatusType) {
  const currentStatus = columnOptions.find(
    (column) => column.id === status
  )?.value;

  return (
    <div>
      <Options
        id="priority"
        options={priorityOptions}
        value={priority}
        className={classes.task_status_options}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          tasksStore.changePriority(status, id, e.target.value);
        }}
      />
      <Options
        id="status"
        options={columnOptions}
        value={currentStatus}
        className={classes.task_status_options}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          tasksStore.changeStatus(
            status,
            id,
            e.target.selectedOptions[0].id as Columns
          );
        }}
      />
    </div>
  );
}

export default TaskStatus;
