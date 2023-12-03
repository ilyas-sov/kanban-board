import { PropsWithChildren, SyntheticEvent } from "react";
// import classes from "./Button.module.scss";

type ButtonType = {
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: (() => void) | ((e: SyntheticEvent) => void);
};

function Button({
  children,
  type = "button",
  className,
  disabled,
  onClick,
}: PropsWithChildren<ButtonType>) {
  const classNames = `default_button ${className}`;

  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
