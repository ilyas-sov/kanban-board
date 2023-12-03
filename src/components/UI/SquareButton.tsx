import { PropsWithChildren } from "react";
import classes from "./SquareButton.module.scss";

type SquareButtonType = {
  className?: string;
  disabled?: boolean;
  onClick: () => void;
};

function SquareButton({
  className,
  disabled,
  onClick,
  children,
}: PropsWithChildren<SquareButtonType>) {
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

export default SquareButton;
