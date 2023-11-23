import { DragEvent, useState } from "react";
import classes from "./DropArea.module.scss";

type DropAreaType = {
  onDrop: () => void;
};

function DropArea({ onDrop }: DropAreaType) {
  const [isVisible, setIsVisible] = useState(false);

  function dragEnterHandler() {
    setIsVisible(true);
  }

  function dragLeaveHandler() {
    setIsVisible(false);
  }

  function dropHandler() {
    onDrop();
    dragLeaveHandler();
  }

  function dragOverHandler(e: DragEvent<HTMLElement>) {
    e.preventDefault();
  }

  return (
    <div
      className={`${classes.drop_area} ${isVisible ? classes.visible : ""}`}
      onDragEnter={dragEnterHandler}
      onDragLeave={dragLeaveHandler}
      onDrop={dropHandler}
      onDragOver={dragOverHandler}
    ></div>
  );
}

export default DropArea;
