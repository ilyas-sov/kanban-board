import { useEffect, useState } from "react";
import classes from "./ThemeToggler.module.scss";
import BulbIcon from "../icons/BulbIcon";

function ThemeToggler() {
  const [togglerChecked, setTogglerChecked] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | number | undefined = undefined;

    if (togglerChecked) {
      clearTimeout(timeout);
      document.body.classList.add("dark");
    } else {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        document.body.classList.remove("dark");
      }, 800);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [togglerChecked]);

  function toggleThemeHandler() {
    setTogglerChecked((prev) => !prev);
  }

  return (
    <label className={classes.toggler}>
      <BulbIcon className={classes.icon} />
      <input type="checkbox" onChange={toggleThemeHandler} />
      <span
        className={`${classes.slider} ${
          togglerChecked ? classes.sun : classes.moon
        }`}
      ></span>
      <span className={classes.shadow}></span>
    </label>
  );
}

export default ThemeToggler;
