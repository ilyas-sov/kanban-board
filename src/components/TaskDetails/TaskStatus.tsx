import { ChangeEvent } from "react";
import { columnOptions, priorityOptions } from "../../utils/options";
import { Columns } from "../../utils/types";
import Options from "../Options";
import classes from "./TaskDetails.module.scss";

type TaskStatusType = {
  priority: string;
  status: Columns;
  onSetStatus: (s: Columns) => void;
  onSetPriority: (p: string) => void;
};

function TaskStatus({
  priority,
  status,
  onSetStatus,
  onSetPriority,
}: TaskStatusType) {
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
          onSetPriority(e.target.value);
        }}
      />
      <Options
        id="status"
        options={columnOptions}
        value={currentStatus}
        className={classes.task_status_options}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          onSetStatus(e.target.selectedOptions[0].id as Columns);
        }}
      />
    </div>
  );
}

export default TaskStatus;
