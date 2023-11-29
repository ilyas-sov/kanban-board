import { PropsWithChildren } from "react";
import Portal from "./Portal";

type ConfirmDialogType = {
  className: string;
};

function ConfirmDialog({
  children,
  className,
}: PropsWithChildren<ConfirmDialogType>) {
  return <Portal className={className}>{children}</Portal>;
}

export default ConfirmDialog;
