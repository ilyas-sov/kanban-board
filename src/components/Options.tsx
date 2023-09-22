import classes from "./Options.module.scss";

type OptionsType = {
  id: string;
  options: readonly string[];
};

function Options({ id, options }: OptionsType) {
  return (
    <div className={classes.select_container}>
      <label htmlFor={id}>{id}</label>
      <select name={id} id={id} className={classes.select}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Options;
