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
            <button
              type="button"
              className={classes.btn}
              onClick={onDeleteTask}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskOptions;
