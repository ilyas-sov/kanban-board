import { ChangeEvent } from "react";
import { Option } from "../utils/types";
import classes from "./Options.module.scss";

type OptionsType = {
  id: string;
  options: readonly Option[];
  value?: string | undefined;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

function Options({ id, options, value, onChange }: OptionsType) {
  return (
    <div className={classes.select_container}>
      <label htmlFor={id}>{id}</label>
      <select name={id} id={id} value={value} onChange={onChange}>
        {!value && <option value="">Select user</option>}
        {options.map((option) => (
          <option key={option.id} id={option.id} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Options;
