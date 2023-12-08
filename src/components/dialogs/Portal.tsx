import { ReactNode } from "react";
import { createPortal } from "react-dom";
import classes from "./Portal.module.scss";

function DialogWindow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <>
      <div className={classes.backdrop}></div>
      <div className={`${classes.dialog} ${className}`} data-testid="dialog">
        {children}
      </div>
    </>
  );
}

function Portal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return createPortal(
    <DialogWindow className={className}>{children}</DialogWindow>,
    document.getElementById("dialog") as HTMLDivElement
  );
}

export default Portal;
