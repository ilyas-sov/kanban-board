import { useEffect, useState } from "react";
import { Theme } from "../../utils/types";
import { getTheme, setTheme, toggleTheme } from "../../utils/theme";
import BulbIcon from "../icons/BulbIcon";
import classes from "./ThemeToggler.module.scss";

function ThemeToggler() {
  const theme = getTheme();
  const [togglerChecked, setTogglerChecked] = useState(theme === Theme.DARK);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | number | undefined = undefined;

    if (togglerChecked) {
      toggleTheme(timeout, Theme.DARK);
      setTheme(Theme.DARK);
    } else {
      toggleTheme(timeout, Theme.LIGHT);
      setTheme(Theme.LIGHT);
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
      <input
        id="themeToggler"
        type="checkbox"
        onChange={toggleThemeHandler}
        checked={togglerChecked}
      />
      <span className={classes.slider}></span>
      <span className={classes.shadow}></span>
    </label>
  );
}

export default ThemeToggler;
