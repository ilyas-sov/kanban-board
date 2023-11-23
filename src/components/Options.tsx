import { ChangeEvent } from "react";
import classes from "./Options.module.scss";

type OptionsType = {
  id: string;
  options: readonly string[];
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

function Options({ id, options, value, onChange }: OptionsType) {
  return (
    <div className={classes.select_container}>
      <label htmlFor={id}>{id}</label>
      <select name={id} id={id} value={value} onChange={onChange}>
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
