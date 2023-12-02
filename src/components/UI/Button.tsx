import { PropsWithChildren } from "react";
import classes from "./Button.module.scss";

type ButtonType = {
  className?: string;
  disabled?: boolean;
  onClick: () => void;
};

function Button({
  className,
  disabled,
  onClick,
  children,
}: PropsWithChildren<ButtonType>) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${classes.button} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
