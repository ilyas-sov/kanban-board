import Button from "../UI/Button";
import classes from "./TaskDetails.module.scss";

type TaskOptionsType = {
  options: string[];
  onDeleteTask: () => void;
};

function TaskOptions({ options, onDeleteTask }: TaskOptionsType) {
  return (
    <div className={classes.options_container}>
      <ul>
        {options.map((option) => (
          <li key={option}>
            <Button
              type="button"
              className={classes.delete_btn}
              onClick={onDeleteTask}
            >
              {option}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskOptions;
